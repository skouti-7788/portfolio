
export const profile = {
  name: 'Redouane Skouti',
  firstName: 'Redouane',
  location: 'Agadir, Maroc',
  email: 'radwansakoti77@gmail.com',
  github: 'https://github.com/skouti-7788',
  linkedin: '',

  intro: {
    fr: 'Je conçois des applications web utiles, de l’interface utilisateur à la base de données. Je souhaite développer mes compétences grâce à des projets concrets et à des expériences professionnelles.',
    en: 'I build useful web applications, from user interfaces to databases. I want to strengthen my skills through practical projects and professional experience.',
    ar: 'أطوّر تطبيقات ويب عملية، من واجهة المستخدم إلى قاعدة البيانات، وأسعى إلى تطوير مهاراتي من خلال المشاريع التطبيقية والتجارب المهنية.'
  }
};

export const skills = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Backend',
    items: ['PHP', 'Laravel', 'REST API']
  },
  {
    title: 'Databases',
    items: ['MySQL','NoSQL']
  },
  {
    title: 'Tools & Methods',
    items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Postman',]
  }
];

export const projects = [
  {
    number: '01',
    title: 'Menu Online',

    category: {
      fr: 'Application web Full Stack',
      en: 'Full-Stack Web Application',
      ar: 'تطبيق ويب متكامل لإدارة المطاعم'
    },

    description: {
      fr: 'Application de gestion de restaurant comprenant un menu numérique accessible par QR code, la gestion des plats et catégories, le suivi des commandes et un tableau de bord dédié au restaurant.',
      en: 'A restaurant management application featuring a QR-code digital menu, meal and category management, order tracking, and a dedicated restaurant dashboard.',
      ar: 'تطبيق لإدارة المطاعم يتضمن قائمة رقمية عبر QR Code، وتدبير الأطباق والتصنيفات، وتتبع الطلبات ولوحة تحكم خاصة بالمطعم.'
    },

    stack: ['React', 'Laravel', 'MySQL', 'Tailwind CSS'],

    image: 'menuOnline.png',

    links: {
      demo: 'https://responsable-restaurant-sr5c.vercel.app/',
      github1: 'https://github.com/skouti-7788/menu-',
      github2: 'https://github.com/skouti-7788/responsable-restaurant',
      github3: 'https://github.com/skouti-7788/backend-menu-'
    },

    featured: true
  },

  {
    number: '02',
    title: 'ImmoFinder',

    category: {
      fr: 'Application web',
      en: 'Web Application',
      ar: 'تطبيق ويب للبحث عن العقارات'
    },

    description: {
      fr: 'Projet web de recherche immobilière développé avec React. L’application permet de présenter des biens immobiliers selon les fonctionnalités implémentées.',
      en: 'A property-search web project built with React, designed to present real estate listings according to the implemented features.',
      ar: 'مشروع ويب للبحث عن العقارات باستخدام React، يهدف إلى عرض العقارات وفق الخصائص التي تم تنفيذها.'
    },

    stack: ['React', 'CSS'],

    image: 'immofinder.png',

    links: {
      demo: 'https://immo-finder-eosin.vercel.app/',
      github1: 'https://github.com/skouti-7788/Immofinder'
    },

    featured: false
  },

  {
    number: '03',
    title: 'Ketab',

    category: {
      fr: 'Application web Full Stack',
      en: 'Full-Stack Web Application',
      ar: 'تطبيق ويب متكامل لإدارة المكتبات'
    },

    description: {
      fr: 'Application web de gestion de bibliothèque avec une interface utilisateur, un tableau de bord administrateur et une API développée avec Laravel et MySQL.',
      en: 'A library management application featuring a user interface, an admin dashboard, and a backend API built with Laravel and MySQL.',
      ar: 'تطبيق متكامل لإدارة المكتبات، يضم واجهة للمستخدمين ولوحة تحكم للإدارة وواجهة API باستخدام Laravel وMySQL.'
    },

    stack: ['React', 'Laravel', 'MySQL','CSS'],

    image: 'ketab.png',

    links: {
      demo: 'https://frontenduser-seven.vercel.app/',
      adminDemo: 'https://frontend-admin-ecru-eta.vercel.app/',
      github1: 'https://github.com/skouti-7788/frontend_user',
      github2: 'https://github.com/skouti-7788/frontend_admin',
      github3: 'https://github.com/skouti-7788/backend_ketab'
    },

    featured: false
  }
];

export const journey = [
  {
    date: '02/03/2026 – 28/03/2026',

    type: {
      fr: 'Stage',
      en: 'Internship',
      ar: 'تدريب'
    },

    title: {
      fr: 'Stage en développement web Full Stack',
      en: 'Full-Stack Web Development Internship',
      ar: 'تدريب في تطوير الويب Full Stack'
    },

    place: 'École Jassani Aït Melloul',

    description: {
      fr: 'Stage d’un mois dans un établissement scolaire, dans le cadre de la formation en développement digital.',
      en: 'A one-month internship at a school as part of a digital development training program.',
      ar: 'تدريب لمدة شهر في مؤسسة تعليمية، في إطار التكوين في التنمية الرقمية.'
    }
  },

  {
    date: '2025/2026',

    type: {
      fr: 'Formation',
      en: 'Education',
      ar: 'التكوين'
    },

    title: {
      fr: 'Développement Digital  option Web Full Stack',
      en: 'Digital Development  Web Full Stack Track',
      ar: 'التنمية الرقمية  تخصص Web Full Stack'
    },

    place: 'OFPPT / ISTA Assaka Tikiwin  Agadir',

    description: {
      fr: 'Formation en développement web frontend et backend, bases de données et réalisation de projets pratiques.',
      en: 'Training in frontend and backend web development, databases, and practical project development.',
      ar: 'تكوين في تطوير الواجهات والخلفية، وقواعد البيانات، وإنجاز المشاريع التطبيقية.'
    }
  },
  {
  date: '2023',
  type: {
    fr: 'Diplôme',
    en: 'Diploma',
    ar: 'شهادة'
  },
  title: {
    fr: 'Baccalauréat  Sciences de la Vie et de la Terre',
    en: 'Baccalaureate  Life and Earth Sciences',
    ar: 'البكالوريا  علوم الحياة والأرض'
  },
  place: 'Essaouira',
  description: {
    fr: 'Baccalauréat obtenu en 2023, spécialité Sciences de la Vie et de la Terre.',
    en: 'Baccalaureate obtained in 2023, specializing in Life and Earth Sciences.',
    ar: 'الحصول على شهادة البكالوريا سنة 2023، شعبة علوم الحياة والأرض.'
  }
}

];
