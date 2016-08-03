/* eslint max-len: ["error", 500] */

const schema = {
  title: {
    home: 'Camilo Holguin | Web developer',
    error: 'Camilo Holguin | 404 Not Found',
  },
  header: {
    branding: 'Camilo Holguin',
  },
  footer: {
    email: 'hello@camiloholguin.me',
    linkedin: 'https://co.linkedin.com/in/camiloholguin',
    twitter: 'https://twitter.com/innovaticode',
    github: 'https://github.com/innovationweb/Portfolio',
  },
  summary: {
    heading: 'Hello,',
    content: 'I’m a web developer with more than 5 years of experience. I’m extremely passionate about web development. I’m strongly focused on modularity and maintainability and I love work with Wordpress.',
    expertise: [{
      name: 'Wordpress',
    }, {
      name: 'Joomla',
    }, {
      name: 'Perch',
    }, {
      name: 'JavaScript',
    }, {
      name: 'jQuery',
    }, {
      name: 'Underscore',
    }, {
      name: 'React',
    }, {
      name: 'Grunt / Gulp',
    }, {
      name: 'Sass / Less',
    }, {
      name: 'BEM CSS',
    }, {
      name: 'Mobile First',
    }, {
      name: 'Git',
    }],
  },
  contact: {
    heading: 'Get in touch',
    content: 'Have a question or want to work together?',
  },
  notfound: {
    heading: '404',
    content: 'Page Not Found',
  },
  works: [{
    title: 'Misskabi',
    image: {
      small: './images/misskabi/small.jpg',
      large: './images/misskabi/large.jpg',
    },
    class: 'portfolio__element--half',
    excerpt: 'Misskabi is an ecommerce website selling accessories and clothes. They focus on promote and enhance to afro trends fashion trough a dynamic full of colors.',
    link: 'http://www.misskabi.com',
    skills: 'Woocommerce',
  }, {
    title: 'CDN',
    image: {
      small: './images/cdn/small.jpg',
      large: './images/cdn/large.jpg',
    },
    class: 'portfolio__element--half',
    excerpt: 'CDN Printing is an ecommerce website selling business cards, flyer, brochures, letterhead and much more. For over 60 years, CDN Printing serves clients in the Montreal area.',
    link: 'http://www.reprocdn.com',
    skills: 'Woocommerce',
  }, {
    title: 'learn24va',
    image: {
      small: './images/learn/small.jpg',
      large: './images/learn/large.jpg',
    },
    class: 'portfolio__element--half',
    excerpt: 'Learn24VA is an initiative of the Virginia Department of Education. This portal aggregates digital tools, content, and resources to support teaching and learning.',
    link: 'http://www.learn24va.org',
    skills: 'Wordpress',
  }, {
    title: 'Innovationweb',
    image: {
      small: './images/innovationweb/small.jpg',
      large: './images/innovationweb/large.jpg',
    },
    class: 'portfolio__element--half',
    excerpt: 'Innovationweb is a web agency in Montreal which specializes in website design for the restaurants, as well as for small and medium enterprises.',
    link: 'http://www.innovationweb.ca',
    skills: 'Wordpress',
  }, {
    title: 'Hus Hola',
    image: {
      small: './images/hola/small.jpg',
      large: './images/hola/large.jpg',
    },
    class: 'portfolio__element--half',
    excerpt: 'Hus Hola have over 40 years in Medellin, they focus on marketing of educational games and social expression products such as bags and wrapping paper.',
    link: 'http://www.hus-hola.com/',
    skills: 'Wordpress',
  }, {
    title: 'StationF',
    image: {
      small: './images/stationf/small.jpg',
      large: './images/stationf/large.jpg',
    },
    class: 'portfolio__element--half',
    excerpt: 'Open since 2006 StationF is a french restaurant. StationF is the ideal address for eating a convivial and friendly meal in a congenial atmosphere.',
    link: 'http://www.stationf.ca',
    skills: 'Perch',
  }],
};

export default schema;
