export type Project = {
  slug: string;
  title: string;
  tag: string;
  desc: string;
  overview: string;
  details: string[];
  highlights: string[];
  // Add a repository URL when available; leave empty to hide the GitHub link.
  githubUrl?: string;
  // Put PDFs in public/reports and use /reports/file.pdf, or an external URL.
  // Leave empty when no report is available.
  reportUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "ai-topic-daily-brief-system",
    githubUrl: "",
    reportUrl: "",
    title: "AI Topic Daily Brief System",
    tag: "Next.js · FastAPI · MongoDB · LLM APIs",
    desc: "Developing a full-stack AI application for topic management and structured daily briefs, using Next.js, FastAPI, and MongoDB.",
    overview: "An ongoing full-stack application that brings topic management, recent information retrieval, and AI-generated daily briefs into one application. Its modular architecture connects a Next.js/React frontend with FastAPI, MongoDB, and external AI and data services.",
    details: [
      "Designed a modular architecture with a Next.js/React frontend, FastAPI backend, MongoDB storage, and external AI and data services.",
      "Building RESTful APIs and data workflows for managing topics, storing application data, and retrieving recent content.",
      "Integrating LLM APIs and scheduled workflows to generate structured daily briefs, with task tracking and error handling.",
    ],
    highlights: ["Next.js", "React", "FastAPI", "MongoDB", "REST APIs", "LLM APIs", "Scheduled workflows"],
  },
  {
    slug: "concurrent-database-engine",
    githubUrl: "",
    reportUrl: "",
    title: "Database Systems Implementation",
    tag: "Storage · Indexing · Transactions · Recovery",
    desc: "Built disk-oriented database components spanning page-based storage, B+Tree and hash indexes, query processing, transactions, and crash recovery.",
    overview: "A database systems project focused on the internals of a disk-oriented database system. The implementation covered persistent storage, indexing, query processing, concurrency control, and recovery across the database lifecycle.",
    details: [
      "Implemented page-based storage and B+Tree and extendible hash indexes, supporting lookup, insertion, splitting, and scan operations.",
      "Developed SQL query processing components, grace hash join logic, and Bloom filter support for data retrieval.",
      "Added transaction and concurrency features using mutexes, RWLocks, fine-grained locking, and deadlock avoidance concepts.",
      "Implemented write-ahead logging, rollback, checkpointing, and crash recovery to improve database reliability.",
    ],
    highlights: ["Page-based storage", "B+Tree", "Extendible hashing", "SQL", "Grace hash join", "Bloom filters", "Concurrency control", "Write-ahead logging"],
  },
  {
    slug: "marketing-website-development",
    githubUrl: "",
    reportUrl: "",
    title: "Marketing Website Development",
    tag: "WordPress · CSS · JavaScript",
    desc: "Built a responsive promotional website, translating supplied UI designs into WordPress pages for mobile, tablet, and desktop.",
    overview: "A web development project that translated provided UI designs into a production-ready WordPress promotional website. The implementation focused on responsive layouts, cross-browser compatibility, and presentation aligned with the brand.",
    details: [
      "Translated supplied UI designs into a responsive WordPress implementation for promotional content.",
      "Created mobile, tablet, and desktop layouts to provide a consistent experience across screen sizes and browsers.",
      "Implemented custom CSS and JavaScript for interactive effects, layout refinement, and brand-aligned presentation.",
    ],
    highlights: ["WordPress", "CSS", "JavaScript", "Responsive design", "Cross-browser compatibility"],
  },
  {
    slug: "depression-symptom-detection-reddit",
    githubUrl: "",
    reportUrl: "",
    title: "Depression Symptom Detection on Reddit",
    tag: "NLP · ML",
    desc: "Replicated a symptom detection pipeline using embeddings and Random Forest evaluation.",
    overview:
      "An NLP and machine learning project that explored how text representations can support depression symptom detection in Reddit content.",
    details: [
      "Replicated a symptom detection pipeline using text embeddings as features.",
      "Evaluated a Random Forest classifier to study the effectiveness of the extracted representations.",
      "Worked with the practical challenges of transforming unstructured user-generated text into machine learning inputs.",
    ],
    highlights: ["Natural language processing", "Embeddings", "Random Forest", "Model evaluation"],
  },
  {
    slug: "menu-collection-web-app",
    githubUrl: "",
    reportUrl: "",
    title: "Menu Collection Web App",
    tag: "React · Express.js · MongoDB",
    desc: "Built a full-stack restaurant menu application with React Router navigation, Express.js JSON APIs, and MongoDB storage.",
    overview: "A full-stack application that lets users browse, explore, and curate restaurant menu information. A responsive React interface connects to Express.js backend services and MongoDB records for restaurants and menus.",
    details: [
      "Built dynamic navigation with React and React Router for multiple restaurant pages and menu views.",
      "Implemented Express.js backend services with REST-style JSON API endpoints connecting frontend interactions to stored menu data.",
      "Designed MongoDB storage for restaurant and menu records to support organized data management and retrieval.",
      "Debugged frontend-backend integration issues and refined UI consistency with modern CSS practices.",
    ],
    highlights: ["React", "React Router", "Express.js", "MongoDB", "REST APIs", "CSS"],
  },
  {
    slug: "ai-driven-task-management-system",
    githubUrl: "",
    reportUrl: "/reports/AI-project.pdf",
    title: "AI-Driven Task Management System",
    tag: "Python · LangChain · Pinecone · GPT-3.5",
    desc: "Contributed to a Python AI system for client query answering, task reports, document summarization, and context-aware information retrieval.",
    overview: "An AI task management project that combined autonomous agents and document retrieval to automate task management workflows. My contributions included early-stage research, integration of AI and data services, document summarization, and reliability testing.",
    details: [
      "Researched autonomous agents, retrieval workflows, and task automation requirements to help define system capabilities.",
      "Integrated LangChain, Pinecone, MongoDB, Google API, BabyAGI, and GPT-3.5 into a unified workflow for task execution and context-aware responses.",
      "Implemented document summarization using embeddings stored in Pinecone to support retrieval quality and more accurate responses.",
      "Performed unit and component testing, debugged integration issues, and refined system behavior throughout the project lifecycle.",
    ],
    highlights: ["Python", "LangChain", "Pinecone", "MongoDB", "Google API", "BabyAGI", "GPT-3.5", "Unit testing"],
  },
  {
    slug: "contour-sketch",
    githubUrl: "",
    reportUrl: "",
    title: "Contour Sketch",
    tag: "Computer Vision · cGAN",
    desc: "Researched contour line generation with conditional GANs and designed post-processing to improve visual consistency.",
    overview:
      "A computer vision research project exploring how conditional generative adversarial networks can generate contour-line sketches with more consistent visual structure.",
    details: [
      "Studied contour line generation as an image-to-image translation problem.",
      "Used conditional GANs to model the relationship between source imagery and contour sketches.",
      "Designed post-processing steps to improve the visual consistency of generated results.",
    ],
    highlights: ["Computer vision", "cGAN", "Image generation", "Post-processing"],
  },
  {
    slug: "dynamic-programming-timber-problem",
    githubUrl: "",
    reportUrl: "",
    title: "Dynamic Programming Timber Problem",
    tag: "Python · Algorithms",
    desc: "Designed a dynamic programming solution with traceback to optimize timber selection under alternating choices.",
    overview:
      "An algorithms project that models timber selection as an optimization problem with alternating choices and reconstructs the selected solution through traceback.",
    details: [
      "Formulated the problem around overlapping subproblems and optimal substructure.",
      "Implemented a dynamic programming solution in Python to compute the best achievable selection.",
      "Added traceback so the algorithm could return the choices that produced the optimum, not only its value.",
    ],
    highlights: ["Python", "Dynamic programming", "Optimization", "Traceback"],
  },
  {
    slug: "weather-station-for-home-use",
    githubUrl: "",
    reportUrl: "",
    title: "Weather Station for Home Use",
    tag: "Python · Raspberry Pi · Sensors",
    desc: "Built a Raspberry Pi weather monitoring system that uses moisture, light, and temperature sensors to assess plant growing conditions.",
    overview: "An environmental monitoring system that connected environmental sensors to a Python application on Raspberry Pi. The system monitors plant growing conditions and uses sensor inputs to identify watering needs, lighting conditions, and temperature suitability.",
    details: [
      "Integrated moisture, photoresistor, and temperature sensors to collect real-time environmental inputs.",
      "Implemented Python logic to assess watering needs, available light, and temperature suitability for plants.",
      "Tested sensor readings and system behavior to improve the reliability of hardware-software interactions.",
    ],
    highlights: ["Python", "Raspberry Pi", "Moisture sensor", "Photoresistor", "Temperature sensor", "Hardware integration"],
  },
  {
    slug: "clue-game",
    githubUrl: "",
    reportUrl: "",
    title: "Clue Game",
    tag: "Java · AWT/Swing · JUnit",
    desc: "Developed a Java Clue game with an AWT/Swing interface, greedy-strategy AI opponents, and JUnit tests using test-driven development.",
    overview: "A software engineering project that implemented the Clue board game in Java. The application combines an interactive desktop interface and AI opponents with an object-oriented architecture guided by SOLID principles and UML.",
    details: [
      "Applied SOLID principles and UML to define the object-oriented design and application architecture.",
      "Built an interface with Java AWT/Swing for game state visualization and user interaction.",
      "Implemented AI opponents using a greedy-based strategy for gameplay against human players.",
      "Used JUnit, Agile practices, and test-driven development to validate behavior and support iterative development.",
    ],
    highlights: ["Java", "AWT/Swing", "SOLID", "UML", "Greedy algorithms", "JUnit", "Test-driven development"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
