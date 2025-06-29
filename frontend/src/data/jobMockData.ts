import image from "../../public/image.png"

// Interface cho Job
export interface Job {
    id: string;
    logo: { image: any };
    title: string;
    company: string;
    category: string;
    type: string;
    salary: string;
    location: string;
    description?: string;
    responsibilities?: string[];
    skills?: string[];
    tags?: string[];
    overview?: {
        title: string;
        type: string;
        category: string;
        experience: string;
        degree: string;
        salary: string;
        location: string;
    };
}

// Danh sách tất cả jobs
export const jobsList: Job[] = [
    {
        id: "1",
        logo: { image },
        title: ".Net Developer",
        company: "Leffler and Sons",
        category: "Commerce",
        type: "Full time",
        salary: "$40000-$42000",
        location: "New-York, USA",
        description: "Nec sad a nisl purus. Nibh dis faucibus pron lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitatsse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc. Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta eget blandit euismod sem nunc. Tortor gravida amet amet sapien mauris massa.Tortor varius nam maecenas duis blandit elit sit sit. Ante mauris morbi diam habitant donec.",
        responsibilities: [
            "Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augu",
            "Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in",
            "Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing cursus fames",
            "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta",
            "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta",
        ],
        skills: [
            "Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare.",
            "Ornare varius faucibus nisi vitae vitae cras ornare",
            "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae",
            "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae",
            "Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae",
        ],
        tags: ["Full time", "Commerce", "New - York", "Corporate", "Location"],
        overview: {
            title: "Corporate Solutions Executive",
            type: "Full Time",
            category: "Commerce",
            experience: "5 Years",
            degree: "Master",
            salary: "$40000-$42000",
            location: "New-York, USA",
        },
    },
    {
        id: "2",
        logo: { image },
        title: "Internal Creative Coordinator",
        company: "Green Group",
        category: "Commerce",
        type: "Full time",
        salary: "$44000-$46000",
        location: "New-York, USA",
        description: "We are looking for a creative coordinator to join our internal team. This role involves coordinating creative projects, managing timelines, and ensuring quality deliverables.",
        responsibilities: [
            "Coordinate creative projects from concept to completion",
            "Manage project timelines and deliverables",
            "Collaborate with design and marketing teams",
            "Ensure brand consistency across all materials",
            "Present creative concepts to stakeholders",
        ],
        skills: [
            "Project management experience",
            "Creative software proficiency",
            "Strong communication skills",
            "Attention to detail",
            "Team collaboration abilities",
        ],
        tags: ["Full time", "Commerce", "New - York", "Creative", "Coordination"],
        overview: {
            title: "Internal Creative Coordinator",
            type: "Full Time",
            category: "Commerce",
            experience: "3 Years",
            degree: "Bachelor",
            salary: "$44000-$46000",
            location: "New-York, USA",
        },
    },
    {
        id: "3",
        logo: { image },
        title: "District Intranet Director",
        company: "VonRueden - Weber Co",
        category: "Technology",
        type: "Full time",
        salary: "$42000-$48000",
        location: "New-York, USA",
        description: "Lead the development and maintenance of our district intranet system. This role requires strong technical skills and leadership abilities.",
        responsibilities: [
            "Develop and maintain intranet systems",
            "Lead technical teams and projects",
            "Ensure system security and performance",
            "Train staff on new technologies",
            "Manage IT infrastructure",
        ],
        skills: [
            "System administration",
            "Network security",
            "Team leadership",
            "Technical documentation",
            "Problem-solving skills",
        ],
        tags: ["Full time", "Technology", "New - York", "IT", "Management"],
        overview: {
            title: "District Intranet Director",
            type: "Full Time",
            category: "Technology",
            experience: "7 Years",
            degree: "Master",
            salary: "$42000-$48000",
            location: "New-York, USA",
        },
    },
    {
        id: "4",
        logo: { image },
        title: "Corporate Tactics Facilitator",
        company: "Cormier, Turner and Flatley Inc",
        category: "Business",
        type: "Full time",
        salary: "$38000-$40000",
        location: "New-York, USA",
        description: "Facilitate corporate strategy sessions and tactical planning. This role involves working with senior management to develop and implement business strategies.",
        responsibilities: [
            "Facilitate strategic planning sessions",
            "Develop business tactics and strategies",
            "Coordinate with senior management",
            "Analyze market trends and opportunities",
            "Present strategic recommendations",
        ],
        skills: [
            "Strategic planning",
            "Business analysis",
            "Presentation skills",
            "Data analysis",
            "Leadership abilities",
        ],
        tags: ["Full time", "Business", "New - York", "Strategy", "Planning"],
        overview: {
            title: "Corporate Tactics Facilitator",
            type: "Full Time",
            category: "Business",
            experience: "4 Years",
            degree: "Bachelor",
            salary: "$38000-$40000",
            location: "New-York, USA",
        },
    },
    {
        id: "5",
        logo: { image },
        title: "Frontend Developer",
        company: "Tech Solutions Inc",
        category: "Technology",
        type: "Full time",
        salary: "$45000-$50000",
        location: "New-York, USA",
        description: "Join our frontend development team to create beautiful and responsive user interfaces. We're looking for someone passionate about modern web technologies.",
        responsibilities: [
            "Develop responsive web applications",
            "Collaborate with design and backend teams",
            "Optimize application performance",
            "Write clean and maintainable code",
            "Participate in code reviews",
        ],
        skills: [
            "React/Vue/Angular",
            "JavaScript/TypeScript",
            "HTML/CSS",
            "Git version control",
            "Responsive design",
        ],
        tags: ["Full time", "Technology", "New - York", "Frontend", "Development"],
        overview: {
            title: "Frontend Developer",
            type: "Full Time",
            category: "Technology",
            experience: "2 Years",
            degree: "Bachelor",
            salary: "$45000-$50000",
            location: "New-York, USA",
        },
    },
    {
        id: "6",
        logo: { image },
        title: "Marketing Manager",
        company: "Digital Marketing Pro",
        category: "Marketing",
        type: "Full time",
        salary: "$50000-$55000",
        location: "New-York, USA",
        description: "Lead our marketing initiatives and drive brand awareness. This role requires creative thinking and data-driven decision making.",
        responsibilities: [
            "Develop marketing strategies",
            "Manage digital marketing campaigns",
            "Analyze marketing performance",
            "Lead marketing team",
            "Collaborate with sales team",
        ],
        skills: [
            "Digital marketing",
            "Analytics tools",
            "Team management",
            "Creative thinking",
            "Data analysis",
        ],
        tags: ["Full time", "Marketing", "New - York", "Digital", "Management"],
        overview: {
            title: "Marketing Manager",
            type: "Full Time",
            category: "Marketing",
            experience: "5 Years",
            degree: "Bachelor",
            salary: "$50000-$55000",
            location: "New-York, USA",
        },
    },
    {
        id: "7",
        logo: { image },
        title: "Backend Developer",
        company: "Tech Innovations Inc",
        category: "Technology",
        type: "Full time",
        salary: "$55000-$65000",
        location: "San Francisco, USA",
        description: "Join our backend development team to build scalable and robust server-side applications. We're looking for someone with strong programming skills and database knowledge.",
        responsibilities: [
            "Develop and maintain server-side applications",
            "Design and implement database schemas",
            "Optimize application performance",
            "Collaborate with frontend developers",
            "Write unit tests and documentation",
        ],
        skills: [
            "Node.js/Python/Java",
            "Database design (SQL/NoSQL)",
            "API development",
            "Microservices architecture",
            "Cloud platforms (AWS/Azure)",
        ],
        tags: ["Full time", "Technology", "San Francisco", "Backend", "Development"],
        overview: {
            title: "Backend Developer",
            type: "Full Time",
            category: "Technology",
            experience: "3 Years",
            degree: "Bachelor",
            salary: "$55000-$65000",
            location: "San Francisco, USA",
        },
    },
    {
        id: "8",
        logo: { image },
        title: "UX/UI Designer",
        company: "Creative Design Studio",
        category: "Design",
        type: "Full time",
        salary: "$45000-$55000",
        location: "Los Angeles, USA",
        description: "Create beautiful and intuitive user experiences for our digital products. This role combines creativity with user-centered design principles.",
        responsibilities: [
            "Create wireframes and prototypes",
            "Conduct user research and testing",
            "Design user interfaces",
            "Collaborate with development team",
            "Maintain design system",
        ],
        skills: [
            "Figma/Sketch/Adobe XD",
            "User research methods",
            "Prototyping tools",
            "Design systems",
            "User testing",
        ],
        tags: ["Full time", "Design", "Los Angeles", "UX/UI", "Creative"],
        overview: {
            title: "UX/UI Designer",
            type: "Full Time",
            category: "Design",
            experience: "4 Years",
            degree: "Bachelor",
            salary: "$45000-$55000",
            location: "Los Angeles, USA",
        },
    },
    {
        id: "9",
        logo: { image },
        title: "Data Scientist",
        company: "Analytics Solutions",
        category: "Technology",
        type: "Full time",
        salary: "$60000-$75000",
        location: "Boston, USA",
        description: "Transform data into actionable insights. This role involves analyzing complex datasets and building predictive models to drive business decisions.",
        responsibilities: [
            "Analyze large datasets",
            "Build predictive models",
            "Create data visualizations",
            "Present findings to stakeholders",
            "Develop machine learning algorithms",
        ],
        skills: [
            "Python/R programming",
            "Machine learning",
            "Statistical analysis",
            "Data visualization",
            "SQL and databases",
        ],
        tags: ["Full time", "Technology", "Boston", "Data Science", "Analytics"],
        overview: {
            title: "Data Scientist",
            type: "Full Time",
            category: "Technology",
            experience: "6 Years",
            degree: "Master",
            salary: "$60000-$75000",
            location: "Boston, USA",
        },
    },
    {
        id: "10",
        logo: { image },
        title: "Product Manager",
        company: "Innovation Labs",
        category: "Business",
        type: "Full time",
        salary: "$65000-$80000",
        location: "Seattle, USA",
        description: "Lead product development from concept to launch. This role requires strong leadership skills and a deep understanding of user needs and market trends.",
        responsibilities: [
            "Define product strategy and roadmap",
            "Gather and prioritize requirements",
            "Work with cross-functional teams",
            "Analyze market trends",
            "Drive product launches",
        ],
        skills: [
            "Product strategy",
            "Agile methodologies",
            "Market analysis",
            "Stakeholder management",
            "Data-driven decision making",
        ],
        tags: ["Full time", "Business", "Seattle", "Product Management", "Leadership"],
        overview: {
            title: "Product Manager",
            type: "Full Time",
            category: "Business",
            experience: "7 Years",
            degree: "Master",
            salary: "$65000-$80000",
            location: "Seattle, USA",
        },
    },
];

// Function để lấy job theo ID
export const getJobById = (id: string): Job | undefined => {
    return jobsList.find(job => job.id === id);
};

// Function để lấy danh sách jobs (có thể thêm filter sau)
export const getJobsList = (): Job[] => {
    return jobsList;
};

// Legacy exports để tương thích với code cũ
export const jobDetail = jobsList[0];
export const relatedJobs = jobsList.slice(1, 4); 