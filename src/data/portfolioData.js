export const personalInfo = {
  fullName: "DODDI MAHINDHRA",
  preferredName: "Mahindhra",
  title: "Aspiring Software Developer",
  tagline: "Building reliable software systems with Java, modern web standards, and database architecture.",
  location: "Visakhapatnam, Andhra Pradesh, India",
  email: "mahimahindhra000@gmail.com",
  phone: "+91 6302827360",
  github: "https://github.com/Mahindhra",
  githubUsername: "Mahindhra",
  status: "Open to Full-Time SDE & Graduate Developer Roles",
  portrait: "/assets/mahindhra-portrait.jpg",
  objective: "Aspiring Software Developer seeking an opportunity to join a reputed organization where I can learn, grow, and contribute to innovative software solutions. Possess foundational knowledge of Java, C, HTML, CSS, JavaScript, and SQL, with strong problem-solving, teamwork, and communication skills."
};

export const stats = [
  { label: "B.Sc. MECs CGPA", value: "7.5", helper: "Aditya Degree & PG College" },
  { label: "SSC Distinction", value: "97%", helper: "M.N.R. High School" },
  { label: "Hackathon Sprint", value: "5 Days", helper: "Android Live Challenges" },
  { label: "Industry Internships", value: "2", helper: "AWS Cloud & AI/ML" }
];

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "code",
    description: "Core algorithmic thinking and compiled application foundations",
    skills: [
      { name: "Java", level: "Core Strength", badge: "Primary" },
      { name: "C", level: "Data Structures & Memory", badge: "Certified" },
      { name: "Python", level: "Fundamentals & Scripting", badge: "Foundational" }
    ]
  },
  {
    category: "Web Technologies",
    icon: "globe",
    description: "Standards-compliant interface construction and interactive logic",
    skills: [
      { name: "HTML5", level: "Semantic Markup", badge: "Advanced" },
      { name: "CSS3", level: "Modern Grid & Flexbox", badge: "Advanced" },
      { name: "JavaScript", level: "ES6+ DOM & Asynchronous", badge: "Proficient" },
      { name: "XML", level: "Configuration & Data Binding", badge: "Specialized" }
    ]
  },
  {
    category: "Database Technologies",
    icon: "database",
    description: "Relational modeling, querying, and schema management",
    skills: [
      { name: "SQL", level: "Complex Queries & Joins", badge: "Core" },
      { name: "MySQL", level: "Relational DB Architecture", badge: "Applied" }
    ]
  },
  {
    category: "Tools, Platforms & Deployment",
    icon: "cpu",
    description: "Version control, build platforms, and server environments",
    skills: [
      { name: "Git", level: "Branching & Workflow", badge: "Daily Use" },
      { name: "GitHub", level: "Collaborative Code Management", badge: "Daily Use" },
      { name: "Apache Tomcat", level: "Servlet & Web Server Container", badge: "Server" },
      { name: "MS Office", level: "Documentation & Analysis", badge: "Certified" }
    ]
  },
  {
    category: "Professional & Soft Skills",
    icon: "users",
    description: "Interpersonal effectiveness in engineering teams and client delivery",
    skills: [
      { name: "Problem Solving", level: "Analytical Deconstruction", badge: "Strength" },
      { name: "Team Collaboration", level: "Agile & Cross-functional", badge: "Strength" },
      { name: "Communication", level: "Pearson MePro Certified", badge: "Certified" },
      { name: "Time Management", level: "Sprint Delivery", badge: "Practiced" },
      { name: "Adaptability", level: "Rapid Tool Adoption", badge: "Practiced" }
    ]
  }
];

export const educationHistory = [
  {
    institution: "Aditya Degree & PG College",
    location: "Visakhapatnam, Andhra Pradesh, India",
    degree: "Bachelor of Science (B.Sc.) – MECs",
    field: "Mathematics, Electronics, and Computer Science",
    score: "CGPA: 7.5 / 10",
    period: "Graduated",
    description: "Rigorous curriculum focused on computation, electronic systems, and mathematical modeling. Developed strong mathematical fundamentals, algorithmic analytical reasoning, and software architecture practices.",
    highlights: [
      "Rigorous study of Computer Science fundamentals, data logic, and structured programming",
      "Electronics circuit fundamentals and digital logic architectures",
      "Applied Mathematics focusing on linear algebra, discrete structures, and calculus",
      "Participated actively in collegiate technical seminars and group project leadership"
    ]
  },
  {
    institution: "M.N.R. High School",
    location: "Andhra Pradesh, India",
    degree: "Secondary School Certificate (SSC)",
    field: "General Academics & Natural Sciences",
    score: "Percentage: 97%",
    period: "Completed with High Distinction",
    description: "Achieved top academic percentile demonstrating rigorous discipline, mathematical dexterity, and scientific aptitude.",
    highlights: [
      "Top-tier 97% scholastic achievement in regional board examinations",
      "Awarded academic distinction in Mathematics, Science, and English",
      "Active participant in science exhibitions and competitive problem-solving"
    ]
  }
];

export const internshipExperience = [
  {
    company: "Adhoc Network",
    role: "AWS Cloud Computing Intern",
    timeline: "Short-term Professional Internship",
    location: "Remote / Hybrid",
    badge: "Cloud Infrastructure",
    description: "Completed a short-term internship gaining hands-on practical exposure to Amazon Web Services (AWS) cloud computing concepts, virtualization paradigms, and infrastructure architecture.",
    keyPoints: [
      "Explored core AWS services including EC2 compute instances, S3 object storage, and IAM role management.",
      "Gained exposure to cloud scalability, high availability architectures, and security baseline best practices.",
      "Understood practical cloud deployment patterns and networked infrastructure topologies."
    ],
    techStack: ["AWS", "Amazon EC2", "Amazon S3", "IAM", "Cloud Architecture", "Networking"]
  },
  {
    company: "ULearn",
    role: "Artificial Intelligence and Machine Learning Intern",
    timeline: "Long-term Professional Internship",
    location: "Remote / Hybrid",
    badge: "Machine Learning & AI",
    description: "Completed an in-depth long-term internship focused on practical exploration of Artificial Intelligence, statistical heuristics, and Machine Learning workflows.",
    keyPoints: [
      "Investigated end-to-end machine learning lifecycle: data ingestion, feature preprocessing, and model evaluation.",
      "Worked with fundamental AI algorithms, regression models, classification techniques, and Python-based logic.",
      "Analyzed dataset distributions, metric trade-offs, and practical constraints in algorithmic automation."
    ],
    techStack: ["Python", "Machine Learning", "Data Processing", "AI Algorithms", "Statistical Analysis"]
  }
];

export const verifiedProjects = [
  {
    id: "hackathon-android",
    title: "Android Development Hackathon Live Project",
    tagline: "5-Day Intensive Sprint Live Solution",
    category: "Mobile Application",
    badge: "Hackathon Highlight",
    date: "Sep 30 – Oct 04, 2024",
    description: "Developed and presented during an intense 5-day hackathon focused on Android development. Recognized for outstanding participation, demonstrating exceptional problem-solving under tight deadlines, and implementing responsive mobile layouts.",
    visualCode: `// Android Activity Controller
class ChallengeSolutionActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_solution)
        bindLiveTelemetry()
        executeOptimizedSolver()
    }
}`,
    deliverables: [
      "Engineered responsive Android interface layouts using XML and Material Design guidelines",
      "Handled live project challenges with modular Java/Kotlin architecture and state management",
      "Optimized event listeners and view hierarchies for smooth frame rates on target devices",
      "Presented live demonstration to evaluators, earning formal recognition for outstanding participation"
    ],
    technologies: ["Android SDK", "Java", "XML Layouts", "Material UI", "Git"],
    metrics: { challengeRate: "100% Solved", duration: "5 Days Intensive", juryReview: "Outstanding" }
  },
  {
    id: "enterprise-tomcat-web",
    title: "Enterprise Web Architecture & Database System",
    tagline: "Full-Stack Servlet & Relational Integration",
    category: "Web & Backend Systems",
    badge: "Core Architecture",
    date: "Engineered Academic Project",
    description: "A robust full-stack web application developed utilizing Apache Tomcat web container and MySQL relational database. Built with strict separation of concerns, modular Java backend services, and clean semantic frontend interfaces.",
    visualCode: `<!-- Apache Tomcat Context Configuration -->
<Context docBase="EnterpriseWeb" path="/portal" reloadable="true">
    <Resource name="jdbc/MahindhraDB" auth="Container"
              type="javax.sql.DataSource"
              maxTotal="25" maxIdle="10" />
</Context>`,
    deliverables: [
      "Configured Apache Tomcat server environment with web deployment descriptors (web.xml)",
      "Designed normalized MySQL relational database schemas with relational integrity constraints",
      "Developed interactive responsive web UI with HTML5, CSS3, and modern JavaScript",
      "Structured SQL data manipulation queries for efficient data retrieval and persistence"
    ],
    technologies: ["Java", "Apache Tomcat", "MySQL", "SQL", "HTML5", "CSS3", "JavaScript", "XML"],
    metrics: { server: "Apache Tomcat", dbEngine: "MySQL InnoDB", pattern: "MVC Architecture" }
  },
  {
    id: "aws-cloud-infrastructure",
    title: "AWS Cloud Infrastructure & Services Showcase",
    tagline: "Cloud Native Deployment Topology",
    category: "Cloud Engineering",
    badge: "Adhoc Network Internship",
    date: "Cloud Practicum",
    description: "Hands-on architectural deployment developed during the AWS Cloud Computing internship at Adhoc Network. Showcases practical implementation of cloud services, access governance, and elastic resources.",
    visualCode: `{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": ["s3:GetObject", "s3:PutObject"],
    "Resource": "arn:aws:s3:::mahindhra-secure-vault/*"
  }]
}`,
    deliverables: [
      "Provisioned and configured Amazon EC2 compute instances with custom security groups",
      "Designed secure Amazon S3 storage buckets with least-privilege IAM policies",
      "Explored cloud networking fundamentals including VPCs, subnets, and routing",
      "Benchmarked cloud storage latency and disaster recovery durability"
    ],
    technologies: ["AWS Cloud", "Amazon EC2", "Amazon S3", "IAM", "Virtualization", "Cloud Security"],
    metrics: { durability: "99.999999999%", compute: "EC2 Virtualized", access: "IAM Governed" }
  },
  {
    id: "ai-data-intelligence",
    title: "Machine Learning & Data Intelligence Explorer",
    tagline: "Exploratory Statistical & Model Pipeline",
    category: "Artificial Intelligence",
    badge: "ULearn Internship",
    date: "Machine Learning Practicum",
    description: "Applied machine learning workflows developed during the ULearn long-term internship. Focuses on structured data ingestion, exploratory numerical analysis, and machine learning model validation.",
    visualCode: `# Model Training & Evaluation Routine
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
classifier.fit(X_train, y_train)
predictions = classifier.predict(X_test)`,
    deliverables: [
      "Implemented dataset cleaning, outlier handling, and normalization in Python",
      "Evaluated classification and regression algorithms using precision, recall, and F1-score",
      "Documented trade-offs between linear models and tree-based decision algorithms",
      "Constructed reusable data preparation scripts for repetitive analysis"
    ],
    technologies: ["Python", "Machine Learning", "Data Processing", "Statistical Modeling", "Algorithms"],
    metrics: { pipeline: "Automated", validation: "Cross-Validated", paradigm: "Supervised Learning" }
  }
];

export const certificationsList = [
  {
    title: "C Programming Certification",
    issuer: "Technical Certification Authority",
    badge: "Low-Level & Core Systems",
    icon: "code",
    credentialFocus: "Memory management, pointers, dynamic memory allocation, structured algorithmic design, and standard C library data manipulation.",
    skillsGained: ["Pointers & References", "Memory Management", "Algorithms", "Structs & Unions"]
  },
  {
    title: "Pearson MePro Communication Skills",
    issuer: "Pearson",
    badge: "Global Communication Standard",
    icon: "award",
    credentialFocus: "Assessed and verified across international business communication standards, professional workplace correspondence, articulation, and team discourse.",
    skillsGained: ["Professional Correspondence", "Technical Articulation", "Cross-Team Synergy", "Active Listening"]
  },
  {
    title: "Microsoft Office Certification",
    issuer: "Microsoft Authorized Certification",
    badge: "Productivity & Analysis",
    icon: "file-text",
    credentialFocus: "Advanced computational spreadsheets, structured documentation, analytical reporting, and presentation engineering.",
    skillsGained: ["Spreadsheet Modeling", "Technical Documentation", "Data Organization", "Presentations"]
  }
];

export const keyAchievement = {
  title: "Android Development Hackathon Recognition",
  date: "30 September 2024 – 04 October 2024",
  organization: "Android Development Hackathon Committee",
  badge: "Official Hackathon Recognition",
  statement: "Recognized for outstanding participation in an intensive 5-day hackathon focused on Android development. Demonstrated exceptional skill and dedication in all live projects and excelled in solving real-time engineering challenges under competitive timeframes.",
  metrics: [
    { label: "Duration", value: "5 Days" },
    { label: "Challenge Focus", value: "Live Android Projects" },
    { label: "Outcome", value: "Outstanding Recognition" }
  ]
};

export const leadershipAndActivities = [
  {
    title: "Team Leadership",
    icon: "users",
    description: "Coordinated team projects, distributed tasks systematically according to individual strengths, motivated team members, and maintained rigorous milestones for timely project completion."
  },
  {
    title: "Event Organization",
    icon: "calendar",
    description: "Participated in organizing community-focused campus events to cultivate student engagement, manage logistics, and foster vibrant academic environments."
  },
  {
    title: "Financial Literacy",
    icon: "trending-up",
    description: "Actively participated in financial literacy and trading activities, developing disciplined analytical rigor, market psychology understanding, and quantitative risk evaluation."
  }
];

export const personalInterests = [
  { name: "Playing Piano", tag: "Harmonic Discipline & Focus", icon: "music" },
  { name: "Cooking", tag: "Creative Precision & Experimentation", icon: "utensils" },
  { name: "Painting", tag: "Visual Balance & Composition", icon: "palette" },
  { name: "Drawing", tag: "Detail Orientation & Sketching", icon: "edit-3" }
];
