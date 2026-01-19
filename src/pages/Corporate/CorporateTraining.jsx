import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  Users,
  Briefcase,
  Brain,
  Zap,
  Target,
  Award,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Shield,
  BarChart3,
  Cpu,
  Code,
  DollarSign,
  Clock,
  RefreshCw
} from "lucide-react";

export default function CorporateTraining() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
      
     {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden p-0 min-h-[85vh] flex items-center" style={{
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a2332 50%, #2a3142 100%)',
        color: 'white'
      }}>
        {/* Hero pattern overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 15% 30%, rgba(91, 79, 229, 0.15) 0%, transparent 60%), radial-gradient(circle at 85% 70%, rgba(123, 111, 245, 0.12) 0%, transparent 60%)'
        }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        <div className="max-w-[1400px] mx-auto px-12 relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Hero Content */}
          <div className="py-16">
            <div className="inline-block bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452] text-[#a99eff] px-5 py-2 rounded-[30px] text-[0.85rem] font-semibold mb-8 border border-[rgba(91,79,229,0.3)]">
              🎯 Enterprise Training Solutions
            </div>
            
            <h1 className="text-[2.8rem] font-extrabold mb-6 leading-[1.15] tracking-[-0.02em]">
              Strategic <span className="bg-gradient-to-br from-white to-[#a99eff] bg-clip-text text-transparent" style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Workforce</span><br/>
              Transformation
            </h1>
            
            <p className="text-[1.25rem] leading-[1.7] text-[rgba(255,255,255,0.85)] mb-12 font-normal">
              Precision diagnostics, tailored curriculum design, and industry-expert delivery—
              following proven ADDIE methodology to bridge skill gaps, drive behavioral change, 
              unlock productivity, fuel innovation, and accelerate revenue growth
            </p>
            
            <div className="flex gap-6 flex-wrap">
              <a
                href="#programs"
                className="inline-flex items-center gap-3 py-[1.1rem] px-[2.8rem] rounded-xl font-semibold text-base bg-[rgba(255,255,255,0.1)] text-white border-2 border-[rgba(255,255,255,0.2)] backdrop-blur-[10px] hover:bg-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.4)] transition-all duration-[400ms]"
              >
                Explore Programs
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 py-[1.1rem] px-[2.8rem] rounded-xl font-semibold text-base bg-gradient-to-br from-[#5B4FE5] to-[#7B6FF5] text-white shadow-[0_10px_30px_rgba(91,79,229,0.3)] hover:shadow-[0_15px_40px_rgba(91,79,229,0.4)] hover:-translate-y-1 transition-all duration-[400ms]"
              >
                Connect To Collaboration →
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[500px] hidden lg:flex items-center justify-center">
            {/* Decorative blur element */}
            <div className="absolute -top-5 -right-5 w-[200px] h-[200px] rounded-[30px] opacity-20" style={{
              background: 'linear-gradient(135deg, #5B4FE5 0%, #7B6FF5 100%)',
              filter: 'blur(40px)'
            }} />
            
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
              alt="Team collaboration"
              className="w-full h-full object-cover rounded-[20px] relative z-10"
              style={{
                boxShadow: '0 30px 60px rgba(0,0,0,0.4)'
              }}
            />
          </div>
        </div>
      </section>

      {/* ===== WHY UPSKILLIZE TRAINING ===== */}
      <section className="py-16 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Upskillize
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Training programs designed by industry veterans for measurable business impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "22+ Industry Experts",
                description: "Learn from seasoned professionals with hands-on industry experience"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "70% Hands-On Learning",
                description: "Practical, project-based training with real-world applications"
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Industry-Validated",
                description: "Curriculum aligned with current industry demands and best practices"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Measurable ROI",
                description: "Track skill improvement and business impact post-training"
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

      {/* ===== WHY CHOOSE UPSKILLIZE (Enhanced) ===== */}
      <section className="py-20 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-16">
            <div className="inline-block bg-[rgba(91,79,229,0.15)] text-[#a99eff] px-6 py-2 rounded-[30px] text-[0.85rem] font-semibold mb-6 uppercase tracking-wider border border-[rgba(91,79,229,0.3)]">
              Our Unique Approach
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Industry-Veteran Led Training<br/>That Delivers Impactful Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              22+ seasoned practitioners with 500+ years of collective experience meet cutting-edge instructional design to create 
              transformational learning experiences that stick
            </p>
          </div>
          {/* First Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {[
          {
            icon: "🎓",
            title: "Practitioner-Led Expertise",
            description: "Learn from industry veterans who've held leadership positions at Credit Suisse, Emirates NBD, Oracle Financial Services, and FIS—bringing real-world insights from the trenches, not textbooks"
          },
          {
            icon: "🎯",
            title: "Customized Learning Pathways",
            description: "No cookie-cutter programs. We diagnose your specific skill gaps, design tailored curricula aligned to your business objectives, and deliver targeted interventions that address your unique challenges"
          }
          ].map((feature, index) => (
          <div
            key={index}
            className="bg-[#1e2d4a] rounded-2xl p-8 border border-gray-700/50 hover:border-[#5B4FE5] transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden"
          >
             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5B4FE5] to-[#7B6FF5] transform scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
               <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#5B4FE5] to-[#7B6FF5] rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-[rgba(91,79,229,0.25)]">
                  {feature.icon}
               </div>
               <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
               </h3>
               <p className="text-gray-300 leading-relaxed text-sm">
                 {feature.description}
               </p>
             </div>
          ))}
        </div>
        {/* Second Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {[
          {
          icon: "📊",
          title: "Measurable Business Impact",
          description: "Track progress through comprehensive Kirkpatrick-level evaluations—measuring not just completion rates, but actual behavioral change, productivity gains, and revenue impact"
          },
          {
          icon: "🔄",
          title: "Proven ADDIE Methodology",
          description: "Systematic approach following globally recognized instructional design standards—Analysis, Design, Development, Implementation, Evaluation—ensuring rigorous, results-driven delivery"
          },
          {
          icon: "🚀",
          title: "Fast-Track Implementation",
          description: "Rapid deployment without compromising quality. From needs assessment to program launch in weeks, not months—getting your teams upskilled when you need it most"
          }
          ].map((feature, index) => (
         <div
            key={index}
            className="bg-[#1e2d4a] rounded-2xl p-8 border border-gray-700/50 hover:border-[#5B4FE5] transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden"
         > 
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5B4FE5] to-[#7B6FF5] transform scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
          
              <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#5B4FE5] to-[#7B6FF5] rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-[rgba(91,79,229,0.25)]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
        ))}
      </div>
      {/* Third Row - 2 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          icon: "💡",
          title: "Flexible Training Delivery",
          description: "In-Person immersive bootcamps, Live Virtual sessions, On-Demand bite-sized modules, or Blended learning with mentorship support—choose the format that fits your organization's needs"
        },
        {
          icon: "🤝",
          title: "Ongoing Partnership Support",
          description: "Beyond training delivery—we provide post-program reinforcement, performance tracking, and continuous improvement recommendations to ensure sustained behavioral change and capability building"
        }
      ].map((feature, index) => (
        <div
          key={index}
          className="bg-[#1e2d4a] rounded-2xl p-8 border border-gray-700/50 hover:border-[#5B4FE5] transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5B4FE5] to-[#7B6FF5] transform scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
          
          <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#5B4FE5] to-[#7B6FF5] rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-[rgba(91,79,229,0.25)]">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-4">
            {feature.title}
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm">
            {feature.description}
          </p>
        </div>
       ))}
      </div>
     </div>
   </section>

      {/* ===== THE UPSKILLIZE ADDIE FRAMEWORK ===== */}
      <section className="py-20 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-16">
            <div className="inline-block bg-[rgba(91,79,229,0.15)] text-[#a99eff] px-6 py-2 rounded-[30px] text-[0.85rem] font-semibold mb-6 uppercase tracking-wider border border-[rgba(91,79,229,0.3)]">
              Our Approach
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              The Upskillize ADDIE Framework
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A systematic, proven approach to workforce transformation that delivers measurable ROI
            </p>
          </div>

          {/* Process Flow */}
          <div className="relative mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
              {[
                {
                  step: "01",
                  title: "Analysis",
                  icon: <Clock className="w-8 h-8" />,
                  description: "Precision diagnostics through skills gap assessment and needs evaluation",
                  checklist: ["Skills Gap Assessment", "Competency Mapping", "Needs Evaluation"]
                },
                {
                  step: "02",
                  title: "Design",
                  icon: <BookOpen className="w-8 h-8" />,
                  description: "Tailored curriculum architecture aligned to business objectives",
                  checklist: ["Learning Pathways", "Outcome Mapping", "Content Blueprint"]
                },
                {
                  step: "03",
                  title: "Development",
                  icon: <Code className="w-8 h-8" />,
                  description: "Industry-aligned content with real-world case studies",
                  checklist: ["Content Creation", "Case Studies", "Assessment Design"]
                },
                {
                  step: "04",
                  title: "Implementation",
                  icon: <Zap className="w-8 h-8" />,
                  description: "Expert-led delivery through immersive learning experiences",
                  checklist: ["Workshop Delivery", "Hands-on Practice", "Real-time Support"]
                },
                {
                  step: "05",
                  title: "Evaluation",
                  icon: <Target className="w-8 h-8" />,
                  description: "Comprehensive impact assessment and continuous improvement",
                  checklist: ["Performance Tracking", "ROI Measurement", "Feedback Integration"]
                }
              ].map((phase, index) => (
                <div key={index} className="relative bg-[#1e2d4a] rounded-2xl p-6 border-2 border-gray-700/50 hover:border-[#5B4FE5] transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group text-center">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-[#5B4FE5] to-[#7B6FF5] rounded-full flex items-center justify-center text-white font-extrabold text-sm border-4 border-[#1e2d4a] shadow-lg">
                    {phase.step}
                  </div>
                  
                  <div className="w-20 h-20 bg-gradient-to-br from-[#5B4FE5] to-[#7B6FF5] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-[rgba(91,79,229,0.3)] group-hover:rotate-[360deg] transition-transform duration-500">
                    {phase.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {phase.description}
                  </p>
                  
                  <ul className="space-y-2 text-left">
                    {phase.checklist.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-[#5B4FE5] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Continuous Improvement Badge */}
            <div className="mt-12 flex justify-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#5B4FE5] to-[#7B6FF5] text-white px-8 py-4 rounded-full font-semibold shadow-xl">
                <RefreshCw className="w-6 h-6 animate-spin" style={{ animationDuration: '3s' }} />
                <span>Continuous Improvement Loop</span>
              </div>
            </div>
          </div>

          {/* Business Impact Timeline */}
          <div className="mt-20 bg-gradient-to-br from-[#1e2d4a]/50 to-[#2a3f5f]/50 rounded-3xl p-12 border border-gray-700/50">
            <div className="flex justify-center">
              <div className="inline-block bg-[rgba(91,79,229,0.15)] text-[#a99eff] px-6 py-2 rounded-[30px] text-[0.85rem] font-semibold mb-6 uppercase tracking-wider border border-[rgba(91,79,229,0.3)]">
                Roadmap
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              From Training to Transformation: The Complete Journey
            </h3>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 max-w-7xl mx-auto">
              {[
                { week: "Week 1", phase: "Diagnostic Phase", description: "Skills assessment & gap analysis", icon: "📋" },
                { week: "Week 2-3", phase: "Design & Development", description: "Custom curriculum creation", icon: "🎨" },
                { week: "Week 4-5", phase: "Program Delivery", description: "Expert-led training sessions", icon: "🚀" },
                { week: "Week 6+", phase: "Impact Measurement", description: "Performance tracking & ROI analysis", icon: "📊" },
                { week: "Ongoing", phase: "Sustained Success", description: "Behavioral change & business growth", icon: "🎯", highlight: true }
              ].map((item, index) => (
              <React.Fragment key={index}>
                <div className={`text-center flex-1 min-w-[160px] ${item.highlight ? 'bg-gradient-to-br from-[rgba(91,79,229,0.15)] to-[rgba(123,111,245,0.15)] p-6 rounded-2xl border-2 border-dashed border-[#5B4FE5]' : ''}`}>
                  <div className={`w-20 h-20 ${item.highlight ? 'bg-gradient-to-br from-[#5B4FE5] to-[#7B6FF5]' : 'bg-[#1e2d4a] border-4 border-[#5B4FE5]'} rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg`}>
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-white mb-2 text-lg">{item.week}</h4>
                    <p className="font-semibold text-[#a99eff] mb-2">{item.phase}</p>
                      <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                </div>
                {index < 4 && (
                <div className="hidden lg:flex items-center justify-center flex-shrink-0 self-center" style={{marginTop: '-60px'}}>
                  <ArrowRight className="w-8 h-8 text-[#5B4FE5]" />
                </div>
               )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
     </section>

      {/* ===== TRAINING PROGRAMS (Enhanced) ===== */}
      <section
        id="programs"
        className="py-20 relative overflow-hidden bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]"
      >
      {/* ===== Subtle Decorative Overlay (Same Color Family) ===== */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_50%,rgba(108,99,255,0.08)_0%,transparent_50%),radial-gradient(circle_at_80%_50%,rgba(56,189,248,0.08)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-10">
    
          {/* ===== Section Header ===== */}
          <div className="text-center mb-16">
            <div className="inline-block bg-white/10 text-[#6C63FF] px-6 py-2 rounded-full text-[0.85rem] font-semibold mb-6 uppercase tracking-wider">
              Training Programs
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Industry-Leading Certification Programs
            </h2>

            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive training solutions spanning BFSI, AI, Business Intelligence, and GenAI
           </p>
          </div>

          {/* ===== Programs Grid ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[
        {
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
          title: "BFSI Domain Excellence",
          description:
            "Deep-dive into banking, financial services, and insurance domain knowledge—from credit risk management to regulatory compliance, treasury operations, and digital banking transformation",
          duration: "80–120 hours",
          certification: "Certification included",
        },
        {
          image:
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
          title: "AI Product Management (CAIP)",
          description:
            "Chartered AI Professional certification covering AI product lifecycle, ML deployment, ethics, governance, and building AI-powered products that deliver business value",
          duration: "100–140 hours",
          certification: "CAIP Certification",
        },
        {
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
          title: "Business Intelligence & Analytics",
          description:
            "Master data visualization, analytics tools (Power BI, Tableau), SQL, data modeling, and dashboard design to transform raw data into actionable insights",
          duration: "60–80 hours",
          certification: "Hands-on projects",
        },
        {
          image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
          title: "GenAI for Business Professionals",
          description:
            "Practical applications of Generative AI—prompt engineering, LLM integration, AI-assisted workflows, and GenAI solutions that drive productivity and innovation",
          duration: "40–60 hours",
          certification: "Project-based",
        },
        {
          image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
            title: "Leadership Development",
            description:
              "Build next-generation leaders with comprehensive training on strategic thinking, team management, and business acumen. Covers strategic leadership principles, team building and motivation, executive decision-making, business communication skills, conflict resolution and negotiation, and performance management",
            duration: "40–60 hours",
            certification: "Leadership Certificate",
        },
        {
          image:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
          title: "Technical Skills Training",
          description:
            "Hands-on training in cutting-edge technologies including AI/ML, cloud computing, and modern development practices. Master Python programming and automation, machine learning fundamentals, web development (React, Node.js), DevOps and CI/CD pipelines, cybersecurity essentials, and API development and integration",
          duration: "60–80 hours",
          certification: "Technical Certification",
        },
      ].map((program, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-[#6C63FF]/40"
        >
          {/* Image */}
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-64 object-cover"
          />

          {/* Content */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              {program.title}
            </h3>

            <p className="text-white/80 leading-relaxed mb-6">
              {program.description}
            </p>

            {/* Meta */}
            <div className="flex gap-6 mb-6 flex-wrap">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Clock className="w-4 h-4 text-[#38BDF8]" />
                <span>{program.duration}</span>
              </div>

              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Award className="w-4 h-4 text-[#38BDF8]" />
                <span>{program.certification}</span>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 text-white bg-[#6C63FF] px-6 py-3 rounded-lg font-semibold hover:bg-[#5B52FF] transition-all whitespace-nowrap"
            >
              Learn More <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ===== FROM KNOWLEDGE TO TRANSFORMATION ===== */}
      <section className="py-20 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                From Knowledge Transfer to Behavioral Transformation
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Training programs fail when they stop at knowledge delivery. We go further—
                ensuring your teams don't just know more, but actually do things differently, 
                driving measurable improvements in productivity, innovation, and business outcomes.
              </p>
              
              <ul className="space-y-6 mb-8">
                {[
                  {
                    title: "70:20:10 Learning Model",
                    description: "Balanced approach combining experiential learning, social learning, and formal instruction"
                  },
                  {
                    title: "Real-World Simulations",
                    description: "Practice in safe environments before applying on actual projects"
                  },
                  {
                    title: "Performance Tracking",
                    description: "Pre and post-training assessments to quantify capability gains"
                  },
                  {
                    title: "Reinforcement Programs",
                    description: "Spaced repetition and coaching to embed new behaviors permanently"
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-gradient-to-br from-[#5B4FE5] to-[#7B6FF5] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <strong className="text-white text-lg">{item.title}:</strong>
                      <span className="text-gray-300 ml-2">{item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 py-4 px-8 rounded-xl font-semibold text-base bg-gradient-to-br from-[#5B4FE5] to-[#7B6FF5] text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-[#5B4FE5] to-[#7B6FF5] rounded-3xl opacity-15 -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop" 
                alt="Training session"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRAINING DELIVERY MODELS ===== */}
      <section className="py-16 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-center">
              <div className="inline-block bg-[rgba(91,79,229,0.15)] text-[#a99eff] px-6 py-2 rounded-[30px] text-[0.85rem] font-semibold mb-6 uppercase tracking-wider border border-[rgba(91,79,229,0.3)]">
                Delivery Mechanism
              </div>
            </div>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Flexible Training Delivery
              </h2>
              <p className="text-lg text-gray-200">
                Choose the learning format that works best for your team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "In-Person Training",
                  description: "On-site instructor-led training at your facility",
                  features: ["Customized schedule", "Hands-on labs", "Team collaboration", "Direct Q&A"]
                },
                {
                  icon: <Cpu className="w-8 h-8" />,
                  title: "Virtual Live Training",
                  description: "Interactive online sessions with expert trainers",
                  features: ["Remote access", "Live interaction", "Recorded sessions", "Flexible timing"]
                },
                {
                  icon: <BookOpen className="w-8 h-8" />,
                  title: "Blended Learning",
                  description: "Combination of online and in-person training",
                  features: ["Self-paced modules", "Live workshops", "Mentorship support", "Best of both worlds"]
                }
              ].map((model, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#1e2d4a] to-[#2a3f5f] rounded-xl p-6 border border-indigo-500/30 hover:border-indigo-400/60 transition-all hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                    {model.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{model.title}</h3>
                  <p className="text-gray-300 text-sm text-center mb-4">{model.description}</p>
                  <ul className="space-y-2">
                    {model.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRAINING BENEFITS ===== */}
      <section className="py-16 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
              <div className="inline-block bg-[rgba(91,79,229,0.15)] text-[#a99eff] px-6 py-2 rounded-[30px] text-[0.85rem] font-semibold mb-6 uppercase tracking-wider border border-[rgba(91,79,229,0.3)]">
                Your Success is Guaranteed
              </div>
            </div>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Business Impact
              </h2>
              <p className="text-lg text-gray-200">
                Measurable outcomes from our training programs
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: "85%", label: "Skill Improvement", icon: <TrendingUp className="w-8 h-8" /> },
                { value: "60%", label: "Productivity Increase", icon: <Zap className="w-8 h-8" /> },
                { value: "90%", label: "Employee Satisfaction", icon: <Users className="w-8 h-8" /> },
                { value: "70%", label: "Retention Rate", icon: <Award className="w-8 h-8" /> }
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

      {/* ===== CUSTOM TRAINING ===== */}
      <section className="py-16 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1e2d4a] to-[#2a3f5f] rounded-2xl p-8 sm:p-12 border border-indigo-500/30">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Custom Training Programs
                </h2>
                <p className="text-lg text-gray-200">
                  Need something specific? We create tailored training programs aligned with your business objectives
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#1a2847]/50 rounded-lg p-4 border border-indigo-500/20">
                  <h3 className="text-white font-bold mb-2">What We Offer</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      Custom curriculum design
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      Industry-specific content
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      Flexible duration and format
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      Dedicated trainers
                    </li>
                  </ul>
                </div>

                <div className="bg-[#1a2847]/50 rounded-lg p-4 border border-indigo-500/20">
                  <h3 className="text-white font-bold mb-2">Popular Requests</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      Executive leadership bootcamps
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      Team-specific skill development
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      New hire onboarding programs
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      Technology migration training
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl"
                >
                  Discuss Custom Training
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-center shadow-2xl border border-indigo-400/30">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Upskill Your Team?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Partner with Upskillize to bridge critical skill gaps, drive behavioral change,
              and unlock measurable business impact through proven training methodologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
              >
                Request Training Proposal
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/corporate/consulting"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                Explore Consulting Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}