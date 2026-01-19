import React, { useEffect } from 'react';

const RiskManagementRegTech = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById('particles-risk');
    if (particlesContainer) {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle-risk';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
      }
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .particle-risk {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255,255,255,0.3);
          border-radius: 50%;
          animation: float 6s infinite ease-in-out;
        }
        .fade-in-up {
          animation: fadeInUp 0.8s ease forwards;
        }
      `}</style>

      <div className="bg-white w-full">
        {/* Hero Section */}
        <section className="relative overflow-hidden text-white py-20 px-10 text-center" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 8s ease infinite'
        }}>
          <div id="particles-risk" className="absolute inset-0 z-0"></div>
          
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-black mb-6" style={{
              textShadow: '2px 4px 8px rgba(0,0,0,0.3)'
            }}>
              ⚡ Risk Management & RegTech Excellence Program
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-4xl mx-auto">
              40-Hour Professional Certification in Modern Risk Management, AI Analytics & Next-Gen Regulatory Technology
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto mt-12">
              {[
                { num: "40", label: "Hours Intensive Training" },
                { num: "20+", label: "Risk Modules & Tools" },
                { num: "15+", label: "Real Risk Failures Analyzed" },
                { num: "₹10-45L", label: "Starting Salary Range" },
                { num: "100%", label: "Hands-on Learning" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/15 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  <div className="text-5xl font-black text-yellow-300 mb-2">{stat.num}</div>
                  <div className="text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 px-10">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Master the Future of Risk Management
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { icon: "🎯", title: "Combat Real-World Risks", desc: "Learn from actual risk failures like Lehman Brothers, Silicon Valley Bank, and FTX. Master risk frameworks using live simulations." },
              { icon: "🤖", title: "GenAI & RegTech Mastery", desc: "Build AI risk models, automate compliance with RegTech 2.0, and create autonomous risk agents." },
              { icon: "💼", title: "Premium Career Path", desc: "Join top banks, consulting firms with starting salaries from ₹10-45 LPA. Risk management is growing at 14% CAGR." },
              { icon: "🏆", title: "Industry Certification", desc: "Earn professional certification aligned with Basel IV, IFRS 9, and global risk standards." }
            ].map((card, i) => (
              <div key={i} className="animate-on-scroll bg-white p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">
                <div className="text-6xl mb-6">{card.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Focus */}
        <section className="py-20 px-10">
          <div className="relative overflow-hidden rounded-3xl p-10 text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            <h3 className="text-3xl md:text-4xl font-bold mb-5 text-center">🤖 GenAI & RegTech Revolution</h3>
            <p className="text-xl text-center mb-8 opacity-95">Learn how AI is transforming risk management with cutting-edge applications</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "🔮 Predictive Risk Models", desc: "Build ML models that predict market crashes, credit defaults, and operational failures before they happen" },
                { title: "🤖 Autonomous Risk Agents", desc: "Deploy AI agents that monitor risks 24/7, automatically adjust limits, and trigger alerts" },
                { title: "📋 Automated Compliance", desc: "Use NLP to interpret regulations and automate compliance reporting with 99% accuracy" },
                { title: "🎯 Real-time Risk Scoring", desc: "Implement dynamic risk scoring that updates in real-time based on market conditions" }
              ].map((app, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                  <div className="text-yellow-300 font-bold mb-2">{app.title}</div>
                  <div className="text-sm opacity-90">{app.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-20 px-10 bg-gray-50">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Complete 40-Hour Risk & RegTech Curriculum
          </h2>
          
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-10 rounded-3xl text-center mb-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">🎓 Professional Risk Management Certification</h3>
            <p className="text-lg">Master credit, market, operational, and liquidity risk with cutting-edge RegTech and AI</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {[
              {
                day: "1", title: "Foundations & Framework (8 Hours)",
                modules: [
                  { icon: "🌐", title: "Module 1: Foundation of Risk Management", desc: "Evolution from traditional to enterprise risk management, risk culture, governance structures, and the three lines of defense mode", highlight: "Build Your First Risk Dashboard" },
                  { icon: "⚡", title: "Module 2: Why Risk Management Matters", desc: "Case studies of risk failures: Lehman Brothers, Silicon Valley Bank, FTX, Archegos - what went wrong and lessons learned", highlight: "Risk Failure Analysis Workshop" },
                  { icon: "🔄", title: "Module 3: Risk Management Process", desc: "Risk identification, assessment, measurement, monitoring, and reporting using industry tools and frameworks", highlight: "Live Risk Assessment" },
                  { icon: "📋", title: "Module 4: Standards & Frameworks", desc: "ISO 31000, COSO ERM, risk appetite frameworks, KRIs, and building effective risk registers", highlight: "Design Risk Framework" }
                ]
              },
              {
                day: "2", title: "Credit & Market Risk (8 Hours)",
                modules: [
                  { icon: "🏛️", title: "Module 5: Regulatory Guidelines Basel Framework", desc: "Deep dive into Basel III/IV capital requirements, RWA calculations, Pillar 1/2/3, and regulatory reporting", highlight: "Basel IV Implementation Lab" },
                  { icon: "💳", title: "Module 6: Credit Risk & Analytics", desc: "PD/LGD/EAD modeling, credit scoring, portfolio management, stress testing, and machine learning applications", highlight: "Build AI Credit Scoring Model" },
                  { icon: "📈", title: "Module 7: Market Risk Management", desc: "VaR/CVaR calculations, FRTB implementation, trading book risk, derivatives risk, and hedging strategies", highlight: "Real-time Trading Risk Simulation" },
                  { icon: "🔍", title: " Case Study: Credit Suisse & Archegos", desc: "Analyze the $5.5 billion loss - concentration risk, margin calls, and prime brokerage failures", highlight: "Risk Limit Breach Simulation" }
                ]
              },
              {
                day: "3", title: "Operational & Liquidity Risk (8 Hours)",
                modules: [
                  { icon: "⚙️", title: "Module 8: Operational Risk Management", desc: "RCSA workshops, loss data collection, scenario analysis, Basel SMA approach, and cyber risk management", highlight: "Cyber Attack Response Drill" },
                  { icon: "💧", title: "Module 9: Liquidity Risk Management", desc: "LCR/NSFR calculations, liquidity stress testing, contingency funding plans, and intraday liquidity management", highlight: "Bank Run Simulation Exercise" },
                  { icon: "⚖️", title: "Module 10: ALM & FTP", desc: "Asset-liability management, funds transfer pricing, balance sheet optimization, and interest rate risk in banking book (IRRBB)", highlight: "ALM Dashboard Development" },
                  { icon: "📊", title: "Module 11: IFRS 9 Implementation", desc: "Expected credit loss modeling, staging criteria, forward-looking provisions, and regulatory reporting", highlight: "ECL Model Building Workshop" }
                ]
              },
              {
                day: "4", title: "Advanced Risk & Analytics (8 Hours)",
                modules: [
                  { icon: "🎯", title: "Module 12: Strategic & Reputation Risk", desc: "ESG risk integration, climate risk scenarios, reputation monitoring, and crisis management protocols", highlight: "ESG Risk Scoring Framework" },
                  { icon: "📊", title: "Module 13: Risk Analytics & Dashboards", desc: "Power BI/Tableau for risk reporting, Python for risk analytics, real-time monitoring systems", highlight: "Build Executive Risk Dashboard" },
                  { icon: "🤖", title: "Module 14: GenAI in Risk Management", desc: "AI for fraud detection, predictive risk models, NLP for regulatory compliance, autonomous risk agents", highlight: "Deploy AI Risk Prediction Model" },
                  { icon: "💥", title: "Risk Failure Workshop", desc: "Interactive analysis of major failures: Enron, Barings Bank, LTCM, WeWork - identify early warning signals", highlight: "Create Early Warning System" }
                ]
              },
              {
                day: "5", title: "RegTech & Future of Risk(8 Hours)",
                modules: [
                  { icon: "🚀", title: "Module 15: RegTech Revolution", desc: "RegTech 2.0 - AI-powered compliance, automated reporting, real-time monitoring, blockchain in regulatory compliance", highlight: "Build RegTech Solution" },
                  { icon: "🤖", title: "Module 16: Advanced GenAI in Risk Management", desc: "Transformer models for risk prediction, autonomous risk agents, NLP for regulatory documents, AI-driven stress testing", highlight: "Deploy Autonomous Risk Agent" },
                  { icon: "📊", title: "Module 17: Risk Aggregation & Reporting", desc: "Enterprise-wide risk aggregation, BCBS 239 compliance, real-time risk dashboards, automated regulatory reporting", highlight: "Build Risk Data Warehouse" },
                  { icon: "🔢", title: "Module 18: Quant Finance & Analytics", desc: "Monte Carlo simulations, stochastic modeling, derivative pricing, machine learning for quantitative risk", highlight: "Quant Risk Model Development" }
                ]
              },
              {
                day: "📝", title: "Module Assessments & Certification",
                modules: [
                  { icon: "📋", title: "Daily Module Assessments", desc: "End-of-day assessments covering each module with practical scenarios and problem-solving", highlight: "5 Module Tests (20% weightage)" },
                  { icon: "🏆", title: "Capstone Project", desc: "Design and implement a comprehensive risk management framework for a virtual bank", highlight: "Project Presentation (30% weightage)" },
                  { icon: "🎓", title: "Financial Risk Professional (FRP) Certification", desc: "Comprehensive 3-hour examination covering all modules with case studies and practical applications", highlight: "Professional FRP Certificate (50% weightage)" }
                ]
              }
            ].map((topic, i) => (
              <div key={i} className="animate-on-scroll rounded-3xl overflow-hidden shadow-xl border-2 border-gray-200 hover:border-indigo-500 transition-all">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 text-center">
                  <div className="text-5xl font-black mb-2">{topic.day}</div>
                  <div className="text-xl font-bold">{topic.title}</div>
                </div>
                <div className="p-8 bg-white space-y-4">
                  {topic.modules.map((module, j) => (
                    <div key={j} className="bg-gray-50 p-6 rounded-2xl border-l-4 border-indigo-600 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">{module.icon}</span>
                        <h4 className="font-bold text-gray-900">{module.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{module.desc}</p>
                      <div className="bg-yellow-500 text-white text-xs font-semibold px-4 py-2 rounded-full inline-block">
                        {module.highlight}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Risk Failures */}
        <section className="py-20 px-10">
          <h2 className="text-4xl font-black text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Why Risk Management is Critical Now 
          </h2>
          
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-10 rounded-3xl max-w-6xl mx-auto">
            <h3 className="text-red-900 text-3xl font-bold mb-8 text-center">⚠️ Learn from $500+ Billion in Risk Failures</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🏦", title: "Lehman Brothers (2008)", desc: "$613 billion bankruptcy due to excessive leverage and poor risk controls. Learn how modern risk frameworks could have prevented this." },
                { icon: "🏛️", title: "Silicon Valley Bank (2023)", desc: "$209 billion collapse in 48 hours due to interest rate risk and liquidity mismanagement. Study real-time risk monitoring solutions." },
                { icon: "₿", title: "FTX Crypto Exchange (2022)", desc: "$32 billion fraud and risk control failures. Understand how AI-powered monitoring can detect anomalies early." }
              ].map((failure, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border-l-4 border-red-500 shadow-lg">
                  <div className="text-4xl mb-3">{failure.icon}</div>
                  <h4 className="text-red-900 font-bold mb-2">{failure.title}</h4>
                  <p className="text-gray-700 text-sm">{failure.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Careers */}
        <section className="py-20 px-10 bg-gray-50">
          <h2 className="text-4xl font-black text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Lucrative Career Opportunities
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Risk management professionals are in unprecedented demand. The global risk management market is growing at 14.2% CAGR, reaching $143 billion by 2027.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { icon: "🎯", title: "Risk Analyst", desc: "Analyze credit, market, and operational risks using statistical models and AI tools. Work with banks, NBFCs, and fintech companies.", salary: "₹8-18 LPA", level: "Entry (0-2 years)" },
              { icon: "🏛️", title: "Risk Manager", desc: "Design and implement risk frameworks, manage risk appetite, and ensure regulatory compliance for financial institutions.", salary: "₹15-30 LPA", level: "Mid (2-5 years)" },
              { icon: "🤖", title: "RegTech Specialist", desc: "Build AI-powered compliance solutions, automate regulatory reporting, and develop next-gen risk monitoring systems.", salary: "₹18-35 LPA", level: "Specialized (1-4 years)" },
              { icon: "📊", title: "Quantitative Risk Analyst", desc: "Develop mathematical models for pricing derivatives, VaR calculations, and stress testing using Python and R.", salary: "₹20-40 LPA", level: "Specialized (2-5 years)" },
              { icon: "🏆", title: "Chief Risk Officer", desc: "Lead enterprise risk management, board reporting, and strategic risk decisions for large financial institutions.", salary: "₹50L-2Cr", level: "Senior (8+ years)" },
              { icon: "💼", title: "Risk Consultant", desc: "Provide risk advisory to multiple clients, implement Basel III/IV, and design custom risk solutions for various industries.", salary: "₹25-50 LPA", level: "Senior (5+ years)" }
            ].map((career, i) => (
              <div key={i} className="animate-on-scroll bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all text-center">
                <div className="text-5xl mb-4">{career.icon}</div>
                <h3 className="text-xl font-black text-gray-900 mb-3">{career.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{career.desc}</p>
                <div className="text-3xl font-black text-green-600 mb-2">{career.salary}</div>
                <div className="text-xs text-indigo-600 font-semibold">{career.level}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Success */}
        <section className="py-20 px-10 text-white bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900">
          <h2 className="text-4xl font-black text-center mb-12">What Makes Our Program Unique</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: "🎯", title: "100% Practical Learning", desc: "Every module includes hands-on workshops, real case studies, and live simulations. No boring theory - only actionable skills." },
              { icon: "🤖", title: "Cutting-Edge AI Tools", desc: "Learn the latest GenAI applications in risk management that 90% of professionals don't know yet. Stay ahead of the curve." },
              { icon: "👨‍💼", title: "Industry Expert Faculty", desc: "Learn from CROs of top banks, risk consultants, and RegTech entrepreneurs with real-world battle-tested experience." },
              { icon: "🏆", title: "Professional Certification", desc: "Earn Financial Risk Professional (FRP) certification recognized by top banks, consulting firms, and financial institutions." },
              { icon: "🚀", title: "Career Placement Support", desc: "Get direct access to our network of 200+ hiring partners including top banks, NBFCs, and fintech companies." },
              { icon: "💎", title: "Lifetime Access", desc: "Access course materials, updates, and community forever. Risk management evolves rapidly - stay current with new regulations." }
            ].map((card, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 text-center hover:bg-white/15 transition-all">
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-sm opacity-90">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RiskManagementRegTech;