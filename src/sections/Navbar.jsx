import { useState } from "react";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  Home,
  User,
  Code,
  Mail
} from "lucide-react";

// Navigation Component (Desktop)
function Navigation({ onLinkClick }) {
  const navItems = [
    { name: "Home", to: "home", icon: <Home className="w-5 h-5" /> },
    { name: "About", to: "about", icon: <User className="w-5 h-5" /> },
    { name: "Work", to: "work", icon: <Code className="w-5 h-5" /> },
    { name: "Contact", to: "contact", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <nav className="hidden sm:flex space-x-10 px-6 py-3 ">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={onLinkClick}
          className="group relative text-neutral-200 hover:text-white transition-colors duration-200 cursor-pointer text-lg font-medium flex items-center gap-2"
        >
          {/* icon + label */}
          <span className="flex items-center gap-2">
            {item.icon}
            {item.name}
          </span>

          {/* animated underline */}
          <span
  aria-hidden="true"
  className="pointer-events-none absolute rounded-4xl left-0.5 top-7 h-[3px] w-0 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 transition-all duration-200 group-hover:w-[98%]"
/>

        </Link>
      ))}
    </nav>
  );
}

// Mobile Navigation Component
function MobileNavigation({ isOpen, onLinkClick }) {
  const navItems = [
    { name: "Home", to: "home", icon: <Home className="w-5 h-5" /> },
    { name: "About", to: "about", icon: <User className="w-5 h-5" /> },
    { name: "Work", to: "work", icon: <Code className="w-5 h-5" /> },
    { name: "Contact", to: "contact", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
      transition={{ duration: 0.2 }}
      className={`${
        isOpen ? "block" : "hidden"
      } absolute h-[100vh] w-[100vw] left-0 right-0 bg-black/80 backdrop-blur-sm z-50 sm:hidden flex justify-center`}
    >
      <div className=" space-y-4  h-fit mt-30">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={onLinkClick}
            className="group relative block text-neutral-300 hover:text-white transition-colors duration-200 cursor-pointer font-medium py-2 text-xl"
          >
            <span className="flex items-center gap-3">
              {item.icon}
              {item.name}
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-6 bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-[88%]"
            />
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

// Hamburger Menu Button
function HamburgerButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center w-8 h-8 cursor-pointer text-neutral-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-neutral-900 sm:hidden transition-colors duration-200"
      aria-label="Toggle mobile menu"
    >
      <motion.span
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 8 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="block w-6 h-0.5 bg-current mb-1"
      />
      <motion.span
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
        className="block w-6 h-0.5 bg-current mb-1"
      />
      <motion.span
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -8 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="block w-6 h-0.5 bg-current"
      />
    </button>
  );
}

// Main Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close mobile menu on link click
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-800/60 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:mr-12">
          {/* Logo */}
          <div
            onClick={scrollToTop}
            className="cursor-pointer transition-colors text-neutral-300 hover:text-white"
          >
            <p className="text-3xl ml-4 sm:ml-20 bg-gradient-to-r from-purple-500 via-pink-400 to-indigo-400 bg-clip-text text-transparent font-bold">
              abhi.dev /
            </p>
          </div>

          {/* Desktop Navigation */}
          <Navigation onLinkClick={handleLinkClick} />

          {/* Mobile Menu Button */}
          <HamburgerButton 
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen) }
          />
        </div>

        {/* Mobile Navigation */}
        <MobileNavigation 
          isOpen={isOpen}
          onLinkClick={handleLinkClick}
        />
      </div>
    </header>
  );
};

export default Navbar;
