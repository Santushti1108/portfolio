// ─────────────────────────────────────────────────────────────
// All portfolio copy lives here. Edit this file to update the
// site's content without touching any component code.
// Placeholder values are marked "Add ..." — replace before you ship.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Santushti Singh",
  roles: ["Software Engineer","Frontend Developer"],
  status: " B.Tech 2026 graduate, Computer Science (Artificial Intelligence)",
  tagline:
    "Building intelligent software that transforms complex real-world problems into elegant digital solutions.",
  githubUsername: "Santushti1108",
  email: "singhsantushti111@gmail.com", // Add your real email
  linkedin: "https://www.linkedin.com/in/santushti-singh-153916342/", // Add your real LinkedIn URL
  github: "https://github.com/Santushti1108",
  // phone: "+91 00000 00000", // Add your real phone number
  location: "India", // Add your city
  resumeUrl: "/resume.pdf", // Drop your resume PDF into /public as resume.pdf
  photoUrl: "/photo.jpg", // Drop your headshot into /public and set e.g. "/photo.jpg"
};

export const about = {
  paragraphs: [
    "I'm a 2026 graduate Computer Science student specializing in Artificial Intelligence, spending most of my time at the intersection of clean engineering and applied machine learning.",
    "My work leans toward domains where software has to be correct as much as it has to be usable — renewable energy planning, financial modeling, and data-driven decision tools where a bug isn't just a bad UX moment, it's a wrong number someone relies on.",
    "Outside of shipping features, I care about the craft: readable code, sensible architecture, and interfaces that get out of the way of the person using them.",
  ],
  focusAreas: [
    { label: "Education", value: "B.Tech CS (AI)"},
    { label: "Focus", value: "Full-Stack Engineering" },
    { label: "Interests", value: "Renewable Energy,Data Analysis,Frontend Engineering" },
    { label: "Approach", value: "Problem-first, production-minded" },
  ],
};

export const experience = [
  {
    org: "IRADe",
    role: "Frontend Developer Intern",
    period: "May 2026", // e.g. "Jun 2025 — Aug 2025"
    summary:
      "Worked on renewable energy planning tooling, including a Battery Energy Storage System (BESS) calculator with integrated financial analysis for solar + storage decision-making.",
    highlights: [
      "Built a Renewable Energy Planning Tool for evaluating solar and hybrid energy scenarios",
      "Developed a Battery Energy Storage System (BESS) calculator with financial modeling",
      "Implemented the frontend in React and TypeScript",
    ],
    stack: ["React", "TypeScript", "Data Analysis"],
  },
  {
    org: "VaultofCodes",
    role: "Frontend Developer", // e.g. "Software Development Intern"
    // period: "Add dates",
    summary: "Built an interactive resume builder",
    highlights: ["colaborated with team"],
    stack: [""],
  },
  {
    org: "College Journey",
    role: "B.Tech, Computer Science (AI)",
    period: "sept 2022 - july 2026",
    summary:
      "Coursework, projects, and communities that shaped a problem-first approach to engineering — from first lines of code to production-grade builds.",
    highlights: ["Developed initial petition decision application using AIML ", "selected participant of Smart India Hackathon(SIH)"],
    stack: [],
  },
];

export const skills = [
  {
    category: "Programming",
    items: ["Python", "Java", "C++", "JavaScript", "TypeScript"],
  },
  {
    category: "Web",
    items: ["React", "Node.js", "Express.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Development Tools",
    items: ["Git", "GitHub", "VS Code", "Vite"],
  },
  {
    category: "Artificial Intelligence",
    items: ["Machine Learning", "OpenCV", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    category: "Practice & Design",
    items: ["Data Analysis", "Problem Solving", "Responsive Design", "UI/UX", "Figma"],
  },
];

export const highlightedProjects = [
  "Renewable Energy Planning Calculator",
  "Battery Energy Storage System Calculator",
  "Solar Calculator",
  "Resume Builder",
  "Customer Behaviour Analysis",
];

export const achievements = [
  {
    title: "Frontend Developer",
    org: "IRAde , Delhi",
    date: "May 4",
    description: "Engineered a comprehensive Renewable Energy Planning Calculator integrating Solar PV, BESS sizing, and financial feasibility analysis.",
  },
  {
    title: "A Course in JAVA",
    org: "NPTEL",
    date: "2025",
    description: "a 12 week course to master in java concepts",
  },
  {
    title: "Winner of Smart India hackathon",
    org: "Smart India hackathon",
    date: "2024",
    description: "selected participant in 2024 hackathon",
  },
  {
    title: "graduated with 8 pointer",
    org: "Techno India University",
    date: "july 2026",
    description: "completed B.tech degree with 8 pointer",
  },
];

export const galleryPlaceholders = [
  // { category: "Professional", label: "" },
  { category: "Internship",  image:"/gallery/internship.jpg"},
  { category: "Certificates", image:"/gallery/certificate.jpg" },
  { category: "College", image:"/gallery/college.jpg" },
  { category: "Hackathons", image:"/gallery/hackathon.jpg" },
  { category: "Events", image:"/gallery/event.jpg" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];
