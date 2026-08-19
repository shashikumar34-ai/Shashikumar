import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const BITM_SYSTEM_CONTEXT = `
You are ASSRKS, the official AI Academic & Admissions Counselor for Ballari Institute of Technology & Management (BITM), located in Ballari, Karnataka, India.
Always answer in a warm, knowledgeable, professional, encouraging, and clear tone as ASSRKS.

Key Official BITM Information:
- Institution: Ballari Institute of Technology & Management (BITM), Estd. 1997 by Tungabhadra Education Health & Rural Development Trust (T.E.H.R.D).
- Founder President: Late Smt. Basavarajeswari (Former Union Minister). Chairman: Dr. Yashwant Bhupal. Director: Dr. V. C. Patil.
- Accreditation: NAAC 'A+' Grade, NBA Accredited Tier-1 Engineering programs, Autonomous Institution affiliated to Visvesvaraya Technological University (VTU), Belagavi, approved by AICTE New Delhi and Govt. of Karnataka.
- Location: Jnana Gangotri Campus, Hospet Road, Allipur, Ballari - 583104, Karnataka, India.
- Counseling Codes:
  * KCET Code: E037
  * COMED-K Code: E025
  * PGCET Code: B125 (MBA) / C414 (MCA)
  * DCET (Lateral Entry) Code: 337

Academic Programs & Intake (Admissions 2026-27):
1. Undergraduate (B.E. 4-Year):
   - Computer Science & Engineering (CSE) - 240 seats
   - Computer Science & Engineering (Artificial Intelligence) / CSE (AI) & AI-ML - 180 seats
   - Computer Science & Engineering (Data Science) - 120 seats
   - Electronics & Communication Engineering (ECE) - 180 seats
   - Electrical & Electronics Engineering (EEE) - 60 seats
   - Mechanical Engineering (ME) - 60 seats
   - Civil Engineering (CV) - 60 seats
2. Postgraduate (2-Year):
   - Master of Business Administration (MBA) - 180 seats (Dual specialization in Finance, Marketing, HR, Business Analytics)
   - Master of Computer Applications (MCA) - 120 seats
3. Doctoral & Research: VTU Recognized Ph.D. & M.Sc. Engg centers in 6 disciplines with 500+ Scopus/IEEE papers.

Admissions & Eligibility:
- B.E. 1st Year: 10+2 / 2nd PUC with Physics & Math (compulsory) + Chemistry/Bio-Tech/CS/Biology with min 45% aggregate in PCM (40% for Karnataka SC/ST/OBC). Seats allotted via KCET (Govt. Quota), COMED-K, or Institutional Management Quota.
- Lateral Entry (Direct 2nd Year / 3rd Sem): 3-Year Diploma in relevant engineering stream with min 45% marks via DCET.
- MBA/MCA: 3-Year Bachelor degree with min 50% marks (45% for Karnataka reserved categories) + valid PGCET / KMAT / CMAT score.

Placements & Industry Record:
- Highest CTC: 27.7 LPA
- Average CTC: 6.5 LPA
- Total Offers: 850+ Offers
- Recruiters: 300+ leading MNCs including Infosys, Wipro, TCS, IBM, JSW Steel, Mindtree, Bosch, Capgemini, SLK Software, Tech Mahindra, Cognizant, Toyota Kirloskar, etc.
- Dedicated Training & Placement Cell with Infosys Springboard, AWS Academy, Cisco Networking Academy.

Campus Infrastructure:
- 11+ Acre lush green Jnana Gangotri campus
- 15,000 sq.ft Central Digital Library with 100K+ print/digital volumes, Koha ILMS, and IEEE/Springer digital access
- K-Tech NAIN Startup Hub (Govt. of Karnataka incubator) with seed funding grants up to INR 3 Lakhs per student project
- NVIDIA GPU Computing & AI Research Laboratory
- Sir M.V. Auditorium (800+ seater acoustically tuned)
- Jnana Gangotri Sports Complex with floodlit basketball, cricket ground, badminton, gym
- On-campus separate Boys and Girls hostels with high-speed Wi-Fi, RO water, 24/7 security
- College Bus Fleet of 15+ buses covering Ballari, Toranagallu, Hospete, Siruguppa
- 250 kW clean rooftop solar power plant

Contact & Helplines:
- Admission Helpline: +91 8392 237160 / +91 99024 99960 / +91 94480 73388
- Official Email: admissions@bitm.edu.in / info@bitm.edu.in
- Website: www.bitm.edu.in

Instructions:
1. Provide structured, accurate, bulleted, and helpful answers.
2. If a student asks about admissions or application, guide them on KCET/COMEDK/Management quota and mention they can also fill out the online enquiry modal on the portal or download the official PDF brochure.
3. Keep responses concise, well-formatted using markdown, and easy to read.
`;

const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

// Fallback response generator in case Gemini models experience temporary upstream overload (503 / 429)
function generateKnowledgeFallback(query: string): string {
  const q = query.toLowerCase();

  if (q.includes('cutoff') || q.includes('code') || q.includes('kcet') || q.includes('comedk') || q.includes('pgcet')) {
    return `### 🏛️ **BITM Ballari Counseling Codes & Cutoff Information (2026-27)**

- **KCET Code:** \`E037\` (Ballari Institute of Technology & Management)
- **COMED-K Code:** \`E025\`
- **PGCET Code:** \`B125\` (MBA) / \`C414\` (MCA)
- **DCET Lateral Entry Code:** \`337\`

**Estimated KCET Cutoff Ranks (General Merit Reference):**
- **Computer Science & Engineering (CSE):** 28,000 – 42,000
- **Artificial Intelligence & Machine Learning (AI & ML):** 38,000 – 54,000
- **CSE (Data Science):** 45,000 – 60,000
- **Electronics & Communication (ECE):** 55,000 – 78,000
- **Electrical & Electronics (EEE):** 80,000 – 1,15,000
- **Civil & Mechanical Engineering:** 1,10,000+

*Note: Institutional Management Quota admissions and lateral entry seats are currently open. You can contact the admission office at +91 8392 237160 / admissions@bitm.edu.in.*`;
  }

  if (q.includes('placement') || q.includes('package') || q.includes('salary') || q.includes('company') || q.includes('recruit')) {
    return `### 💼 **BITM Placements & Industry Track Record**

- **Highest Package:** **27.7 LPA**
- **Average Package:** **6.5 LPA**
- **Total Placement Offers:** **850+ Offers**
- **Recruiting Partners:** **300+ Companies**

**Top Recruiters:**
Infosys, Wipro, Tata Consultancy Services (TCS), JSW Steel, IBM, Bosch, Cognizant, Tech Mahindra, Mindtree, SLK Software, Toyota Kirloskar, and more.

**Placement & Training Cell Highlights:**
- Official **Infosys Springboard** Industry Center
- **AWS Academy** & **Cisco Networking Academy** certifications
- 100+ hours of soft skills, coding bootcamps, and mock interviews starting from the 3rd semester.`;
  }

  if (q.includes('ai') || q.includes('cse (ai)') || q.includes('cse ai') || q.includes('artificial intelligence') || q.includes('aiml') || q.includes('machine learning')) {
    return `### 🤖 **B.E. in Computer Science & Engineering (Artificial Intelligence) - CSE (AI)**

- **Degree:** Bachelor of Engineering (B.E.) - 4 Years (8 Semesters)
- **Specialization:** CSE (Artificial Intelligence & Machine Learning)
- **Sanctioned Intake:** **180 Seats** (Admissions 2026-27)
- **Codes:** KCET Code: \`E037\` | COMED-K: \`E025\`
- **Affiliation:** Autonomous VTU Belagavi, AICTE Approved, NAAC 'A+'
- **Specialized Labs:** NVIDIA GPU Deep Learning Workstation Cluster, Computer Vision & Robotics Studio, GenAI & Python Intelligence Suites.

**Core Curriculum & Technologies:**
- Generative AI & Large Language Models (LLMs)
- Deep Neural Architectures & PyTorch / TensorFlow
- Natural Language Processing & Computer Vision
- Autonomous Robotics & Reinforcement Learning
- Big Data MLOps Pipelines & Cloud AI Infrastructure

**Career Opportunities:** AI Research Scientist, ML Engineer, Computer Vision Developer, NLP Specialist, and Full-Stack AI Solutions Architect.`;
  }

  if (q.includes('fee') || q.includes('cost') || q.includes('scholarship') || q.includes('management quota')) {
    return `### 💳 **Admissions, Fee Structure & Scholarships**

**Admissions Quotas for 2026-27:**
1. **Government Quota (KCET - Code E037):** Fees as regulated by the Karnataka Examination Authority (KEA) ~ ₹95,000 – ₹1,05,000 / year.
2. **COMED-K Quota (Code E025):** Approximately ₹1.5L – ₹2.2L / year depending on stream.
3. **Institutional Management Quota:** Direct seat counseling with merit-based concessions.

**Scholarships Supported:**
- Karnataka State Post-Matric & SSP Scholarships
- Vidyasiri & Fee Concession for SC/ST/OBC categories
- Merit Scholarships for top academic achievers
- T.E.H.R.D. Trust Rural Student Concessions.

*For exact fee breakdown and application forms, click "Apply for Admissions" on the top navigation.*`;
  }

  if (q.includes('hostel') || q.includes('campus') || q.includes('facility') || q.includes('bus') || q.includes('nain') || q.includes('food') || q.includes('mess')) {
    return `### 🏫 **Campus Facilities & Residential Hostels**

- **Jnana Gangotri Campus:** 11+ Acre lush green eco-friendly campus with 250 kW solar power on Ballari-Hosapete Highway.
- **Central Library:** 15,000 sq.ft automated digital library with 100,000+ volumes and IEEE e-journal subscriptions.
- **Hostel Facilities:** Separate, secure modern hostels for Boys and Girls with high-speed Wi-Fi, solar hot water, 24/7 security, gym, and nutritious South/North Indian mess food.
- **K-Tech NAIN Startup Hub:** Seed funding grants up to **INR 3 Lakhs** per student innovation project.
- **College Transport:** 15+ GPS-tracked buses connecting Ballari city, Jindal Township, Siruguppa, Sandur, and Hospete.`;
  }

  // Default comprehensive counselor overview
  return `### 🎓 **Welcome to Ballari Institute of Technology & Management (BITM)**

I am **ASSRKS**, your AI Academic Counselor. Here is a quick overview of BITM Ballari:

- **Accreditation:** NAAC 'A+' Grade • NBA Tier-1 Accredited Programs • Autonomous VTU Belagavi
- **Codes:** KCET: \`E037\` | COMED-K: \`E025\` | PGCET: \`B125\` (MBA) / \`C414\` (MCA)
- **Top Programs:** B.E. in CSE, AI & ML, Data Science, ECE, EEE, Mechanical, Civil, plus MBA & MCA
- **Placements:** 27.7 LPA highest package, 300+ recruiters, 850+ total offers
- **Innovation:** K-Tech NAIN Incubation Center with ₹3 Lakhs seed funding per project

**Admissions Helpline:** +91 8392 237160 / +91 99024 99960  
**Email:** admissions@bitm.edu.in  
*Feel free to ask specific questions about branch cutoffs, syllabus, hostel life, or fee details!*`;
}

// Fallback Branch Recommendation
function generateBranchRecommendationFallback(stream: string, interest: string, goal: string): string {
  return `### 🎯 **Personalized Academic Recommendation for BITM Ballari**

Based on your profile (*${interest || 'Technology & Engineering'}*, Career Goal: *${goal || 'High Growth Tech & Innovation'}*):

#### **Top Recommended Program 1: B.E. in Artificial Intelligence & Machine Learning (AI & ML)**
- **Why It Fits:** BITM features a dedicated **NVIDIA Deep Learning & Robotics Lab**. With a sanctioned intake of 180 seats, this program prepares you for the highest-paying software, deep learning, and AI engineering roles.
- **Top Recruiters:** Infosys, Cognizant, IBM, Tech Mahindra, Mindtree.
- **KCET Code:** \`E037\` | **COMEDK Code:** \`E025\`

#### **Top Recommended Program 2: B.E. in Computer Science & Engineering (CSE / Data Science)**
- **Why It Fits:** The marquee branch at BITM with highest placements (up to **27.7 LPA**). You will gain deep hands-on expertise in Cloud Computing, Distributed Systems, and Full-Stack Engineering.
- **Special Advantage:** Direct access to K-Tech NAIN incubator for student startups with seed grants up to ₹3 Lakhs.

#### **Recommended Core/Interdisciplinary Program: B.E. in Electronics & Communication (ECE)**
- **Why It Fits:** NBA Accredited program with Texas Instruments IoT lab & Cadence VLSI tools, opening doors to both software MNCs and semiconductor core firms.

#### **Next Steps:**
1. Apply online via KCET (Code \`E037\`) or COMED-K (Code \`E025\`).
2. Inquire with the BITM Admissions Cell for Management Quota counseling: **+91 8392 237160**.`;
}

async function callGeminiWithFallbacks(promptPayload: any, systemInstruction: string) {
  // Ordered by speed, reliability under high traffic, and model capability
  const candidateModels = [
    'gemini-3.1-flash-lite',
    'gemini-3.7-flash',
    'gemini-flash-latest',
  ];

  const ai = getGeminiClient();
  if (!ai) {
    return null;
  }

  for (const model of candidateModels) {
    // Attempt up to 2 tries per model in case of transient 503 / spike in demand
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents: promptPayload,
          config: {
            systemInstruction,
            temperature: 0.7,
          },
        });

        if (response && response.text) {
          return { text: response.text, model };
        }
      } catch (err: any) {
        const status = err?.status || err?.code || (err?.error && err?.error?.code);
        const isTransient = status === 503 || status === 429 || err?.message?.includes('high demand') || err?.message?.includes('UNAVAILABLE');

        if (isTransient && attempt === 0) {
          // Quick wait (300ms) before 1 retry on high-demand spike
          await new Promise((resolve) => setTimeout(resolve, 300));
          continue;
        }
        // Move to next candidate model in list
        break;
      }
    }
  }

  return null;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Health Check
  app.get('/api/health', (_req, res) => {
    res.json({ 
      status: 'ok', 
      institution: 'Ballari Institute of Technology & Management (BITM)',
      aiConfigured: Boolean(process.env.GEMINI_API_KEY)
    });
  });

  // API Route: Gemini AI Chat Assistant
  app.post('/api/gemini/chat', async (req, res) => {
    try {
      const { message, conversationHistory = [] } = req.body;

      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message string is required.' });
      }

      // Build contents array with context
      const formattedHistory = Array.isArray(conversationHistory) 
        ? conversationHistory.slice(-8).map((msg: { role: string; content: string }) => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }]
          }))
        : [];

      const contents = [
        ...formattedHistory,
        {
          role: 'user',
          parts: [{ text: message }]
        }
      ];

      const geminiResult = await callGeminiWithFallbacks(contents, BITM_SYSTEM_CONTEXT);

      if (geminiResult && geminiResult.text) {
        return res.json({
          reply: geminiResult.text,
          model: geminiResult.model,
        });
      }

      // Fallback if all AI model calls temporarily failed or if API key is not ready
      const fallbackReply = generateKnowledgeFallback(message);
      return res.json({
        reply: fallbackReply,
        model: 'bitm-counselor-engine',
        status: 'fallback'
      });
    } catch (error: any) {
      console.error('Gemini Chat API Error:', error);
      const fallbackReply = generateKnowledgeFallback(req.body?.message || '');
      return res.json({
        reply: fallbackReply,
        model: 'bitm-counselor-engine',
        status: 'fallback'
      });
    }
  });

  // API Route: Specialized Branch & Career Recommender
  app.post('/api/gemini/recommend-branch', async (req, res) => {
    try {
      const { interest, marks, stream, goal } = req.body;

      const prompt = `
A prospective student is seeking guidance for admission to BITM Ballari.
Student Details:
- Target Stream: ${stream || 'Engineering (B.E.)'}
- Academic Background / Marks: ${marks || 'Not specified'}
- Core Interests & Hobbies: ${interest || 'Technology & Innovation'}
- Career Aspirations & Future Goals: ${goal || 'Software Development or High Growth Core Engineering'}

Based on BITM Ballari's actual degree programs (CSE, AI & ML, Data Science, ECE, EEE, Mechanical, Civil, MBA, MCA) and their placement record (27.7 LPA highest, top recruiters like Infosys, JSW, IBM, TCS):
1. Recommend top 2-3 most suitable branches at BITM Ballari with strong justifications.
2. Explain what special skills/labs (e.g., NVIDIA AI lab, K-Tech NAIN startup hub, AWS Academy) will help them in these branches.
3. Outline typical career paths, job roles, and top hiring companies at BITM.
4. Mention the KCET Code: E037, COMEDK Code: E025, and PGCET Code: B125.
Provide the answer in clean markdown with clear headings and bullet points.
`;

      const geminiResult = await callGeminiWithFallbacks(prompt, BITM_SYSTEM_CONTEXT);

      if (geminiResult && geminiResult.text) {
        return res.json({
          recommendation: geminiResult.text,
          model: geminiResult.model
        });
      }

      // Fallback recommendation
      const fallbackRecommendation = generateBranchRecommendationFallback(stream, interest, goal);
      return res.json({
        recommendation: fallbackRecommendation,
        model: 'bitm-counselor-engine',
        status: 'fallback'
      });
    } catch (error: any) {
      console.error('Gemini Recommender Error:', error);
      const fallbackRecommendation = generateBranchRecommendationFallback(
        req.body?.stream || '',
        req.body?.interest || '',
        req.body?.goal || ''
      );
      return res.json({
        recommendation: fallbackRecommendation,
        model: 'bitm-counselor-engine',
        status: 'fallback'
      });
    }
  });

  // Vite middleware for development vs static build in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`BITM Server with Gemini AI running on http://localhost:${PORT}`);
  });
}

startServer();
