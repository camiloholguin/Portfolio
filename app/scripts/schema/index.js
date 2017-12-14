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
    content: 'I’m a web developer with more than 8 years of experience. I’m extremely passionate about web development. I’m strongly focused on modularity and maintainability and I love work with Wordpress.',
    expertise: [{
      name: 'HTML5, CSS3',
    }, {
      name: 'Sass, Less',
    }, {
      name: 'Wordpress',
    }, {
      name: 'Javascript',
    }, {
      name: 'jQuery',
    }, {
      name: 'React, Redux',
    }, {
      name: 'Underscore',
    }, {
      name: 'Grunt, Gulp',
    }, {
      name: 'Responsive',
    }, {
      name: 'Cross-Browser',
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
    title: 'Reveal',
    image: {
      small: './images/reveal/small.jpg',
      large: './images/reveal/large.jpg',
    },
    class: 'portfolio__element--half',
    excerpt: 'Reveal is a premium Photography WordPress theme that enables you to create a professional portfolio website and manage your blog.',
    link: 'https://demos.synergiedigitale.com/reveal/',
    skills: 'Wordpress',
  }, {
    title: 'CDN Print & Design',
    image: {
      small: './images/cdn/small.jpg',
      large: './images/cdn/large.jpg',
    },
    class: 'portfolio__element--half',
    excerpt: 'CDN Print & Design is an e-commerce website that sells business cards, flyers, brochures, letterhead and much more.',
    link: 'http://www.reprocdn.com',
    skills: 'Wordpress',
  }, {
    title: 'learn24va',
    image: {
      small: './images/learn/small.jpg',
      large: './images/learn/large.jpg',
    },
    class: 'portfolio__element--half',
    excerpt: 'Learn24VA is an initiative of the Virginia Department of Education. This portal aggregates digital tools to support teaching and learning.',
    link: 'http://www.learn24va.org',
    skills: 'Wordpress',
  }, {
    title: 'Innovationweb',
    image: {
      small: './images/innovationweb/small.jpg',
      large: './images/innovationweb/large.jpg',
    },
    class: 'portfolio__element--half',
    excerpt: 'Innovationweb is a web agency which specializes in website design for the restaurants, as well for small and medium enterprises.',
    link: 'http://www.innovationweb.ca',
    skills: 'Wordpress',
  }, {
    title: 'Perfectw',
    image: {
      small: './images/perfectw/small.jpg',
      large: './images/perfectw/large.jpg',
    },
    class: 'portfolio__element--half',
    excerpt: 'PerfectW is a company formed to work with individuals and families to meet their housing needs.',
    link: 'http://perfectw.ca',
    skills: 'Perch CMS',
  }, {
    title: 'Centro Nacional de Memoria Histórica',
    image: {
      small: './images/memoria/small.jpg',
      large: './images/memoria/large.jpg',
    },
    class: 'portfolio__element--half',
    excerpt: 'The National Center for Historical Memory’s purpose is to contribute to the comprehensive reparation and to the right to the truth for the victims of the Colombian armed conflic as well as society in general.',
    link: 'http://www.centrodememoriahistorica.gov.co',
    skills: 'Joomla',
  }],
};

export default schema;
