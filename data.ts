export type Link = {
    name: string;
    url: string;
};

export type Experience = {
    company: string;
    link: string;
    image: {
        url: string;
        padding: number;
        colour?: string;
    };
    role: string;
    start: string;
    end: string;
    location: string;
    desc: string[];
};

export type Project = {
    year: string;
    name: string;
    link: string;
    desc: string;
    feat: boolean;
};

export type Award = {
    year: string;
    name: string;
    link: string;
    desc: string;
    award: string;
};

export type Stack = {
    name: string;
    skills: string[];
};

export const links: Link[] = [
    {
        name: "tanshaochong48@gmail.com",
        url: "mailto: tanshaochong48@gmail.com",
    },
    {
        name: "GitHub",
        url: "https://github.com/ackselz",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tan-shao-chong/",
    },
];

export const hero: string =
    "Full-Stack Software Engineer proficient across front-end and back-end. Interested in building products, design systems and user experience.";

export const about: string[] = [
    "I am in my second year of studying Computer Science at Nanyang Technological University (NTU).",
    "I am a full-stack software engineer, with professional experience mostly in web development.",
    "I have strong domain knowledge in product design, coupled with a keen understanding of business needs, allowing me to develop software that not only excels technically but also aligns seamlessly with strategic objectives.",
];

export const experiences: Experience[] = [
    {
        company: "NodeFlair",
        link: "https://www.nodeflair.com/",
        image: {
            url: "/assets/nodeflair_logo.jpeg",
            padding: 0,
            colour: "bg-[#00cc5c]"
        },
        role: "Full Stack Engineer Intern",
        start: "Dec 2023",
        end: "Present",
        location: "Singapore",
        desc: [
            "Ongoing internship with NodeFlair's engineering team, mostly using React, Ruby on Rails and OpenAI.",
            "Building out new AI-powered features for their platform.",
        ],
    },
    {
        company: "Asurion",
        link: "https://www.asurion.com.sg/",
        image: {
            url: "/assets/asurion_logo.jpeg",
            padding: 0,
        },
        role: "Full Stack Engineer Intern",
        start: "Jan 2023",
        end: "Jul 2023",
        location: "Singapore",
        desc: [
            "6-month internship with Asurion's Asia-Pacific Innovation team, and I worked mostly using TypeScript, React, Node.js, AWS and Terraform.",
            "My responsibilities include building SaaS products which integrate machine learning (real-time object detection, face detection, generative AI) for a multitude of applications.",
            "Significant contributions also include spearheading the adoption of visual documentation, refactoring of legacy code and upgrading our web architecture.",
        ],
    },
    {
        company: "DSTA",
        link: "https://www.dsta.gov.sg/home",
        image: {
            url: "/assets/dsta_logo.jpeg",
            padding: 1,
            colour: "bg-white",
        },
        role: "Software Engineer Intern",
        start: "Feb 2022",
        end: "Jul 2022",
        location: "Singapore",
        desc: [
            "5-month internship with DSTA's Enterprise IT division, and I worked mostly using JavaScript, React and Qlik Sense.",
            "My responsibilities include building custom data visualisation extensions for Qlik as well as responsive dashboards for data analytics.",
        ],
    },
];

export const projects: Project[] = [
    {
        year: "2023",
        name: "Voyage",
        link: "https://psa-voyage.vercel.app",
        desc: "Integrated career development platform for goal tracking, generating insights from feedback and course recommendations, powered by OpenAI GPT-3.5.",
        feat: true,
    },
    {
        year: "2023",
        name: "SG Tech Internships",
        link: "https://techinternships.kxrt.me",
        desc: "Lead frontend developer for internship seeking platform with over 100,000 page views, 200 GitHub Stars and 100 MAU (growing).",
        feat: false,
    },
    // {
    //     year: "2023",
    //     name: "HindSight",
    //     link: "",
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, excepturi!",
    //     feat: false,
    // },
    {
        year: "2023",
        name: "Concierge",
        link: "https://sia-concierge.vercel.app",
        desc: "End-to-end experience for seamless travel discovery, planning and booking, powered by OpenAI GPT-3.5.",
        feat: true,
    },
    {
        year: "2023",
        name: "Lifeline",
        link: "https://github.com/ackselz/Lifeline",
        desc: "Facilitates community first-responders and provides quality first aid education. Built using Flutter and Google Maps API.",
        feat: true,
    },
    {
        year: "2022",
        name: "Keep Fit",
        link: "",
        desc: "Collaborated with a local school to build an application encouraging healthy living habits among students.",
        feat: false,
    },
    {
        year: "2022",
        name: "toDoList",
        link: "https://play.google.com/store/apps/details?id=com.toDoList",
        desc: "Developed a productivity-focused mobile application to track personal tasks.",
        feat: false,
    },
    {
        year: "2022",
        name: "one-word-captures",
        link: "https://one-word-captures.netlify.app/posts",
        desc: "Built a CRUD image-sharing social media application to explore web development.",
        feat: false,
    },
];

export const awards: Award[] = [
    {
        year: "2023",
        name: "PSA CodeSprint 2023",
        link: "",
        desc: "Developed a career development platform powered by generative AI to nuture a future-ready workforce. Achieved 2nd place out of 83 teams from tertiary institutions in Singapore.",
        award: "1st Runner-Up",
    },
    {
        year: "2023",
        name: "NUS Medical Grand Challenge",
        link: "",
        desc: "Designed HindSight, an anonymous, accurate and convenient application to screen for anal-related diseases to combat deep-rooted social stigma and reluctance related to such conditions. Collaborated with local startup HeHealth to integrate their image-based disease detection model to analyse images and identify symptoms.",
        award: "Grand-Finalist",
    },
    {
        year: "2023",
        name: "Singapore Airlines AppChallenge",
        link: "/assets/sia-appchallenge.pdf",
        desc: "Developed a travel itinerary concierge powered by generative AI to provide a seamless and personalised planning experience to travelers. Achieved 3rd place out of 280 teams from tertiary institutions all around the world.",
        award: "2nd Runner-Up",
    },
    {
        year: "2022",
        name: "Shopee Product & Design Challenge",
        link: "https://www.credly.com/badges/6733a932-8a76-452c-8f41-8d78b653738d/public_url",
        desc: "Redesigned Shopee's ShopeePay Near Me to transform it into the top-of-mind platform for offline discovery. Elements of our proposed designs have been adopted by Shopee and are live in production today. Emerged as Champion out of 600+ teams of undergraduates and working professionals in Singapore.",
        award: "Champion",
    },
    {
        year: "2022",
        name: "Nanyang Technological University",
        link: "https://www.ntu.edu.sg/admissions/undergraduate/scholarships/reps",
        desc: "Selected into the University's flagship Renaissance Engineering Programme (REP). Awarded the highly coveted REP Scholarship for holistic excellence.",
        award: "Renaissance Engineering Scholar",
    },
];

export const skills: string[] = [
    "I began my journey in frontend web development, and I have experience building websites using React, as well as the meta-frameworks built around it. My preferred tools are Next.js, TypeScript and Tailwind.",
    "As I began to work on more complicated projects, I picked up a variety of backend languages and frameworks. I am comfortable working in Node.js and Python.",
    "I have professional experience and a keen interest in designing and building AI-powered products. It excites me to be able to provide a platform for the layperson to interact with advanced machine learning models, empowering them with technology",
];

export const stacks: Stack[] = [
    {
        name: "languages",
        skills: ["TypeScript", "Python", "Java", "C"],
    },
    {
        name: "frontend",
        skills: ["React.js", "Next.js", "Tailwind.css"],
    },
    {
        name: "backend",
        skills: ["Node.js", "Express.js", "Serverless"],
    },
    {
        name: "cloud",
        skills: ["AWS", "Terraform"],
    },
    {
        name: "ai",
        skills: ["OpenAI APIs"],
    },
    {
        name: "misc",
        skills: ["Figma", "Git"],
    },
];
