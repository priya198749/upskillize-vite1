import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { ChevronDown } from "lucide-react";

function NavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
          isActive
            ? "text-indigo-600 font-semibold"
            : "text-gray-700 hover:text-indigo-600"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="w-full bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Upskillize Logo"
            className="w-40 h-auto object-contain"
          />
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden md:flex items-center gap-6 relative">
          {/* ABOUT DROPDOWN */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition">
              About <ChevronDown size={16} />
            </button>

            {/* DROPDOWN */}
            <div className="absolute left-0 top-full w-56 hidden group-hover:flex flex-col bg-white shadow-xl rounded-lg border z-50">
              <NavItem to="/about/upskillize">About Upskillize</NavItem>
              <NavItem to="/about/founder">Founder</NavItem>
              <NavItem to="/about/advisor">Advisor</NavItem>
            </div>
          </div>

          <NavItem to="/courses">Courses</NavItem>
          <NavItem to="/corporate">Corporate</NavItem>
          <NavItem to="/careers">Careers</NavItem>
          <NavItem to="/contact">Contact</NavItem>

          <Link
            to="/contact"
            className="ml-4 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
          >
            Start Learning
          </Link>
        </nav>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded border border-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <nav className="flex flex-col p-4 space-y-2">
            {/* MOBILE ABOUT */}
            <details className="group">
              <summary className="cursor-pointer px-3 py-2 text-sm font-medium text-gray-700 flex justify-between">
                About
                <ChevronDown size={16} />
              </summary>

              <div className="pl-4 mt-2 space-y-1">
                <NavItem to="/about/upskillize" onClick={() => setMenuOpen(false)}>
                  About Upskillize
                </NavItem>
                <NavItem to="/about/founder" onClick={() => setMenuOpen(false)}>
                  Founder
                </NavItem>
                <NavItem to="/about/advisor" onClick={() => setMenuOpen(false)}>
                  Advisor
                </NavItem>
              </div>
            </details>

            <NavItem to="/courses" onClick={() => setMenuOpen(false)}>
              Courses
            </NavItem>
            <NavItem to="/corporate" onClick={() => setMenuOpen(false)}>
              Corporate
            </NavItem>
            <NavItem to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavItem>
          </nav>
        </div>
      )}
    </header>
  );
}
