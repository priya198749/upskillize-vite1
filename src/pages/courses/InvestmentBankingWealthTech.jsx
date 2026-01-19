import React, { useEffect } from 'react';

const InvestmentBankingWealthTech = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .scale-in');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-fade-up { animation: fadeInUp 1s ease-out; }
        .animate-bounce-in { animation: bounceIn 0.8s ease-out; }
        .animate-pulse { animation: pulse 2s infinite; }
        .fade-in { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .scale-in { transform: scale(0.9); opacity: 0; transition: transform 0.4s ease, opacity 0.4s ease; }
        .animate-visible { opacity: 1; transform: translateY(0) scale(1); }
      `}</style> 
      
      <div className="bg-white w-full">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 text-white py-16 px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(255,255,255,0.1) 49px, rgba(255,255,255,0.1) 50px)',
            }}></div>
          </div>
          
          <div className="relative z-10 text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-black mb-4" style={{
              background: 'linear-gradient(45deg, #FFB300, #FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
            }}>
              🏛️ Investment Banking & WealthTech Excellence Program
            </h1>
            <div className="text-2xl text-yellow-400 mb-8 font-semibold">
              40-Hour Comprehensive Professional Certification for MBA Students
            </div>
            
            <div className="bg-yellow-400/10 backdrop-blur-lg border-2 border-yellow-400 rounded-3xl p-8 my-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
                {[
                  { num: "40", label: "Hours Professional Training" },
                  { num: "20", label: "Comprehensive Modules" },
                  { num: "30+", label: "Live Case Studies" },
                  { num: "₹4-45L", label: "Starting Salary Range" },
                  { num: "100%", label: "Practical Learning" }
                ].map((stat, i) => (
                  <div key={i} className="bg-yellow-400/20 border-2 border-yellow-400 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-bounce-in" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="text-4xl font-black text-yellow-300 mb-2">{stat.num}</div>
                    <div className="text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-3xl md:text-4xl text-yellow-400 font-black my-12 animate-pulse">
              "From MBA Student to Wall Street & WealthTech Expert in Just 40 Hours"
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-16 px-8 bg-gray-50">
          <h2 className="text-4xl md:text-5xl font-black text-center text-blue-900 mb-12">
            Transform Your Career in Investment Banking & WealthTech
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: "🎯", title: "Dual Expertise Advantage", desc: "Master both traditional investment banking and cutting-edge WealthTech innovation. Get exposure to deal execution, financial modeling, robo-advisory development, and AI-powered wealth management platforms." },
              { icon: "💼", title: "Premium Career Opportunities", desc: "Double your career prospects with skills in both investment banking and WealthTech. Starting salaries from ₹4-45 LPA across banking, fintech, consulting, and wealth management roles globally." },
              { icon: "🌐", title: "Global Market Expertise", desc: "Understand international capital markets, WealthTech innovations, and cross-border transactions. Explore opportunities in Singapore, Dubai, London, and emerging WealthTech hubs worldwide." },
              { icon: "🏆", title: "Dual Professional Certification", desc: "Earn prestigious Investment Banking & WealthTech certification with real deal projects and app development portfolio that showcases your expertise to top employers." },
              { icon: "🤖", title: "AI & Future-Ready Skills", desc: "Master GenAI applications in both domains: AI-powered trading, robo-advisory development, blockchain integration, and autonomous financial systems." },
              { icon: "⚡", title: "Unique Market Position", desc: "Only program combining investment banking deal execution with WealthTech innovation - making you a rare professional who understands both traditional finance and digital disruption." }
            ].map((card, i) => (
              <div key={i} className="fade-in bg-white border-l-4 border-yellow-500 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-900 via-yellow-500 to-gray-800"></div>
                <div className="text-5xl mb-4" style={{
                  background: 'linear-gradient(45deg, #1B365D, #FFB300)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>{card.icon}</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-16 px-8 bg-white">
          <h2 className="text-4xl md:text-5xl font-black text-center text-blue-900 mb-8">
            📚 Complete 40-Hour Investment Banking & WealthTech Curriculum
          </h2>
          
          {/* Topics */}
          {[
            {
              num: "1",
              title: "Investment Banking Foundations & Capital Markets",
              duration: "8 Hours",
              modules: [
                { num: "1", title: "History & Evolution of Investment Banking", points: ["Rise from traditional to modern banking", "Key investment banking services evolution", "Global investment banking landscape", "Career paths and progression"], activity: "📋 Simple Exercise:", activityDesc: "Create a basic timeline of investment banking development with 5 major milestones" },
                { num: "2", title: "Capital Markets & Financial Instruments", points: ["Primary vs secondary markets basics", "Stock exchanges: NSE, BSE, NYSE overview", "Equity, debt, and derivatives introduction", "Forex and commodities market basics"], activity: "📊 Market Activity:", activityDesc: "Observe live market data and identify different financial instruments in action" },
                { num: "3", title: "IPO Process & Execution", points: ["Why companies choose to go public", "IPO process steps from start to listing", "Basic IPO pricing and valuation concepts", "Role of investment banks in IPOs"], activity: "🎯 Case Study:", activityDesc: "Analyze a recent Indian IPO (like Zomato or Paytm) and understand the process" },
                { num: "4", title: "M&A and Basic Financial Modeling", points: ["Introduction to mergers and acquisitions", "Basic financial modeling concepts", "Simple valuation methods overview", "Cross-border M&A basics"], activity: "💻 Basic Exercise:", activityDesc: "Build a simple company valuation model using basic Excel functions" }
              ]
            },
            {
              num: "2",
              title: "WealthTech Innovation & Digital Transformation",
              duration: "8 Hours",
              modules: [
                { num: "5", title: "Digital Wealth Management Revolution", points: ["Traditional vs digital wealth management", "Introduction to robo-advisory platforms", "AI in portfolio management basics", "Digital client onboarding overview"], activity: "🤖 Simple Project:", activityDesc: "Design a basic robo-advisor flow chart for different investor types" },
                { num: "6", title: "WealthTech App Design & User Journey", points: ["User experience basics for wealth apps", "Customer journey mapping fundamentals", "Mobile-first design principles", "Basic behavioral finance concepts"], activity: "📱 Design Exercise:", activityDesc: "Create simple wireframes for a basic wealth management app user journey" },
                { num: "7", title: "Digital Client Relationship Management", points: ["Digital client acquisition strategies", "Online client onboarding processes", "AI-powered recommendation basics", "Multi-channel client experience"], activity: "🤝 Role Play:", activityDesc: "Simulate digital client onboarding process with personalized recommendations" },
                { num: "8", title: "Blockchain & Cryptocurrency Basics", points: ["Introduction to cryptocurrency markets", "Blockchain technology overview", "Digital asset management basics", "Future of digital assets in wealth management"], activity: "⚡ Research Task:", activityDesc: "Research and present on how institutional investors are adopting digital assets" }
              ]
            },
            {
              num: "3",
              title: "Risk Management & RegTech Innovation",
              duration: "8 Hours",
              modules: [
                { num: "9", title: "Basic Risk Management Frameworks", points: ["Introduction to different types of financial risks", "Basic risk assessment methods", "Risk management framework overview", "Role of risk in investment decisions"], activity: "📊 Simple Exercise:", activityDesc: "Create a basic risk assessment checklist for investment decisions" },
                { num: "10", title: "AI in Risk Analytics", points: ["Introduction to AI in risk management", "Basic credit scoring concepts", "Fraud detection system overview", "Predictive analytics in finance"], activity: "🤖 Demo:", activityDesc: "Observe how AI tools can identify patterns in financial data for risk assessment" },
                { num: "11", title: "RegTech & Compliance Basics", points: ["Introduction to regulatory technology", "Basic compliance requirements", "KYC and AML overview", "Automated reporting benefits"], activity: "🚀 Group Discussion:", activityDesc: "Discuss how technology can make compliance more efficient and effective" },
                { num: "12", title: "ESG & Sustainable Finance", points: ["Introduction to ESG principles", "Sustainable investment basics", "Green finance overview", "Impact measurement fundamentals"], activity: "🌱 Project:", activityDesc: "Design a simple ESG scoring framework for evaluating companies" }
              ]
            },
            {
              num: "4",
              title: "Quantitative Methods & Trading Technology",
              duration: "8 Hours",
              modules: [
                { num: "13", title: "Basic Quantitative Finance", points: ["Introduction to statistical analysis in finance", "Basic portfolio optimization concepts", "Simple risk measurement techniques", "Data analysis fundamentals"], activity: "📈 Basic Exercise:", activityDesc: "Calculate simple risk and return metrics for a sample portfolio" },
                { num: "14", title: "Trading Technology & Platforms", points: ["Introduction to electronic trading", "Trading platform overview", "Basic algorithmic trading concepts", "Market data and analysis tools"], activity: "⚡ Platform Demo:", activityDesc: "Explore a trading platform simulation to understand market mechanics" },
                { num: "15", title: "Alternative Investments Overview", points: ["Introduction to private equity and venture capital", "Real estate investment basics", "Hedge fund strategies overview", "Alternative investment benefits and risks"], activity: "💰 Research Project:", activityDesc: "Compare different alternative investment options for a sample investor profile" },
                { num: "16", title: "Financial Innovation & Products", points: ["Introduction to structured products", "Basic derivatives overview", "Financial product development process", "Innovation trends in finance"], activity: "🔧 Creative Task:", activityDesc: "Design a simple financial product concept for a specific target market" }
              ]
            },
            {
              num: "5",
              title: "Career Development & Professional Skills",
              duration: "8 Hours",
              modules: [
                { num: "17", title: "Global Finance Career Opportunities", points: ["Career paths in investment banking and WealthTech", "International opportunities overview", "Skills required for different roles", "Professional development strategies"], activity: "🗺️ Planning Exercise:", activityDesc: "Create a personal 5-year career roadmap with specific milestones" },
                { num: "18", title: "Interview Preparation & Networking", points: ["Investment banking interview basics", "Common interview questions and answers", "Professional networking strategies", "Resume and LinkedIn optimization"], activity: "🎤 Practice Session:", activityDesc: "Mock interview practice with feedback from peers and instructors" },
                { num: "19", title: "Entrepreneurship in Finance", points: ["FinTech startup ecosystem overview", "Innovation opportunities in finance", "Basic business plan development", "Funding and investment basics"], activity: "🚀 Pitch Exercise:", activityDesc: "Develop and present a simple FinTech startup idea in 3 minutes" },
                { num: "20", title: "Integration & Final Project", points: ["Connecting investment banking and WealthTech concepts", "Real-world application scenarios", "Industry trends and future outlook", "Continuous learning strategies"], activity: "🏆 Capstone Project:", activityDesc: "Present a simple integrated solution combining investment banking and WealthTech concepts" }
              ]
            }
          ].map((topic, i) => (
            <div key={i} className="mb-12 rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200 hover:border-yellow-500 transition-all fade-in">
              <div className="bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 text-white p-8 text-center">
                <div className="text-6xl font-black text-yellow-400 mb-2">{topic.num}</div>
                <div className="text-2xl font-bold mb-2">{topic.title}</div>
                <div className="text-xl text-yellow-400 font-semibold">{topic.duration}</div>
              </div>
              <div className="p-8 bg-gray-50">
                <div className="grid md:grid-cols-2 gap-6">
                  {topic.modules.map((module, j) => (
                    <div key={j} className="scale-in bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-900 to-yellow-500"></div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-900 to-gray-800 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                          {module.num}
                        </div>
                        <h4 className="text-lg font-bold text-blue-900 flex-1">{module.title}</h4>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {module.points.map((point, k) => (
                          <li key={k} className="text-sm text-gray-600 pl-6 relative">
                            <span className="absolute left-0 text-yellow-500 font-bold">▸</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                      <div className="bg-gradient-to-r from-blue-900 to-gray-800 text-white p-4 rounded-xl">
                        <div className="text-yellow-400 font-bold text-sm mb-1">{module.activity}</div>
                        <div className="text-sm">{module.activityDesc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Assessment Section */}
          <div className="p-8 bg-gray-50 border-l-4 border-yellow-500 rounded-2xl my-12">
            <h3 className="text-3xl font-black text-center text-blue-900 mb-8">🎯 Assessment & Dual Certification Structure</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="fade-in bg-white rounded-2xl p-8 text-center shadow-xl border border-gray-200">
                <div className="text-6xl font-black text-blue-900 mb-4">70%</div>
                <div className="text-2xl font-bold mb-4 text-blue-900">Continuous Assessment</div>
                <ul className="text-left space-y-3">
                  {["Simple projects and assignments (25%)", "Group exercises and case studies (20%)", "Presentations and demonstrations (15%)", "Class participation and activities (10%)"].map((item, i) => (
                    <li key={i} className="pl-8 relative border-b border-gray-200 pb-2">
                      <span className="absolute left-0 text-yellow-500 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="fade-in bg-white rounded-2xl p-8 text-center shadow-xl border border-gray-200">
                <div className="text-6xl font-black text-blue-900 mb-4">30%</div>
                <div className="text-2xl font-bold mb-4 text-blue-900">Final Certification</div>
                <ul className="text-left space-y-3">
                  {["Written examination covering key concepts", "Final project presentation", "Portfolio of completed exercises", "Dual certification: IB & WealthTech Professional"].map((item, i) => (
                    <li key={i} className="pl-8 relative border-b border-gray-200 pb-2">
                      <span className="absolute left-0 text-yellow-500 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Career Section */}
        <section className="py-16 px-8 bg-gradient-to-br from-gray-50 to-gray-100">
          <h2 className="text-4xl md:text-5xl font-black text-center text-blue-900 mb-12">
            💼 Investment Banking & WealthTech Career Prospects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { icon: "📈", title: "Investment Banking Analyst", desc: "Financial analysis, deal support, research, client presentations", salary: "₹4-15 LPA", level: "Entry Level" },
              { icon: "📱", title: "WealthTech Product Manager", desc: "Digital platform development, user experience design, product strategy", salary: "₹8-25 LPA", level: "Mid-level" },
              { icon: "🤝", title: "Corporate Finance Associate", desc: "M&A support, financial modeling, due diligence, valuation analysis", salary: "₹6-18 LPA", level: "Entry to Mid-level" },
              { icon: "💹", title: "Digital Wealth Advisor", desc: "Client relationship management, portfolio advisory, digital platform support", salary: "₹5-20 LPA", level: "Mid-level" },
              { icon: "🤖", title: "Financial Technology Analyst", desc: "Data analysis, trading support, risk modeling, AI implementation", salary: "₹7-22 LPA", level: "Specialized" },
              { icon: "🌐", title: "International Finance Roles", desc: "Global opportunities in Singapore, Dubai, London financial centers", salary: "₹15-45 LPA", level: "Global Opportunities" },
              { icon: "🚀", title: "FinTech Startup Roles", desc: "Innovation roles in emerging financial technology companies", salary: "₹8-30 LPA", level: "Entrepreneurial" },
              { icon: "⚖️", title: "Risk & Compliance Analyst", desc: "Risk assessment, regulatory compliance, process improvement", salary: "₹6-18 LPA", level: "Entry to Mid-level" }
            ].map((career, i) => (
              <div key={i} className="fade-in bg-white rounded-2xl p-6 text-center shadow-lg border-t-4 border-blue-900 hover:shadow-2xl hover:-translate-y-3 transition-all relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4" style={{
                    background: 'linear-gradient(45deg, #1B365D, #FFB300)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>{career.icon}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{career.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{career.desc}</p>
                  <div className="text-2xl font-black text-yellow-500 mb-1">{career.salary}</div>
                  <div className="text-xs text-gray-500 font-semibold">{career.level}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16 px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-yellow-400">
            📞 Ready to Partner in Transforming Students into Investment Banking & WealthTech Professionals?
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+919620368991" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:scale-105 hover:shadow-2xl transition-all inline-block">
              📞 Call and Register - Limited Seats
            </a>
            <a href="mailto:gupta1070@gmail.com" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:scale-105 hover:shadow-2xl transition-all inline-block">
              📄 Download Detailed Curriculum
            </a>
          </div>

          <div className="bg-yellow-400/20 border border-yellow-400 rounded-2xl p-8 max-w-4xl mx-auto mb-8">
            <h3 className="text-yellow-400 text-2xl font-bold mb-6">🎁 Special Benefits for Partner Colleges:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[
                "Joint faculty training and development program",
                "Collaborative placement support and industry engagement",
                "Student-friendly exercises and moderate complexity",
                "Regular guest lectures from industry experts",
                "International opportunity exploration and facilitation",
                "Practical, hands-on learning approach"
              ].map((benefit, i) => (
                <div key={i} className="pl-8 relative">
                  <span className="absolute left-0 text-yellow-400 font-black text-xl">✓</span>
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto italic text-lg">
            <div className="text-yellow-400 text-2xl font-black mb-4">"Your Gateway to Elite Investment Banking & WealthTech Careers"</div>
            <div>"This program bridges the gap between academic learning and industry requirements, ensuring students gain practical skills in both traditional investment banking and innovative WealthTech through simple, engaging exercises designed specifically for college-level learning."</div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 text-center py-8 px-8">
          <div className="text-yellow-400 font-bold text-xl mb-2">Investment Banking & WealthTech Excellence Program</div>
          <div className="mb-4">Empowering MBA students with practical skills for modern financial careers</div>
          <div className="border-t border-gray-700 pt-4">
            <div className="text-yellow-400 font-bold text-lg">***Your Gateway to Investment Banking & WealthTech Careers***</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default InvestmentBankingWealthTech;