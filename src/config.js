module.exports = {
  siteTitle: 'BELMALLEM Marouane | Data Scientist',
  siteDescription:
    'BELMALLEM Marouane is an ambitious Data Scientis, from Morocco, who loves solving problems!',
  siteKeywords:
    'BELMALLEM Marouane, Marouane, BELMALLEM, BELMALLEM, Data Scientist, Computer Science, Python, Machine Learning, Casablanca, amdocs, bit, ML, Morocco',
  siteUrl: 'https://belmallem.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'BELMALLEM Marouane',
  location: 'Casablanca, Morocco',
  email: 'marouane.belmallem@gmail.com',
  github: 'https://github.com/BELMALLEM',
  twitterHandle: '@WoRoveCharisma',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://belmallem.github.io/',
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
