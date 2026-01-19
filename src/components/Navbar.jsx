import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAcademicOpen, setIsAcademicOpen] = useState(false);
  const [isCorporatesOpen, setIsCorporatesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsAcademicOpen(false);
    setIsCorporatesOpen(false);
    setIsProductsOpen(false);
  };

  const toggleAcademic = (e) => {
    e.preventDefault();
    setIsAcademicOpen(!isAcademicOpen);
  };

  const toggleCorporates = (e) => {
    e.preventDefault();
    setIsCorporatesOpen(!isCorporatesOpen);
  };

  const toggleProducts = (e) => {
    e.preventDefault();
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <>
      <style>{`
        /* ===== FIXED CONTAINER ===== */
        .navbar-fixed-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 9999;
        }

        /* ===== MAIN NAVBAR ===== */
        .main-navbar {
          background-color: white;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
        }

        .main-navbar.scrolled {
          background-color: white;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .navbar-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        /* ===== LOGO ===== */
        .logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo-image {
          height: 45px;
          width: auto;
          display: block;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: bold;
          color: #4f46e5;
          display: none;
          margin-left: 0.5rem;
        }

        /* ===== DESKTOP NAV WRAPPER ===== */
        .desktop-nav-wrapper {
          display: none;
          flex: 1;
          align-items: center;
          justify-content: space-between;
        }

        @media (min-width: 768px) {
          .desktop-nav-wrapper {
            display: flex;
          }
        }

        /* ===== DESKTOP NAV ===== */
        .desktop-nav-left {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .desktop-nav-right {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          margin-left: auto;
        }

        .nav-link {
          color: #1f2937;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem;
          transition: all 0.2s;
          position: relative;
          white-space: nowrap;
        }

        .nav-link:hover {
          color: #374151;
          background: #f3f4f6;
        }

        /* ===== DROPDOWN STYLES ===== */
        .nav-dropdown {
          position: relative;
        }

        .dropdown-trigger {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: #1f2937;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.2s;
          background: transparent;
          border: none;
          white-space: nowrap;
        }

        .dropdown-trigger:hover {
          color: #374151;
          background: #f3f4f6;
        }

        .dropdown-icon {
          transition: transform 0.2s;
        }

        .dropdown-trigger:hover .dropdown-icon {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 0.5rem;
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          min-width: 280px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.2s;
        }

        .nav-dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-link {
          display: block;
          padding: 0.75rem 1rem;
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9rem;
          transition: all 0.2s;
        }

        .dropdown-link:hover {
          background: #f3f4f6;
          color: #1f2937;
        }

        .dropdown-link:first-child {
          border-radius: 0.5rem 0.5rem 0 0;
        }

        .dropdown-link:last-child {
          border-radius: 0 0 0.5rem 0.5rem;
        }

        /* ===== MOBILE MENU BUTTON ===== */
        .mobile-menu-btn {
          display: flex;
          padding: 0.5rem;
          border: none;
          background: transparent;
          cursor: pointer;
          color: #374151;
        }

        @media (min-width: 768px) {
          .mobile-menu-btn {
            display: none;
          }
        }

        /* ===== MOBILE MENU ===== */
        .mobile-menu {
          position: fixed;
          top: 65px;
          left: 0;
          right: 0;
          bottom: 0;
          background: white;
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
          overflow-y: auto;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        @media (min-width: 768px) {
          .mobile-menu {
            display: none;
          }
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          padding: 1rem;
        }

        .mobile-link {
          display: block;
          padding: 1rem;
          color: #374151;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.05rem;
          border-radius: 0.5rem;
          margin-bottom: 0.5rem;
          transition: background 0.2s;
        }

        .mobile-link:hover {
          background: #f3f4f6;
        }

        .mobile-dropdown-trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          color: #374151;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.05rem;
          border-radius: 0.5rem;
          margin-bottom: 0.5rem;
          background: transparent;
          border: none;
          width: 100%;
          cursor: pointer;
          transition: background 0.2s;
        }

        .mobile-dropdown-trigger:hover {
          background: #f3f4f6;
        }

        .mobile-dropdown-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
          padding-left: 1rem;
        }

        .mobile-dropdown-content.open {
          max-height: 800px;
        }

        .mobile-dropdown-link {
          display: block;
          padding: 0.75rem 1rem;
          color: #6b7280;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          border-radius: 0.5rem;
          margin-bottom: 0.25rem;
          transition: all 0.2s;
        }

        .mobile-dropdown-link:hover {
          background: #f3f4f6;
          color: #374151;
        }

        /* ===== SPACER ===== */
        .navbar-spacer {
          height: 65px;
          width: 100%;
        }

        @media (max-width: 767px) {
          .navbar-content {
            padding: 0.5rem 0.75rem;
          }

          .logo-image {
            height: 40px;
          }
        }

        @media (max-width: 480px) {
          .logo-image {
            height: 35px;
          }
        }
      `}</style>
      <div className="navbar-fixed-container">        
        {/* Main Navbar */}
        <header className={`main-navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div className="navbar-content"> 
            {/* Logo */}
            <a href="/" className="logo-link" onClick={closeMobileMenu}>
              <img
                src="/images/logo.png"
                alt="Upskillize"
                className="logo-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'inline-block';
                }}
              />
              <span className="logo-text">Upskillize</span>
            </a>
            {/* Desktop Navigation */}
            <div className="desktop-nav-wrapper">
              {/* Left Navigation */}
              <nav className="desktop-nav-left">
                {/* Academic Dropdown */}
                <div className="nav-dropdown">
                  <button className="dropdown-trigger">
                    Academic
                    <ChevronDown size={16} className="dropdown-icon" />
                  </button>
                  <div className="dropdown-menu">
                    <a href="/courses/ai-fintech" className="dropdown-link">AI in FinTech</a>
                    <a href="/courses/product-leadership" className="dropdown-link">Product Leadership</a>
                    <a href="/courses/data-analytics-genai" className="dropdown-link">Data Analytics, GenAI & Business Intelligence</a>
                    <a href="/courses/technology-digital-transformation" className="dropdown-link">Technology & Digital Transformation</a>
                    <a href="/courses/integrated-courses" className="dropdown-link">Integrated Courses</a>
                    <a href="/courses/cybersecurity" className="dropdown-link">Cybersecurity</a>
                    <a href="/courses/mental-health-wellness" className="dropdown-link">Mental Health & Social Wellness</a>
                  </div>
                </div>
                
                {/* Corporates Dropdown */}
                <div className="nav-dropdown">
                  <button className="dropdown-trigger">
                    Corporates
                    <ChevronDown size={16} className="dropdown-icon" />
                  </button>
                  <div className="dropdown-menu">
                    <a href="/corporate/consulting" className="dropdown-link">Business Consulting</a>
                    <a href="/corporate/training" className="dropdown-link">Corporate Training</a>
                  </div>
                </div>

                {/* Products Dropdown */}
                <div className="nav-dropdown">
                  <button className="dropdown-trigger">
                    Products
                    <ChevronDown size={16} className="dropdown-icon" />
                  </button>
                  <div className="dropdown-menu">
                    <a href="/products/gdpr" className="dropdown-link">GDPR</a>
                    <a href="/products/opti-cost" className="dropdown-link">Opticost</a>
                    <a href="/products/vra-platform" className="dropdown-link">VRA Platform</a>
                  </div>
                </div>
              </nav>
              {/* Right Side Navigation */}
              <nav className="desktop-nav-right">
                <a href="/about" className="nav-link">About</a>
                <a href="/contact" className="nav-link">Contact Us</a>
              </nav>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </header>
        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            {/* Mobile Academic Dropdown */}
            <div>
              <button onClick={toggleAcademic} className="mobile-dropdown-trigger">
                Academic
                <ChevronDown size={20} className={`dropdown-icon ${isAcademicOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`mobile-dropdown-content ${isAcademicOpen ? 'open' : ''}`}>
                <a href="/courses/ai-fintech" onClick={closeMobileMenu} className="mobile-dropdown-link">AI in FinTech</a>
                <a href="/courses/product-leadership" onClick={closeMobileMenu} className="mobile-dropdown-link">Product Leadership</a>
                <a href="/courses/data-analytics-genai" onClick={closeMobileMenu} className="mobile-dropdown-link">Data Analytics, GenAI & Business Intelligence</a>
                <a href="/courses/technology-digital-transformation" onClick={closeMobileMenu} className="mobile-dropdown-link">Technology & Digital Transformation</a>
                <a href="/courses/integrated-courses" onClick={closeMobileMenu} className="mobile-dropdown-link">Integrated Courses</a>
                <a href="/courses/cybersecurity" onClick={closeMobileMenu} className="mobile-dropdown-link">Cybersecurity</a>
                <a href="/courses/mental-health-wellness" onClick={closeMobileMenu} className="mobile-dropdown-link">Mental Health & Social Wellness</a>
              </div>
            </div>
            
            {/* Mobile Corporates Dropdown */}
            <div>
              <button onClick={toggleCorporates} className="mobile-dropdown-trigger">
                Corporates
                <ChevronDown size={20} className={`dropdown-icon ${isCorporatesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`mobile-dropdown-content ${isCorporatesOpen ? 'open' : ''}`}>
                <a href="/corporate/consulting" onClick={closeMobileMenu} className="mobile-dropdown-link">Business Consulting</a>
                <a href="/corporate/training" onClick={closeMobileMenu} className="mobile-dropdown-link">Corporate Training</a>
              </div>
            </div>

            {/* Mobile Products Dropdown */}
            <div>
              <button onClick={toggleProducts} className="mobile-dropdown-trigger">
                Products
                <ChevronDown size={20} className={`dropdown-icon ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`mobile-dropdown-content ${isProductsOpen ? 'open' : ''}`}>
                <a href="/products/gdpr" onClick={closeMobileMenu} className="mobile-dropdown-link">GDPR</a>
                <a href="/products/opti-cost" onClick={closeMobileMenu} className="mobile-dropdown-link">Opticost</a>
                <a href="/products/vra-platform" onClick={closeMobileMenu} className="mobile-dropdown-link">VRA Platform</a>
              </div>
            </div>

            <a href="/about" onClick={closeMobileMenu} className="mobile-link">About</a>
            <a href="/contact" onClick={closeMobileMenu} className="mobile-link">Contact Us</a>
          </nav>
        </div>
      </div>
      {/* Spacer */}
      <div className="navbar-spacer"></div>
    </>
  );
}