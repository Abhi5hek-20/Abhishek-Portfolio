import { useState } from "react";
import { motion } from "motion/react";
import { Link, animateScroll as scroll } from "react-scroll";

// Navigation Component
function Navigation({ onLinkClick }) {
  return (
    <ul className="nav-ul">
      <li className="nav-li ">
        <Link
          className="nav-link cursor-pointer"
          to="home"
          smooth={true}
          duration={500}
          offset={-50}
          onClick={onLinkClick}
        >
          Home
        </Link>
      </li>
      <li className="nav-li">
        <Link
          className="nav-link cursor-pointer"
          to="about"
          smooth={true}
          duration={300}
          offset={-50}
          onClick={onLinkClick}
        >
          About
        </Link>
      </li>
      <li className="nav-li">
        <Link
          className="nav-link cursor-pointer"
          to="work"
          smooth={true}
          duration={300}
          offset={-50}
          onClick={onLinkClick}
        >
          Work
        </Link>
      </li>
      <li className="nav-li">
        <Link
          className="nav-link cursor-pointer"
          to="contact"
          smooth={true}
          duration={300}
          offset={-50}
          onClick={onLinkClick}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close mobile menu on link click
  };

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 h-15">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex justify-between pt-2">
          <span
            onClick={() => scroll.scrollToTop()}
            className="text-2xl font-bold cursor-pointer transition-colors text-neutral-300 hover:text-white pt-1"
          >
            Abhishek
          </span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="block backdrop-blur-sm overflow-hidden text-end  flex flex-col items-center sm:hidden bg-white/10"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation onLinkClick={handleLinkClick} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
