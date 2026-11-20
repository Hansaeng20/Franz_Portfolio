
export const profile = {
    name: 'Franz Romeo Isaac Llanes',
    shortName: 'Franz Llanes',
    role: 'IT Student | Backend & Infrastructure',
    email: 'franzromeoisaacllanes@gmail.com',
    location: 'Angeles City, Pampanga',
    github: 'https://github.com/Hansaeng20',
    linkedin: 'https://www.linkedin.com/in/franz-llanes',

    introduction:
        'I develop web applications and explore the systems behind them — from backend APIs to Linux servers and network infrastructure.',

    about:
        "I'm a fourth-year Information Technology student at National University, majoring in Mobile and Web Applications. My interests include backend development, infrastructure, networking, and cybersecurity.",
}

export const projects = [

    {
        name: 'Affordahomes',
        category: 'Backend Development & Infrastructure',
        description:
            'Contributed to the backend development and production deployment of a property management platform. Developed Laravel REST APIs, implemented authentication, configured Linux/Nginx infrastructure, and performed API testing and troubleshooting.',
        technologies: [
            'Laravel',
            'PHP',
            'SQL',
            'Linux',
            'Nginx',
            'Cloudflare',
            'Postman'
        ],
        link: '',
        status: 'Completed',
    },

    {
        name: 'Pamana Beach House',
        category: 'Frontend Web Development',
        description:
            'Designed, developed, and deployed a responsive website for a beach house resort in Calatagan, Batangas using React and TypeScript.',
        technologies: [
            'React',
            'TypeScript',
            'Vercel'
        ],
        link: 'https://pamanabeach.vercel.app/',
        status: 'Live',
    },


    {
        name: 'Laplogic',
        category: 'Full Stack Development / Data Analytics',
        description:
            'Developed a sim racing analytics and strategy platform that explores race performance data, statistical analysis, and data-driven strategy insights. Built with a React and TypeScript frontend and a Python FastAPI backend.',
        technologies: [
            'React',
            'TypeScript',
            'Python',
            'FastAPI',
            'Vercel'
        ],
        link: 'https://laplogic-livid.vercel.app/',
        status: 'In Development',
    },

]

export const skills = [
    {
        category: 'Backend Development',
        items: ['Laravel', 'PHP', 'REST APIs', 'SQL', 'API Authentication'],
    },
    {
        category: 'Server & Infrastructure',
        items: ['Linux', 'Nginx', 'Cloudflare', 'Production Deployment'],
    },
    {
        category: 'Networking & Security',
        items: ['IPv4/IPv6', 'OSPF', 'VLANs', 'SSH', 'ACLs'],
    },
    {
        category: 'Development Tools',
        items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Cisco Packet Tracer'],
    },
]

export type Certification = {
    name: string
    issuer: string
    date: string
    /** Optional badge image in /public/badges (e.g. '/badges/data-science-essentials.png'). Falls back to the issuer logo. */
    badge?: string
    /** Optional verification link (e.g. a Credly badge URL). */
    url?: string
}

export const certifications: Certification[] = [
    {
        name: 'Data Science Essentials with Python',
        issuer: 'Cisco',
        date: 'Nov 2026',
        badge: '/badges/data-science-essentials.png',
        url: 'https://www.credly.com/badges/9abfd3b2-970d-46ed-bf0b-bd75999b5e3d/public_url',
    },
    {
        name: 'Google AI Professional Certificate',
        issuer: 'Google',
        date: 'Sep 2026',
        url: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/R4ERRDXHOH4U',
    },
    {
        name: 'Introduction to Generative AI Learning Path',
        issuer: 'Google Cloud',
        date: 'Jun 2026',
        url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/MOAOXXQ1LTLE',
    },
    {
        name: 'Network Support and Security',
        issuer: 'Cisco',
        date: 'Jun 2026',
        badge: '/badges/network-support-and-security.png',
        url: 'https://www.credly.com/badges/4639e51c-7619-4405-a708-ca8399ec4180/public_url',
    },
    {
        name: 'Cyber Threat Management',
        issuer: 'Cisco',
        date: 'Apr 2026',
        badge: '/badges/cyber-threat-management.png',
        url: 'https://www.credly.com/badges/468fd516-8ba2-4456-9992-6045cdefaef2/public_url',
    },
    {
        name: 'Network Defense',
        issuer: 'Cisco',
        date: 'Dec 2025',
        badge: '/badges/network-defense.png',
        url: 'https://www.credly.com/badges/3b0b5053-57c4-4f00-852a-8684f02308b1/public_url',
    },
    {
        name: 'IT Specialist – Networking',
        issuer: 'Certiport',
        date: 'Oct 2025',
        badge: '/badges/it-specialist-networking.png',
        url: 'https://www.credly.com/badges/851594e0-21fe-4bda-a7da-a117e614101d/public_url',
    },
    {
        name: 'Endpoint Security',
        issuer: 'Cisco',
        date: 'Sep 2025',
        badge: '/badges/endpoint-security.png',
        url: 'https://www.credly.com/badges/a608a6cd-41c7-4564-b4d4-cafa0faebac1/public_url',
    },
    {
        name: 'Network Addressing and Basic Troubleshooting',
        issuer: 'Cisco',
        date: 'Sep 2025',
        badge: '/badges/network-addressing-and-troubleshooting.png',
        url: 'https://www.credly.com/badges/a93c2750-cf00-48d9-aca1-806d94338ecd/public_url',
    },
    {
        name: 'Introduction to IoT',
        issuer: 'Cisco',
        date: 'Aug 2025',
        badge: '/badges/introduction-to-iot.png',
        url: 'https://www.credly.com/badges/7b6b8db2-0359-46fd-aad6-a519ef19112a/public_url',
    },
    {
        name: 'Introduction to Cybersecurity',
        issuer: 'Cisco',
        date: 'Aug 2025',
        badge: '/badges/introduction-to-cybersecurity.png',
        url: 'https://www.credly.com/badges/7ce258ea-1c39-4c2d-bea6-ca65f91a3794/public_url',
    },
    { name: 'Networking Basics', issuer: 'Cisco', date: 'Aug 2025' },
    {
        name: 'CompTIA IT Fundamentals+',
        issuer: 'CompTIA',
        date: 'Jul 2024',
        url: 'https://cp.certmetrics.com/comptia/en/public/verify/credential/2P0H7P0R32EE11S5',
    },
]
