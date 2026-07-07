const experiences = [
    {
        company: "ENARXI Innovation Pvt. Ltd.",
        companyShort: "ENARXI",
        role: "AI/ML Engineer",
        duration: "Feb 2026 – Present",
        location: "Chennai, India",
        current: true,

        summary:
            "Developing enterprise-grade AI solutions for industrial automation, computer vision, intelligent document processing, and Generative AI applications.",

        stats: {
            value: "5+",
            title: "Client Projects",
        },



        // Technologies used in this role



        projects: [
            {
                title: "Conveyor Belt Monitoring",
                description:
                    "YOLOv8-based defect detection for predictive maintenance.",
                icon: "🛠️",
                tech: ["YOLOv8", "OpenCV", "Python"],
            },
            {
                title: "Material Detection",
                description:
                    "Industrial material classification using Computer Vision.",
                icon: "📦",
                tech: ["OpenCV", "Image Processing", "Python"],
            },
            {
                title: "Cement Bag Counting",
                description:
                    "Real-time bag counting using object detection and tracking.",
                icon: "📊",
                tech: ["YOLOv8", "Tracking", "OpenCV"],
            },
            {
                title: "BOM Automation",
                description:
                    "AI-powered document processing using OCR.",
                icon: "📄",
                tech: ["Playwright", "FastAPI", "Python"],
            },
            {
                title: "Enterprise AI Agent",
                description:
                    "LLM-powered assistant with RAG and contextual retrieval.",
                icon: "🤖",
                tech: ["LLM", "RAG", "FastAPI"],
            },
        ],

        learning:
            "Built scalable production-ready AI systems by combining machine learning, backend architecture, APIs, and enterprise deployment practices.",
    },

    {
        company: "XTROP Research Solutions",
        companyShort: "XTROP",
        role: "AI/ML Research Intern",
        duration: "Jun 2025 – Aug 2025",
        location: "Chennai, India",
        current: false,

        summary:
            "Conducted AI research in healthcare by developing predictive models and deep learning solutions for medical diagnosis.",

        stats: {
            value: "2",
            title: "Research Projects",
        },



        // Research technologies


        projects: [
            {
                title: "GallIntel",
                description:
                    "AI-powered gallstone prediction using GA-optimized stacking ensemble learning.",
                icon: "🧬",
                tech: [
                    "Machine Learning",
                    "Genetic Algorithm",
                    "Stacking",
                ],
            },
            {
                title: "TB-XNet",
                description:
                    "U-Net based lung infection segmentation from chest X-ray images.",
                icon: "🫁",
                tech: [
                    "U-Net",
                    "Deep Learning",
                    "XAI",
                    "Medical AI",
                ],
            },
        ],

        learning:
            "Strengthened expertise in AI research, model optimization, medical imaging, and scientific publication through healthcare AI projects.",
    },
];

export default experiences;