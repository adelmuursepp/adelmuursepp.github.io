// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'adelmuursepp', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Featured Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'adelmuursepp/cipher-shield',
          'adelmuursepp/co-flat-website',
          'adelmuursepp/pocketdoc',
          'adelmuursepp/ellehacks2024',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Community Involvement & Talks',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Microsoft Student Ambassador',
          description:
            'Led 5 workshops on campus, hosting a workshop with Microsoft Reactor on databases that was streamed live on YouTube. Speaker at conference hosted by GSDC at the Microsoft office and the Bay Area’s largest women hackathon Superposition. Speaker on how to develop web applications at Canada’s largest hackathon Hack the North. Reaching a total audience of over 500 attendees.',
          imageUrl: '',
          link: 'https://developer.microsoft.com/en-us/reactor/events/18451/',
        },
        {
          title: 'Department of Computer Science Ambassador',
          description:
            'Represented the university at various outreach events, such as program exploration days, open campus days by giving a talk to an audience of over 100 students. Compiled entrepreneurship-related resources on campus and serving as a mentor for first and second year students.',
          imageUrl: '',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Adel Muursepp',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'adel-muursepp',
    twitter: 'AdelMuursepp',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'adel-muursepp',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'adel.muursepp@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Java',
    'C',
    'JavaScript',
    'React.js',
    'Node.js',
    'PostgreSQL',
    'Git',
    'Docker',
    'Azure',
    'CSS',
  ],
  experiences: [
    {
      company: 'Go Beyond Capital',
      position: 'Venture Capital Part-time Internship',
      from: 'Jan 2024',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Scotiabank',
      position: 'Analyst, Corporate Security Team',
      from: 'May 2023',
      to: 'Aug 2023',
      companyLink: 'https://www.scotiabank.com/ca/en/about/our-company.html',
    },
    {
      company: 'Promise Robotics',
      position: 'Software Engineer Intern',
      from: 'May 2022',
      to: 'August 2022',
      companyLink: 'https://promiserobotics.com/',
    },
  ],
  certifications: [
    {
      name: 'Google Cyber Security Professional Certification',
      body: 'Networking, Scripting, NIST, OWASP Top 10',
      year: 'Sept 2023',
      link: 'https://www.coursera.org/account/accomplishments/professional-cert/EDUQD529YZXG?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=prof',
    },
    {
      name: 'ISC2 Certified in Cybersecurity',
      body: 'Access Control, Business Continuity, Disaster Recovery, Incident Response, SecOps',
      year: 'Nov 2023',
      link: 'https://www.credly.com/badges/61052083-4ba4-4ada-93e7-6eb8ce5600d1/public_url',
    },
  ],
  educations: [
    {
      institution: 'University of Toronto',
      degree: 'Double Major Computer Science & Mathematics',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'Le Wagon Full-Stack Boot Camp',
      degree: '',
      from: '2019 May',
      to: '2019 July',
    },
  ],
  publications: [
    {
      title: 'Privacy Risks of Speculative Decoding in Large Language Models',
      conferenceName: '',
      journalName: 'arXiv preprint arXiv:2411.01076',
      authors:
        'Jiankun Wei, Abdulrahman Abdulrazzag, Tianchen Zhang, Adel Muursepp, Gururaj Saileshwar',
      link: 'https://arxiv.org/abs/2411.01076',
      description:
        'This paper provides the first study demonstrating privacy risks of speculative decoding in large language models. We show that adversaries can fingerprint queries and learn private user inputs with over 90% accuracy by monitoring token generation patterns across REST, LADE, and BiLD techniques. The work also reveals how confidential intellectual property can be leaked and discusses mitigation strategies.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'adel-muursepp', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-GX6WVREJQP', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: '',

  enablePWA: true,
};

export default CONFIG;
