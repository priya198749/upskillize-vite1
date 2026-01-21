import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  Target,
  Lightbulb,
  TrendingUp,
  Users,
  Briefcase,
  Zap,
  Shield,
  BarChart3,
  Settings,
  Globe,
  Award,
  Clock,
  Building2,
  CreditCard,
  Cpu,
  ShoppingCart,
  Heart,
  GraduationCap,
  Factory,
  Store,
  Rocket
} from "lucide-react";

export default function CorporateConsulting() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroBackgrounds = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=2070&h=1380&fit=crop",
      overlay: "from-black/80 via-black/60 to-transparent"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=2070&h=1380&fit=crop",
      overlay: "from-blue-900/80 via-blue-900/60 to-transparent"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=2070&h=1380&fit=crop",
      overlay: "from-indigo-900/80 via-indigo-900/60 to-transparent"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=2070&h=1380&fit=crop",
      overlay: "from-purple-900/80 via-purple-900/60 to-transparent"
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBackgrounds.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [heroBackgrounds.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroBackgrounds.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroBackgrounds.length) % heroBackgrounds.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
      <style>{`
        .hero-background-image {
          transition: opacity 1500ms ease-in-out;
        }
      `}</style>
      
      {/* ===== HERO SECTION ===== */}
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

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 z-10 flex items-center min-h-screen">
          <div className="text-center lg:text-left w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              Business Consulting Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto lg:mx-0">
              Strategic consulting services powered by industry veterans to transform your business for the digital age
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all shadow-xl"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all shadow-xl"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-16 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Upskillize Consulting?
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Industry expertise meets academic rigor for transformative business outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "22+ Industry Veterans",
                description: "Seasoned professionals from top BFSI, Tech, and Product companies"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Proven Track Record",
                description: "Successfully guided 100+ organizations through digital transformation"
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Innovation-Driven",
                description: "Cutting-edge strategies blending AI, analytics, and industry best practices"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Cross-Industry Expertise",
                description: "Deep domain knowledge in BFSI, Technology, Product, and Analytics"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1e2d4a] to-[#2a3f5f] rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300 border border-indigo-500/30 hover:border-indigo-400/60 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONSULTING SERVICES ===== */}
      <section id="services" className="py-16 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Consulting Services
              </h2>
              <p className="text-lg text-gray-200">
                End-to-end consulting solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* AI & Digital Transformation */}
              <div className="bg-gradient-to-br from-[#1e2d4a] to-[#2a3f5f] rounded-xl p-8 border border-indigo-500/30 hover:border-indigo-400/60 transition-all hover:shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI & Digital Transformation</h3>
                </div>
                <p className="text-gray-200 mb-4">
                  Accelerate your digital evolution with cutting-edge AI and intelligent automation. We transform business operations through advanced technologies, data-driven insights, and innovative digital solutions.
                </p>
                <ul className="space-y-3">
                  {[
                    "AI strategy and implementation roadmap",
                    "Machine Learning & predictive analytics",
                    "Generative AI and Large Language Model integration",
                    "Intelligent process automation (RPA & AI)",
                    "Cloud-native architecture and microservices",
                    "Data engineering and analytics platforms",
                    "IoT and edge computing solutions",
                    "Digital-first customer experience design"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FinTech Domain Consulting */}
              <div className="bg-gradient-to-br from-[#1e2d4a] to-[#2a3f5f] rounded-xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all hover:shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">FinTech Consulting</h3>
                </div>
                <p className="text-gray-200 mb-4">
                  Expert consulting for financial technology companies and digital financial services. Specializing in payment systems, blockchain, digital banking, and regulatory compliance for modern financial platforms.
                </p>
                <ul className="space-y-3">
                  {[
                    "Digital payment gateway integration & optimization",
                    "Blockchain & cryptocurrency solutions",
                    "Digital wallet and mobile banking platforms",
                    "Open Banking and API strategy",
                    "RegTech compliance automation",
                    "Neo-banking and challenger bank architecture",
                    "Lending platforms & credit scoring algorithms",
                    "Fraud detection and AML systems"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Strategy */}
              <div className="bg-gradient-to-br from-[#1e2d4a] to-[#2a3f5f] rounded-xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all hover:shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Product Strategy & Management</h3>
                </div>
                <p className="text-gray-200 mb-4">
                  Build market-leading products with our product management expertise. From ideation to launch, we guide your product journey.
                </p>
                <ul className="space-y-3">
                  {[
                    "Product vision and strategy development",
                    "Market research and competitive analysis",
                    "Product roadmap creation and prioritization",
                    "Go-to-market strategy",
                    "Product-market fit optimization",
                    "AI-powered product innovation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Data Analytics & BI */}
              <div className="bg-gradient-to-br from-[#1e2d4a] to-[#2a3f5f] rounded-xl p-8 border border-emerald-500/30 hover:border-emerald-400/60 transition-all hover:shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Data Analytics & Business Intelligence</h3>
                </div>
                <p className="text-gray-200 mb-4">
                  Transform data into actionable insights. We help you build robust analytics capabilities and make data-driven decisions.
                </p>
                <ul className="space-y-3">
                  {[
                    "Data strategy and governance framework",
                    "Advanced analytics and predictive modeling",
                    "Business intelligence dashboard design",
                    "GenAI integration for analytics",
                    "Data warehouse and lake implementation",
                    "Self-service analytics enablement"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process Optimization */}
              <div className="bg-gradient-to-br from-[#1e2d4a] to-[#2a3f5f] rounded-xl p-8 border border-orange-500/30 hover:border-orange-400/60 transition-all hover:shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Process Optimization</h3>
                </div>
                <p className="text-gray-200 mb-4">
                  Streamline operations and boost efficiency. We identify bottlenecks and implement lean methodologies to optimize your business processes.
                </p>
                <ul className="space-y-3">
                  {[
                    "Business process mapping and analysis",
                    "Lean and Six Sigma implementation",
                    "Automation opportunity identification",
                    "Workflow optimization",
                    "KPI framework development",
                    "Continuous improvement programs"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cyber Resilience & Security */}
              <div className="bg-gradient-to-br from-[#1e2d4a] to-[#2a3f5f] rounded-xl p-8 border border-pink-500/30 hover:border-pink-400/60 transition-all hover:shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Cyber Security & Resilience</h3>
                </div>
                <p className="text-gray-200 mb-4">
                  Protect your organization from evolving cyber threats with comprehensive security strategies. We implement robust defense mechanisms and ensure business continuity in the face of cyber attacks.
                </p>
                <ul className="space-y-3">
                  {[
                    "Cybersecurity framework implementation (NIST, ISO 27001)",
                    "Threat intelligence and vulnerability assessments",
                    "Incident response and disaster recovery planning",
                    "Security operations center (SOC) setup",
                    "Zero-trust architecture design",
                    "Penetration testing and ethical hacking",
                    "Security awareness training programs",
                    "Compliance and regulatory adherence (GDPR, SOC 2)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR APPROACH ===== */}
      <section className="py-16 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Consulting Approach
              </h2>
              <p className="text-lg text-gray-200">
                A proven methodology that delivers measurable results
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Discovery", icon: <Target className="w-6 h-6" />, description: "Deep dive into business challenges" },
                { step: "2", title: "Analysis", icon: <BarChart3 className="w-6 h-6" />, description: "Data-driven insights & diagnostics" },
                { step: "3", title: "Strategy", icon: <Lightbulb className="w-6 h-6" />, description: "Tailored solutions design" },
                { step: "4", title: "Execution", icon: <Zap className="w-6 h-6" />, description: "Implementation & change management" },
                { step: "5", title: "Optimization", icon: <TrendingUp className="w-6 h-6" />, description: "Continuous improvement" }
              ].map((phase, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-[#1e2d4a] to-[#2a3f5f] rounded-xl p-6 text-center shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-indigo-500/30">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">
                      {phase.step}
                    </div>
                    <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mx-auto mb-3 text-indigo-300">
                      {phase.icon}
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{phase.title}</h3>
                    <p className="text-xs text-gray-300">{phase.description}</p>
                  </div>
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-indigo-400/50"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES WE SERVE ===== */}
      <section className="py-16 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-200">
                Deep domain expertise across multiple sectors
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Banking & Finance", gradient: "from-blue-500 to-cyan-500", icon: Building2 },
                { name: "Insurance", gradient: "from-purple-500 to-pink-500", icon: Shield },
                { name: "Investment Banking", gradient: "from-emerald-500 to-teal-500", icon: TrendingUp },
                { name: "Fintech", gradient: "from-orange-500 to-red-500", icon: CreditCard },
                { name: "Technology", gradient: "from-indigo-500 to-blue-500", icon: Cpu },
                { name: "E-commerce", gradient: "from-pink-500 to-rose-500", icon: ShoppingCart },
                { name: "Healthcare", gradient: "from-red-500 to-pink-500", icon: Heart },
                { name: "Education", gradient: "from-yellow-500 to-orange-500", icon: GraduationCap },
                { name: "Manufacturing", gradient: "from-gray-500 to-slate-500", icon: Factory },
                { name: "Retail", gradient: "from-violet-500 to-purple-500", icon: Store },
                { name: "Consulting", gradient: "from-cyan-500 to-blue-500", icon: Briefcase },
                { name: "Startups", gradient: "from-fuchsia-500 to-purple-500", icon: Rocket }
              ].map((industry, i) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={i}
                    className="group relative bg-gradient-to-br from-[#1e2d4a] to-[#2a3f5f] rounded-xl p-6 text-center border border-indigo-500/30 hover:border-indigo-400/60 transition-all hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden"
                  >
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    
                    {/* Icon container with gradient */}
                    <div className={`relative mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Industry name */}
                    <span className="relative text-white font-semibold text-sm block group-hover:text-gray-100 transition-colors">
                      {industry.name}
                    </span>
                    
                    {/* Decorative corner accent */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${industry.gradient} opacity-10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SUCCESS METRICS ===== */}
      <section className="py-16 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Measurable Impact
              </h2>
              <p className="text-lg text-gray-200">
                Our consulting delivers tangible business outcomes
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: "40%", label: "Avg. Cost Reduction", icon: <TrendingUp className="w-8 h-8" /> },
                { value: "60%", label: "Process Efficiency Gains", icon: <Zap className="w-8 h-8" /> },
                { value: "100+", label: "Successful Projects", icon: <Award className="w-8 h-8" /> },
                { value: "95%", label: "Client Satisfaction", icon: <Users className="w-8 h-8" /> }
              ].map((stat, i) => (
                <div key={i} className="bg-gradient-to-br from-[#1e2d4a] to-[#2a3f5f] rounded-xl p-6 text-center border border-indigo-500/30 hover:border-indigo-400/60 transition-all hover:shadow-xl">
                  <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-center shadow-2xl border border-indigo-400/30">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Partner with industry experts who understand your challenges and deliver results that matter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/corporate/training"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                Explore Training Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}