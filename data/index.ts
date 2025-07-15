export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Work Experience', link: '#timeline' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'Exploring UI as a language for clear, simple interaction',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: 'Not tied to a timezone — just where the ideas are',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'Tools I use and revisit',
    description: 'Experimenting as I go',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Most things I make start with a question',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },
  {
    id: 5,
    title: 'Experimenting with motion, animation, and visual interactivity',
    description: 'Current Side Project',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title:
      'That’s pretty much it. My inbox is down there if anything ever comes up',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'DUMovies - Movie Mood Recommendation App',
    des: 'Web app that recommends movies based on your mood using TMDB API. Built with React, Vite, Node.js, and MySQL.',
    img: '/movie.png',
    iconLists: ['/re.svg', '/vite.svg', '/node.svg', '/mysql.svg', '/tmdb.svg'],
    role: 'Frontend Developer',
    link: 'https://github.com/aziyusman/dumovies', // ganti jika ada
  },
  {
    id: 2,
    title: 'HRPortal - Employee Management',
    des: 'A Laravel-based HR system to manage employee contracts, status, and reminders. MySQL + Tailwind CSS UI.',
    img: '/hr.png',
    iconLists: ['/laravel.svg', '/tail.svg', '/mysql.svg', '/php.svg'],
    role: 'Fullstack Developer',
    link: 'https://github.com/aziyusman/hrportal', // ganti jika ada
  },

  {
    id: 3,
    title: 'ResepWarm - Smart Recipe Generator',
    des: 'Laravel app with Spoonacular API & Gemini AI for managing, generating, and recommending recipes from images.',
    img: '/recipe.png',
    iconLists: [
      '/laravel.svg',
      '/mysql.svg',
      '/gemini.svg',
      '/spoonacular.svg',
    ],
    role: 'Fullstack Developer',
    link: 'https://github.com/aziyusman/recipe-ai', // ganti jika ada
  },

  {
    id: 4,
    title: 'Gistakhir - GIS Web App for Land Surveyors',
    des: 'CodeIgniter-based GIS platform for CRUD land data with interactive map using Leaflet & GeoJSON.',
    img: '/gis.png',
    iconLists: ['/ci.svg', '/mysql.svg', '/leaflet.svg'],
    role: 'Fullstack Developer',
    link: 'https://github.com/aziyusman/gis-surveyor', // ganti jika ada
  },

  {
    id: 5,
    title: 'PHSync - Soil Monitoring Web App',
    des: 'Realtime monitoring system displaying soil moisture and temperature. Powered by IoT devices, MongoDB, and React frontend.',
    img: '/soil.png',
    iconLists: ['/re.svg', '/tail.svg', '/mongo.svg'],
    role: 'Frontend Developer',
    link: 'https://github.com/aziyusman/soil-monitoring', // ganti jika ada
  },

  {
    id: 6,
    title: 'Martvel - Simple POS System',
    des: 'Lightweight POS system using HTML, CSS, JS, and PHP for small store transaction management.',
    img: '/pos.png',
    iconLists: ['/html.svg', '/css.svg', '/js.svg', '/php.svg'],
    role: 'Frontend Developer',
    link: 'https://github.com/aziyusman/simple-pos', // ganti jika ada
  },
  {
    id: 7,
    title: 'Bustik - Bus Ticket Mobile UI/UX',
    des: 'Mobile UI design for bus ticket booking created with Figma. Focused on usability and clean experience.',
    img: '/bus.png',
    iconLists: ['/figma.svg'],
    role: 'UI/UX Designer',
    link: 'https://www.figma.com/file/example-bus-ticket', // ganti jika ada figma link
  },
];

export const tools = [
  {
    id: 1,
    name: 'HTML',
    icon: '/html.svg',
  },
  {
    id: 2,
    name: 'CSS',
    icon: '/css.svg',
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: '/js.svg',
  },
  {
    id: 4,
    name: 'React',
    icon: '/re.svg',
  },
  {
    id: 5,
    name: 'Tailwind',
    icon: '/tail.svg',
  },
  {
    id: 6,
    name: 'TypeScript',
    icon: '/ts.svg',
  },
  {
    id: 7,
    name: 'Next.js',
    icon: '/next.svg',
  },
  {
    id: 8,
    name: 'Git',
    icon: '/git.svg',
  },
  {
    id: 9,
    name: 'MySQL',
    icon: '/mysql.svg',
  },

  {
    id: 10,
    name: 'Figma',
    icon: '/figma.svg',
  },
]

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
];

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Freelance Web Developer',
    desc: 'Designed and developed landing pages and sales pages using WordPress, WooCommerce, and Xendit integration. Focused on responsive and conversion-driven UX.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Web Developer (Contract)',
    desc: 'Customized site appearance and functionality using HTML, CSS, JS, and plugins. Built custom online exam system (TOEFL, TOEIC, IELTS) for Language Lab at BPI School.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },
];


export const socialMedia = [
  {
    id: 1,
    link: 'https://github.com/mcnemy001/',
    img: '/git.svg',
  },
  {
    id: 2,
    link: 'https://www.instagram.com/azysmn.m/',
    img: '/insta.svg',
  },
  {
    id: 3,
    link: 'https://www.linkedin.com/in/aziyusman/',
    img: '/link.svg',
  },
];
