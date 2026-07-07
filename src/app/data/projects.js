const projects = [
    // ===========================
    // Featured Projects
    // ===========================

    {
        id: 1,
        featured: true,
        title: "OneGov-AI",
        category: "AI Agents",
        status: "Completed",
        year: "2026",

        description:
            "Autonomous government workflow platform powered by AI Agents, LLMs, and Retrieval-Augmented Generation (RAG) for intelligent public service automation.",

        tech: [
            "Python",
            "FastAPI",
            "LLMs",
            "RAG",
            "LangGraph",
            "MongoDB",
        ],

        image: "/onegov-ai.png",

        github: "https://github.com/SOWMIYA-GOWDA/OneGov-AI.git",

        demo: "",

        featuredColor: "blue",
        features: [
    "Multi-agent government workflow automation",
    "LLM-powered citizen assistance",
    "Retrieval-Augmented Generation (RAG)",
    "Role-based access and workflow management",
    "FastAPI backend with scalable architecture",
    "Context-aware AI decision support",
  ],
  achievements: [
    "Built autonomous AI workflows.",
    "Integrated LLM + RAG pipeline.",
    "Designed scalable backend.",
],

    },

    {
        id: 2,
        featured: true,
        title: "Crowd Analysis and risk detection using Video Processing",
        category: "Computer Vision",
        status: "IEEE Research",
        year: "2026",

        description:
            "AI-powered crowd density monitoring system using video analytics for real-time risk detection with automatic email alerts.",

        tech: [
            "Python",
            "OpenCV",
            "YOLO",
            "Computer Vision",
            "SMTP",
        ],

        image: "/crowd-analysis.png",

        github:
            "https://github.com/SOWMIYA-GOWDA/crowd.git",

        demo: "",

        featuredColor: "cyan",
        features: [
  "Real-time crowd density monitoring",
  "Automatic overcrowding detection",
  "Email alert notifications",
  "Computer Vision-based analytics",
  "Risk analysis dashboard",
  "Video stream processing",
],
achievements: [
    "Real-time crowd monitoring.",
    "Automated risk alerts.",
    "IEEE CLICK 2026 publication.",
],
    },

    {
        id: 3,
        featured: true,
        title: "Tuberculosis Detection",
        category: "AI for Healthcare",
        status: "Published", 
        year: "2025",

        description:
            "Deep learning and ensemble machine learning models for early tuberculosis prediction and lung infection analysis.",

        tech: [
            "Python",
            "TensorFlow",
            "Scikit-learn",
            "U-Net",
            "Medical AI",
        ],

        image: "/tb-detection.png",

        github:
            "https://github.com/SOWMIYA-GOWDA/ML-and-DL-TB-Detection.git",

        demo: "",

        featuredColor: "purple",
        features: [
  "Tuberculosis prediction using ensemble learning",
  "Deep learning lung image analysis",
  "Feature selection optimization",
  "Medical image preprocessing",
  "High prediction accuracy",
  "Clinical decision support",
],
achievements: [
    "Early TB prediction.",
    "Applied ensemble learning.",
    "Enhanced medical diagnosis.",
],
    },

    // ===========================
    // Other Projects
    // ===========================

    {
        id: 4,
        title: "Chatbot with RAG Session Memory",
        category: "AI",
        status: "Completed",
        year: "2025",

        description:
            "Intelligent chatbot using LangGraph with RAG routing and persistent session memory.",

        tech: [
            "Python",
            "LangGraph",
            "RAG",
            "Gemini",
        ],

        github:
            "https://github.com/SOWMIYA-GOWDA/Chatbot-with-RAG-Session-Memory.git",
            features: [
  "Session memory",
  "LangGraph workflow",
  "RAG-based retrieval",
  "Gemini integration",
  "Context-aware conversations",
],
achievements: [
    "Implemented session memory.",
    "Built RAG-powered chatbot.",
    "Improved contextual responses.",
],
    },

    {
        id: 5,
        title: "LangGraph AI Q&A",
        category: "AI",
        status: "Completed",
        year: "2025",

        description:
            "FastAPI + LangGraph application with Gemini LLM, validation pipeline and retry mechanism.",

        tech: [
            "FastAPI",
            "LangGraph",
            "Gemini",
            "Python",
        ],

        github:
            "https://github.com/SOWMIYA-GOWDA/Lang-Graph.git",
            features: [
  "FastAPI backend",
  "LangGraph orchestration",
  "Automatic retry mechanism",
  "Response validation",
  "Gemini-powered answers",
],
achievements: [
    "Built AI Q&A platform.",
    "Integrated Gemini LLM.",
    "Implemented validation workflow.",
],
    },

    {
        id: 6,
        title: "Task Management with AI",
        category: "AI",
        status: "Completed",
        year: "2025",

        description:
            "Task management application supporting natural language task creation using Google Gemini.",

        tech: [
            "Python",
            "Gemini",
            "FastAPI",
        ],

        github:
            "https://github.com/SOWMIYA-GOWDA/Task-Management-System-with-AI-support..git",
            features: [
  "Natural language task creation",
  "Gemini AI integration",
  "Task prioritization",
  "CRUD operations",
  "AI-assisted productivity",
],
achievements: [
    "AI-powered task management.",
    "Natural language commands.",
    "Gemini integration.",
],
    },

    {
        id: 7,
        title: "Gallstone Detection",
        category: "ML",
        status: "Published",
        year: "2025",

        description:
            "Genetic Algorithm optimized stacking ensemble model for intelligent gallstone prediction.",

        tech: [
            "Machine Learning",
            "GA",
            "Stacking",
            "Python",
        ],

        github:
            "https://github.com/SOWMIYA-GOWDA/ML-Gallstone-Detection.git",
            features: [
    "Genetic Algorithm-based hyperparameter optimization",
    "Stacking ensemble learning for improved prediction",
    "Clinical data preprocessing and feature engineering",
    "High-accuracy gallstone disease prediction",
    "Performance evaluation using multiple ML metrics",
    "Decision support for early diagnosis",
],
achievements: [
    "Optimized stacking model.",
    "Applied Genetic Algorithm.",
    "Published healthcare research.",
],
    },

    {
        id: 8,
        title: "PCOS Insight DL",
        category: "DL",
        status: "Completed",
        year: "2025",

        description:
            "Explainable deep learning model using SHAP interpretation for early PCOS prediction.",

        tech: [
            "Deep Learning",
            "SHAP",
            "Python",
        ],

        github:
            "https://github.com/SOWMIYA-GOWDA/PCOS-Insight-DL.git",
            features: [
    "Deep learning-based PCOS prediction",
    "Explainable AI using SHAP interpretation",
    "Feature importance visualization",
    "Medical data preprocessing pipeline",
    "Early disease risk assessment",
    "Improved model transparency for healthcare",
],
achievements: [
    "Explainable AI with SHAP.",
    "Early PCOS prediction.",
    "Improved model transparency.",
],
    },

    {
        id: 9,
        title: "Commercial Building GenAI",
        category: "Generative AI",
        status: "Completed",
        year: "2025",

        description:
            "Generative AI project for commercial building visualization using image generation APIs.",

        tech: [
            "HTML",
            "JavaScript",
            "GenAI",
        ],

        github:
            "https://github.com/SOWMIYA-GOWDA/Commercial-Building-GEN-AI.git",
            features: [
    "Generative AI-powered image creation",
    "Commercial building design visualization",
    "User-friendly interface",
    "Rapid prototyping for architectural concepts",
    "Image generation API integration",
],
achievements: [
    "AI-generated building designs.",
    "Interactive web platform.",
    "Applied Generative AI.",
],
    },

    {
        id: 10,
        title: "Smart Ration Card Assistant",
        category: "Chatbot",
        status: "Completed",
        year: "2025",
        description:
            "Government assistance chatbot providing stock, card details and public service updates.",

        tech: [
            "HTML",
            "JavaScript",
            "Chatbot",
        ],

        github:
            "https://github.com/SOWMIYA-GOWDA/Smart-Ration-Card-Assistant.git",
            features: [
    "Public service information",
    "Stock availability updates",
    "Government assistance details",
    "User-friendly chatbot interface",
    "Quick access to essential services",
],
achievements: [
    "Government service chatbot.",
    "Simplified citizen support.",
    "Centralized public services.",
],
    },

    {
        id: 11,
        title: "Dropout Support App",
        category: "Android",
        status: "Completed",
        year: "2025",

        description:
            "Android application providing guidance and support for students at risk of dropping out.",

        tech: [
            "Java",
            "Android Studio",
        ],

        github:
            "https://github.com/SOWMIYA-GOWDA/Dropout-Support-App.git",
            features: [
    "Dropout risk prediction",
    "Student support guidance",
    "Android application",
    "User-friendly interface",
    "Early intervention support",
    "Student success resources",
],
achievements: [
    "Student support platform.",
    "Android application.",
    "Improved accessibility.",
],
    },

    {
        id: 12,
        title: "KaiRushi Food Delivery",
        category: "Web Development",
        status: "Completed",
        year: "2025",
        description:
            "Food delivery web application with MongoDB-powered user and order management.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
        ],

        github:
            "https://github.com/SOWMIYA-GOWDA/KaiRushi--FOOD-DELIVERY.git",
            features: [
    "Food delivery web application",
    "MongoDB-powered backend",
    "User and order management",
    "Full-stack development",
    "E-commerce functionality",
    "Database management",
],
achievements: [
    "Online ordering system.",
    "MongoDB integration.",
    "Responsive web application.",
],
    },

    {
        id: 13,
        title: "Max Flow Explorer",
        category: "Graph Theory",
        status: "Completed",
        year: "2025",
        description:
            "Interactive visualization of Dinic's Algorithm for maximum flow computation.",

        tech: [
            "HTML",
            "JavaScript",
            "Algorithms",
        ],

        github:
            "https://github.com/SOWMIYA-GOWDA/Max-Flow-Explorer-Visualizing-Dinic-Algorithm.git",
            features: [
    "Interactive Dinic's Algorithm visualization",
    "Maximum flow computation",
    "Graph theory exploration",
    "Algorithm visualization",
    "Educational tool",
    "Flow network analysis",
],
achievements: [
    "Interactive algorithm visualization.",
    "Simplified graph learning.",
    "Educational web tool.",
],
    },

    {
        id: 14,
        title: "Lumora Website",
        category: "Web Development",
        status: "Completed",
        year: "2025",
        description:
            "Official website developed for the Lumora brand.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
        ],

        github:
            "https://github.com/SOWMIYA-GOWDA/lumora-website.git",
            features: [
    "Official brand website",
    "Professional UI/UX design",
    "Brand representation",
    "Web development",
    "Client-specific design",
],
achievements: [
    "Official brand website.",
    "Responsive UI.",
    "Modern web experience.",
],
    },

    {
        id: 15,
        title: "Personal Portfolio",
        category: "Web Development",
        status: "Completed",
        year: "2025",
        description:
            "Responsive personal portfolio website with animated UI and project showcase.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
        ],

        github:
            "https://github.com/SOWMIYA-GOWDA/Personal-Portfolio-Profile.git",
        features: [
    "Personal portfolio website",
    "Responsive UI design",
    "Project showcase",
    "Animated interface elements",
    "Professional online presence",
],
achievements: [
    "Responsive portfolio.",
    "Interactive UI.",
    "Professional showcase.",
],
    },

    {
        id: 16,
        title: "To-Do List",
        category: "Web Development",
        status: "Completed",
        year: "2025",
        description:
            "Simple task management web application with responsive UI.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
        ],

        github:
            "https://github.com/SOWMIYA-GOWDA/To-Do-List-Web-Page-.git",
            features: [
    "Task management application",
    "Responsive web interface",
    "Basic CRUD operations",
    "User-friendly UI",
    "Task tracking features",
],
achievements: [
    "Task management system.",
    "Responsive interface.",
    "JavaScript fundamentals.",
],
    },
];
const categories = [
    "All",
    ...new Set(projects.map(project => project.category)),
];
export { projects, categories };