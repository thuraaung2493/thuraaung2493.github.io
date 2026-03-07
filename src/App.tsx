import {
  ChevronRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  X
} from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { education, experience, personalInfo, skills, workflow } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'skills'];
      const scrollPosition = window.scrollY + 100;

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
      <div className="neon-rays" aria-hidden="true">
        <div className="ray"></div>
        <div className="ray"></div>
        <div className="ray"></div>
        <div className="ray"></div>
        <div className="ray"></div>
      </div>
      <div className="min-h-screen px-6 py-12 mx-auto font-sans max-w-7xl md:px-12 md:py-20 lg:px-24 lg:py-0">
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
                  className="object-cover w-32 h-32 border-2 rounded-full shadow-xl border-zinc-800"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold tracking-tight font-display text-zinc-100 sm:text-5xl"
              >
                {personalInfo.name}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-3 text-lg font-medium tracking-tight text-zinc-100 sm:text-xl"
              >
                {personalInfo.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-xs mt-4 leading-normal text-zinc-400"
              >
                Building scalable, high-quality web applications and APIs.
              </motion.p>

              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="hidden mt-16 nav lg:block"
              >
                <ul className="w-max">
                  {['about', 'experience', 'education', 'skills'].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href={`#${item}`}
                          className={`group flex items-center py-3 ${activeSection === item ? 'text-zinc-100' : 'text-zinc-500 hover:text-zinc-200'}`}
                        >
                          <span
                            className={`mr-4 h-px transition-all duration-300 ${activeSection === item ? 'w-16 bg-zinc-100' : 'w-8 bg-zinc-600 group-hover:w-16 group-hover:bg-zinc-200'}`}
                          ></span>
                          <span className="text-xs font-bold tracking-widest uppercase">
                            {item}
                          </span>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </motion.nav>
            </div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-5 mt-8 lg:mt-0"
            >
              <li>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-colors text-zinc-400 hover:text-zinc-100"
                >
                  <span className="sr-only">GitHub</span>
                  <Github className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-colors text-zinc-400 hover:text-zinc-100"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-colors text-zinc-400 hover:text-zinc-100"
                >
                  <span className="sr-only">Twitter</span>
                  <X className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.socials.cv}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-full border-zinc-700 bg-zinc-800/50 text-zinc-200 hover:bg-zinc-700 hover:text-white"
                >
                  <FileText className="w-4 h-4" />
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
              <div className="sticky top-0 z-20 w-screen px-6 py-5 mb-4 -mx-6 bg-zinc-950/75 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold tracking-widest uppercase text-zinc-100">
                  About
                </h2>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4 text-zinc-400"
              >
                <p>{personalInfo.bio}</p>

                <div className="grid grid-cols-1 gap-4 mt-8 text-sm sm:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-zinc-500" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-zinc-500" />
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="transition-colors hover:text-sky-400"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-zinc-500" />
                    <span>{personalInfo.phone}</span>
                  </div>
                </div>
              </motion.div>
            </section>

            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 w-screen px-6 py-5 mb-4 -mx-6 bg-zinc-950/75 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold tracking-widest uppercase text-zinc-100">
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
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header
                      className="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide uppercase text-zinc-500 sm:col-span-2"
                      aria-label={exp.period}
                    >
                      {exp.period}
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-zinc-200">
                        <div>
                          <span className="inline-flex items-center gap-1 text-base font-display">
                            {exp.role}
                          </span>
                        </div>
                        <div className="mt-1 text-sky-400" aria-hidden="true">
                          {exp.company}
                        </div>
                      </h3>
                      <div className="mt-2 space-y-2 text-sm leading-normal text-zinc-400">
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
              <div className="sticky top-0 z-20 w-screen px-6 py-5 mb-4 -mx-6 bg-zinc-950/75 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold tracking-widest uppercase text-zinc-100">
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
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header
                      className="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide uppercase text-zinc-500 sm:col-span-2"
                      aria-label={edu.period}
                    >
                      {edu.period}
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="text-base font-medium leading-snug text-zinc-200 font-display">
                        {edu.degree}
                      </h3>
                      <div className="mt-1 text-sm text-sky-400">
                        {edu.school}
                      </div>
                      {edu.description && (
                        <p className="mt-2 text-sm leading-normal text-zinc-400">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section
              id="skills"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 w-screen px-6 py-5 mb-4 -mx-6 bg-zinc-950/75 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold tracking-widest uppercase text-zinc-100">
                  Skills & Workflow
                </h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase text-zinc-200">
                  Technologies
                </h3>
                <ul className="flex flex-wrap gap-2 mb-10">
                  {skills.map((skill, index) => (
                    <li key={index}>
                      <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 rounded-full bg-sky-400/10 text-sky-300">
                        {skill}
                      </div>
                    </li>
                  ))}
                </ul>

                <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase text-zinc-200">
                  Workflow
                </h3>
                <ul className="space-y-3">
                  {workflow.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm text-zinc-400"
                    >
                      <ChevronRight className="flex-shrink-0 w-4 h-4 text-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </section>

            <footer className="max-w-md pb-16 text-sm text-zinc-500 sm:pb-0">
              <p>
                Designed with a minimalist approach. Built with React and
                Tailwind CSS.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
