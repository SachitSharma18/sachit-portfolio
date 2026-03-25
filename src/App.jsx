import profileImg from "./assets/profile.jpg";

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
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">Cloud & Backend Focus</p>
              <h1>
                Hi There,
                <br />
                I&apos;m Sachit <span>Sharma</span>
              </h1>

              <p className="hero-role">
                Cloud Computing Enthusiast | B.Tech CSE Student
              </p>

              <p className="hero-intro">
                I am a Computer Science undergraduate focused on cloud computing,
                scalable systems, and backend-oriented problem solving. My primary
                interest lies in building practical cloud-based solutions using
                modern infrastructure tools and continuously strengthening my
                technical foundation through hands-on development.
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

            <div className="hero-image-wrap">
              <div className="profile-frame">
                <img src={profileImg} alt="Sachit Sharma" className="profile-image" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="container about-grid">
            <div className="about-card">
              <h3>Student Profile</h3>
              <p>Focused on cloud infrastructure and backend-oriented development.</p>
              <ul>
                <li>
                  <strong>College:</strong> Lovely Professional University
                </li>
                <li>
                  <strong>Graduation:</strong> 2027
                </li>
                <li>
                  <strong>Location:</strong> Una, India
                </li>
              </ul>
            </div>

            <div className="about-content">
              <h2>About Me</h2>
              <p>
                I am currently pursuing B.Tech in Computer Science Engineering at
                Lovely Professional University, with a strong interest in cloud
                infrastructure, distributed systems, and practical software
                development.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}