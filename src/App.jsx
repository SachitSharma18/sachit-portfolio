export default function SachitPortfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="sticky top-0 bg-white shadow-sm z-10">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Sachit Sharma</h1>
          <div className="space-x-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#certifications" className="hover:underline">Certifications</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-4">Sachit Sharma</h2>
          <p className="text-xl text-gray-600 mb-6">Cloud Computing Enthusiast | B.Tech CSE Student</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            I am a Computer Science undergraduate focused on cloud computing, scalable systems, and backend-oriented problem solving. My primary interest lies in building practical cloud-based solutions using modern infrastructure tools and continuously strengthening my technical foundation through hands-on development.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="px-5 py-2 rounded-2xl shadow bg-black text-white">Contact Me</a>
            <a href="/resume.pdf" className="px-5 py-2 rounded-2xl shadow border">Download Resume</a>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-700 leading-relaxed">
          I am currently pursuing B.Tech in Computer Science Engineering at Lovely Professional University, with a strong interest in cloud infrastructure, distributed systems, and practical software development.
        </p>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold mb-8">Skills & Technologies</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl shadow">
            <h4 className="font-semibold mb-2">Languages</h4>
            <p>C++, Java, Python, JavaScript</p>
          </div>
          <div className="p-6 rounded-2xl shadow">
            <h4 className="font-semibold mb-2">Cloud</h4>
            <p>AWS EC2, Lambda, S3, CloudFront, RDS</p>
          </div>
          <div className="p-6 rounded-2xl shadow">
            <h4 className="font-semibold mb-2">Tools</h4>
            <p>Git, GitHub, VS Code, MySQL</p>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold mb-8">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl shadow">
            <h4 className="font-semibold">Project Placeholder</h4>
            <p className="text-gray-600 my-2">Project details will be added later.</p>
            <a href="#" className="text-blue-600">GitHub Link</a>
          </div>
        </div>
      </section>

      <section id="certifications" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold mb-8">Certifications</h3>
        <div className="p-6 rounded-2xl shadow">
          <p>Certificates will be added here later with clickable links.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold mb-8">Research / Patent</h3>
        <div className="p-6 rounded-2xl shadow">
          <h4 className="font-semibold">Self-Healing AI System</h4>
          <p className="text-gray-600 mt-2">
            A concept focused on autonomous software fault detection, diagnosis, and real-time repair using intelligent system behavior.
          </p>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold mb-8">Contact</h3>
        <div className="space-y-2 text-gray-700">
          <p>Email: sachituna18@gmail.com</p>
          <p>Phone: 9317413018</p>
          <p>Location: Una, India</p>
          <p>GitHub: SachitSharma18</p>
        </div>
      </section>
    </div>
  );
}
