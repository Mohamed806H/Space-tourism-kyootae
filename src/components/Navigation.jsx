import logo from "/assets/shared/logo.svg";
import hamburger from "/assets/shared/icon-hamburger.svg";
import close from "/assets/shared/icon-close.svg";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import data from "../data.json";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between pl-6 md:pl-12 pt-6 lg:pt-10 z-50">
      {/* Logo */}
      <Link to="/" className="shrink-0">
        <img src={logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12" />
      </Link>

      {/* Decorative Line (Desktop) */}
      <div className="hidden lg:block h-px bg-white/20 grow relative z-20 -mr-8 ml-16"></div>

      {/* Navigation Container */}
      <nav>
        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center bg-white/5 backdrop-blur-md border border-white/10 px-12 lg:px-20">
          <ul className="flex items-center gap-8 lg:gap-12 font-barlow text-sm lg:text-base tracking-[2.7px] uppercase">
            {data.navigation.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center py-8 border-b-2 transition-all duration-300 ${
                      isActive
                        ? "border-white text-white"
                        : "border-transparent hover:border-white/50 text-white"
                    }`
                  }
                >
                  <span className="mr-3 font-bold">{link.number}</span>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="sm:hidden pr-6 z-50 relative focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          <img
            src={isOpen ? close : hamburger}
            alt="Menu Toggle"
            className="w-5 h-5"
          />
        </button>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-63.5 z-40 bg-white/5 backdrop-blur-2xl border-l border-white/10 pt-32 pl-8 pr-6 flex flex-col transition-transform duration-300 ease-in-out sm:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-8 text-base font-barlow tracking-[2.7px] uppercase">
            {data.navigation.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 text-white transition duration-300 ${
                      isActive ? "font-bold" : "hover:text-gray-300"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-bold">{link.number}</span>
                  <span className="font-light">{link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
