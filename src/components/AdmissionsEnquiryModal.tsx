import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  Phone, 
  Mail, 
  User, 
  MapPin, 
  GraduationCap, 
  Award,
  Download,
  Building2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COLLEGE_INFO } from '../data/mockData';
import { BitmLogo } from './BitmLogo';

interface AdmissionsEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionsEnquiryModal: React.FC<AdmissionsEnquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    program: 'BE - Computer Science & Engineering',
    admissionQuota: 'KCET (Code: E037)',
    qualifyingScore: '',
    message: ''
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = `BITM-2026-${Math.floor(10000 + Math.random() * 90000)}`;
      setSubmittedRef(generatedRef);
      setIsSubmitting(false);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore
      }
    }, 600);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      program: 'BE - Computer Science & Engineering',
      admissionQuota: 'KCET (Code: E037)',
      qualifyingScore: '',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-[#003366] text-white p-6 flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <BitmLogo size="md" />
            <div>
              <h2 className="text-xl font-bold">BITM Admissions 2026-27</h2>
              <p className="text-xs text-blue-200">KCET Code: {COLLEGE_INFO.kcetCode} | COMED-K: {COLLEGE_INFO.comedkCode} | NAAC 'A+'</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedRef ? (
          /* Submission Success View */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Application Received
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2">
                Thank You, {formData.name || 'Applicant'}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1">
                Your admission enquiry has been submitted to the BITM Admissions Cell. A counselor will get in touch with you shortly on your registered number.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-md mx-auto text-left space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Application Ref No:</span>
                <span className="font-mono font-bold text-[#003366]">{submittedRef}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Selected Program:</span>
                <span className="font-semibold text-slate-800">{formData.program}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Admission Helplines:</span>
                <span className="font-bold text-amber-600">+91 94480 84877</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#003366] text-white text-xs font-bold rounded-xl shadow-md hover:bg-blue-900 cursor-pointer"
              >
                Close & Return
              </button>
              <a
                href={`tel:${COLLEGE_INFO.phone}`}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl border border-slate-300 flex items-center justify-center space-x-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>Call Admission Cell</span>
              </a>
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-[#003366] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-[#003366] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-[#003366] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  City / State of Residence *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ballari, Hosapete, Bengaluru"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-[#003366] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Desired Course / Branch *
                </label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-[#003366] focus:outline-none"
                >
                  <option>BE - Computer Science & Engineering (CSE)</option>
                  <option>BE - CSE (Artificial Intelligence) / CSE (AI)</option>
                  <option>BE - Artificial Intelligence & ML (AI & ML)</option>
                  <option>BE - CSE (Data Science)</option>
                  <option>BE - Electronics & Communication</option>
                  <option>BE - Electrical & Electronics</option>
                  <option>BE - Mechanical Engineering</option>
                  <option>BE - Civil Engineering</option>
                  <option>MBA - Master of Business Administration</option>
                  <option>MCA - Master of Computer Applications</option>
                  <option>Ph.D Research Programs</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Admission Channel
                </label>
                <select
                  value={formData.admissionQuota}
                  onChange={(e) => setFormData({ ...formData, admissionQuota: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-[#003366] focus:outline-none"
                >
                  <option>KCET (Govt. Counseling - Code E037)</option>
                  <option>COMED-K (Code E025)</option>
                  <option>PGCET (MBA/MCA - Code B125)</option>
                  <option>Direct Institutional / Management Quota</option>
                  <option>Lateral Entry (Diploma)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                12th PCM % or Entrance Rank (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. 88% in PCM / KCET Rank 14200"
                value={formData.qualifyingScore}
                onChange={(e) => setFormData({ ...formData, qualifyingScore: e.target.value })}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-[#003366] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Questions or Specific Requirements (Hostel, Transport, Scholarships)
              </label>
              <textarea
                rows={2}
                placeholder="Write any query regarding fee structure, hostel rooms, bus routes..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-[#003366] focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-blue-950 font-extrabold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Processing Application...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Official Admission Enquiry</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-center text-slate-500">
              By submitting, you agree to receive official counseling SMS and calls from BITM Ballari.
            </p>
          </form>
        )}

      </div>
    </div>
  );
};
