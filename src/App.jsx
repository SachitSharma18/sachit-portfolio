export default function SachitPortfolio() {
  return (
    <div className="min-h-screen bg-[#07111f] text-white font-sans">

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-[#07111f]/90 backdrop-blur-md z-50 shadow-md">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
          <h1 className="text-2xl font-bold text-cyan-400">Sachit</h1>
          <div className="flex gap-8 text-sm">
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#certifications" className="hover:text-cyan-400">Certifications</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center max-w-7xl mx-auto px-8 pt-24">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">

          {/* Left */}
          <div>
            <h2 className="text-6xl font-bold leading-tight">
              Hi There, <br />
              I'm <span className="text-cyan-400">Sachit Sharma</span>
            </h2>

            <p className="mt-6 text-2xl text-gray-300">
              Cloud Computing Enthusiast | B.Tech CSE Student
            </p>

            <p className="mt-6 text-gray-400 leading-8 max-w-xl">
              I am a Computer Science undergraduate focused on cloud computing,
              scalable systems, and backend-oriented problem solving. My primary
              interest lies in building practical cloud-based solutions using
              modern infrastructure tools and continuously strengthening my
              technical foundation through hands-on development.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#about"
                className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400"
              >
                About Me
              </a>

              <a
                href="/resume.pdf"
                className="px-6 py-3 rounded-xl border border-cyan-400 hover:bg-cyan-400 hover:text-black"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-cyan-500/10 border border-cyan-400 flex items-center justify-center text-gray-400">
              Your Photo
            </div>
          </div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="bg-[#0c1a2b] rounded-2xl p-10 shadow-lg">
            <h3 className="text-4xl font-bold text-cyan-400">About Me</h3>
          </div>

          <div>
            <p className="text-gray-300 leading-8">
              I am currently pursuing B.Tech in Computer Science Engineering at
              Lovely Professional University, with a strong interest in cloud
              infrastructure, distributed systems, and practical software development.
            </p>

            <div className="mt-8 space-y-3 text-gray-400">
              <p>College: Lovely Professional University</p>
              <p>Graduation: 2027</p>
              <p>Location: Una, India</p>
            </div>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-7xl mx-auto px-8 py-24">
        <h3 className="text-4xl font-bold text-cyan-400 mb-12">Skills & Technologies</h3>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#0c1a2b] p-8 rounded-2xl shadow-lg">
            <h4 className="font-semibold mb-4">Languages</h4>
            <p className="text-gray-400">C++, Java, Python, JavaScript</p>
          </div>

          <div className="bg-[#0c1a2b] p-8 rounded-2xl shadow-lg">
            <h4 className="font-semibold mb-4">Cloud</h4>
            <p className="text-gray-400">AWS EC2, Lambda, S3, CloudFront, RDS</p>
          </div>

          <div className="bg-[#0c1a2b] p-8 rounded-2xl shadow-lg">
            <h4 className="font-semibold mb-4">Tools</h4>
            <p className="text-gray-400">Git, GitHub, VS Code, MySQL</p>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-8 py-24">
        <h3 className="text-4xl font-bold text-cyan-400 mb-12">Projects</h3>

        <div className="bg-[#0c1a2b] p-8 rounded-2xl shadow-lg">
          <h4 className="text-xl font-semibold">Project Placeholder</h4>
          <p className="text-gray-400 mt-3">Projects will be added here later.</p>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="max-w-7xl mx-auto px-8 py-24">
        <h3 className="text-4xl font-bold text-cyan-400 mb-12">Certifications</h3>

        <div className="bg-[#0c1a2b] p-8 rounded-2xl shadow-lg">
          <p className="text-gray-400">Certificates will be added later.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-8 py-24">
        <h3 className="text-4xl font-bold text-cyan-400 mb-8">Contact</h3>

        <div className="space-y-3 text-gray-400">
          <p>Email: sachituna18@gmail.com</p>
          <p>Phone: 9317413018</p>
          <p>GitHub: SachitSharma18</p>
          <p>Location: Una, India</p>
        </div>
      </section>

    </div>
  );
}