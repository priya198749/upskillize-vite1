import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Cpu,
  Briefcase,
  BarChart3,
  Brain,
  Layers,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
  Users,
  GraduationCap,
  TrendingUp,
  Award,
} from "lucide-react";
import { courses } from "../data/coursesData";

export default function Home() {
  const [colorIndex, setColorIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const iconMap = {
    "AI in FinTech": <Cpu className="w-6 h-6" />,
    "Product Leadership": <Briefcase className="w-6 h-6" />,
    "Data Analytics, GenAI & Business Intelligence": <Brain className="w-6 h-6" />,
    "Technology & Digital Transformation": <Layers className="w-6 h-6" />,
    "Integrated Courses": <BarChart3 className="w-6 h-6" />,
    "Cybersecurity": <ShieldCheck className="w-6 h-6" />,
    "Mental Health & Social Wellness": <HeartHandshake className="w-6 h-6" />,
  };

  const highlightColors = [
    "text-cyan-400",
    "text-blue-400",
    "text-purple-400",
    "text-pink-400",
    "text-green-400",
    "text-yellow-400",
  ];

  // Hero background images that auto-rotate
  const heroBackgrounds = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
      overlay: "from-black/80 via-black/60 to-transparent"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
      overlay: "from-blue-900/80 via-blue-900/60 to-transparent"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
      overlay: "from-indigo-900/80 via-indigo-900/60 to-transparent"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
      overlay: "from-purple-900/80 via-purple-900/60 to-transparent"
    }
  ];

  // Auto-rotate hero backgrounds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBackgrounds.length);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(slideInterval);
  }, [heroBackgrounds.length]);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % highlightColors.length);
    }, 2000);
    return () => clearInterval(colorInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroBackgrounds.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroBackgrounds.length) % heroBackgrounds.length);
  };

  return (
    <div className="w-full overflow-x-hidden">
      <style>{`
        .program-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .program-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(96, 165, 250, 0.2);
          border-color: #60a5fa;
        }

        .hero-background-image {
          transition: opacity 1500ms ease-in-out;
        }
      `}</style>

      {/* ================= HERO SECTION WITH AUTO-CHANGING BACKGROUNDS ================= */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#1e3a5f] text-white overflow-hidden min-h-screen">
        
        {/* Auto-rotating Background Images */}
        {heroBackgrounds.map((bg, index) => (
          <div
            key={bg.id}
            className={`hero-background-image absolute inset-0 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${bg.image})`,
              }}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${bg.overlay}`}></div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
          aria-label="Previous background"
        >
          <svg
            className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
          aria-label="Next background"
        >
          <svg
            className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroBackgrounds.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to background ${index + 1}`}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 z-10 flex items-center min-h-screen">
          
          {/* Hero Heading - Centered */}
          <div className="text-center w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-white drop-shadow-2xl px-4 mb-6">
              Transform Your Career with Elite Industry Programs
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white mb-6 drop-shadow-lg">
              Designed by Seasoned Business Professionals
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-8">
              <span className="text-white">for </span>
              <span
                className={`${highlightColors[colorIndex]} transition-colors duration-700 drop-shadow-[0_0_25px_rgba(0,212,255,0.5)]`}
              >
                Tomorrow's Industry Leaders
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link
                to="/academic"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                Explore Programs
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all shadow-xl"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-16 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "70%", label: "Hands-On Learning", icon: <TrendingUp className="w-8 h-8" /> },
              { value: "22+", label: "Industry Veterans", icon: <Users className="w-8 h-8" /> },
              { value: "100+", label: "Industry Projects", icon: <BarChart3 className="w-8 h-8" /> },
              { value: "100%", label: "Industry-Validated", icon: <Award className="w-8 h-8" /> },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900/30 rounded-full mb-4 text-cyan-400">
                  {stat.icon}
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS SECTION ================= */}
      <section className="py-16 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Industry-Focused Programs
            </h2>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              Specialized programs aligned with real-world industry demands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((category, index) => {
              const availablePrograms = category.subCourses.filter(course => 
                course.hasDetailPage === true || 
                ['bfsi-domain-excellence-program', 'investment-banking-wealth-tech', 'risk-management-regtech-program', 
                 'ai-product-management-mastery', 'the-mini-ceo-program', 'data-decisions', 
                 'mba-plus-plus', 'ai-ml-business-leaders', 'digital-business-strategy-innovation'].includes(course.slug)
              );
              
              const hasContent = availablePrograms.length > 0;
              const isLastItem = index === courses.length - 1;
              const shouldCenter = isLastItem && courses.length % 3 === 1;
              
              return (
                <div
                  key={category.id}
                  className={`program-card bg-[#1e2d4a] rounded-xl shadow-md overflow-hidden border border-gray-700/50 group ${
                    shouldCenter ? 'lg:col-start-2' : ''
                  }`}
                >
                  <div className={`p-6 bg-gradient-to-r ${category.color} text-white flex items-center gap-4`}>
                    <div className="flex-shrink-0">
                      {iconMap[category.mainCategory] || <Layers className="w-6 h-6" />}
                    </div>
                    <h3 className="text-xl font-bold">
                      {category.mainCategory}
                    </h3>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-300 mb-4 min-h-[60px]">
                      {category.shortDesc}
                    </p>

                    {hasContent ? (
                      <Link
                        to={`/courses/${category.slug}`}
                        className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 group-hover:gap-3 transition-all"
                      >
                        View Programs
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-16 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-4">
              Ready to Build an Industry-Ready Career?
            </h2>
            <p className="text-xl text-gray-300">
              Schedule a Free Expert Consultation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-white">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                text: "Colleges seeking meaningful partnerships"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                text: "Students ready to accelerate their careers with real-world insights"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                text: "Industry professionals looking to accelerate their career"
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#2d4560]/60 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-[#2d4560]/80 transition-all border-2 border-gray-600/30 hover:border-gray-500">
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-900">
                  {item.icon}
                </div>
                <p className="text-lg font-semibold">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 text-white hover:text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              style={{
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #FFD700, #FFA500)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#3b82f6';
              }}
            >
              Book Your Free Consultation Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}