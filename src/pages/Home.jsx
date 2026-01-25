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
  DollarSign,
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
    }, 6000);
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
        @keyframes scroll-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
       }

      .scroll-container {
      animation: scroll-left 30s linear infinite;
      }

      .scroll-container:hover {
      animation-play-state: paused;
      }

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

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .logo-float {
          animation: float 6s ease-in-out infinite;
        }

        .logo-item:nth-child(1) { animation-delay: 0s; }
        .logo-item:nth-child(2) { animation-delay: 0.5s; }
        .logo-item:nth-child(3) { animation-delay: 1s; }
        .logo-item:nth-child(4) { animation-delay: 1.5s; }
        .logo-item:nth-child(5) { animation-delay: 2s; }
        .logo-item:nth-child(6) { animation-delay: 2.5s; }
        .logo-item:nth-child(7) { animation-delay: 3s; }
        .logo-item:nth-child(8) { animation-delay: 3.5s; }
        .logo-item:nth-child(9) { animation-delay: 4s; }
        .logo-item:nth-child(10) { animation-delay: 4.5s; }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#1e3a5f] text-white overflow-hidden min-h-screen">
        {heroBackgrounds.map((bg, index) => (
          <div
            key={bg.id}
            className={`hero-background-image absolute inset-0 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${bg.image})` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${bg.overlay}`}></div>
          </div>
        ))}

        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 group">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 group">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroBackgrounds.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 z-10 flex items-center min-h-screen">
          <div className="text-center w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-white drop-shadow-2xl px-4 mb-6">
              Transform Your Career with Elite Industry Programs
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white mb-6 drop-shadow-lg">
              Designed by Seasoned Business Professionals
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-8">
              Gain real-world skills through{" "}
              <span className={`font-bold ${highlightColors[colorIndex]} transition-colors duration-500`}>
                70% hands-on learning
              </span>{" "}
              programs crafted by 22+ <span className="font-semibold text-cyan-300">industry veterans</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link to="/academic" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform">
                Explore Programs
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all shadow-xl">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
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
                <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</h3>
                <p className="text-gray-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
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
                <div key={category.id} className={`program-card bg-[#1e2d4a] rounded-xl shadow-md overflow-hidden border border-gray-700/50 group ${shouldCenter ? 'lg:col-start-2' : ''}`}>
                  <div className={`p-6 bg-gradient-to-r ${category.color} text-white flex items-center gap-4`}>
                    <div className="flex-shrink-0">
                      {iconMap[category.mainCategory] || <Layers className="w-6 h-6" />}
                    </div>
                    <h3 className="text-xl font-bold">{category.mainCategory}</h3>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-300 mb-4 min-h-[60px]">{category.shortDesc}</p>
                    {hasContent ? (
                      <Link to={`/courses/${category.slug}`} className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 group-hover:gap-3 transition-all">
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

      
      {/* CONSULTING SERVICES SUMMARY */}
      <section className="py-16 bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-500/20 text-indigo-400 text-sm font-semibold tracking-wider uppercase">
                Enterprise Solutions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Corporate Consulting Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Transform your business with expert consulting across digital transformation, FinTech, product strategy, and cybersecurity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "AI & Digital Transformation",
                description: "Accelerate innovation with AI strategy, machine learning, and intelligent automation solutions.",
                color: "from-indigo-500 to-purple-500",
                borderColor: "border-indigo-500/30 hover:border-indigo-400/60"
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "FinTech Consulting",
                description: "Expert guidance on digital payments, blockchain, neo-banking, and regulatory compliance.",
                color: "from-purple-500 to-pink-500",
                borderColor: "border-purple-500/30 hover:border-purple-400/60"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Product Strategy",
                description: "Build market-leading products from ideation to launch with proven frameworks.",
                color: "from-cyan-500 to-blue-500",
                borderColor: "border-cyan-500/30 hover:border-cyan-400/60"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Data Analytics & BI",
                description: "Transform data into actionable insights with advanced analytics and GenAI integration.",
                color: "from-emerald-500 to-teal-500",
                borderColor: "border-emerald-500/30 hover:border-emerald-400/60"
              },
              {
                icon: <Layers className="w-8 h-8" />,
                title: "Process Optimization",
                description: "Streamline operations with lean methodologies and intelligent automation.",
                color: "from-orange-500 to-red-500",
                borderColor: "border-orange-500/30 hover:border-orange-400/60"
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Cyber Security",
                description: "Protect your organization with comprehensive security frameworks and threat intelligence.",
                color: "from-pink-500 to-rose-500",
                borderColor: "border-pink-500/30 hover:border-pink-400/60"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-[#1e2d4a] to-[#2a3f5f] rounded-xl p-6 border ${service.borderColor} transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/corporate-consulting" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
            >
              Explore All Consulting Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

       {/* CORPORATE TRAINING SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-500/20 text-indigo-400 text-sm font-semibold tracking-wider uppercase">
                  🎯 Workforce Transformation
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Strategic Corporate Training Programs
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Bridge critical skill gaps and drive behavioral change through proven ADDIE methodology—
                transforming knowledge into measurable business impact
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: "📊", text: "70:20:10 learning model with hands-on practice", color: "from-cyan-500 to-blue-500" },
                  { icon: "🎓", text: "22+ industry veterans with 500+ years experience", color: "from-purple-500 to-pink-500" },
                  { icon: "🚀", text: "BFSI, AI Product Management, GenAI & Analytics", color: "from-emerald-500 to-teal-500" },
                  { icon: "📈", text: "Performance tracking with measurable ROI", color: "from-orange-500 to-red-500" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <p className="text-gray-200 text-lg pt-2">{item.text}</p>
                  </div>
                ))}
              </div>

              <Link 
                to="/corporate/training" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                Explore Training Programs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right Side - Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "85%", label: "Skill Improvement", gradient: "from-cyan-500 to-blue-500" },
                { value: "60%", label: "Productivity Boost", gradient: "from-purple-500 to-pink-500" },
                { value: "90%", label: "Satisfaction Rate", gradient: "from-emerald-500 to-teal-500" },
                { value: "70%", label: "Retention Rate", gradient: "from-orange-500 to-red-500" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-[#1e2d4a]/80 to-[#2a3f5f]/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                >
                  <div className={`text-6xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-4`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-300 font-semibold text-lg">{stat.label}</div>
                  <div className={`h-1 w-16 bg-gradient-to-r ${stat.gradient} rounded-full mt-4 group-hover:w-full transition-all duration-500`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* SAAS PRODUCTS SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] via-[#0f1f3d] to-[#152847] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <p className="text-sm text-blue-400 font-semibold tracking-wider uppercase">
                  Enterprise SaaS Solutions
                </p>
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-100 mb-6">
              AI-Powered Business Platforms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your operations with intelligent automation, compliance management, and cost optimization
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Optimize Card */}
            <Link 
              to="/products/optimize" 
              className="group relative bg-gradient-to-br from-[#1e2d4a]/90 to-[#2a3f5f]/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold">
                    COST OPTIMIZATION
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  Optimize
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  AI-powered cost allocation platform that identifies unit costs, analyzes inefficiencies, and optimizes vendor selection—delivering 20-30% cost reduction while maintaining quality.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    { icon: "📊", text: "Activity-Based Costing (ABC)" },
                    { icon: "🤖", text: "Vendor Intelligence Engine" },
                    { icon: "📈", text: "Real-time Cost Analytics" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-700/50">
                  <div>
                    <div className="text-3xl font-bold text-blue-400">20-30%</div>
                    <div className="text-xs text-gray-500">Cost Reduction</div>
                  </div>
                  <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Vendorize Card */}
            <Link 
              to="/products/vendorize" 
              className="group relative bg-gradient-to-br from-[#1e2d4a]/90 to-[#2a3f5f]/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold">
                    RISK MANAGEMENT
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  Vendorize
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  Comprehensive third-party risk management platform that automates vendor assessment, continuous monitoring, and compliance tracking across your entire ecosystem.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    { icon: "🔍", text: "Automated Risk Assessment" },
                    { icon: "👁️", text: "24/7 Threat Monitoring" },
                    { icon: "📋", text: "Compliance Management" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-700/50">
                  <div>
                    <div className="text-3xl font-bold text-cyan-400">85%</div>
                    <div className="text-xs text-gray-500">Time Saved</div>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Compliize Card */}
            <Link 
              to="/products/compliize" 
              className="group relative bg-gradient-to-br from-[#1e2d4a]/90 to-[#2a3f5f]/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-bold">
                    DATA PRIVACY
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  Compliize
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  Enterprise GDPR & DPDPA compliance platform with AI-powered data discovery, automated privacy assessments, and real-time monitoring to eliminate regulatory risk.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    { icon: "🗄️", text: "Automated Data Discovery" },
                    { icon: "🛡️", text: "GDPR & DPDPA Compliance" },
                    { icon: "⚡", text: "Real-time Monitoring" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-700/50">
                  <div>
                    <div className="text-3xl font-bold text-purple-400">90%</div>
                    <div className="text-xs text-gray-500">Workload Reduction</div>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Trusted by leading enterprises to drive efficiency, reduce risk, and ensure compliance
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Cloud-Native', 'Enterprise Security', 'ISO 27001 Certified', 'API-First', '99.9% Uptime'].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VETERANS FROM LEADING ORGANIZATIONS */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] via-[#0f1f3d] to-[#152847] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/20">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <p className="text-sm text-cyan-400 font-semibold tracking-wider uppercase">
                  Trusted by Industry Leaders
                </p>
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-blue-100 mb-6">
              Veterans from Leading Organizations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Learn from professionals who have shaped innovation at the world's most respected companies
            </p>
          </div>

          <div className="flex items-center justify-center mt-8">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
          </div>
        </div>
        {/* Scrolling Container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex scroll-container">
            {/* First set of logos */}
            <div className="flex gap-8 px-4">
              {/* Google */}
              <div className="flex-shrink-0 w-64">
                <div className="group relative flex flex-col items-center justify-center h-32 w-full px-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-400/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] hover:scale-105">
                  <img 
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
                    alt="Google" 
                    className="h-10 w-auto object-contain mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors">Google</span>
                </div>
              </div>

              {/* Microsoft */}
              <div className="flex-shrink-0 w-64">
                <div className="group relative flex flex-col items-center justify-center h-32 w-full px-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-400/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(96,165,250,0.25)] hover:scale-105">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" 
                    alt="Microsoft" 
                    className="h-9 w-auto object-contain mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors">Microsoft</span>
                </div>
              </div>

              {/* Oracle */}
              <div className="flex-shrink-0 w-64">
                <div className="group relative flex flex-col items-center justify-center h-32 w-full px-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-green-400/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(74,222,128,0.25)] hover:scale-105">
                  <img 
                    src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_313,h_157/https://graphicdesignergeeks.com/wp-content/uploads/2024/04/Oracle-2.png" 
                    alt="Oracle" 
                    className="h-10 w-auto object-contain mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors">Oracle</span>
                </div>
              </div>

                {/* SAP */}
              <div className="flex-shrink-0 w-64">
                <div className="group relative flex flex-col items-center justify-center h-32 w-full px-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-green-400/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(74,222,128,0.25)] hover:scale-105">
                  <img 
                    src="https://live.staticflickr.com/4136/4859025955_1f018d165f.jpg" 
                    alt="SAP" 
                    className="h-10 w-auto object-contain mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors">SAP</span>
                </div>
              </div>

        {/* Wipro */}
        <div className="flex-shrink-0 w-64">
          <div className="group relative flex flex-col items-center justify-center h-32 w-full px-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-400/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(192,132,252,0.25)] hover:scale-105">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" 
              alt="Wipro" 
              className="h-8 w-auto object-contain mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors">Wipro</span>
          </div>
        </div>

        {/* IBM */}
        <div className="flex-shrink-0 w-64">
          <div className="group relative flex flex-col items-center justify-center h-32 w-full px-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:scale-105">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
              alt="IBM" 
              className="h-10 w-auto object-contain filter brightness-0 invert mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors">IBM</span>
          </div>
        </div>

        {/* Emirates NBD */}
        <div className="flex-shrink-0 w-64">
          <div className="group relative flex flex-col items-center justify-center h-32 w-full px-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-green-400/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(74,222,128,0.25)] hover:scale-105">
            <img 
              src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5531df8c0000ff00057ed682/0x0.png" 
              alt="Emirates NBD" 
              className="h-10 w-auto object-contain mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors">Emirates NBD</span>
          </div>
        </div>

        {/* EY */}
        <div className="flex-shrink-0 w-64">
          <div className="group relative flex flex-col items-center justify-center h-32 w-full px-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-yellow-400/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(250,204,21,0.25)] hover:scale-105">
            <img 
              src="https://logowik.com/content/uploads/images/ey-ernst-young8946.logowik.com.webp" 
              alt="EY" 
              className="h-8 w-auto object-contain mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors">EY</span>
          </div>
        </div>

        {/* IBM Bangalore */}
        <div className="flex-shrink-0 w-64">
          <div className="group relative flex flex-col items-center justify-center h-32 w-full px-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-400/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(129,140,248,0.25)] hover:scale-105">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
              alt="IBM Bangalore" 
              className="h-9 w-auto object-contain filter brightness-0 invert mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors text-center">IBM Bangalore</span>
          </div>
        </div>

        {/* Genpact */}
        <div className="flex-shrink-0 w-64">
          <div className="group relative flex flex-col items-center justify-center h-32 w-full px-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-pink-400/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(244,114,182,0.25)] hover:scale-105">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Genpact_logo.svg" 
              alt="Genpact" 
              className="h-8 w-auto object-contain filter brightness-0 invert mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors">Genpact</span>
          </div>
        </div>
      </div>

      {/* Duplicate set for seamless loop */}
      <div className="flex gap-8 px-4">
        {/* (Repeat all 10 logos again - exact same code) */}
        <div className="flex-shrink-0 w-64">
          <div className="group relative flex flex-col items-center justify-center h-32 w-full px-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-400/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] hover:scale-105">
            <img 
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
              alt="Google" 
              className="h-10 w-auto object-contain mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors">Google</span>
          </div>
        </div>
        <div className="flex-shrink-0 w-64">
          <div className="group relative flex flex-col items-center justify-center h-32 w-full px-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-400/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(96,165,250,0.25)] hover:scale-105">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" 
              alt="Microsoft" 
              className="h-9 w-auto object-contain mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors">Microsoft</span>
          </div>
        </div>
        <div className="flex-shrink-0 w-64">
          <div className="group relative flex flex-col items-center justify-center h-32 w-full px-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-red-400/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(248,113,113,0.25)] hover:scale-105">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" 
              alt="Oracle" 
              className="h-8 w-auto object-contain filter brightness-0 invert mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors">Oracle</span>
          </div>
        </div>
        <div className="flex-shrink-0 w-64">
          <div className="group relative flex flex-col items-center justify-center h-32 w-full px-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:scale-105">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" 
              alt="SAP" 
              className="h-10 w-auto object-contain filter brightness-0 invert mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors">SAP</span>
          </div>
        </div>
        <div className="flex-shrink-0 w-64">
          <div className="group relative flex flex-col items-center justify-center h-32 w-full px-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-400/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(192,132,252,0.25)] hover:scale-105">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" 
              alt="Wipro" 
              className="h-8 w-auto object-contain mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors">Wipro</span>
          </div>
        </div>
        <div className="flex-shrink-0 w-64">
          <div className="group relative flex flex-col items-center justify-center h-32 w-full px-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:scale-105">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
              alt="IBM" 
              className="h-10 w-auto object-contain filter brightness-0 invert mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors">IBM</span>
          </div>
        </div>
        <div className="flex-shrink-0 w-64">
          <div className="group relative flex flex-col items-center justify-center h-32 w-full px-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-green-400/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(74,222,128,0.25)] hover:scale-105">
            <span className="text-gray-300 text-base font-bold group-hover:text-white transition-colors text-center">
              Enterprise<br/>NBD
            </span>
          </div>
        </div>
        <div className="flex-shrink-0 w-64">
          <div className="group relative flex flex-col items-center justify-center h-32 w-full px-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-yellow-400/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(250,204,21,0.25)] hover:scale-105">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/EY_Logo_2019.svg" 
              alt="EY" 
              className="h-8 w-auto object-contain filter brightness-0 invert mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors">EY</span>
          </div>
        </div>
        <div className="flex-shrink-0 w-64">
          <div className="group relative flex flex-col items-center justify-center h-32 w-full px-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-indigo-400/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(129,140,248,0.25)] hover:scale-105">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
              alt="IBM Bangalore" 
              className="h-9 w-auto object-contain filter brightness-0 invert mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors text-center">IBM Bangalore</span>
          </div>
        </div>
        <div className="flex-shrink-0 w-64">
          <div className="group relative flex flex-col items-center justify-center h-32 w-full px-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-pink-400/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(244,114,182,0.25)] hover:scale-105">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/30/Genpact_logo.svg" 
              alt="Genpact" 
              className="h-8 w-auto object-contain filter brightness-0 invert mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors">Genpact</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-purple-400 font-semibold mb-4 tracking-wider uppercase">SUCCESS STORIES</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real organizations that trusted Upskillize with their workforce transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1e2d4a]/60 backdrop-blur-sm rounded-xl p-8 border-2 border-gray-600/30 hover:border-cyan-400/50 transition-all hover:scale-105 duration-300">
              <svg className="w-10 h-10 text-cyan-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm11 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm1.5-4H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
              </svg>
              <p className="text-gray-200 text-base leading-relaxed mb-6 italic">
                "The BFSI domain training seamlessly transformed our team. MBA graduates into industry-ready professionals. The practitioner-led approach stood at the difference—real case studies, real feedback from textbook learning."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">SK</div>
                <div>
                  <p className="text-white font-bold text-lg">Dr. Suresh Kumar</p>
                  <p className="text-cyan-400 text-sm">Dean, MBA Program</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1e2d4a]/60 backdrop-blur-sm rounded-xl p-8 border-2 border-gray-600/30 hover:border-purple-400/50 transition-all hover:scale-105 duration-300">
              <svg className="w-10 h-10 text-purple-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm11 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm1.5-4H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
              </svg>
              <p className="text-gray-200 text-base leading-relaxed mb-6 italic">
                "Upskillize didn't just teach training—they partnered with us to diagnose our specific capability gaps and designed a custom program that addressed our exact needs. ROI was evident within 3 months."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">PM</div>
                <div>
                  <p className="text-white font-bold text-lg">Priya Mehta</p>
                  <p className="text-purple-400 text-sm">VP, Learning & Development</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1e2d4a]/60 backdrop-blur-sm rounded-xl p-8 border-2 border-gray-600/30 hover:border-green-400/50 transition-all hover:scale-105 duration-300">
              <svg className="w-10 h-10 text-green-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm11 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm1.5-4H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
              </svg>
              <p className="text-gray-200 text-base leading-relaxed mb-6 italic">
                "The AI Product Management certification exceeded expectations. Our product team met confidently evaluated AI opportunities and builds ML-powered features that actually deliver business value."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">RG</div>
                <div>
                  <p className="text-white font-bold text-lg">Rajesh Gupta</p>
                  <p className="text-green-400 text-sm">Chief Product Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-4">
              Ready to Build an Industry-Ready Career?
            </h2>
            <p className="text-xl text-gray-300">Schedule a Free Expert Consultation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-white">
            {[
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                text: "Colleges seeking meaningful partnerships"
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
                text: "Students ready to accelerate their careers with real-world insights"
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                text: "Industry professionals looking to accelerate their career"
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#2d4560]/60 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-[#2d4560]/80 transition-all border-2 border-gray-600/30 hover:border-gray-500">
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-900">{item.icon}</div>
                <p className="text-lg font-semibold">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 text-white hover:text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(to right, #FFD700, #FFA500)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#3b82f6'; }}
            >
              Book Your 1:1 Consultation Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}