// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'AstreaRider',
  },

  base: '/gitprofile/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
    },
  },
  seo: {
    title: 'Portfolio of Rizki Ramadhan Al-Mubaraq',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'rizkiramadhanalmubaraq',
    dev: 'astrearider',
    email: 'rizkiramadhan34@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1T3uslgpoNSdIXjVxJSunQ3sAJUq5T_Tc/view?usp=drive_link',
  },
  skills: [
    'Cloud Computing (AWS, Azure)',
    'OS (Linux, Windows)',
    'Containerization (Docker, Kubernetes, OpenShift OKD)',
    'Operation & Monitoring (Prometheus, Elasticsearch, Grafana, Kibana)',
    'Logging Tool (Logstash, Filebeat, Loki, Promtail)',
    'Secrets Managemnet (Hashicorp Vault)',
    'Virtualization (XCP ng)',
    'Provisioning Tool (Terraform)',
    'Configuration Management Tool (Ansible, Shell Script)',
    'Web Servers (Nginx, Apache)',
    'Databases (MySQL, PostgreSQL, MongoDB, Redis)',
    'Programming Languages (Python, Go, Javascript)',
    'VCS (Git)',
    'Service Mesh (Istio)',
    'Networking (Mikrotik)',
  ],
  experiences: [
    {
      company: 'Telkom Indonesia',
      position: 'DevOps Engineer and Research Assistant',
      from: 'January 2022',
      to: 'March 2024',
    },
    {
      company: 'Telkom Direktorat Digital Business',
      position: 'Technical Support',
      from: 'October 2020',
      to: 'March 2021',
    },
    {
      company: 'PT. Anugerah Pratama Lazuardi',
      position: 'Web Developer',
      from: 'May 2020',
      to: 'June 2020',
    },
    {
      company: 'PT. Anugerah Pratama Lazuardi',
      position: 'Web Developer',
      from: 'May 2019',
      to: 'June 2019',
    },
  ],
  certifications: [
    {
      name: 'TOEFL',
      body: 'Test of English as a Foreign Language',
      year: 'April 2024',
      link: 'https://www.e-ujian.com/cert/UKgYj2.152549',
    },
    {
      name: 'AWS CCP',
      body: 'Fundamental understanding of IT services and their uses in the AWS Cloud',
      year: 'June 2023',
      link: 'https://www.credly.com/badges/4c9c49b2-54d0-433d-bba6-bacb07da42cf/linked_in_profile',
    },
    {
      name: 'AZ 900',
      body: 'Foundational knowledge of core data concepts and how they are implemented using Microsoft Azure data services',
      year: 'January 2022',
      link: 'https://www.credly.com/badges/3f166ee3-59f7-4200-975c-cbc19629340d/linked_in_profile',
    },
  ],
  educations: [
    {
      institution: 'Telkom University',
      degree: `Bachelor's degree in Informatics`,
      from: '2017',
      to: '2021',
    },
  ],
  blog: {
    source: 'dev',
    username: 'astrearider',
    limit: 10,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'sunset',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

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
  // footer: `Made with <a
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
