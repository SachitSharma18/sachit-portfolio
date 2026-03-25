import { FaGithub } from "react-icons/fa";

const qualifications = [
  {
    institution: "Lovely Professional University",
    program: "B.Tech Computer Science and Engineering",
    detail: "Punjab, India",
    period: "2023 – 2027",
    metricLabel: "CGPA",
    metricValue: "6.8",
  },
  {
    institution: "GSS School",
    program: "Senior Secondary (12th)",
    detail: "HPBOSE · Una, Himachal Pradesh",
    period: "2023",
    metricLabel: "Score",
    metricValue: "80%",
  },
  {
    institution: "Rock Ford Senior Secondary School",
    program: "Matriculation (10th)",
    detail: "CBSE · Una, Himachal Pradesh",
    period: "2021",
    metricLabel: "Score",
    metricValue: "82%",
  },
];

const projects = [
  {
    title: "ATM Management System",
    description:
      "C++ based ATM simulation with account creation, deposit, withdrawal, balance check, and file handling.",
    tech: ["C++", "File Handling", "OOP"],
    href: "https://github.com/SachitSharma18/atm-project",
  },
  {
    title: "Railway Reservation System",
    description:
      "C++ railway reservation system with booking, cancellation, passenger records, and seat management.",
    tech: ["C++", "File Handling", "OOP"],
    href: "https://github.com/SachitSharma18/railway-reservation-system-cpp",
  },
  {
    title: "RedBus Clone Project",
    description:
      "Python-based bus booking project with search, booking flow, and user interaction similar to RedBus.",
    tech: ["Python", "UI Logic", "Booking System"],
    href: "https://github.com/SachitSharma18/redbus_project",
  },
];

const certifications = [
  {
    title: "Introduction to Python",
    issuer: "Infosys Springboard",
    date: "February 2024",
    description:
      "Completed Python fundamentals course covering syntax, logic building, and programming basics.",
    pdf: "/certificates/python.pdf",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "October 2023",
    description:
      "Completed responsive web design certification covering HTML, CSS, layouts, and modern web page structuring.",
    pdf: "/certificates/webdesign.pdf",
  },
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    date: "Jul–Oct 2025",
    description:
      "Completed NPTEL certification in online privacy, digital security, and social media risk awareness. Elite certified with score 61%.",
    pdf: "/certificates/nptel.pdf",
  },
];

export default function App() {

  return (
    <div className="site">
      <header className="navbar-wrap">
        <nav className="navbar container" aria-label="Primary Navigation">
          <a href="#home" className="brand">
            Sachit Sharma
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-showcase">
            <p className="hero-meta">
              Computer Science Engineer &bull; ML Enthusiast &bull; Creative Developer
            </p>

            <h1 className="hero-name">
              <span className="hero-name-top">Sachit</span>
              <span className="hero-name-bottom">Sharma</span>
            </h1>

            <p className="hero-intro hero-intro-large">
              Building intelligent systems and practical cloud solutions - from
              backend workflows to machine learning experiments. Passionate about
              turning ideas into reliable, impactful products.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href="#about">
                About Me
              </a>
              <a className="btn btn-secondary" href="/resume.pdf">
                Download Resume
              </a>
              <a
                className="btn btn-ghost"
                href="https://github.com/SachitSharma18"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="container about-layout">
            <div className="about-left">
              <p className="eyebrow">About Me</p>
              <h2 className="about-heading">
                Crafting digital <span>experiences</span> with code.
              </h2>
            </div>

            <div className="about-right">
              <p>
                I&apos;m Sachit Sharma, a B.Tech Computer Science student at Lovely
                Professional University, Punjab. I work at the intersection of cloud
                infrastructure, backend engineering, and practical product
                development.
              </p>
              <p>
                From designing scalable backend systems to building useful web
                solutions, I enjoy solving real-world problems with clean
                architecture and thoughtful implementation.
              </p>
              <p>
                When I&apos;m not coding, I spend time exploring new technologies,
                sharpening problem-solving skills, and learning modern development
                workflows.
              </p>

              <div className="about-highlights">
                <div className="about-stat">
                  <strong>6.8</strong>
                  <span>CGPA at LPU</span>
                </div>
                <div className="about-stat">
                  <strong>2027</strong>
                  <span>Expected Graduation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section">
          <div className="container">
            <p className="eyebrow">Skills & Technologies</p>
            <h2 className="section-title">My Toolkit</h2>

            <div className="skills-grid">
              <article className="skill-card">
                <h3>Languages</h3>
                <div className="chip-wrap">
                  <span className="chip">C++</span>
                  <span className="chip">Python</span>
                  <span className="chip">C</span>
                  <span className="chip">HTML</span>
                  <span className="chip">CSS</span>
                </div>
              </article>

              <article className="skill-card">
                <h3>Tools & Platforms</h3>
                <div className="chip-wrap">
                  <span className="chip">Git & GitHub</span>
                  <span className="chip">Linux</span>
                  <span className="chip">AWS Basics</span>
                  <span className="chip">Docker Basics</span>
                  <span className="chip">VS Code</span>
                </div>
              </article>

              <article className="skill-card">
                <h3>Soft Skills</h3>
                <div className="chip-wrap">
                  <span className="chip">Problem Solving</span>
                  <span className="chip">Creativity</span>
                  <span className="chip">Fast Learning</span>
                  <span className="chip">Decision Making</span>
                  <span className="chip">Adaptability</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="projects section">
          <div className="container">
            <p className="eyebrow">Portfolio</p>
            <h2 className="section-title">Projects</h2>

            <div className="projects-grid">
              {projects.map((project) => (
                <article key={project.href} className="project-card">
                  <div className="project-card-head">
                    <h3 className="project-title">{project.title}</h3>
                    <a
                      className="project-github"
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub aria-hidden />
                    </a>
                  </div>
                  <p className="project-desc">{project.description}</p>
                  <p className="project-tech-label">Tech stack</p>
                  <div className="chip-wrap project-chips">
                    {project.tech.map((t) => (
                      <span key={t} className="chip chip-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="certifications section">
          <div className="container">
            <p className="eyebrow">Credentials</p>
            <h2 className="section-title">Certifications</h2>

            <div className="certifications-grid">
              {certifications.map((cert) => (
                <article key={cert.pdf} className="cert-card">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">Issued by {cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  <p className="cert-desc">{cert.description}</p>
                  <a
                    className="cert-link"
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="education section">
          <div className="container">
            <header className="education-header">
              <p className="eyebrow">Qualifications</p>
              <h2 className="section-title education-title">
                Education <span className="education-title-accent">&amp; milestones</span>
              </h2>
              <p className="education-lede">
                Academic path from school to engineering, with clear milestones along the way.
              </p>
            </header>

            <ol className="education-timeline" aria-label="Education timeline">
              {qualifications.map((q, i) => (
                <li key={q.institution} className="timeline-item">
                  <div className="timeline-track" aria-hidden>
                    <span className="timeline-dot" />
                    {i < qualifications.length - 1 ? (
                      <span className="timeline-line" />
                    ) : null}
                  </div>
                  <article className="timeline-card">
                    <div className="timeline-card-body">
                      <h3 className="timeline-institution">{q.institution}</h3>
                      <p className="timeline-program">{q.program}</p>
                      <p className="timeline-detail">{q.detail}</p>
                    </div>
                    <aside className="timeline-meta">
                      <span className="timeline-period">{q.period}</span>
                      <span className="timeline-score">
                        <span className="timeline-score-label">{q.metricLabel}</span>
                        <span className="timeline-score-value">{q.metricValue}</span>
                      </span>
                    </aside>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
    </div>
  );
}