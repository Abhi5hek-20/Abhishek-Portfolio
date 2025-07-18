import { useRef } from "react";


const About = () => {
  const grid2Container = useRef();
  return (
    <div id="about" className="min-h-screen">
      {    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Top Left: About/Intro Card */}
        <div className="bg-[#23243a] rounded-2xl p-5 flex flex-col items-center text-center shadow-md">
          <div className="w-33 h-33 rounded-full bg-gradient-to-r from-cyan-400 via-purple-200 to-pink-300 flex items-center justify-center mb-2 overflow-hidden">
            <img src="assets/projects/zoro.jpg" alt="Profile" className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-lg" />
          </div>
          <p className="headtext text-white mb-2 text-2xl">Hi, I'm Abhishek</p>
          <p className="subtext text-white">I’m a passionate web developer with a strong interest in building dynamic, responsive, and user-centric web applications. I have hands-on experience with technologies like React, Node.js, and MongoDB, and I enjoy crafting solutions that are both functional and intuitive. My focus is on developing clean, efficient code and delivering smooth user experiences. Currently, I’m expanding my problem-solving skills by learning Data Structures in Java.</p>
        </div>
        {/* Top Right: Skills & Tech Stack Card */}
        <div className="bg-[#23243a] rounded-2xl p-6 shadow-md">
          <div className="z-10 w-full">
            <p className="headtext text-white mb-4">Skills & Tech Stack</p>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-md text-white mb-2">Languages</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded font-bold">JAVA</span>
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded font-bold">JAVASCRIPT</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded font-bold">C</span>
                  <span className="bg-blue-400 text-white px-3 py-1 rounded font-bold">PYTHON</span>
                </div>
              </div>
              <div>
                <p className="font-bold text-md text-white mb-2">Frontend</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-800 text-white px-3 py-1 rounded font-bold flex items-center"><img src="/assets/logos/react.svg" alt="React" className="w-5 h-5 mr-1"/>REACT</span>
                  <span className="bg-orange-600 text-white px-3 py-1 rounded font-bold flex items-center"><img src="/assets/logos/html5.svg" alt="HTML5" className="w-5 h-5 mr-1"/>HTML5</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded font-bold flex items-center"><img src="/assets/logos/tailwindcss.svg" alt="Tailwind CSS" className="w-5 h-5 mr-1"/>TAILWIND CSS</span>
                </div>
              </div>
              <div>
                <p className="font-bold text-md text-white mb-2">Backend & Database</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-black text-white px-3 py-1 rounded font-bold flex items-center"><img src="/assets/logos/node.svg" alt="Node.js" className="w-5 h-5 mr-1"/>NODE.JS</span>
                  <span className="bg-green-900 text-white px-3 py-1 rounded font-bold flex items-center"><img src="/assets/logos/express.svg" alt="Express.js" className="w-5 h-5 mr-1"/>EXPRESS.JS</span>
                  <span className="bg-green-900 text-white px-3 py-1 rounded font-bold flex items-center"><img src="/assets/logos/mongoDb.svg" alt="MongoDB" className="w-5 h-5 mr-1"/>MONGODB</span>
                  <span className="bg-black text-white px-3 py-1 rounded font-bold flex items-center"><img src="/assets/logos/sql.svg" alt="SQL" className="w-5 h-5 mr-1"/>SQL</span>
                </div>
              </div>
              <div>
                <p className="font-bold text-md text-white mb-2">Tools & Libraries</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-900 text-white px-3 py-1 rounded font-bold flex items-center"><img src="/assets/logos/git.svg" alt="Git" className="w-5 h-5 mr-1"/>GIT</span>
                  <span className="bg-white text-black px-3 py-1 rounded font-bold flex items-center"><img src="/assets/logos/socket.svg" alt="Socket.io" className="w-5 h-5 mr-1"/>SOCKET.IO</span>
                  <span className="bg-pink-900 text-white px-3 py-1 rounded font-bold flex items-center"><img src="/assets/logos/chart.svg" alt="Chart.js" className="w-5 h-5 mr-1"/>CHART.JS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Left: Education Card */}
        <div className="bg-[#23243a] rounded-2xl p-6 mt-0 shadow-md">
          <p className="font-bold text-2xl text-white mb-2">Education</p>
          <p className="font-bold text-white mb-1">Science and Engineering</p>
          <p className="text-white mb-1">CMR Technical Campus</p>
          <p className="text-white mb-1">(2023 - 2027)</p>
          <p className="font-bold text-white">CGPA: 8.76</p>
        </div>
        {/* Bottom Right: Want to work with me Card */}
        <div className="bg-[#23243a] rounded-[1rem] p-10 mt-0 flex flex-col items-center justify-center text-center ">
          <p className="headtext text-white mb-8 text-3xl font-bold drop-shadow-lg">Let's build something amazing together!</p><br />
          <a href="#contact" className="inline-block px-8 py-3 rounded-full text-cyan-400 font-semibold text-lg  hover:bg-[#23243a] hover:text-white transition-all duration-100" style={{boxShadow: '0 8px 32px 0 #232a50, 0 1.5px 8px 0 #232a35'}}>Contact Me</a>
        </div>
      </div>
    </section>}
    </div>


  );
};


export default About;
