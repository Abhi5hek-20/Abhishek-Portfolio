import { GitBranchIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-col items-center gap-3 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      
      <div className="flex gap-5">
        <a href="https://www.linkedin.com/in/abhishek-a-125bb5322/" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon className="w-6 h-6 text-blue-600 md:text-white/70 hover:text-blue-600 transition-colors duration-200" />
        </a>
        <a href="https://github.com/Abhi5hek-20" target="_blank" rel="noopener noreferrer">
          <GithubIcon className="w-6 h-6 text-blue-600 md:text-white/70 hover:text-blue-600 transition-colors duration-200" />
        </a>
        <a href="https://x.com/Abhishek200408" target="_blank" rel="noopener noreferrer">
          <TwitterIcon className="w-6 h-6 text-blue-600 md:text-white/70 hover:text-blue-600 transition-colors duration-200" />
        </a>
      </div>
      
      <p className="text-ls text-neutral mt-2 text-center">&copy; 2025 A.Abhishek. All rights reserved</p>
    </section>
  );
};

export default Footer;
