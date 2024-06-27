module.exports = {
  siteTitle: 'BELMALLEM Marouane | Software Engineer',
  siteDescription:
    'BELMALLEM Marouane is an ambitious Software Engineer, from Morocco, who loves solving problems!',
  siteKeywords:
    'BELMALLEM Marouane, Marouane, BELMALLEM, BELMALLEM, Software Engineer, Computer Science, Java, Spring Framework, javascript, react.js, angular, Casablanca, amdocs, bit, ML, Morocco',
  siteUrl: 'https://belmallem.netlify.app',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-YG9YDE27Z2',
  googleVerification: '',
  name: 'BELMALLEM Marouane',
  location: 'Casablanca, Morocco',
  email: 'marouane.belmallem@gmail.com',
  github: 'https://github.com/BELMALLEM',
  twitterHandle: '@WoRoveCharisma',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/BELMALLEM',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/marouane-belmallem/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mrwn.bel/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/@WoRoveCharisma',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
