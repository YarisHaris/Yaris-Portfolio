export type Internship = {
  slug: string;
  company: string;
  role: string;
  duration: string;
  overview: string;
  responsibilities: string[];
  technologies: string[];
  problemsSolved: string[];
  challenges: string[];
  learnings: string[];
  certificate?: string;
};


export type Project = {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  metaDescription?: string;
  problem: string;
  objectives: string[];
  architecture: string;
  workflow: string[];
  techStack: string[];
  databaseDesign: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  lessons: string[];
  futureScope: string[];
  github: string;
  liveDemo?: string;
};

export type SkillCategory = {
  slug: string;
  name: string;
  overview: string;
  technologies: string[];
  internshipUsage: string[];
  relatedProjects: string[];
  github: string[];
  timeline: { year: string; milestone: string }[];
};

export type Achievement = {
  slug: string;
  title: string;
  summary: string;
  details: string;
  year?: string;
};

export const internships: Internship[] = [
  {
    slug: "arlig-technologies",
    company: "Arlig Technologies",
    role: "Full Stack Development Intern",
    duration: "Jan 2024 — Apr 2024",
    overview:
      "Joined Arlig Technologies as a Full Stack Intern contributing to production-grade web platforms across the React, Node.js and PostgreSQL stack.",
    responsibilities: [
      "Implemented responsive UI features in React with reusable component patterns",
      "Built REST endpoints in Node.js / Express with input validation and auth",
      "Designed PostgreSQL schemas and tuned slow queries",
      "Wrote unit and integration tests, reviewed peer pull requests",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind", "Git"],
    problemsSolved: [
      "Reduced a critical dashboard load from ~4s to <800ms via query batching",
      "Eliminated a class of auth bugs by centralising session middleware",
    ],
    challenges: [
      "Working inside a large legacy codebase with limited documentation",
      "Coordinating async API contracts across frontend and backend teams",
    ],
    learnings: [
      "How shipping software in a real team differs from coursework",
      "Disciplined code review and incremental refactoring",
    ],
    certificate: "C:\Users\yaris\Downloads\Portfolio Builder Pro(1)\public\resume.pdf.pdf",
  },
  {
    slug: "karunadu-java-dbms",
    company: "Karunadu Technologies",
    role: "Java & DBMS Intern",
    duration: "Jul 2023",
    overview:
      "Backend-focused internship building Java services backed by relational databases, with emphasis on clean OOP and normalised schemas.",
    responsibilities: [
      "Wrote Java modules for CRUD and reporting workflows",
      "Modelled normalised relational schemas and stored procedures",
      "Authored SQL queries for analytical reporting",
    ],
    technologies: ["Java", "JDBC", "MySQL", "OOP", "SQL"],
    problemsSolved: [
      "Restructured a denormalised schema to remove update anomalies",
    ],
    challenges: ["Translating textbook DBMS theory into production constraints"],
    learnings: ["Index design trade-offs", "Transaction isolation in practice"],
    certificate: "/__l5e/assets-v1/de20f8eb-6a4a-46d2-8177-9769b5886e1e/karunadu-certificate-2.pdf",
  },
  {
    slug: "karunadu-web-fundamentals",
    company: "Karunadu Technologies",
    role: "HTML, CSS & JavaScript Intern",
    duration: "Aug 2022 — Sep 2022",
    overview:
      "First professional exposure to web development — built responsive marketing pages and interactive components from scratch.",
    responsibilities: [
      "Sliced design mocks into semantic HTML and CSS",
      "Added vanilla JavaScript interactions and form validation",
      "Ensured cross-browser and mobile responsiveness",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    problemsSolved: ["Replaced a broken layout system with a clean flex/grid baseline"],
    challenges: ["Building intuition for the browser rendering model"],
    learnings: ["Semantic HTML matters", "CSS specificity is a real architecture concern"],
    certificate: "/__l5e/assets-v1/5e30ab23-0a38-4cf3-878a-14b6add1d5eb/karunadu-certificate.pdf",
  },
];


export const projects: Project[] = [
  {
    slug: "intelliscreen",
    name: "IntelliScreen",
    tagline: "AI Resume Screening Platform",
    overview:
      "IntelliScreen automates the first pass of technical hiring — parsing resumes, scoring them against a job description, and surfacing the strongest candidates with explainable reasoning.",
    metaDescription:
      "IntelliScreen parses resumes, scores them against job descriptions, and ranks candidates with explainable AI reasoning.",
    problem:
      "Recruiters spend hours triaging hundreds of resumes per role, with inconsistent rubrics and unconscious bias.",
    objectives: [
      "Parse arbitrary PDF / DOCX resumes into structured candidate profiles",
      "Score candidates against a job description with an LLM-backed rubric",
      "Provide explainable scoring so recruiters can audit decisions",
    ],
    architecture:
      "Next.js frontend → FastAPI service for parsing and scoring → vector store for semantic match → Postgres for candidate records.",
    workflow: [
      "Recruiter uploads a JD and a batch of resumes",
      "Each resume is parsed and embedded",
      "LLM scoring chain ranks candidates with rationale",
      "Recruiter reviews a sorted shortlist with highlights",
    ],
    techStack: ["Next.js", "FastAPI", "Python", "OpenAI", "pgvector", "PostgreSQL", "Tailwind"],
    databaseDesign:
      "candidates(id, name, email, parsed_json, embedding) · jobs(id, title, jd_text, embedding) · scores(candidate_id, job_id, score, rationale)",
    features: [
      "Bulk resume upload",
      "Explainable scoring with per-criterion breakdown",
      "Shortlist export to CSV",
    ],
    challenges: [
      "Parsing wildly inconsistent resume formats reliably",
      "Keeping LLM scoring deterministic enough to compare candidates",
    ],
    solutions: [
      "Two-stage parse: heuristic extraction then LLM normalisation",
      "Fixed seeds + rubric anchoring prompts for stable ranking",
    ],
    lessons: [
      "LLM output is only useful when it is structured and graded",
      "Evaluation harnesses matter as much as the model",
    ],
    futureScope: [
      "Recruiter feedback loop to fine-tune scoring",
      "ATS integrations (Greenhouse, Lever)",
    ],
    github: "https://github.com/",
  },
  {
    slug: "result-analyzer",
    name: "Result Analyzer",
    tagline: "OCR-based Academic Analytics Platform",
    overview:
      "Result Analyzer turns scanned university result sheets into structured analytics — per-student, per-subject, per-cohort — without any manual data entry.",
    problem:
      "Departments receive results as PDFs and printed sheets, with no way to track subject-level trends across semesters.",
    objectives: [
      "Extract marks from scanned PDFs reliably",
      "Aggregate trends across students, subjects, and cohorts",
      "Expose dashboards for HoDs and faculty",
    ],
    architecture:
      "Upload service → OCR pipeline (Tesseract + layout parsing) → normalised Postgres warehouse → Next.js dashboards.",
    workflow: [
      "Faculty uploads a result PDF",
      "OCR pipeline extracts roll numbers and subject marks",
      "Records are validated and stored",
      "Dashboards surface pass %, toppers, weak subjects",
    ],
    techStack: ["Python", "Tesseract", "FastAPI", "PostgreSQL", "Next.js", "Recharts"],
    databaseDesign:
      "students(id, roll_no, name, cohort) · subjects(id, code, name) · marks(student_id, subject_id, semester, marks)",
    features: [
      "Bulk PDF ingestion",
      "Cohort and subject-level analytics",
      "Exportable reports",
    ],
    challenges: [
      "OCR accuracy on low-quality scans",
      "Mapping inconsistent subject codes across years",
    ],
    solutions: [
      "Pre-processing pipeline (deskew, denoise) + confidence thresholds",
      "Fuzzy matcher with a curated subject dictionary",
    ],
    lessons: ["Data cleaning is the project", "Faculty trust requires transparent provenance"],
    futureScope: ["Mobile capture", "Predictive at-risk-student alerts"],
    github: "https://github.com/",
  },
  {
    slug: "nain-2",
    name: "NAIN 2.0",
    tagline: "AI Interactive Robot",
    overview:
      "NAIN 2.0 is an interactive desktop robot that listens, reasons with an on-device LLM bridge, and responds with expressive motion and voice — built on a Raspberry Pi.",
    metaDescription:
      "NAIN 2.0 is an interactive Raspberry Pi robot that listens, reasons with an LLM, and replies with expressive motion and voice.",
    problem:
      "Most consumer assistants are screens. NAIN explores embodied conversation with low-cost hardware.",
    objectives: [
      "Always-listening wake word with low false-positive rate",
      "Latency-tolerant speech ↔ LLM ↔ speech loop",
      "Expressive servo-driven motion synced to speech",
    ],
    architecture:
      "Mic array → wake word → STT → LLM gateway → TTS → servo controller. Edge-first, cloud fallback.",
    workflow: [
      "Wake word triggers capture",
      "Speech is transcribed and sent to the LLM",
      "Response is streamed to TTS",
      "Servos animate head + eyes in sync",
    ],
    techStack: ["Python", "Raspberry Pi", "Picovoice", "Whisper", "OpenAI", "I2C servos"],
    databaseDesign: "Local SQLite for conversation memory and personality state",
    features: ["Wake word", "Streaming TTS", "Expressive servo choreography", "Conversation memory"],
    challenges: [
      "Servo jitter desynchronising with speech",
      "Power budget on the Pi under continuous inference",
    ],
    solutions: [
      "Pre-computed phoneme → motion table with smoothing",
      "Offloading STT/LLM to a paired gateway when on Wi-Fi",
    ],
    lessons: ["Embodiment changes UX expectations", "Hardware constraints force better software"],
    futureScope: ["Vision-based attention", "Multi-user voice profiles"],
    github: "https://github.com/",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    slug: "languages",
    name: "Languages",
    overview: "Production experience across statically and dynamically typed languages.",
    technologies: ["TypeScript", "JavaScript", "Python", "Java", "C", "SQL"],
    internshipUsage: ["Arlig Technologies", "Karunadu Technologies"],
    relatedProjects: ["IntelliScreen", "Result Analyzer", "NAIN 2.0"],
    github: ["github.com/yaris"],
    timeline: [
      { year: "2021", milestone: "C and Java fundamentals" },
      { year: "2022", milestone: "JavaScript for the web" },
      { year: "2024", milestone: "TypeScript across full stack" },
    ],
  },
  {
    slug: "frontend",
    name: "Frontend",
    overview: "Component-driven UIs with a focus on accessibility and motion.",
    technologies: ["React", "Next.js", "TanStack Start", "Tailwind", "Framer Motion", "Three.js"],
    internshipUsage: ["Arlig Technologies", "Karunadu Technologies"],
    relatedProjects: ["IntelliScreen", "Result Analyzer"],
    github: ["github.com/yaris"],
    timeline: [
      { year: "2022", milestone: "Vanilla JS interfaces" },
      { year: "2023", milestone: "React + component systems" },
      { year: "2025", milestone: "Motion and 3D UI" },
    ],
  },
  {
    slug: "backend",
    name: "Backend",
    overview: "Reliable services, clean APIs, and pragmatic system design.",
    technologies: ["Node.js", "Express", "FastAPI", "REST", "Auth", "Caching"],
    internshipUsage: ["Arlig Technologies", "Karunadu Technologies"],
    relatedProjects: ["IntelliScreen", "Result Analyzer"],
    github: ["github.com/yaris"],
    timeline: [
      { year: "2023", milestone: "Java + JDBC services" },
      { year: "2024", milestone: "Production Node services" },
    ],
  },
  {
    slug: "databases",
    name: "Databases",
    overview: "Schema design, indexing, and query tuning across relational and vector stores.",
    technologies: ["PostgreSQL", "MySQL", "SQLite", "pgvector", "Redis"],
    internshipUsage: ["Arlig Technologies", "Karunadu Technologies"],
    relatedProjects: ["IntelliScreen", "Result Analyzer"],
    github: ["github.com/yaris"],
    timeline: [
      { year: "2023", milestone: "Relational modelling" },
      { year: "2024", milestone: "Vector search for retrieval" },
    ],
  },
  {
    slug: "ai-ml",
    name: "AI / ML",
    overview: "Applied ML — retrieval, evaluation, and LLM integration with rigour.",
    technologies: ["PyTorch", "scikit-learn", "Transformers", "LangChain", "Embeddings"],
    internshipUsage: [],
    relatedProjects: ["IntelliScreen", "NAIN 2.0"],
    github: ["github.com/yaris"],
    timeline: [
      { year: "2024", milestone: "RAG pipelines" },
      { year: "2025", milestone: "Evaluation harnesses" },
    ],
  },
  {
    slug: "iot",
    name: "IoT",
    overview: "Edge devices, sensors, and reliable serial / wireless protocols.",
    technologies: ["Raspberry Pi", "Arduino", "I2C", "MQTT", "ESP32"],
    internshipUsage: [],
    relatedProjects: ["NAIN 2.0"],
    github: ["github.com/yaris"],
    timeline: [{ year: "2024", milestone: "Pi-based embodied AI" }],
  },
  {
    slug: "tools",
    name: "Tools",
    overview: "The day-to-day toolkit that keeps shipping smooth.",
    technologies: ["Git", "Docker", "Linux", "Vercel", "Figma", "Postman"],
    internshipUsage: ["Arlig Technologies"],
    relatedProjects: ["IntelliScreen", "Result Analyzer", "NAIN 2.0"],
    github: ["github.com/yaris"],
    timeline: [{ year: "2023", milestone: "Containerised dev workflows" }],
  },
  {
    slug: "core-cs",
    name: "Core CS",
    overview: "Foundations that show up in every system worth building.",
    technologies: ["Data Structures", "Algorithms", "OS", "Networks", "DBMS"],
    internshipUsage: [],
    relatedProjects: [],
    github: [],
    timeline: [{ year: "2021–2025", milestone: "B.E. AI & ML coursework" }],
  },
];

export const achievements: Achievement[] = [
  {
    slug: "national-hackathon-winner",
    title: "National Hackathon Winner",
    summary: "Winning team at a national-level hackathon, building a full-stack solution end-to-end under a tight 24-hour deadline.",
    details:
      "Built a working prototype in under 36 hours that won across innovation, technical depth, and presentation rounds.",
    year: "2024",
  },
  {
    slug: "ieee-poster-presentation",
    title: "IEEE Poster Presentation",
    summary: "Presented original research at an IEEE-sponsored conference, discussing methodology and findings with academic reviewers.",
    details:
      "Authored and presented a technical poster reviewed by IEEE faculty and industry panellists.",
    year: "2024",
  },
  {
    slug: "government-innovation-project",
    title: "Government Innovation Project",
    summary: "Selected for a government-backed innovation initiative.",
    details:
      "Project shortlisted and supported under a government innovation programme, taking it from concept to demonstrable build.",
    year: "2024",
  },
  {
    slug: "three-professional-internships",
    title: "3 Professional Internships",
    summary: "Three industry internships across full stack, Java, and web foundations.",
    details:
      "Worked across early-stage and mid-stage companies, owning real production-facing work each time.",
  },
  {
    slug: "five-plus-projects",
    title: "5+ Technical Projects",
    summary: "Shipped end-to-end projects across AI, web, and IoT.",
    details:
      "Each project taken through problem statement, architecture, build, and a working demo — not just coursework.",
  },
];
