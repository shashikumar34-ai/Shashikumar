import { Course, Notice, StatItem, PlacementStat, Recruiter, Faculty, Facility, Testimonial, FaqItem, GalleryItem, VirtualTourSpot } from '../types';

export const COLLEGE_INFO = {
  name: "Ballari Institute of Technology & Management",
  shortName: "BITM Ballari",
  tagline: "Excellence in Engineering & Management Education",
  established: 1997,
  founder: "Late Smt. Basavarajeswari (Former Union Minister of India)",
  accreditation: ["NAAC 'A+' Accredited", "NBA Accredited Programs", "AICTE Approved", "Affiliated to VTU, Belagavi"],
  kcetCode: "E037",
  comedkCode: "E025",
  pgcetCode: "B125",
  address: "Jnana Gangotri Campus, #873/2, Ballari-Hosapete Road, Allipura, Ballari – 583 104, Karnataka, India",
  phone: "+91 83922 37100 / 37167",
  admissionHelpline: "+91 94480 84877 / +91 99024 99388",
  email: "info@bitm.edu.in",
  admissionsEmail: "admissions@bitm.edu.in",
  placementEmail: "placements@bitm.edu.in",
  campusSize: "11+ Acres Lush Green Campus",
  virtualTourUrl: "https://www.immersivetourz.com/bitm/index.html",
  totalStudents: "3,500+",
  facultyCount: "220+ Highly Qualified Faculty",
  alumniNetwork: "16,000+ Worldwide"
};

export const QUICK_STATS: StatItem[] = [
  { value: "27+", label: "Years of Legacy", subtext: "Established in 1997", icon: "Award" },
  { value: "27.7 LPA", label: "Highest Package", subtext: "Top MNC Offer", icon: "TrendingUp" },
  { value: "300+", label: "Annual Recruiters", subtext: "Dream & Super Dream MNCs", icon: "Building2" },
  { value: "NAAC A+", label: "Accredited Grade", subtext: "Highest Standards of Quality", icon: "ShieldCheck" },
  { value: "11+ Acres", label: "Green Campus", subtext: "Hi-Tech Labs & Sports Arena", icon: "Trees" },
  { value: "16,000+", label: "Global Alumni", subtext: "Leading worldwide tech firms", icon: "Users" }
];

export const NOTICES: Notice[] = [
  {
    id: "n-1",
    title: "Admissions Open 2026-27: BE, MBA & MCA Programs under KCET, COMEDK & Management Quota",
    date: "Aug 12, 2026",
    category: "Admissions",
    isNew: true,
    linkText: "Apply Online",
    details: "Online registration and counseling support for KCET (Code: E037) and COMEDK (Code: E025) eligible candidates. Contact Admission Cell for fee concessions and merit scholarships."
  },
  {
    id: "n-2",
    title: "Campus Placement Drive 2026: Infosys, TCS & Cognizant Phase-1 Selection Schedule Announced",
    date: "Aug 10, 2026",
    category: "Placements",
    isNew: true,
    linkText: "View Schedule",
    details: "Eligible 7th-semester BE & final-year MCA/MBA students are requested to register on the T&P portal before the deadline with updated resumes."
  },
  {
    id: "n-3",
    title: "VTU Belagavi Odd Semester Examination Timetable & Hall Ticket Release",
    date: "Aug 06, 2026",
    category: "Exams",
    isNew: false,
    linkText: "Download Circular",
    details: "Students can download their examination hall tickets from the student ERP portal after clearing pending library dues and minimum attendance requirements."
  },
  {
    id: "n-4",
    title: "K-Tech NAIN Innovation & Startup Hackathon 2026: Pitch your Ideas for Incubation Grants",
    date: "Jul 28, 2026",
    category: "Events",
    isNew: false,
    linkText: "Register Team",
    details: "Government of Karnataka NAIN innovation centre at BITM invites prototype submissions with seed grants up to INR 3 Lakhs per selected student project."
  },
  {
    id: "n-5",
    title: "International Conference on Smart Computing & Green Engineering Technologies (ICSCGT-2026)",
    date: "Jul 20, 2026",
    category: "Academic",
    isNew: false,
    linkText: "Call for Papers",
    details: "Call for research papers indexed in IEEE Xplore & Scopus. Faculty, researchers, and PG scholars can submit manuscripts."
  }
];

export const COURSES_DATA: Course[] = [
  {
    id: "be-cse",
    name: "Computer Science & Engineering",
    code: "CSE",
    degree: "BE",
    category: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    intake: 180,
    established: 1997,
    description: "Equipping students with industry-driven algorithms, full-stack software development, distributed systems, cyber security, and advanced computational architectures.",
    highlights: [
      "NBA Accredited Program with Tier-1 Outcome Based Education",
      "Center of Excellence in Cloud Computing and Full-Stack Engineering",
      "Over 92% placement conversion rate in leading IT companies",
      "Industry tie-ups with Infosys Springboard, AWS Academy & Cisco NetAcad"
    ],
    careerProspects: ["Software Architect", "Full Stack Developer", "Cloud Solutions Engineer", "Cybersecurity Specialist", "DevOps Engineer"],
    hodName: "Dr. R. N. Kulkarni",
    hodQualification: "Ph.D., M.Tech, B.E. (30+ Years Exp.)",
    accreditationStatus: "NBA Accredited",
    curriculumSemesters: [
      { semester: 3, subjects: ["Data Structures & Applications", "Analog & Digital Electronics", "Computer Organization", "Discrete Mathematical Structures"] },
      { semester: 4, subjects: ["Design & Analysis of Algorithms", "Operating Systems", "Microcontrollers & Embedded Systems", "Object Oriented Concepts with Java"] },
      { semester: 5, subjects: ["Database Management Systems", "Automata Theory & Computability", "Software Engineering", "Computer Networks"] },
      { semester: 6, subjects: ["System Software & Compilers", "Cloud Computing & DevOps", "Web Technologies & Frameworks", "Professional Elective - I"] },
      { semester: 7, subjects: ["Machine Learning", "Distributed Systems & Parallel Programming", "Cryptography & Network Security", "Open Elective"] },
      { semester: 8, subjects: ["Major Capstone Project", "Technical Seminar", "Industry Internship", "Emerging Tech Elective"] }
    ],
    labFacilities: ["High-Performance Computing Lab", "Advanced Java & Web Tech Lab", "Networks & Cloud Simulation Lab", "Open Source & Linux Kernel Lab"],
    icon: "Cpu",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "be-aiml",
    name: "Computer Science & Engineering (Artificial Intelligence) - CSE (AI)",
    code: "CSE (AI)",
    degree: "BE",
    category: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    intake: 180,
    established: 2020,
    description: "Pioneering deep learning, generative AI, LLMs, natural language processing, computer vision, autonomous robotics, and intelligent software engineering.",
    highlights: [
      "Dedicated NVIDIA GPU Powered Deep Learning & AI Research Workstation Cluster",
      "Comprehensive curriculum spanning GenAI, Prompt Engineering, Neural Networks & MLOps",
      "Industry mentoring from AI research laboratories & high-tech startup internships",
      "100% placement support with top product firms, AI labs, and high-paying tech MNCs"
    ],
    careerProspects: ["AI Research Engineer", "Machine Learning Specialist", "Computer Vision Engineer", "NLP Scientist", "Data Engineer"],
    hodName: "Dr. Girisha B. G.",
    hodQualification: "Ph.D. (AI Systems), M.Tech",
    accreditationStatus: "AICTE & VTU Approved",
    curriculumSemesters: [
      { semester: 3, subjects: ["Foundations of AI", "Python for Data Science", "Data Structures with Python", "Linear Algebra & Probability"] },
      { semester: 4, subjects: ["Design & Analysis of Algorithms", "Applied Statistics for AI", "Database Systems", "Optimization Techniques"] },
      { semester: 5, subjects: ["Supervised & Unsupervised Machine Learning", "Computer Vision Fundamentals", "Deep Learning Architectures", "AI Ethics"] },
      { semester: 6, subjects: ["Natural Language Processing", "Reinforcement Learning", "Big Data Analytics", "Generative AI Systems"] },
      { semester: 7, subjects: ["Edge AI & Embedded Intelligence", "Autonomous Robotics", "Cloud AI Platforms", "Project Phase - I"] },
      { semester: 8, subjects: ["Industry Capstone Project", "Internship", "Research Seminar"] }
    ],
    labFacilities: ["NVIDIA Deep Learning Lab", "Computer Vision & Robotics Lab", "Python Intelligence Lab", "Data Modeling Workstations"],
    icon: "Brain",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "be-ds",
    name: "CSE (Data Science)",
    code: "CSE-DS",
    degree: "BE",
    category: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    intake: 60,
    established: 2021,
    description: "Transforming big data into actionable strategic intelligence through statistical inference, data mining, predictive analytics, and business intelligence.",
    highlights: [
      "High capacity Apache Hadoop & Spark big data server clusters",
      "Hands-on training in Tableau, PowerBI, R, Snowflake and PySpark",
      "Live analytics projects with fintech and e-commerce partners",
      "High demand across financial, healthcare, and retail sectors"
    ],
    careerProspects: ["Data Scientist", "Big Data Engineer", "BI Consultant", "Quantitative Analyst", "Data Pipeline Architect"],
    hodName: "Dr. Suresh Kumar P.",
    hodQualification: "Ph.D., M.Tech, M.S.",
    accreditationStatus: "AICTE & VTU Approved",
    curriculumSemesters: [
      { semester: 3, subjects: ["Mathematical Foundations for Data Science", "Data Structures & Algorithms", "Python Programming", "Discrete Mathematics"] },
      { semester: 4, subjects: ["Statistical Inference", "Database Management & SQL", "R for Data Analytics", "Operating Systems"] },
      { semester: 5, subjects: ["Data Mining & Warehousing", "Big Data Technologies (Hadoop/Spark)", "Predictive Modeling", "Web Analytics"] },
      { semester: 6, subjects: ["Time Series Analysis", "Cloud Data Platforms", "Data Visualization & BI Tools", "Elective - I"] },
      { semester: 7, subjects: ["Deep Learning for Big Data", "Scalable Machine Learning", "Data Security & Governance", "Project Phase - I"] },
      { semester: 8, subjects: ["Industrial Capstone Project", "Full Semester Internship"] }
    ],
    labFacilities: ["Big Data Analytics Lab", "Data Visualization & BI Studio", "Statistical Computing Workstation", "Database Systems Lab"],
    icon: "Database",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "be-ece",
    name: "Electronics & Communication Engineering",
    code: "ECE",
    degree: "BE",
    category: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    intake: 180,
    established: 1997,
    description: "Bridging embedded hardware, VLSI microelectronics, 5G wireless communications, IoT smart devices, and digital signal processing.",
    highlights: [
      "NBA Accredited with state-of-the-art Cadence & Xilinx VLSI Tool suites",
      "Texas Instruments Embedded Systems and IoT Innovation Lab",
      "Strong core recruitment in semiconductor, telecom, and automotive electronics",
      "Active IEEE Student Branch with regular national project symposiums"
    ],
    careerProspects: ["VLSI Design Engineer", "Embedded Systems Developer", "5G Network Engineer", "IoT Solutions Architect", "Robotics Hardware Specialist"],
    hodName: "Dr. B. S. Khened",
    hodQualification: "Ph.D., M.Tech (26+ Years Exp.)",
    accreditationStatus: "NBA Accredited",
    curriculumSemesters: [
      { semester: 3, subjects: ["Electronic Principles & Circuits", "Digital System Design with Verilog", "Network Analysis", "Engineering Mathematics - III"] },
      { semester: 4, subjects: ["Analog Circuits", "Signals and Systems", "Microcontrollers (ARM Cortex)", "Electromagnetic Waves"] },
      { semester: 5, subjects: ["Digital Signal Processing", "Principles of Communication Systems", "VLSI Design & ASIC", "Control Systems"] },
      { semester: 6, subjects: ["Cellular & Mobile Communication", "Microwave & Antennas", "Embedded System Design", "CMOS VLSI Lab"] },
      { semester: 7, subjects: ["Optical Fiber Communication", "IoT & Sensor Networks", "Wireless Networks", "Project Phase - I"] },
      { semester: 8, subjects: ["Major Project & Industry Internship", "Seminar"] }
    ],
    labFacilities: ["VLSI Design & Cadence EDA Lab", "DSP & Communication Systems Lab", "Texas Instruments IoT Lab", "Microcontroller & ARM Lab"],
    icon: "Radio",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "be-eee",
    name: "Electrical & Electronics Engineering",
    code: "EEE",
    degree: "BE",
    category: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    intake: 60,
    established: 1997,
    description: "Mastering power grids, renewable green energy, electrical vehicles (EV), industrial automation, power electronics, and smart microgrids.",
    highlights: [
      "NBA Accredited with modern Solar Photovoltaic & Smart Grid testbeds",
      "Specialized training in Electric Vehicle powertrain & battery management",
      "Partnership with Schneider Electric and regional power distribution utilities",
      "High recruitment in core power, automation, and energy sectors"
    ],
    careerProspects: ["Power Systems Engineer", "EV Powertrain Developer", "Industrial Automation Engineer", "Renewable Energy Consultant", "Control Systems Analyst"],
    hodName: "Dr. Yadavalli Basavaraj",
    hodQualification: "Ph.D., M.Tech (25+ Years Exp.)",
    accreditationStatus: "NBA Accredited",
    curriculumSemesters: [
      { semester: 3, subjects: ["Electric Circuit Analysis", "Analog Electronics", "Transformers & Generators", "Electrical Measurements"] },
      { semester: 4, subjects: ["Power Electronics", "Induction Machines", "Transmission & Distribution", "Control Systems"] },
      { semester: 5, subjects: ["Power System Analysis", "Microcontroller & Applications", "Renewable Energy Sources", "Signals & Systems"] },
      { semester: 6, subjects: ["Digital Signal Processing", "High Voltage Engineering", "Electric Vehicle Technology", "Power System Protection"] },
      { semester: 7, subjects: ["Smart Grid Technology", "Industrial Automation & PLC", "Utilization of Electrical Power", "Project Phase - I"] },
      { semester: 8, subjects: ["Major Project Work", "Internship", "Seminar"] }
    ],
    labFacilities: ["Power Electronics & Drives Lab", "Electrical Machines & Dyno Lab", "PLC & SCADA Automation Lab", "Renewable Energy Simulation Lab"],
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "be-civil",
    name: "Civil Engineering",
    code: "CIVIL",
    degree: "BE",
    category: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    intake: 60,
    established: 2011,
    description: "Designing resilient structural foundations, smart green buildings, modern transportation corridors, water resources, and geotechnical marvels.",
    highlights: [
      "NBA Accredited with industry standard Total Station & GIS equipment",
      "Advanced Concrete Testing and Structural Dynamics testing labs",
      "Consultancy cell generating engineering testing revenue for state infrastructure projects",
      "AutoCAD, ETABS, STAAD.Pro, and Revit BIM certified student training"
    ],
    careerProspects: ["Structural Design Consultant", "BIM Engineer", "Urban Infrastructure Planner", "Geotechnical Engineer", "Project Management Consultant"],
    hodName: "Dr. H. M. Mallikarjuna",
    hodQualification: "Ph.D., M.Tech (Structural Eng.)",
    accreditationStatus: "NBA Accredited",
    curriculumSemesters: [
      { semester: 3, subjects: ["Strength of Materials", "Fluid Mechanics", "Basic Surveying with Total Station", "Building Materials & Construction"] },
      { semester: 4, subjects: ["Analysis of Determinate Structures", "Applied Hydraulics", "Concrete Technology", "Advanced Surveying"] },
      { semester: 5, subjects: ["Design of RC Structural Elements", "Analysis of Indeterminate Structures", "Applied Geotechnical Engineering", "Hydrology"] },
      { semester: 6, subjects: ["Design of Steel Structural Elements", "Highway Engineering", "Water Supply & Treatment", "STAAD.Pro Lab"] },
      { semester: 7, subjects: ["Quantity Surveying & Estimation", "Design of Prestressed Concrete", "Environmental Engineering", "Project Phase - I"] },
      { semester: 8, subjects: ["Major Capstone Project", "Internship", "Technical Seminar"] }
    ],
    labFacilities: ["Geotechnical & Soil Mechanics Lab", "Concrete & Highway Materials Lab", "Total Station & GIS Survey Lab", "CAD & Structural BIM Lab"],
    icon: "Building",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "be-mech",
    name: "Mechanical Engineering",
    code: "MECH",
    degree: "BE",
    category: "Undergraduate",
    duration: "4 Years (8 Semesters)",
    intake: 60,
    established: 1997,
    description: "Mastering advanced manufacturing, CNC machining, robotics, automotive engineering, CFD simulations, and thermal power systems.",
    highlights: [
      "NBA Accredited with CNC VMC Lathe & 3D Prototyping Innovation Hub",
      "Dassault CATIA, SolidWorks & ANSYS finite element simulation centers",
      "Motorsport Club: SAE BAJA and Formula Student vehicle fabrication team",
      "Placements in automotive, aerospace, heavy engineering, and defense sectors"
    ],
    careerProspects: ["Automotive Design Engineer", "Robotics & Automation Specialist", "CFD & Thermal Analyst", "CNC Manufacturing Lead", "Quality & Operations Manager"],
    hodName: "Dr. V. C. Patil",
    hodQualification: "Ph.D., M.Tech, M.B.A.",
    accreditationStatus: "NBA Accredited",
    curriculumSemesters: [
      { semester: 3, subjects: ["Mechanics of Materials", "Thermodynamics", "Material Science & Metallurgy", "Metal Cutting & Machine Tools"] },
      { semester: 4, subjects: ["Fluid Mechanics & Machinery", "Kinematics of Machines", "Applied Thermodynamics", "Computer Aided Machine Drawing"] },
      { semester: 5, subjects: ["Design of Machine Elements - I", "Dynamics of Machinery", "Turbo Machines", "Management & Economics"] },
      { semester: 6, subjects: ["Design of Machine Elements - II", "Heat Transfer", "Finite Element Analysis (FEA)", "Non-Traditional Machining"] },
      { semester: 7, subjects: ["Control Engineering & Mechatronics", "Automobile Engineering", "Operations Research", "Project Phase - I"] },
      { semester: 8, subjects: ["Industrial Project Work", "Internship", "Seminar"] }
    ],
    labFacilities: ["CNC & Advanced Machining Center", "ANSYS & CATIA CAD/CAM Lab", "Heat Transfer & Fluid Machinery Lab", "SAE Motorsports Workshop"],
    icon: "Cog",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pg-mba",
    name: "Master of Business Administration",
    code: "MBA",
    degree: "MBA",
    category: "Postgraduate",
    duration: "2 Years (4 Semesters)",
    intake: 180,
    established: 2007,
    description: "Developing strategic business leaders with deep competencies in Financial Management, Marketing Strategy, Human Resource Analytics, and Digital Business Innovation.",
    highlights: [
      "Dual Specialization options (Finance, Marketing, HR, Business Analytics)",
      "Management Development Center with Harvard Business Publishing Case Studies",
      "Regular CEO conclaves, industrial visits, and corporate mentorship circles",
      "Excellent placement records in banking, financial services, consulting, and FMCG"
    ],
    careerProspects: ["Financial Analyst", "Marketing Brand Manager", "HR Business Partner", "Business Analytics Consultant", "Operations Strategist"],
    hodName: "Dr. G. P. Dinesh",
    hodQualification: "Ph.D., MBA, M.Com (28+ Years Exp.)",
    accreditationStatus: "AICTE & VTU Approved",
    curriculumSemesters: [
      { semester: 1, subjects: ["Management Principles & Org Behaviour", "Managerial Economics", "Accounting for Managers", "Quantitative Methods & Analytics", "Marketing Management"] },
      { semester: 2, subjects: ["Financial Management", "Human Resource Management", "Operations Management", "Business Research Methods", "Corporate Strategy & Governance"] },
      { semester: 3, subjects: ["Dual Specialization Electives (Finance/Marketing/HR)", "Business Analytics with Python/R", "Summer Internship Project"] },
      { semester: 4, subjects: ["Strategic Leadership", "International Business", "Specialization Electives - II", "Final Dissertation & Viva"] }
    ],
    labFacilities: ["Business Analytics & Financial Modeling Lab", "Executive Simulation Boardroom", "Digital Marketing Strategy Hub", "GD & Soft Skills Studio"],
    icon: "Briefcase",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pg-mca",
    name: "Master of Computer Applications",
    code: "MCA",
    degree: "MCA",
    category: "Postgraduate",
    duration: "2 Years (4 Semesters)",
    intake: 60,
    established: 2008,
    description: "High-intensity postgraduate software engineering training covering enterprise cloud systems, DevOps, mobile app ecosystems, and machine learning pipelines.",
    highlights: [
      "Modern 2-Year revised curriculum aligned with current IT enterprise demands",
      "Full 6-month industry internship in final semester with top software firms",
      "Certification modules in Cloud Platforms, React/Node.js, and Cyber Security",
      "Over 90% placement record in leading MNC IT software roles"
    ],
    careerProspects: ["Enterprise Full-Stack Developer", "Cloud Architect", "Software QA Automation Lead", "Mobile Application Architect", "Systems Analyst"],
    hodName: "Dr. Mohammed Abdul Waheed",
    hodQualification: "Ph.D., M.Tech, MCA",
    accreditationStatus: "AICTE & VTU Approved",
    curriculumSemesters: [
      { semester: 1, subjects: ["Advanced Data Structures & Algorithms", "Enterprise Java Programming", "Modern Web Technologies (MERN)", "Advanced Database Systems & NoSQL"] },
      { semester: 2, subjects: ["Cloud Computing & Virtualization", "Python & Machine Learning", "Software Architecture & DevOps", "Mobile App Development (Flutter/React Native)"] },
      { semester: 3, subjects: ["Cybersecurity & Cryptography", "Big Data Analytics", "IoT & Embedded Systems", "Mini Project & Seminar"] },
      { semester: 4, subjects: ["Full-Semester Corporate Industry Internship", "Major Project Dissertation & Defense"] }
    ],
    labFacilities: ["Enterprise Cloud Software Lab", "Mobile Application Design Lab", "Open Source Computing Lab", "Full Stack Development Studio"],
    icon: "Code",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "res-phd",
    name: "Doctoral (Ph.D.) & M.Sc. Engg Research",
    code: "Ph.D",
    degree: "PhD",
    category: "Research",
    duration: "3 - 5 Years",
    intake: 30,
    established: 2010,
    description: "VTU Recognized Research Centers in CSE, ECE, EEE, Mechanical, Civil, Physics, Chemistry, and MBA departments fostering world-class patentable innovation.",
    highlights: [
      "7 VTU Approved Research Centers with 40+ Recognized Research Guides",
      "State-of-the-art testing equipment, digital IEEE/Springer e-library access",
      "Grants from VGST, KSCST, AICTE RPS, and DST Government of India",
      "Over 120+ research scholars and 500+ Scopus/WoS indexed research papers published"
    ],
    careerProspects: ["University Professor", "Senior Principal Scientist", "R&D Director", "Patent Consultant", "Industrial Research Lead"],
    hodName: "Dr. T. Hanumantha Reddy",
    hodQualification: "Principal & Dean (R&D), Ph.D., M.Tech",
    accreditationStatus: "VTU Recognized Research Centers",
    curriculumSemesters: [
      { semester: 1, subjects: ["Research Methodology & IPR", "Domain Specific Advanced Coursework - I", "Literature Review"] },
      { semester: 2, subjects: ["Advanced Coursework - II", "Comprehensive Viva Voce", "Colloquium Presentation"] },
      { semester: 3, subjects: ["Active Research, Prototyping & Scopus Journal Publications"] },
      { semester: 4, subjects: ["Pre-Thesis Colloquium, Synopsis Submission, Final Defense"] }
    ],
    labFacilities: ["Central Instrumentation Facility", "Advanced Materials Research Lab", "High Performance AI Cluster", "IPR & Patent Filing Cell"],
    icon: "FlaskConical",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80"
  }
];

export const PLACEMENT_STATS: PlacementStat[] = [
  { year: "2024-25", offers: 512, highestPackage: 27.7, avgPackage: 6.8, companiesVisited: 145 },
  { year: "2023-24", offers: 480, highestPackage: 24.5, avgPackage: 6.5, companiesVisited: 138 },
  { year: "2022-23", offers: 530, highestPackage: 22.0, avgPackage: 6.2, companiesVisited: 142 },
  { year: "2021-22", offers: 460, highestPackage: 18.5, avgPackage: 5.8, companiesVisited: 125 },
  { year: "2020-21", offers: 390, highestPackage: 16.0, avgPackage: 5.2, companiesVisited: 110 }
];

export const RECRUITERS: Recruiter[] = [
  { name: "Infosys", logoText: "INFOSYS", industry: "IT Services & Consulting", tier: "Super Dream", highestHired: 120 },
  { name: "Wipro", logoText: "WIPRO", industry: "Technology & Cloud", tier: "Dream", highestHired: 95 },
  { name: "Tata Consultancy Services", logoText: "TCS", industry: "Digital & IT Solutions", tier: "Dream", highestHired: 110 },
  { name: "Cognizant", logoText: "COGNIZANT", industry: "Enterprise IT", tier: "Dream", highestHired: 85 },
  { name: "IBM India", logoText: "IBM", industry: "AI & Hybrid Cloud", tier: "Super Dream", highestHired: 35 },
  { name: "Harita TechServ", logoText: "HARITA", industry: "Core Engineering & Design", tier: "Core", highestHired: 45 },
  { name: "SLK Software", logoText: "SLK", industry: "Automation & Fintech", tier: "Dream", highestHired: 30 },
  { name: "Tech Mahindra", logoText: "TECH MAHINDRA", industry: "Telecom & Cloud", tier: "Dream", highestHired: 40 },
  { name: "Mindtree (LTIMindtree)", logoText: "LTIMINDTREE", industry: "Enterprise Tech", tier: "Super Dream", highestHired: 28 },
  { name: "Capgemini", logoText: "CAPGEMINI", industry: "Consulting & Technology", tier: "Dream", highestHired: 50 },
  { name: "Bosch", logoText: "BOSCH", industry: "Automotive & IoT", tier: "Core", highestHired: 25 },
  { name: "L&T Technology Services", logoText: "L&T TS", industry: "Heavy Engg & Infrastructure", tier: "Core", highestHired: 22 },
  { name: "Amazon", logoText: "AMAZON", industry: "E-Commerce & AWS", tier: "Super Dream", highestHired: 15 },
  { name: "HCL Technologies", logoText: "HCL", industry: "Software & Digital", tier: "Dream", highestHired: 32 },
  { name: "Accenture", logoText: "ACCENTURE", industry: "Global Strategy & Cloud", tier: "Super Dream", highestHired: 45 },
  { name: "TVS Motor", logoText: "TVS", industry: "Automotive Manufacturing", tier: "Core", highestHired: 18 }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Priyanka S. Patil",
    branch: "Computer Science & Engg",
    batch: "Class of 2024",
    role: "Cloud Software Engineer",
    company: "IBM India",
    package: "27.7 LPA",
    quote: "The practical labs and dedicated mentorship from the Training & Placement Cell at BITM gave me the confidence to ace competitive coding interviews and land my dream role at IBM.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t-2",
    name: "Kiran Kumar Reddy",
    branch: "Electronics & Communication",
    batch: "Class of 2023",
    role: "VLSI Design Engineer",
    company: "Cadence Design Systems",
    package: "18.5 LPA",
    quote: "BITM's advanced Cadence VLSI laboratory and Texas Instruments IoT hub provided the exact industry exposure that semiconductor companies test for.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t-3",
    name: "Meghana Deshmukh",
    branch: "Master of Business Admin (MBA)",
    batch: "Class of 2024",
    role: "Financial Analyst",
    company: "HDFC Bank Corporate",
    package: "9.2 LPA",
    quote: "The dual specialization curriculum and regular case-study workshops at BITM Department of Management Studies sharpened my financial analytical capabilities thoroughly.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t-4",
    name: "Syed Rehan Ali",
    branch: "Mechanical Engineering",
    batch: "Class of 2023",
    role: "Design Engineer",
    company: "Harita TechServ / TVS",
    package: "7.8 LPA",
    quote: "Building formula prototypes in the SAE BAJA workshop and working on CATIA 3D models at BITM laid the bedrock for my core mechanical engineering career.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  }
];

export const CAMPUS_FACILITIES: Facility[] = [
  {
    id: "fac-green-campus",
    title: "11-Acre Eco-Friendly Green Campus",
    category: "Infrastructure",
    shortDesc: "A peaceful, lush green learning environment equipped with solar power and modern academic blocks.",
    fullDesc: "Sprawled over 11 acres on the Ballari-Hosapete Highway, the Jnana Gangotri campus features manicured lawns, open-air amphitheaters, spacious air-cooled seminar halls, and high-speed Wi-Fi connectivity throughout.",
    stats: "11+ Acres | 100% Wi-Fi Enabled | Solar Powered",
    image: "https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&w=1000&q=80",
    features: ["Eco-friendly solar plant generating green power", "Spacious ventilated smart classrooms with smartboards", "Central administrative block and modern boardrooms", "Rainwater harvesting and lush botanical gardens"]
  },
  {
    id: "fac-library",
    title: "Central Digital Knowledge Hub",
    category: "Laboratories",
    shortDesc: "State-of-the-art central library holding over 100,000+ volumes, IEEE e-journals, and 24/7 digital access.",
    fullDesc: "Our 3-tier Central Library is an automated learning repository featuring RFID book management, VTU Consortium digital subscriptions, IEEE Xplore, Springer, ScienceDirect, and comfortable air-conditioned research reading halls.",
    stats: "100,000+ Volumes | 15,000+ E-Journals | 500 Seating",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
    features: ["VTU Consortium digital portal with remote access", "Dedicated multimedia digital library with 60 high-speed PCs", "National & International printed journal section", "Reprographic and thesis binding facilities"]
  },
  {
    id: "fac-labs",
    title: "Hi-Tech Advanced Research Labs",
    category: "Laboratories",
    shortDesc: "Equipped with NVIDIA Deep Learning GPUs, Cadence VLSI EDA tools, CNC machining, and TI IoT kits.",
    fullDesc: "Over 50 specialized laboratories provide students with experiential learning. Every department boasts state-of-the-art software toolkits, robotics arms, electrical test benches, and wind tunnels.",
    stats: "50+ Specialized Labs | Industry Standard Equipment",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    features: ["NVIDIA GPU AI & Deep Learning Workstations", "Cadence EDA & Xilinx FPGA hardware design suites", "Automated CNC Milling and 3D Rapid Prototyping", "Environmental testing & heavy structural load frames"]
  },
  {
    id: "fac-hostels",
    title: "Secure Residential Hostels",
    category: "Student Life",
    shortDesc: "Separate modern hostel blocks for boys and girls with hygienic multi-cuisine dining and 24/7 security.",
    fullDesc: "Safe and comfortable home away from home. Includes high-speed Wi-Fi, continuous hot water, indoor recreation rooms, gymnasiums, round-the-clock medical care on campus, and biometric security monitoring.",
    stats: "1,200+ Resident Capacity | 24/7 CCTV & Security",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80",
    features: ["Hygienic vegetarian and non-vegetarian food options", "Mineral water RO plants and solar water heating", "Resident wardens and faculty floor mentors", "Attached study desks, wardrobes, and power backup"]
  },
  {
    id: "fac-nain",
    title: "K-Tech NAIN Startup Incubator",
    category: "Innovation",
    shortDesc: "Government of Karnataka sponsored New Age Innovation Network fostering student startups and patents.",
    fullDesc: "BITM is an authorized NAIN incubation center providing seed funding, patent mentoring, prototyping resources, and industry connect for budding student entrepreneurs in Kalyana-Karnataka.",
    stats: "INR 3 Lakh Seed Grant / Project | 25+ Startups Incubated",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
    features: ["Prototype design lab with 3D printers and laser cutters", "Intellectual Property Rights (IPR) legal filing guidance", "Angel investor networking and business pitching events", "Alumni entrepreneur mentorship circles"]
  },
  {
    id: "fac-sports",
    title: "Sports Complex & Gymnasium",
    category: "Student Life",
    shortDesc: "Expansive multi-sports ground with cricket pitch, basketball court, indoor badminton, and gym.",
    fullDesc: "Encouraging physical fitness and team spirit with dedicated sports coaches, floodlit courts, indoor games arena for table tennis and chess, and a fully equipped cardio & weight-training gym.",
    stats: "Full Cricket Field | Indoor Badminton Arena | Modern Gym",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
    features: ["Standard 400m athletic running track", "International standard synthetic badminton courts", "Annual VTU inter-collegiate sports championship host", "Certified fitness instructors for boys & girls"]
  },
  {
    id: "fac-buses",
    title: "GPS-Enabled College Bus Fleet",
    category: "Infrastructure",
    shortDesc: "25+ college buses connecting Ballari city, Jindal Township, Siruguppa, Sandur, and Hosapete.",
    fullDesc: "Ensuring safe, comfortable, and punctual transit for thousands of day scholars and faculty across Ballari and neighbouring industrial towns with real-time GPS tracking and dedicated transport coordinators.",
    stats: "25+ Buses | 15+ City Routes | GPS Tracked",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1000&q=80",
    features: ["Covers all prominent residential & transit corridors", "Experienced drivers with background verification", "Dedicated faculty transport marshals on each route", "Emergency SOS and first-aid kits in every vehicle"]
  },
  {
    id: "fac-cafeteria",
    title: "Multi-Cuisine Campus Cafeteria",
    category: "Student Life",
    shortDesc: "Spacious, hygienic dining court offering nutritious South Indian, North Indian, and continental meals.",
    fullDesc: "A bustling social hotspot for students and faculty serving fresh, wholesome food, hot beverages, fruit juices, and snacks prepared under strict FSSAI hygiene standards.",
    stats: "400+ Seating | FSSAI Certified | RO Water Supply",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    features: ["Pocket-friendly student meal subsidies", "Strict contactless digital payments and fast token counters", "Separate dining zones for faculty and students", "Daily quality audit and steam-sanitized kitchen"]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    title: "Jnana Gangotri Campus Main Administrative Block",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    caption: "11-Acre lush green campus with palm avenues on Ballari-Hosapete National Highway"
  },
  {
    id: "g-2",
    title: "High Performance Computing & AI Neural Lab",
    category: "Labs",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    caption: "NVIDIA RTX GPU workstations powering Machine Learning and Cloud Computing projects"
  },
  {
    id: "g-3",
    title: "Central Digital Library & Reading Commons",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    caption: "Automated RFID-enabled library holding 100,000+ print volumes and IEEE digital journals"
  },
  {
    id: "g-4",
    title: "Manthan Annual Techno-Cultural Mega Fest",
    category: "Events",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    caption: "Over 5,000 students celebrating technology, hackathons, music, and performing arts"
  },
  {
    id: "g-5",
    title: "Graduation Convocation Ceremony",
    category: "Events",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    caption: "Graduating engineering, MBA & MCA scholars receiving accredited degrees"
  },
  {
    id: "g-6",
    title: "Robotics & Drone Hardware Prototyping",
    category: "Labs",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    caption: "Students building autonomous obstacle-avoidance rovers and industrial robotic arms"
  },
  {
    id: "g-7",
    title: "Inter-Collegiate Sports Tournament & Athletics",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    caption: "Cricket, football, and athletic championships hosted on the Jnana Gangotri turf grounds"
  },
  {
    id: "g-8",
    title: "K-Tech NAIN Startup Pitching & Hackathon",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    caption: "Budding student entrepreneurs pitching technological prototypes for Govt. seed grants"
  },
  {
    id: "g-9",
    title: "Mechanical CAD/CAM & Advanced CNC Center",
    category: "Labs",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    caption: "Precision CNC vertical machining centers and subsonic aerodynamic wind tunnel testing"
  },
  {
    id: "g-10",
    title: "Department of Management Studies Executive Hall",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    caption: "MBA & MCA corporate case-study boardroom and executive interactive workshops"
  },
  {
    id: "g-11",
    title: "Floodlit Synthetic Basketball & Badminton Arena",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
    caption: "International acrylic standard courts for basketball, volleyball, and indoor badminton"
  },
  {
    id: "g-12",
    title: "Eco-Friendly 250 kW Solar Rooftop Plant",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    caption: "Clean renewable solar grid meeting more than 60% of the institution's energy needs"
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    category: "Admissions",
    question: "What are the eligibility criteria for Undergraduate (B.E.) admissions at BITM?",
    answer: "Candidates must have passed 10+2 / 2nd PUC (or equivalent) examination recognized by state/central boards with Physics and Mathematics as compulsory subjects along with Chemistry / Bio-Technology / Computer Science / Electronics, obtaining at least 45% aggregate marks (40% for SC/ST/OBC category candidates belonging to Karnataka). Valid KCET or COMED-K ranking is required for seat allocation."
  },
  {
    category: "Admissions",
    question: "What are the counseling codes for BITM Ballari?",
    answer: "For Karnataka CET (KCET), the institution code is E037. For COMED-K, the institution code is E025. For PGCET (MBA/MCA/M.Tech), the institution code is B125. For direct Management Quota counseling, contact the Admission Cell directly at +91 94480 84877."
  },
  {
    category: "Placements",
    question: "How does the Training & Placement (T&P) Cell prepare students from first year?",
    answer: "BITM implements a progressive 4-tier placement enablement model: 1st Year focuses on Business English & Communication; 2nd Year focuses on Data Structures & Quantitative Aptitude; 3rd Year covers Full-Stack coding, System Design, AI tools, and Mock Interviews with corporate leaders; and 4th Year facilitates on-campus recruitment drives with over 300+ companies."
  },
  {
    category: "Hostel & Campus",
    question: "Are hostel accommodations available for outstation students?",
    answer: "Yes, BITM provides secure, well-furnished separate hostels for boys and girls within the Jnana Gangotri campus. Amenities include Wi-Fi connectivity, RO filtered drinking water, 24/7 solar hot water, laundry assistance, study rooms, gymnasium, and hygienic vegetarian & non-vegetarian dining facilities under resident warden supervision."
  },
  {
    category: "Academics",
    question: "Is BITM Ballari affiliated with VTU and accredited by NAAC & NBA?",
    answer: "Yes, Ballari Institute of Technology & Management (BITM) is permanently affiliated with Visvesvaraya Technological University (VTU), Belagavi, approved by AICTE New Delhi, and has been awarded 'A+' Grade by NAAC. The major engineering branches (CSE, ECE, EEE, MECH, CIVIL) are NBA Accredited."
  },
  {
    category: "Hostel & Campus",
    question: "Is college transportation (bus facility) available across Ballari city and nearby towns?",
    answer: "Yes, BITM operates a fleet of over 25+ GPS-enabled deluxe buses covering all key areas of Ballari city, Allipura, Cantonment, Cowl Bazaar, Siruguppa, Sandur, Hosapete, and Toranagallu, ensuring safe and punctual transit for day-scholar students and faculty."
  }
];

export const BUS_ROUTES = [
  { routeNo: "Route 01", name: "Cantonment - Sudha Cross - Allipura Campus", timing: "7:45 AM - 8:30 AM", stops: "Cantonment, Durgamma Temple, Sudha Cross, Kolachalam, Campus" },
  { routeNo: "Route 02", name: "Cowl Bazaar - Royal Circle - Campus", timing: "7:40 AM - 8:30 AM", stops: "Cowl Bazaar, Railway Station, Royal Circle, Ananthapur Road, Campus" },
  { routeNo: "Route 03", name: "Infantry Road - Millerpet - Campus", timing: "7:50 AM - 8:35 AM", stops: "Infantry Road, Brucepete Police Station, Raghavendra Talkies, Campus" },
  { routeNo: "Route 04", name: "Toranagallu / Jindal Township - Campus", timing: "7:15 AM - 8:30 AM", stops: "Vidyanagar Township, Toranagallu Gate, Kudatini, Campus" },
  { routeNo: "Route 05", name: "Siruguppa - Ballari Highway Express", timing: "7:00 AM - 8:30 AM", stops: "Siruguppa Bus Stand, Tekkalakote, Halekote, BITM Campus" }
];

export const VIRTUAL_TOUR_SPOTS: VirtualTourSpot[] = [
  {
    id: "tour-library",
    name: "Central Digital Library & Research Commons",
    category: "Library",
    tagline: "RFID Automated Knowledge Repository with 100,000+ Technical Volumes",
    description: "Spanning over 15,000 sq.ft, the BITM Central Library is fully digitized with Koha ILMS, RFID self-kiosks, IEEE/Springer subscription nodes, and quiet research chambers.",
    badge: "15,000 Sq.Ft • 100K+ Volumes",
    panoramicImage: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=2400&q=85",
    thumbnailImage: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80",
    established: "1997 (Digitized 2018)",
    mapCoords: { x: 42, y: 35 },
    specs: [
      { label: "Floor Area", value: "15,200 sq.ft" },
      { label: "Seating Capacity", value: "450+ Reading Seats" },
      { label: "Print Volumes", value: "102,400+ Books" },
      { label: "E-Journals", value: "IEEE Xplore, DELNET, Springer" },
      { label: "Automation", value: "3M RFID Security & Self Checkout" }
    ],
    hotspots: [
      {
        id: "hs-lib-1",
        title: "Digital E-Resource Hub",
        description: "60 dedicated high-speed multimedia terminals accessing IEEE Xplore, VTU Consortium e-journals, and NPTEL course videos.",
        x: 28,
        y: 46,
        iconType: "tech"
      },
      {
        id: "hs-lib-2",
        title: "RFID Self-Checkout Kiosks",
        description: "Automated instant book issue and return stations integrated with student smart ID cards.",
        x: 52,
        y: 62,
        iconType: "info"
      },
      {
        id: "hs-lib-3",
        title: "Research & Periodicals Wing",
        description: "National & International journal archives, quiet cubicles for PhD scholars and faculty research.",
        x: 74,
        y: 40,
        iconType: "book"
      }
    ],
    audioGuideTranscript: "Welcome to the BITM Central Library. This three-tier facility houses more than one hundred thousand print and digital volumes. To your left is the 60-seat high-speed digital research bay, while the right wing accommodates dedicated research cubicles for VTU doctoral scholars."
  },
  {
    id: "tour-ai-lab",
    name: "Advanced AI, GPU Computing & Data Science Lab",
    category: "Labs & Research",
    tagline: "NVIDIA RTX Workstations & High-Throughput Deep Learning Cluster",
    description: "Purpose-built computing center powering hands-on experimentation in Neural Networks, Computer Vision, Large Language Models, and Edge AI deployment.",
    badge: "NVIDIA RTX • 1 Gbps Fiber",
    panoramicImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2400&q=85",
    thumbnailImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    established: "2021",
    mapCoords: { x: 55, y: 28 },
    specs: [
      { label: "Hardware Rig", value: "NVIDIA RTX GPUs & Xeon Processors" },
      { label: "Network Backbone", value: "1 Gbps Dedicated Low-Latency Fiber" },
      { label: "Terminal Count", value: "75 AI Workstations" },
      { label: "Frameworks", value: "PyTorch, TensorFlow, CUDA, ROS 2" },
      { label: "Industry Partner", value: "Infosys Springboard & AWS Academy" }
    ],
    hotspots: [
      {
        id: "hs-ai-1",
        title: "NVIDIA Accelerated Compute Rigs",
        description: "High-spec workstations with dedicated CUDA Tensor cores for training deep convolutional and transformer models.",
        x: 32,
        y: 52,
        iconType: "tech"
      },
      {
        id: "hs-ai-2",
        title: "Smart Interactive Presentation Board",
        description: "Interactive 86-inch 4K touchscreen for real-time code reviews, architectural whiteboard sessions, and hybrid webinars.",
        x: 60,
        y: 35,
        iconType: "info"
      },
      {
        id: "hs-ai-3",
        title: "Collaborative Agile Pods",
        description: "Hexagonal developer pods designed for rapid hackathons, pair-programming, and Capstone project sprints.",
        x: 78,
        y: 65,
        iconType: "lab"
      }
    ],
    audioGuideTranscript: "You are standing inside the Advanced AI and Deep Learning Laboratory at BITM Ballari. Equipped with high-density GPU computing clusters and Gigabit fiber lines, students here build real-world AI applications in computer vision, robotics perception, and natural language processing."
  },
  {
    id: "tour-sports",
    name: "Jnana Gangotri Sports Complex & Stadium",
    category: "Sports & Fitness",
    tagline: "Olympic-Standard Courts, Multi-Gym & Turf Grounds",
    description: "Expansive athletics zone featuring lush cricket and football grounds, floodlit synthetic courts for basketball and tennis, indoor badminton arena, and multi-station gymnasium.",
    badge: "11-Acre Sports Arena • Floodlit",
    panoramicImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=2400&q=85",
    thumbnailImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80",
    established: "2002",
    mapCoords: { x: 78, y: 72 },
    specs: [
      { label: "Main Grounds", value: "Full-Size Cricket & Football Turf" },
      { label: "Outdoor Courts", value: "Basketball, Volleyball, Throwball (Floodlit)" },
      { label: "Indoor Complex", value: "3 Wooden Badminton Courts & Table Tennis" },
      { label: "Fitness Center", value: "16-Station Multi-Gymnasium" },
      { label: "Annual Events", value: "VTU Inter-Collegiate Tournaments & Sports Day" }
    ],
    hotspots: [
      {
        id: "hs-sp-1",
        title: "Synthetic Basketball Arena",
        description: "Shock-absorbent acrylic surface with international boundary markings and high-intensity LED floodlights.",
        x: 35,
        y: 55,
        iconType: "sport"
      },
      {
        id: "hs-sp-2",
        title: "Central Turf Ground",
        description: "Natural grass pitch hosting university-level cricket championships, track-and-field athletics, and football matches.",
        x: 58,
        y: 42,
        iconType: "sport"
      },
      {
        id: "hs-sp-3",
        title: "Modern Fitness & Gymnasium",
        description: "Equipped with motorized treadmills, elliptical trainers, cable crossovers, and strength training stations under physical trainer guidance.",
        x: 82,
        y: 58,
        iconType: "info"
      }
    ],
    audioGuideTranscript: "Welcome to the BITM Sports Complex. Our athletes regularly represent VTU in zonal and national championships. The outdoor arena is illuminated by high-mast floodlights for evening training, backed by a fully equipped indoor fitness center."
  },
  {
    id: "tour-nain",
    name: "K-Tech NAIN Startup & Incubation Center",
    category: "Innovation & Incubation",
    tagline: "Govt. of Karnataka Supported Innovation Incubator with Seed Funding",
    description: "Incubating student technology ventures with dedicated co-working desks, 3D printers, rapid electronics prototyping bays, and direct mentor access to industry venture capitalists.",
    badge: "Seed Grants up to ₹3 Lakhs",
    panoramicImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2400&q=85",
    thumbnailImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
    established: "2016",
    mapCoords: { x: 32, y: 58 },
    specs: [
      { label: "Sponsorship", value: "Department of IT & BT, Govt. of Karnataka" },
      { label: "Seed Funding", value: "Up to ₹3,00,000 per selected project" },
      { label: "Incubated Startups", value: "35+ Student Ventures" },
      { label: "Patents Filed", value: "18+ Intellectual Property Disclosures" },
      { label: "Prototyping Lab", value: "Dual Extruder 3D Printers, Laser Cutters, SMD Stations" }
    ],
    hotspots: [
      {
        id: "hs-nain-1",
        title: "3D Rapid Prototyping & Fab Zone",
        description: "Industrial grade stereolithography and FDM 3D printers for turning CAD models into physical working prototypes within hours.",
        x: 25,
        y: 48,
        iconType: "tech"
      },
      {
        id: "hs-nain-2",
        title: "Pitch & Boardroom Suite",
        description: "Audio-visual equipped conference lounge for presenting startup pitches to angel investors and K-Tech steering committees.",
        x: 62,
        y: 38,
        iconType: "info"
      },
      {
        id: "hs-nain-3",
        title: "Incubatee Co-Working Desks",
        description: "24/7 accessible ergonomic work pods for student founders, complete with high-speed internet and cloud credits.",
        x: 76,
        y: 62,
        iconType: "lab"
      }
    ],
    audioGuideTranscript: "This is the K-Tech New Age Innovation Network Center, established in collaboration with the Government of Karnataka. Here, aspiring student entrepreneurs receive grant funding, intellectual property guidance, and rapid prototyping tools to launch viable tech startups."
  },
  {
    id: "tour-auditorium",
    name: "Sir M. Visvesvaraya Auditorium & Seminar Hall",
    category: "Auditorium",
    tagline: "800+ Seater Acoustically Engineered Convention Complex",
    description: "The crown jewel venue of BITM for national conferences, techno-cultural fests, convocation ceremonies, and corporate executive guest lectures.",
    badge: "800+ Capacity • Dolby Audio",
    panoramicImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2400&q=85",
    thumbnailImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
    established: "2012",
    mapCoords: { x: 50, y: 50 },
    specs: [
      { label: "Seating Capacity", value: "800+ Tiered Push-Back Seats" },
      { label: "Acoustic System", value: "Line-Array JBL Surround & Sound Absorptive Panels" },
      { label: "Visual Tech", value: "Motorized 300-inch 4K Laser Projection" },
      { label: "Climate Control", value: "Centralized Multi-Zone Air Conditioning" },
      { label: "Green Rooms", value: "2 Fully Furnished VIP & Performer Suites" }
    ],
    hotspots: [
      {
        id: "hs-aud-1",
        title: "Main Proscenium Stage",
        description: "Expansive 1,200 sq.ft stage equipped with programmable stage lighting rigs and motorized backdrops.",
        x: 50,
        y: 42,
        iconType: "info"
      },
      {
        id: "hs-aud-2",
        title: "Tiered Auditorium Seating",
        description: "Ergonomic push-back chairs with unobstructed sightlines from every angle in the house.",
        x: 24,
        y: 68,
        iconType: "info"
      },
      {
        id: "hs-aud-3",
        title: "Centralized AV Control Console",
        description: "32-channel digital sound mixer, video switching matrix, and live streaming encoders for global broadcast.",
        x: 82,
        y: 58,
        iconType: "tech"
      }
    ],
    audioGuideTranscript: "Welcome to the Sir M. Visvesvaraya Grand Auditorium. Designed with international acoustic standards and Dolby line-array sound, this auditorium hosts BITM's annual Manthan Techno-Cultural fest, VTU convocation ceremonies, and international IEEE conferences."
  },
  {
    id: "tour-robotics",
    name: "Robotics, IoT & Embedded Hardware Lab",
    category: "Labs & Research",
    tagline: "Industrial 6-DOF Manipulators & Drone Avionics Station",
    description: "Hands-on engineering space for building autonomous mobile robots, sensory networks, smart agriculture IoT devices, and industrial automation protocols.",
    badge: "6-DOF Arms • IoT Sensor Grid",
    panoramicImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=2400&q=85",
    thumbnailImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    established: "2019",
    mapCoords: { x: 62, y: 40 },
    specs: [
      { label: "Robotic Arms", value: "6-Axis Articulated Industrial Robotic Trainer" },
      { label: "Embedded Platforms", value: "STM32, Texas Instruments DSP, ESP32, Raspberry Pi 5" },
      { label: "Drone Tech", value: "Quadcopter Flight Controller Calibration Rig" },
      { label: "Sensory Systems", value: "LiDAR, Ultrasonic Arrays, Thermal Imaging Sensors" },
      { label: "Test Arena", value: "Dedicated Grid Maze & Line-Follower Tracks" }
    ],
    hotspots: [
      {
        id: "hs-rob-1",
        title: "Articulated Robotic Arm Cell",
        description: "Industrial pick-and-place trainer with programmable inverse kinematics and pneumatic grippers.",
        x: 36,
        y: 50,
        iconType: "tech"
      },
      {
        id: "hs-rob-2",
        title: "Embedded Workbench & Soldering Station",
        description: "Digital storage oscilloscopes, logic analyzers, SMD rework stations, and function generators.",
        x: 64,
        y: 60,
        iconType: "lab"
      },
      {
        id: "hs-rob-3",
        title: "Autonomous Obstacle Arena",
        description: "Controlled test floor for evaluating SLAM navigation and obstacle avoidance in unmanned ground vehicles.",
        x: 80,
        y: 38,
        iconType: "tech"
      }
    ],
    audioGuideTranscript: "Inside the Robotics and Embedded Systems Lab, students merge hardware with intelligent software. From calibrating 6-axis robotic arms to programming LiDAR-guided autonomous rovers, this lab prepares students for Industry 4.0 automation."
  },
  {
    id: "tour-mechanical",
    name: "Mechanical CAD/CAM & Advanced CNC Machining Center",
    category: "Labs & Research",
    tagline: "Industrial CNC Mills, Lathes & Subsonic Aerodynamic Wind Tunnel",
    description: "Heavy precision manufacturing and simulation facility equipped with CNC machining stations, universal testing machines, coordinate measuring devices, and aerodynamic test tunnels.",
    badge: "4-Axis CNC • Wind Tunnel",
    panoramicImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2400&q=85",
    thumbnailImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    established: "1998 (Upgraded 2022)",
    mapCoords: { x: 22, y: 70 },
    specs: [
      { label: "Machining", value: "4-Axis CNC Vertical Machining Center & CNC Lathe" },
      { label: "Simulation Software", value: "SolidWorks, CATIA V5, ANSYS FEA/CFD, Mastercam" },
      { label: "Aerodynamics", value: "Subsonic Wind Tunnel with Smoke Flow Visualizer" },
      { label: "Material Testing", value: "60-Ton Computerized UTM, Torsion & Impact Testers" },
      { label: "Metrology", value: "Coordinate Measuring Machine (CMM) & Surface Profiler" }
    ],
    hotspots: [
      {
        id: "hs-mech-1",
        title: "4-Axis CNC Vertical Machining Center",
        description: "Industrial precision machine executing G-code programs for intricate aerospace and automotive component prototyping.",
        x: 30,
        y: 54,
        iconType: "tech"
      },
      {
        id: "hs-mech-2",
        title: "Aerodynamic Wind Tunnel Test Section",
        description: "Subsonic airflow tunnel used to analyze drag, lift, and boundary layer separation on airfoil models.",
        x: 62,
        y: 44,
        iconType: "lab"
      },
      {
        id: "hs-mech-3",
        title: "CAD/CAM Workstations",
        description: "High-spec workstations running finite element analysis (FEA) and computational fluid dynamics (CFD) in ANSYS.",
        x: 84,
        y: 62,
        iconType: "tech"
      }
    ],
    audioGuideTranscript: "You are touring the Mechanical CAD/CAM and Advanced Machining Center. This center bridges computational digital design with precision subtractive manufacturing, training engineers on industry standard CNC machine tools."
  },
  {
    id: "tour-campus-entry",
    name: "Jnana Gangotri Central Quadrangle & Main Gate",
    category: "Campus Grounds",
    tagline: "11+ Acre Eco-Friendly Landscape with Solar Array & Fountains",
    description: "The welcoming gateway of BITM Ballari, showcasing tree-lined pedestrian avenues, central fountain rotunda, solar power plant, and open-air student recreation gardens.",
    badge: "11+ Acres • Green Campus",
    panoramicImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2400&q=85",
    thumbnailImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
    established: "1997",
    mapCoords: { x: 50, y: 15 },
    specs: [
      { label: "Campus Span", value: "11+ Acres Contiguous Green Campus" },
      { label: "Sustainability", value: "250 kW Rooftop Solar Plant & Rainwater Harvesting" },
      { label: "Transit Connectivity", value: "Adjacent to Ballari-Hosapete National Highway" },
      { label: "Surveillance", value: "200+ 24/7 CCTV Cameras & Dedicated Security Gate" },
      { label: "Landscape", value: "Botanical Gardens, Rose Pergolas & Seating Gazebos" }
    ],
    hotspots: [
      {
        id: "hs-entry-1",
        title: "Main Administrative Portal",
        description: "Houses the offices of the Principal, Registrar, Admissions Center, and VTU Examination Control.",
        x: 48,
        y: 40,
        iconType: "info"
      },
      {
        id: "hs-entry-2",
        title: "Solar Power Generation Array",
        description: "Grid-connected 250 kW clean solar installation offsetting more than 60% of campus electricity consumption.",
        x: 75,
        y: 30,
        iconType: "tech"
      },
      {
        id: "hs-entry-3",
        title: "Central Fountain & Gazebo Plaza",
        description: "Open-air gathering hub for students between lecture intervals and festival celebrations.",
        x: 28,
        y: 65,
        iconType: "info"
      }
    ],
    audioGuideTranscript: "Welcome to the Jnana Gangotri Campus of BITM Ballari. Spread over eleven lush acres on the Ballari-Hosapete highway, our campus balances cutting-edge engineering infrastructure with environmental sustainability."
  }
];

