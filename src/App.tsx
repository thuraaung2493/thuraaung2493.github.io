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
import { useEffect, useRef, useState } from 'react';
import {
  certificates,
  education,
  experience,
  personalInfo,
  projects,
  skills,
  workflow
} from './data';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'background', label: 'Background' },
  { id: 'contact', label: 'Contact' }
];

const socialLinks = [
  { label: 'GitHub', href: personalInfo.socials.github, Icon: Github },
  { label: 'LinkedIn', href: personalInfo.socials.linkedin, Icon: Linkedin },
  { label: 'X', href: personalInfo.socials.twitter, Icon: X }
];

function SectionHeading({ id, title, description }: {
  id: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="section-heading">
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}

export default function App() {
  const headerRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Theme switching also works when browser storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      frame = 0;
      const headerHeight = Math.ceil(
        headerRef.current?.getBoundingClientRect().height ?? 0
      );
      document.documentElement.style.setProperty(
        '--header-height', `${headerHeight}px`
      );
      let current = sections[0].id;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        // Anchor scrolling rounds to device pixels; section bounds can remain fractional.
        if (element && element.getBoundingClientRect().top <= headerHeight + 24 + 1) {
          current = section.id;
        }
      }
      if (
        window.scrollY > 0 &&
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50
      ) {
        current = sections[sections.length - 1].id;
      }
      setActiveSection(current);
    };
    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };
    const observer = typeof ResizeObserver === 'undefined'
      ? null
      : new ResizeObserver(handleScroll);

    updateActiveSection();
    if (headerRef.current) observer?.observe(headerRef.current);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div id="top" className="studio-portfolio">
      <a href="#main-content" className="skip-link">Skip to content</a>

      <header ref={headerRef} className="site-header">
        <div className="site-header-inner page-width">
          <a href="#top" className="site-brand">{personalInfo.name}</a>
          <nav className="site-nav" aria-label="Portfolio sections">
            <ul>
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={activeSection === id ? 'location' : undefined}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            onClick={() => setTheme(current => current === 'dark' ? 'light' : 'dark')}
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark'
              ? <Sun aria-hidden="true" size={19} />
              : <Moon aria-hidden="true" size={19} />}
          </button>
        </div>
      </header>

      <main id="main-content" tabIndex={-1} className="page-width">
        <section id="about" aria-labelledby="about-heading" className="about-section">
          <div className="hero">
            <div className="hero-portrait">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                width="96"
                height="96"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="hero-role">{personalInfo.title}</p>
            <h1>{personalInfo.name}</h1>
            <p className="hero-headline">{personalInfo.headline}</p>
            <p className="hero-opportunities">{personalInfo.opportunities}</p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                View projects <ChevronRight aria-hidden="true" size={17} />
              </a>
              <a
                href={personalInfo.socials.cv}
                target="_blank"
                rel="noreferrer"
                aria-label="View resume (opens in a new tab)"
                className="button button-secondary"
              >
                <FileText aria-hidden="true" size={16} /> Resume
              </a>
              <a href="#contact" className="text-link">Get in touch</a>
            </div>
            <ul className="social-links" aria-label="Social links">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer">
                    <span className="sr-only">{label}</span>
                    <Icon aria-hidden="true" size={20} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-layout">
            <div>
              <SectionHeading id="about-heading" title="About" />
              <p className="about-bio">{personalInfo.bio}</p>
            </div>
            <ul className="contact-details" aria-label="Contact details">
              <li><MapPin aria-hidden="true" size={18} /><span>{personalInfo.location}</span></li>
              <li>
                <Mail aria-hidden="true" size={18} />
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </li>
              <li>
                <Phone aria-hidden="true" size={18} />
                <a href={`tel:${personalInfo.phone.replace(/[^\d+]/g, '')}`}>
                  {personalInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-heading" className="portfolio-section">
          <SectionHeading
            id="projects-heading"
            title="Featured Projects"
            description="Open-source packages and tools for Laravel business rules, schema-driven forms, Myanmar data, and TypeScript APIs."
          />
          <div className="project-grid">
            {projects.map(project => (
              <article key={project.id} aria-labelledby={`${project.id}-title`} className="project-card soft-surface">
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  width="1774"
                  height="887"
                  loading="lazy"
                  decoding="async"
                  className="project-preview"
                />
                <p className="project-category"><Package aria-hidden="true" size={15} />{project.category}</p>
                <h3 id={`${project.id}-title`}>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-detail">
                  <h4>The problem</h4>
                  <p>{project.problem}</p>
                </div>
                <div className="project-detail">
                  <h4>What it does</h4>
                  <ul className="description-list">
                    {project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
                <details className="project-example">
                  <summary>{project.exampleLabel}</summary>
                  <pre><code>{project.example}</code></pre>
                </details>
                <ul className="tag-list" aria-label="Technologies">
                  {project.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="project-links">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.linkLabel} for ${project.name} (opens in a new tab)`}
                    className="text-link"
                  >
                    {project.linkLabel}<ExternalLink aria-hidden="true" size={15} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.name} source (opens in a new tab)`}
                    className="text-link secondary-link"
                  >
                    <Github aria-hidden="true" size={16} />View source
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-heading" className="portfolio-section">
          <SectionHeading id="experience-heading" title="Experience" />
          <ol className="experience-list">
            {experience.map(exp => (
              <li key={exp.company} className="experience-item">
                <p className="entry-period">{exp.period}</p>
                <div className="experience-content">
                  <h3>{exp.role}</h3>
                  <p className="entry-organization">{exp.company}</p>
                  <ul className="description-list">
                    {exp.description.map(description => <li key={description}>{description}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="background" aria-labelledby="background-heading" className="portfolio-section">
          <SectionHeading id="background-heading" title="Background" />

          <section id="skills" aria-labelledby="skills-heading" className="background-subsection">
            <h3 id="skills-heading" className="background-heading">Skills & Workflow</h3>
            <div className="skills-layout">
              <div>
                <h4 className="subsection-title">Technologies</h4>
                <ul className="tag-list skills-tags">
                  {skills.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="subsection-title">Workflow</h4>
                <ul className="workflow-list">
                  {workflow.map(item => (
                    <li key={item}><ChevronRight aria-hidden="true" size={17} /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="certificates" aria-labelledby="certificates-heading" className="background-subsection">
            <h3 id="certificates-heading" className="background-heading">Certificates</h3>
            <ul className="credential-grid">
              {certificates.map(cert => (
                <li key={cert.title}>
                  <a href={cert.url} target="_blank" rel="noreferrer" className="credential-card soft-surface">
                    <Award aria-hidden="true" size={25} className="credential-icon" />
                    <div>
                      <h4>{cert.title}</h4>
                      <p>{cert.issuer}</p>
                      <span className="credential-action">{cert.date}<ExternalLink aria-hidden="true" size={15} /></span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section id="education" aria-labelledby="education-heading" className="background-subsection">
            <h3 id="education-heading" className="background-heading">Education</h3>
            <div className="education-grid">
              {education.map(edu => (
                <article key={`${edu.school}-${edu.degree}`} className="education-entry">
                  <p className="entry-period">{edu.period}</p>
                  <h4>{edu.degree}</h4>
                  <p className="entry-organization">{edu.school}</p>
                  {edu.description && <p className="education-description">{edu.description}</p>}
                </article>
              ))}
            </div>
          </section>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="contact-section soft-surface">
          <h2 id="contact-heading">Let's connect</h2>
          <p>{personalInfo.contactIntro}</p>
          <div className="contact-actions">
            <a href={`mailto:${personalInfo.email}`} className="button button-primary">
              <Mail aria-hidden="true" size={17} />Email me
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Connect on LinkedIn (opens in a new tab)"
              className="button button-secondary"
            >
              <Linkedin aria-hidden="true" size={17} />LinkedIn
            </a>
          </div>
        </section>

        <footer className="site-footer">
          <p>
            Designed and engineered by Thura Aung. Powered by React and
            Tailwind CSS, and generated by Google AI Studio.
          </p>
        </footer>
      </main>
    </div>
  );
}
