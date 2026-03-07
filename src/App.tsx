import {
  Award,
  ChevronRight,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Package,
  Phone,
  Sun,
  X
} from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import {
  certificates,
  education,
  experience,
  personalInfo,
  projects,
  skills,
  workflow
} from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'about',
        'experience',
        'education',
        'certificates',
        'projects',
        'skills'
      ];
      const scrollPosition = window.scrollY + 100;

      // If we've scrolled to the bottom of the page, activate the last section
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        setActiveSection('skills');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 rounded-full bg-zinc-100 p-3 text-zinc-800 shadow-lg border border-zinc-200 transition-colors hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </button>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Sidebar */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="h-32 w-32 rounded-full border-2 border-zinc-200 object-cover shadow-xl dark:border-zinc-800"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl"
              >
                {personalInfo.name}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-3 text-lg font-medium tracking-tight text-zinc-800 dark:text-zinc-200 sm:text-xl"
              >
                {personalInfo.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 max-w-xs leading-normal text-zinc-600 dark:text-zinc-400"
              >
                Building scalable, high-quality web applications and APIs.
              </motion.p>

              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="nav hidden lg:block mt-16"
              >
                <ul className="w-max">
                  {[
                    'about',
                    'experience',
                    'education',
                    'certificates',
                    'projects',
                    'skills'
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item}`}
                        className={`group flex items-center py-3 ${activeSection === item ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-200'}`}
                      >
                        <span
                          className={`mr-4 h-px transition-all duration-300 ${activeSection === item ? 'w-16 bg-laravel' : 'w-8 bg-zinc-300 group-hover:w-16 group-hover:bg-zinc-600 dark:bg-zinc-700 dark:group-hover:bg-zinc-400'}`}
                        ></span>
                        <span
                          className={`text-xs font-bold uppercase tracking-widest ${activeSection === item ? 'text-laravel' : ''}`}
                        >
                          {item}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            </div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex items-center gap-5 lg:mt-0"
            >
              <li>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-zinc-500 hover:text-laravel transition-colors dark:text-zinc-400 dark:hover:text-laravel"
                >
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-zinc-500 hover:text-laravel transition-colors dark:text-zinc-400 dark:hover:text-laravel"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-zinc-500 hover:text-laravel transition-colors dark:text-zinc-400 dark:hover:text-laravel"
                >
                  <span className="sr-only">X</span>
                  <X className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.socials.cv}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:border-laravel hover:text-laravel dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-laravel dark:hover:text-laravel"
                >
                  <FileText className="h-4 w-4" />
                  <span>Resume</span>
                </a>
              </li>
            </motion.ul>
          </header>

          {/* Right Content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/90 px-6 py-5 backdrop-blur dark:bg-[#0a0a0a]/90 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100">
                  About
                </h2>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-zinc-600 space-y-4 dark:text-zinc-400"
              >
                <p>{personalInfo.bio}</p>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 text-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-laravel" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-laravel" />
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="hover:text-laravel transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-laravel" />
                    <span>{personalInfo.phone}</span>
                  </div>
                </div>
              </motion.div>
            </section>

            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/90 px-6 py-5 backdrop-blur dark:bg-[#0a0a0a]/90 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100">
                  Experience
                </h2>
              </div>
              <div className="group/list">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-12 group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                  >
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg dark:lg:group-hover:bg-zinc-800/30"></div>
                    <header
                      className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
                      aria-label={exp.period}
                    >
                      {exp.period}
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-zinc-900 dark:text-zinc-200">
                        <div>
                          <span className="inline-flex items-center gap-1 font-display text-base group-hover:text-laravel transition-colors">
                            {exp.role}
                          </span>
                        </div>
                        <div
                          className="text-zinc-500 mt-1 dark:text-zinc-400"
                          aria-hidden="true"
                        >
                          {exp.company}
                        </div>
                      </h3>
                      <div className="mt-2 text-sm leading-normal text-zinc-600 space-y-2 dark:text-zinc-400">
                        {exp.description.map((desc, i) => (
                          <p key={i}>{desc}</p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section
              id="education"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/90 px-6 py-5 backdrop-blur dark:bg-[#0a0a0a]/90 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100">
                  Education
                </h2>
              </div>
              <div className="group/list">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-12 group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                  >
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg dark:lg:group-hover:bg-zinc-800/30"></div>
                    <header
                      className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
                      aria-label={edu.period}
                    >
                      {edu.period}
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-zinc-900 font-display text-base dark:text-zinc-200 group-hover:text-laravel transition-colors">
                        {edu.degree}
                      </h3>
                      <div className="text-zinc-500 mt-1 text-sm dark:text-zinc-400">
                        {edu.school}
                      </div>
                      {edu.description && (
                        <p className="mt-2 text-sm leading-normal text-zinc-600 dark:text-zinc-400">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section
              id="certificates"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/90 px-6 py-5 backdrop-blur dark:bg-[#0a0a0a]/90 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100">
                  Certificates
                </h2>
              </div>
              <div className="group/list">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-12 group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                  >
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg dark:lg:group-hover:bg-zinc-800/30"></div>
                    <header
                      className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
                      aria-label={cert.date}
                    >
                      {cert.date}
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-zinc-900 font-display text-base dark:text-zinc-200">
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 hover:text-laravel transition-colors focus-visible:text-laravel"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>{cert.title}</span>
                          <ExternalLink className="h-4 w-4 ml-1 inline-block" />
                        </a>
                      </h3>
                      <div className="text-zinc-500 mt-1 text-sm dark:text-zinc-400 flex items-center gap-2">
                        <Award className="h-4 w-4 text-laravel" />
                        {cert.issuer}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/90 px-6 py-5 backdrop-blur dark:bg-[#0a0a0a]/90 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100">
                  Open Source Projects
                </h2>
              </div>
              <div className="group/list">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-12 group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                  >
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg dark:lg:group-hover:bg-zinc-800/30"></div>
                    <header
                      className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
                      aria-label="NPM Package"
                    >
                      <div className="flex items-center gap-1">
                        <Package className="h-4 w-4" />
                        <span>NPM</span>
                      </div>
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-zinc-900 font-display text-base dark:text-zinc-200">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 hover:text-laravel transition-colors focus-visible:text-laravel"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>{project.name}</span>
                          <ExternalLink className="h-4 w-4 ml-1 inline-block" />
                        </a>
                      </h3>
                      <p className="mt-2 text-sm leading-normal text-zinc-600 dark:text-zinc-400">
                        {project.description}
                      </p>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="relative mt-3 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-laravel dark:text-zinc-400 dark:hover:text-laravel transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        <span>View Source</span>
                      </a>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <li key={i}>
                            <div className="flex items-center rounded-full bg-laravel/10 px-3 py-1 text-xs font-medium leading-5 text-laravel border border-laravel/20">
                              {tag}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section
              id="skills"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/90 px-6 py-5 backdrop-blur dark:bg-[#0a0a0a]/90 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100">
                  Skills & Workflow
                </h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-semibold text-zinc-900 mb-4 uppercase tracking-wider dark:text-zinc-200">
                  Technologies
                </h3>
                <ul className="flex flex-wrap gap-2 mb-10">
                  {skills.map((skill, index) => (
                    <li key={index}>
                      <div className="flex items-center rounded-full bg-laravel/10 px-3 py-1 text-xs font-medium leading-5 text-laravel border border-laravel/20">
                        {skill}
                      </div>
                    </li>
                  ))}
                </ul>

                <h3 className="text-sm font-semibold text-zinc-900 mb-4 uppercase tracking-wider dark:text-zinc-200">
                  Workflow
                </h3>
                <ul className="space-y-3">
                  {workflow.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400"
                    >
                      <ChevronRight className="h-4 w-4 text-laravel flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </section>

            <footer className="max-w-md pb-16 text-sm text-zinc-500 sm:pb-0">
              <p>
                Designed and engineered by Thura Aung. Powered by React and
                Tailwind CSS, and generated by Google AI Studio.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
