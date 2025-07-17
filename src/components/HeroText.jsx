import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-5xl font-semibold text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Abhishek
        </motion.h1>
        <div className="flex flex-col items-start gap-2 mt-2">
          <motion.p
            className="text-4xl font-semibold text-white/90"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          > 
            Aspiring SDE | DSA Practitioner
          </motion.p>
          <motion.div
            className="mt-1"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={["Innovative", "Efficient", "Reliable"]}
              className="font-black text-white text-5xl"
            />
          </motion.div>
          <motion.p
            className="text-3xl font-semibold text-white/90 mt-1"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            MERN Stack Developer
          </motion.p>
          
        </div>
        {/* Buttons Row */}
        <div className="flex flex-col md:flex-row gap-3 mt-4 pt-6 translate-x-[-16%] rounded-lg w-full max-w-md  items-center justify-center">
          <a
            href="/ABHISHEK_RESUME.pdf"
            target="_blank" rel="noopener noreferrer"
            className="px-5 py-2 rounded-md flex items-center gap-2 font-semibold shadow-lg bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white hover:from-purple-600 hover:to-blue-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 border border-transparent w-full md:w-auto text-center justify-center"
            style={{ boxShadow: '0 4px 24px 0 rgba(80, 120, 255, 0.25)' }}
          >
            GET RESUME
          </a>
          {/* <a
            href="#projects"
            className="px-5 py-2 rounded-md font-semibold border border-blue-400 text-blue-200 bg-white/10 hover:bg-blue-600 hover:text-white hover:border-blue-500 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            style={{ boxShadow: '0 2px 12px 0 rgba(80, 120, 255, 0.10)' }}
          >
            View Projects
          </a> */}
          <a
            href="#contact"
            className="px-5 py-2 rounded-md font-semibold border border-purple-400 text-purple-200 bg-white/10 hover:bg-purple-600 hover:text-white hover:border-purple-500 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200 w-full md:w-auto text-center justify-center"
            style={{ boxShadow: '0 2px 12px 0 rgba(120, 80, 255, 0.10)' }}
          >
            Contact Me
          </a>
        </div>
       
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p
          className="text-3xl font-semibold text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Abhishek
        </motion.p>
        <div>
          <motion.p
            className="text-4xl font-bold text-white/90"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={["Innovative", "Efficient", "Reliable"]}
              className="font-bold text-white text-5xl"
            />
          </motion.div>
          <motion.p
            className="text-3xl font-bold text-white/90"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web & Software Solutions
          </motion.p>
        </div>
        <div className="flex flex-col md:hidden gap-3 mt-4  z-50 p-4 rounded-lg w-full max-w-md mx-auto items-center justify-center">
          <a
            href="/ABHISHEK_RESUME.PDF"
            download
            className="px-5 py-2 rounded-md flex items-center gap-2 font-semibold shadow-lg bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white hover:from-purple-600 hover:to-blue-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 border border-transparent w-full md:w-auto text-center justify-center"
            style={{ boxShadow: '0 4px 24px 0 rgba(80, 120, 255, 0.25)' }}
          >
            GET RESUME
          </a>
          {/* <a
            href="#projects"
            className="px-5 py-2 rounded-md font-semibold border border-blue-400 text-blue-200 bg-white/10 hover:bg-blue-600 hover:text-white hover:border-blue-500 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            style={{ boxShadow: '0 2px 12px 0 rgba(80, 120, 255, 0.10)' }}
          >
            View Projects
          </a> */}
          <a
            href="#contact"
            className="px-5 py-2 rounded-md font-semibold border border-purple-200 text-black bg-white hover:bg-purple-600 hover:text-white hover:border-purple-500 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200 w-full md:w-auto text-center justify-center"
            style={{ boxShadow: '0 2px 12px 0 rgba(120, 80, 255, 0.10)' }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
