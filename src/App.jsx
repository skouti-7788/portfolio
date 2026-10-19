import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Code2, ExternalLink, Github, Mail, Menu, Moon, Sun, X, Languages } from 'lucide-react';
import SectionHeading from './components/SectionHeading.jsx';
import { journey, profile, projects, skills } from './data/portfolio.js';

 
 
const translations = {
  fr: {
    navAbout: 'À propos',
    navSkills: 'Compétences',
    navProjects: 'Projets',
    navJourney: 'Parcours',
    navContact: 'Contact',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    theme: 'Changer de thème',

    student: 'Portfolio étudiant',
    hello: 'BONJOUR, JE SUIS',
    role: 'Développeur Web Full Stack Junior',
    projectsBtn: 'Découvrir mes projets',
    contactBtn: 'Me contacter',
    scroll: 'DÉFILER POUR EXPLORER',

    aboutEyebrow: '01 — À PROPOS',
    aboutTitle: 'Transformer les idées en applications web.',
    aboutTitle2: 'Progresser à chaque projet.',
    aboutText:
      'Je suis étudiant en développement digital, spécialisé en Web Full Stack. Je développe des applications web en travaillant sur les interfaces utilisateur, la logique métier et les bases de données. À travers mes projets, je cherche à renforcer mes compétences et à améliorer la qualité de mon code.',
    goal: 'Mon objectif',
    goalText:
      'Rejoindre une équipe de développement pour contribuer à des projets concrets, mettre en pratique mes compétences en frontend et backend, apprendre auprès de développeurs expérimentés et progresser professionnellement.',

    skillsEyebrow: '02 — COMPÉTENCES',
    skillsTitle: 'Mes outils de développement',
    skillsText:
      'Les technologies et les outils que j’utilise dans ma formation et mes projets pratiques.',

    projectsEyebrow: '03 — PROJETS SÉLECTIONNÉS',
    projectsTitle: 'Des idées transformées en applications web.',
    projectsText:
      'Découvrez mes projets web, les technologies utilisées et les solutions développées. Chaque projet représente une occasion de mettre mes compétences en pratique et de progresser en développement Full Stack.',
    source: 'Code source',
    demo: 'Voir la démo',
    moreCode: 'Plus de code et d’expérimentations sur',
    github: 'mon GitHub',

    journeyEyebrow: '04 — PARCOURS',
    journeyTitle: 'Formation et expérience',
    journeyText:
      'Mon parcours en développement digital, ma formation en Web Full Stack et mes premières expériences pratiques.',

    contactEyebrow: '05 — CONTACT',
    contactTitle: 'Construisons quelque chose',
    contactTitle2: 'de concret.',
    contactText:
      'Vous proposez un stage, une opportunité pour un développeur junior ou souhaitez discuter d’un projet web ? Je serais ravi d’échanger avec vous.',
    sendEmail: 'Envoyer un e-mail',
    viewGithub: 'Consulter mon GitHub',

    footer: 'Conçu et développé avec React et Vite.',
    available: 'À la recherche d’un stage ou d’une opportunité junior',

    frontend: 'Frontend',
    backend: 'Backend',
    databases: 'Bases de données',
    tools: 'Outils et méthodes',

    projectLabel: 'PROJET',
    webApp: 'APPLICATION WEB',
    codeComment: '// Toujours apprendre.',
    learning: 'apprendre',
    building: 'projets utiles',
  },

  en: {
    navAbout: 'About',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navJourney: 'Journey',
    navContact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    theme: 'Toggle theme',

    student: 'Student portfolio',
    hello: 'HELLO, I’M',
    role: 'Junior Full Stack Web Developer',
    projectsBtn: 'Explore my projects',
    contactBtn: 'Get in touch',
    scroll: 'SCROLL TO EXPLORE',

    aboutEyebrow: '01 — ABOUT',
    aboutTitle: 'Turning ideas into web applications.',
    aboutTitle2: 'Growing with every project.',
    aboutText:
      'I’m a Digital Development student specializing in Full Stack Web Development. I build web applications by working on user interfaces, business logic, and databases. Through my projects, I aim to strengthen my skills and improve my code quality.',
    goal: 'My goal',
    goalText:
      'Join a development team where I can contribute to real-world projects, apply my frontend and backend skills, learn from experienced developers, and grow professionally.',

    skillsEyebrow: '02 — SKILLS',
    skillsTitle: 'My development toolkit',
    skillsText:
      'The technologies and tools I use in my training and practical projects.',

    projectsEyebrow: '03 — SELECTED PROJECTS',
    projectsTitle: 'Ideas transformed into web applications.',
    projectsText:
      'Explore my web projects, the technologies behind them, and the solutions I have developed. Each project is an opportunity to apply my skills and grow as a Full Stack developer.',
    source: 'Source code',
    demo: 'Live demo',
    moreCode: 'More code and experiments on',
    github: 'my GitHub',

    journeyEyebrow: '04 — JOURNEY',
    journeyTitle: 'Education and experience',
    journeyText:
      'My journey in digital development, my Full Stack Web Development training, and my first practical experiences.',

    contactEyebrow: '05 — CONTACT',
    contactTitle: 'Let’s build something',
    contactTitle2: 'meaningful.',
    contactText:
      'Are you offering an internship, a junior developer opportunity, or looking to discuss a web project? I’d be happy to connect.',
    sendEmail: 'Send an email',
    viewGithub: 'Visit my GitHub',

    footer: 'Designed and built with React and Vite.',
    available: 'Looking for internship or junior opportunities',

    frontend: 'Frontend',
    backend: 'Backend',
    databases: 'Databases',
    tools: 'Tools and methods',

    projectLabel: 'PROJECT',
    webApp: 'WEB APPLICATION',
    codeComment: '// Always keep learning.',
    learning: 'learning',
    building: 'useful projects',
  },

  ar: {
    navAbout: 'نبذة عني',
    navSkills: 'المهارات',
    navProjects: 'المشاريع',
    navJourney: 'المسار',
    navContact: 'اتصل بي',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
    theme: 'تغيير المظهر',

    student: 'ملف تعريفي لطالب',
    hello: 'مرحباً، أنا',
    role: 'مطور ويب Full Stack مبتدئ',
    projectsBtn: 'اكتشف مشاريعي',
    contactBtn: 'تواصل معي',
    scroll: 'تصفّح لاكتشاف المزيد',

    aboutEyebrow: '01 — نبذة عني',
    aboutTitle: 'أحوّل الأفكار إلى تطبيقات ويب.',
    aboutTitle2: 'وأتطور مع كل مشروع.',
    aboutText:
      'أنا طالب في شعبة التنمية الرقمية، تخصص تطوير الويب Full Stack. أعمل على تطوير تطبيقات الويب من خلال بناء واجهات المستخدم، والوظائف البرمجية، وقواعد البيانات. وأسعى من خلال مشاريعي إلى تطوير مهاراتي وتحسين جودة الكود.',
    goal: 'هدفي',
    goalText:
      'الانضمام إلى فريق تطوير أساهم معه في إنجاز مشاريع واقعية، وأطبّق مهاراتي في الواجهة الأمامية والخلفية، وأتعلم من مطورين ذوي خبرة، وأطوّر مستواي التقني والمهني.',

    skillsEyebrow: '02 — المهارات',
    skillsTitle: 'أدوات التطوير التي أستخدمها',
    skillsText:
      'مجموعة من التقنيات والأدوات التي أستخدمها خلال التكوين وفي مشاريعي التطبيقية.',

    projectsEyebrow: '03 — مشاريع مختارة',
    projectsTitle: 'أفكار تتحول إلى تطبيقات ويب.',
    projectsText:
      'اكتشف مشاريعي في تطوير الويب، والتقنيات المستخدمة فيها، والحلول التي عملت على إنجازها. يمثّل كل مشروع فرصة لتطبيق مهاراتي واكتساب خبرة جديدة في تطوير الويب Full Stack.',
    source: 'الكود المصدري',
    demo: 'عرض مباشر',
    moreCode: 'المزيد من الأكواد والتجارب على',
    github: 'حسابي على GitHub',

    journeyEyebrow: '04 — المسار',
    journeyTitle: 'التكوين والتجربة',
    journeyText:
      'مساري في مجال التنمية الرقمية، وتكويني في تطوير الويب Full Stack، وأولى تجاربي التطبيقية.',

    contactEyebrow: '05 — التواصل',
    contactTitle: 'لنبنِ شيئاً',
    contactTitle2: 'عملياً ومفيداً.',
    contactText:
      'هل تتوفر لديكم فرصة تدريب أو وظيفة لمطور مبتدئ، أو ترغبون في مناقشة مشروع ويب؟ يسعدني التواصل معكم.',
    sendEmail: 'إرسال بريد إلكتروني',
    viewGithub: 'زيارة حسابي على GitHub',

    footer: 'تم التصميم والتطوير باستخدام React وVite.',
    available: 'أبحث عن فرصة تدريب أو عمل للمبتدئين',

    frontend: 'الواجهة الأمامية',
    backend: 'الخلفية البرمجية',
    databases: 'قواعد البيانات',
    tools: 'الأدوات والمنهجيات',

    projectLabel: 'مشروع',
    webApp: 'تطبيق ويب',
    codeComment: '// تعلّم باستمرار.',
    learning: 'التعلّم',
    building: 'مشاريع مفيدة',
  },
};

const skillTitleKeys = { Frontend:'frontend', Backend:'backend', Databases:'databases', 'Tools & methods':'tools' };

function Header({ dark, setDark, lang, setLang, t }) {
  const [open, setOpen] = useState(false);
  const links = [[t.navAbout, '#apropos'], [t.navSkills, '#competences'], [t.navProjects, '#projets'], [t.navJourney, '#parcours'], [t.navContact, '#contact']];
  return <header className="site-header"><a className="brand" href="#accueil" aria-label="Home"><span>{"<Redouane/>"}<span className="brand-dot">.</span></span></a>
    <button className="menu-toggle icon-button" onClick={() => setOpen(!open)} aria-label={open ? t.closeMenu : t.openMenu}>{open ? <X size={20}/> : <Menu size={20}/>}</button>
    <nav className={open ? 'nav-links nav-open' : 'nav-links'}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    <div className="header-controls"><div className="language-switch" aria-label="Language selector"><Languages size={15}/>{['fr','en','ar'].map(code => <button key={code} type="button" className={lang === code ? 'language-active' : ''} onClick={() => setLang(code)} aria-pressed={lang === code}>{code.toUpperCase()}</button>)}</div>
    <button className="theme-toggle icon-button" onClick={() => setDark(!dark)} aria-label={t.theme}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button></div>
  </header>;
}

function ProjectCard({ project, t, lang }) {
  return <article className={`project-card ${project.featured ? 'project-featured' : ''}`}>
    <div className="project-top"><span className="project-number">{project.number} / {t.projectLabel}</span><span className="project-category">{project.category[lang]}</span></div>
    <div className="project-visual" aria-hidden="true">
    <div className="mock-window"> 
    <img src={project.image} alt={project.title}></img>
    <div className="mock-bar">
    {/*<i/><i/><i/><span>{project.title.toLowerCase().replace(/\s+/g,'-')}.app</span></div><div className="mock-content"><div className="mock-side"><b/><b/><b/><b/></div><div className="mock-main"><div className="mock-title"/><div className="mock-grid"><span/><span/><span/></div><div className="mock-lines"><i/><i/><i/></div></div>*/}

    </div>
    </div><span className="visual-label">{t.webApp}</span> 
    </div>
    <div className="project-body">
      <h3>{project.title}</h3>
      <p>{project.description[lang]}</p>
      <div className="tag-list">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
      <div className="project-links">
        <a href={project.links.github1} target="_blank" rel="noreferrer"><Github size={16}/> {t.source} 1<ArrowUpRight size={15}/></a>
       {project.links.github2 && <a href={project.links.github2} target="_blank" rel="noreferrer"><Github size={16}/> {t.source} 2<ArrowUpRight size={15}/></a>} 
       {project.links.github2 &&<a href={project.links.github3} target="_blank" rel="noreferrer"><Github size={16}/> {t.source} 3<ArrowUpRight size={15}/></a>}

        {project.links.demo && 
        <a href={project.links.demo} target="_blank" rel="noreferrer">{t.demo} 1<ExternalLink size={15}/></a>}
        {project.links.adminDemo && 
        <a href={project.links.adminDemo} target="_blank" rel="noreferrer">{t.demo} 2<ExternalLink size={15}/></a>}
        </div>
      </div>
  </article>;
}

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('portfolio-theme') !== 'light');
  const [lang, setLang] = useState(() => ['fr','en','ar'].includes(localStorage.getItem('portfolio-language')) ? localStorage.getItem('portfolio-language') : 'fr');
  const t = translations[lang];
  const isArabic = lang === 'ar';
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light'); }, [dark]);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    localStorage.setItem('portfolio-language', lang);
  }, [lang, isArabic]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);
  
  return <div className={isArabic ? 'app app-rtl' : 'app'}><Header dark={dark} setDark={setDark} lang={lang} setLang={setLang} t={t}/><main>
    <section className="hero section-wrap" id="accueil"><div className="hero-copy"><div className="availability"><span className="status-dot"/> {t.available} · {profile.location}</div><p className="eyebrow">{t.hello}</p><h1>{profile.name}<span className="hero-period">.</span></h1><h2>{t.role}</h2><p className="hero-description">{profile.intro[lang]}</p><div className="hero-actions"><a className="button button-primary" href="#projets">{t.projectsBtn} <ArrowDownRight size={18}/></a><a className="button button-secondary" href={`mailto:${profile.email}`}>{t.contactBtn} <Mail size={17}/></a></div><div className="hero-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a><span className="social-separator"/> <span className="mono-label">HTML · CSS · JS · REACT · PHP · LARAVEL</span></div></div>
      <div className="hero-art" aria-label="Code illustration"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="code-card"><div className="code-card-header"><div className="window-dots"><i/><i/><i/></div><span>developer.js</span><Code2 size={15}/></div><div className="code-lines"><p><span className="code-purple">const</span> developer <span className="code-pink">=</span> {'{'}</p><p className="indent"><span className="code-blue">name</span>: <span className="code-green">'{profile.name}'</span>,</p><p className="indent"><span className="code-blue">role</span>: <span className="code-green">'Full Stack Junior'</span>,</p><p className="indent"><span className="code-blue">{t.learning}</span>: <span className="code-orange">true</span>,</p><p className="indent"><span className="code-blue">building</span>: <span className="code-green">'{t.building}'</span></p><p>{'}'};</p><p className="code-comment">{t.codeComment}</p><p><span className="code-purple">while</span> (<span className="code-orange">true</span>) {'{'}</p><p className="indent">improve(); <span className="cursor"/></p><p>{'}'}</p></div></div><div className="floating-chip chip-react"><span>⚛</span> React</div><div className="floating-chip chip-php"><span>₱</span> PHP / Laravel</div><div className="hero-stamp"><span>BUILD</span><span>·</span><span>LEARN</span><span>·</span><span>REPEAT</span></div></div>
      <a className="scroll-hint" href="#apropos"><span className="scroll-line"/> {t.scroll}</a>
    </section>

    <section className="about section-wrap reveal" id="apropos"><SectionHeading eyebrow={t.aboutEyebrow} title={<>{t.aboutTitle}<br/><span className="text-muted">{t.aboutTitle2}</span></>} text={t.aboutText}/><div className="about-note"><span className="note-icon"><Code2 size={20}/></span><div><strong>{t.goal}</strong><p>{t.goalText}</p></div></div></section>
    <section className="skills-section section-wrap reveal" id="competences"><SectionHeading eyebrow={t.skillsEyebrow} title={t.skillsTitle} text={t.skillsText}/><div className="skills-grid">{skills.map((group, index) => <article className="skill-card" key={group.title}><div className="skill-card-head"><span>0{index + 1}</span><h3>{t[skillTitleKeys[group.title]] || group.title}</h3></div><div className="tag-list">{group.items.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div></section>
    <section className="projects-section section-wrap reveal" id="projets"><SectionHeading eyebrow={t.projectsEyebrow} title={t.projectsTitle} text={t.projectsText}/><div className="projects-grid">{projects.map(project => <ProjectCard key={project.number} project={project} t={t} lang={lang}/>)}</div><p className="project-footnote">{t.moreCode} <a href={profile.github} target="_blank" rel="noreferrer">{t.github} <ArrowUpRight size={13}/></a>.</p></section>
    <section className="journey-section section-wrap reveal" id="parcours"><SectionHeading eyebrow={t.journeyEyebrow} title={t.journeyTitle} text={t.journeyText}/><div className="timeline">{journey.map((item, i) => <article className="timeline-item" key={item.title.fr}><div className="timeline-marker">0{i + 1}</div><div className="timeline-content"><div className="timeline-meta"><span>{item.type[lang]}</span><time>{item.date}</time></div><h3>{item.title[lang]}</h3><p className="timeline-place">{item.place}</p><p className="timeline-description">{item.description[lang]}</p></div></article>)}</div></section>
    <section className="contact-section section-wrap reveal" id="contact"><div className="contact-panel"><div><p className="eyebrow">{t.contactEyebrow}</p><h2>{t.contactTitle}<br/><span>{t.contactTitle2}</span></h2><p className="contact-copy">{t.contactText}</p></div><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}?subject=${encodeURIComponent(lang === 'fr' ? 'Contact depuis mon portfolio' : lang === 'en' ? 'Contact from my portfolio' : 'تواصل من خلال ملف أعمالي')}`}>{t.sendEmail} <ArrowUpRight size={17}/></a><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a><a className="contact-github" href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> {t.viewGithub} <ArrowUpRight size={14}/></a></div></div></section>
  </main><footer className="site-footer"><a className="brand" href="#accueil"><span>{"<Redouane/>"}<span className="brand-dot">.</span></span></a><p>{t.footer}</p><span>© {new Date().getFullYear()} Redouane Skouti</span></footer></div>;
}
