import { useState } from "react";
import { motion } from "motion/react";
import { Link, animateScroll as scroll } from "react-scroll";

// Navigation Component
function Navigation({ onLinkClick }) {
  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Work", to: "work" },
    { name: "Contact", to: "contact" }
  ];

  return (
    <nav className="hidden sm:flex sm:space-x-20 space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={onLinkClick}
          className="text-neutral-300 hover:text-white transition-colors duration-200 cursor-pointer font-medium"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

// Mobile Navigation Component
function MobileNavigation({ isOpen, onLinkClick }) {
  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Work", to: "work" },
    { name: "Contact", to: "contact" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
      transition={{ duration: 0.2 }}
      className={`${
        isOpen ? "block" : "hidden"
      } absolute top-full left-0 right-0 bg-neutral-800/80 backdrop-blur-sm z-50 sm:hidden`}
    >
      <div className="px-4 py-6 space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={onLinkClick}
            className="block text-neutral-300 hover:text-white transition-colors duration-200 cursor-pointer font-medium py-2"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

// Hamburger Menu Button Component
function HamburgerButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center w-8 h-8 cursor-pointer text-neutral-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-neutral-900 sm:hidden transition-colors duration-200"
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
            className="text-2xl font-bold cursor-pointer transition-colors text-neutral-300 hover:text-white"
          >
            Abhishek
          </div>

          {/* Desktop Navigation */}
          <Navigation onLinkClick={handleLinkClick} />

          {/* Mobile Menu Button */}
          <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>

        {/* Mobile Navigation */}
        <MobileNavigation isOpen={isOpen} onLinkClick={handleLinkClick} />
      </div>
    </header>
  );
};

export default Navbar;