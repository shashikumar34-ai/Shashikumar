import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Loader2, 
  GraduationCap, 
  HelpCircle, 
  RefreshCw, 
  Copy, 
  Check, 
  Compass, 
  Briefcase, 
  BookOpen, 
  Award, 
  Phone, 
  ChevronRight,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { COLLEGE_INFO, COURSES_DATA } from '../data/mockData';
import { BitmLogo } from './BitmLogo';

interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAdmissions?: () => void;
  onOpenBrochure?: () => void;
}

const PRESET_QUESTIONS = [
  'Tell me about B.E. in CSE (AI) - Artificial Intelligence & ML intake, curriculum & labs.',
  'What are the KCET & COMED-K cutoffs and codes for CSE (AI) and CSE at BITM?',
  'What is the highest and average placement package for 2025-2026?',
  'What career roles and NVIDIA GPU lab facilities exist for CSE (AI) students?',
  'How do I apply for the Institutional Management Quota for 2026-27?',
  'What facilities and seed funding are available at K-Tech NAIN Startup Hub?'
];

const FLOW_TOPIC_PILLS = [
  { label: '✨ CSE (AI) Program', query: 'Provide complete details about B.E. in CSE (AI) - Computer Science & Engineering (Artificial Intelligence) including intake, curriculum, labs and career prospects.' },
  { label: '🎯 KCET/COMEDK Cutoff Flow', query: 'What are the previous year KCET cutoffs and COMEDK codes for CSE (AI), CSE, and ECE at BITM?' },
  { label: '💼 27.7 LPA Placements Flow', query: 'Which companies offer the highest salary packages for CSE and CSE (AI) at BITM and how does the placement cell prepare students?' },
  { label: '🧠 AI Labs & NVIDIA GPU', query: 'What NVIDIA GPU deep learning labs, AI servers, and software tools are provided for CSE (AI) students?' },
  { label: '🏢 Hostels & Campus Flow', query: 'What are the hostel accommodations, Wi-Fi connectivity, mess menu, and security measures for outstation students?' }
];

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({
  isOpen,
  onClose,
  onOpenAdmissions,
  onOpenBrochure,
}) => {
  const [activeTab, setActiveTab] = useState<'chat' | 'matcher'>('chat');
  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Chat conversation state
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-msg',
      role: 'model',
      content: `Hello! 👋 I am **ASSRKS**, the official **AI Academic & Admissions Counselor** for BITM Ballari. \n\nI can assist you with:\n- **B.E. Programs, Intake & Specializations** (CSE, **CSE (AI) / Artificial Intelligence & ML**, CSE-Data Science, ECE, EEE, Civil, Mechanical)\n- **KCET Code: \`E037\` & COMED-K Code: \`E025\` Admissions 2026-27**\n- **MBA & MCA Dual Degree Programs (PGCET: \`B125\` / \`C414\`)**\n- **Placements (27.7 LPA highest package & 300+ recruiters)**\n- **Campus Facilities, Hostels, NAIN Incubation & Scholarships**\n\nHow can I help you shape your engineering & management career today?`,
      timestamp: new Date()
    }
  ]);

  // Branch Matcher Form State
  const [matcherStream, setMatcherStream] = useState('Engineering (B.E.)');
  const [matcherMarks, setMatcherMarks] = useState('');
  const [matcherInterest, setMatcherInterest] = useState('');
  const [matcherGoal, setMatcherGoal] = useState('');
  const [matcherResult, setMatcherResult] = useState<string | null>(null);
  const [matcherLoading, setMatcherLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTab === 'chat') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, activeTab, loading]);

  if (!isOpen) return null;

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = queryText || inputQuery;
    if (!textToSend.trim() || loading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: textToSend.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    if (!queryText) setInputQuery('');
    setLoading(true);

    try {
      // Build history for context
      const historyPayload = messages.map(m => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend.trim(),
          conversationHistory: historyPayload
        })
      });

      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }

      const data = await res.json();
      const botMessage: Message = {
        id: `model-${Date.now()}`,
        role: 'model',
        content: data.reply || 'Thank you for your question. For detailed counseling, please reach out to BITM admissions at +91 8392 237160.',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      const errorMessage: Message = {
        id: `err-${Date.now()}`,
        role: 'model',
        content: `I encountered a momentary connectivity issue. Here are quick BITM contacts you can reach directly:\n- **Admission Helpline:** ${COLLEGE_INFO.admissionHelpline}\n- **Email:** ${COLLEGE_INFO.admissionsEmail}\n- **KCET Code:** \`${COLLEGE_INFO.kcetCode}\` • **COMEDK:** \`${COLLEGE_INFO.comedkCode}\``,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleRunMatcher = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!matcherInterest.trim()) return;

    setMatcherLoading(true);
    setMatcherResult(null);

    try {
      const res = await fetch('/api/gemini/recommend-branch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          stream: matcherStream,
          marks: matcherMarks,
          interest: matcherInterest,
          goal: matcherGoal
        })
      });

      if (!res.ok) throw new Error('Failed to fetch recommendation');

      const data = await res.json();
      setMatcherResult(data.recommendation);
    } catch (err) {
      console.error('Matcher error:', err);
      setMatcherResult('Could not process recommendation. Please check your network or consult BITM admission counselors at ' + COLLEGE_INFO.admissionHelpline);
    } finally {
      setMatcherLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome-msg',
        role: 'model',
        content: `Chat session reset. What other questions do you have about BITM Ballari admissions, programs, or campus life?`,
        timestamp: new Date()
      }
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative bg-slate-900 border border-slate-700/90 rounded-3xl max-w-3xl w-full h-[90vh] max-h-[750px] text-white shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-[#001f3f] via-[#003366] to-[#001f3f] p-4 sm:p-5 border-b border-slate-700/80 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center space-x-3">
            <BitmLogo size="sm" />
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/40 px-2 py-0.5 rounded flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Powered by Gemini AI</span>
                </span>
                <span className="text-xs text-blue-200 hidden sm:inline">• KCET: {COLLEGE_INFO.kcetCode}</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white leading-tight mt-0.5">
                ASSRKS AI Counselor & Program Advisor
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {activeTab === 'chat' && (
              <button
                onClick={resetChat}
                className="p-2 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-xl transition-colors text-xs font-semibold flex items-center space-x-1 cursor-pointer"
                title="Reset conversation"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Header */}
        <div className="bg-slate-950 px-4 sm:px-6 py-2.5 border-b border-slate-800 flex items-center justify-between flex-shrink-0">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('chat')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                activeTab === 'chat'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/80'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Ask ASSRKS</span>
            </button>
            <button
              onClick={() => setActiveTab('matcher')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                activeTab === 'matcher'
                  ? 'bg-amber-400 text-blue-950 font-black shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/80'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>AI Branch & Career Matcher</span>
            </button>
          </div>

          <div className="text-[11px] text-amber-400/90 font-medium hidden md:block">
            Autonomous • NAAC 'A+' Grade • VTU Belagavi
          </div>
        </div>

        {/* Main Content Area */}
        {activeTab === 'chat' ? (
          <div className="flex-1 flex flex-col min-h-0 bg-slate-900/95">
            {/* Interactive Flow Topics Header Strip */}
            <div className="bg-slate-950/80 px-3 sm:px-4 py-2 border-b border-slate-800/90 flex items-center space-x-2 overflow-x-auto no-scrollbar flex-shrink-0">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 flex items-center space-x-1 flex-shrink-0">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Flow Topics:</span>
              </span>
              {FLOW_TOPIC_PILLS.map((pill, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(pill.query)}
                  disabled={loading}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-800/90 hover:bg-amber-400 hover:text-blue-950 text-slate-200 border border-slate-700/80 hover:border-amber-400 transition-all cursor-pointer whitespace-nowrap flex-shrink-0 disabled:opacity-50"
                >
                  {pill.label}
                </button>
              ))}
            </div>

            {/* Scrollable Message List */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start space-x-2.5 ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.role === 'model' && (
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                      <Bot className="w-4 h-4 text-amber-300" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed relative group ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-none shadow-lg'
                        : 'bg-slate-800/90 text-slate-200 border border-slate-700/80 rounded-tl-none shadow-md'
                    }`}
                  >
                    <div className="whitespace-pre-wrap space-y-1.5">
                      {msg.content}
                    </div>

                    {msg.role === 'model' && (
                      <div className="mt-2.5 pt-2 border-t border-slate-700/60 flex items-center justify-between text-[10px] text-slate-400">
                        <span>BITM Admissions Verified</span>
                        <button
                          onClick={() => copyToClipboard(msg.content, msg.id)}
                          className="hover:text-white flex items-center space-x-1 cursor-pointer transition-colors"
                          title="Copy response"
                        >
                          {copiedId === msg.id ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-8 h-8 rounded-xl bg-amber-400 text-blue-950 flex items-center justify-center flex-shrink-0 font-bold shadow-md">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {loading && (
                <div className="flex items-start space-x-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-amber-300" />
                  </div>
                  <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl rounded-tl-none p-3.5 flex items-center space-x-2 text-xs text-amber-300">
                    <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                    <span>Gemini AI is researching BITM academic records...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800/80 overflow-x-auto flex space-x-2 no-scrollbar">
              <span className="text-[11px] font-bold text-amber-400 flex items-center space-x-1 flex-shrink-0">
                <Sparkles className="w-3 h-3" />
                <span>Suggested:</span>
              </span>
              {PRESET_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  disabled={loading}
                  className="px-2.5 py-1 bg-slate-800/90 hover:bg-blue-900/60 hover:text-amber-300 text-slate-300 border border-slate-700 rounded-lg text-[11px] whitespace-nowrap transition-colors cursor-pointer flex-shrink-0 disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 sm:p-4 bg-slate-950 border-t border-slate-800">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center space-x-2"
              >
                <input
                  type="text"
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  placeholder="Ask anything about courses, cutoffs, placements, fees, hostel..."
                  className="flex-1 bg-slate-900 border border-slate-700/90 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={!inputQuery.trim() || loading}
                  className="px-4 sm:px-5 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 disabled:opacity-40 text-blue-950 font-black rounded-xl text-xs sm:text-sm flex items-center space-x-1.5 transition-all shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Ask AI</span>
                </button>
              </form>
              <div className="flex items-center justify-between text-[10px] text-slate-500 mt-2 px-1">
                <span>ASSRKS AI Counselor is trained on 2026-27 academic data</span>
                {onOpenAdmissions && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenAdmissions();
                    }}
                    className="text-amber-400 hover:underline font-semibold"
                  >
                    Direct Admissions Form →
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Tab 2: AI Branch & Career Matcher */
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-900/95 space-y-6">
            <div className="bg-gradient-to-r from-blue-950/80 to-slate-900 p-4 rounded-2xl border border-blue-800/60">
              <h4 className="text-sm sm:text-base font-bold text-white flex items-center space-x-2">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>AI Engineering & PG Branch Suggester</span>
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Tell Gemini about your favorite subjects, interests, and career ambitions. Our AI model will analyze your profile against BITM's 7 B.E. engineering branches and PG programs to suggest your best-fit specialization.
              </p>
            </div>

            <form onSubmit={handleRunMatcher} className="space-y-4 bg-slate-800/60 p-4 sm:p-5 rounded-2xl border border-slate-700/60">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Target Program
                  </label>
                  <select
                    value={matcherStream}
                    onChange={(e) => setMatcherStream(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Engineering (B.E. 4-Year)">Bachelor of Engineering (B.E. 4-Year)</option>
                    <option value="Lateral Entry B.E. (Diploma to 2nd Year)">Lateral Entry B.E. (Direct 2nd Year)</option>
                    <option value="Master of Business Administration (MBA)">Master of Business Administration (MBA)</option>
                    <option value="Master of Computer Applications (MCA)">Master of Computer Applications (MCA)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    12th / PUC / Diploma Score / Rank
                  </label>
                  <input
                    type="text"
                    value={matcherMarks}
                    onChange={(e) => setMatcherMarks(e.target.value)}
                    placeholder="e.g. 88% in PCM, KCET Rank 14500"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  What subjects or technologies excite you? <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={matcherInterest}
                  onChange={(e) => setMatcherInterest(e.target.value)}
                  placeholder="e.g., Coding, Machine Learning, Robotics, Microchips, Structural Design, Finance..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  What is your dream career goal?
                </label>
                <input
                  type="text"
                  value={matcherGoal}
                  onChange={(e) => setMatcherGoal(e.target.value)}
                  placeholder="e.g., AI Research Engineer at Top MNC, Startup Founder, VLSI Designer, Product Manager..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder-slate-500"
                />
              </div>

              <button
                type="submit"
                disabled={matcherLoading || !matcherInterest.trim()}
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-blue-950 font-black rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all cursor-pointer disabled:opacity-50 shadow-lg"
              >
                {matcherLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analyzing BITM Programs & Job Market...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate AI Branch Recommendation</span>
                  </>
                )}
              </button>
            </form>

            {/* Matcher Result Box */}
            {matcherResult && (
              <div className="bg-slate-800/90 border border-amber-400/40 rounded-2xl p-5 text-xs sm:text-sm space-y-3 leading-relaxed shadow-xl animate-in fade-in">
                <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                  <div className="flex items-center space-x-2 text-amber-400 font-bold">
                    <GraduationCap className="w-4 h-4" />
                    <span>Personalized BITM Branch Roadmap</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(matcherResult, 'matcher-res')}
                    className="text-xs text-slate-400 hover:text-white flex items-center space-x-1 cursor-pointer"
                  >
                    {copiedId === 'matcher-res' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copy Plan</span>
                  </button>
                </div>
                <div className="whitespace-pre-wrap text-slate-200">
                  {matcherResult}
                </div>

                <div className="pt-3 border-t border-slate-700 flex flex-wrap gap-2">
                  {onOpenAdmissions && (
                    <button
                      onClick={() => {
                        onClose();
                        onOpenAdmissions();
                      }}
                      className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold rounded-xl text-xs flex items-center space-x-1 cursor-pointer"
                    >
                      <span>Apply For This Branch</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                  {onOpenBrochure && (
                    <button
                      onClick={() => {
                        onClose();
                        onOpenBrochure();
                      }}
                      className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-xl text-xs cursor-pointer"
                    >
                      Download Detailed Syllabus Brochure (PDF)
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
