import React, { useEffect } from 'react';

export default function BFSIExcellenceProgram() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-card').forEach(card => {
      card.style.opacity = '0';
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '40', label: 'Hours Professional Training' },
    { number: '18', label: 'Comprehensive Modules' },
    { number: '25+', label: 'Live Case Studies' },
    { number: '₹8-45L', label: 'Starting Salary Range' },
    { number: '100%', label: 'Practical Learning' }
  ];

  const overview = [
    { icon: '🎯', title: 'Industry-Ready Skills', desc: 'Master real banking software, AI tools, and technologies used by top financial institutions.' },
    { icon: '💼', title: 'Direct Career Path', desc: 'Immediate placement opportunities in banking, fintech, and financial consulting with starting salaries from ₹8-45 LPA.' },
    { icon: '🚀', title: 'Future-Proof Learning', desc: 'Master GenAI, Agentic AI, and emerging technologies transforming the ₹500 trillion global financial services industry.' },
    { icon: '🏆', title: 'Industry Certification', desc: 'Earn recognized BFSI professional certification with capstone projects that showcase your expertise.' }
  ];

  const days = [
    {
      day: 1, title: 'Banking Foundations (8 Hours)',
      sessions: [
        { icon: '🌍', title: 'Module 1: Overview of Financial Markets', desc: 'Live NSE/BSE trading analysis, commodity markets, forex operations', tag: 'Real-time Market Analysis' },
        { icon: '🏛️', title: 'Module 2: Introduction to Banking', desc: 'Banking evolution, central banking role, modern banking value creation', tag: 'Banking Business Model Workshop' },
        { icon: '🌏', title: 'Module 3: Types of Banks - Global Scenario', desc: 'Compare PSU vs Private vs Foreign banks with global giants', tag: 'Global Banking Comparison Dashboard' }
      ]
    },
    {
      day: 2, title: 'Banking Products & Services (8 Hours)',
      sessions: [
        { icon: '🏪', title: 'Module 4: Retail Banking', desc: 'Savings, FDs, personal loans, wealth management', tag: 'Retail Product Design Challenge' },
        { icon: '🏢', title: 'Module 5: Corporate Banking', desc: 'Working capital, trade finance, cash management', tag: 'Corporate Deal Structuring' },
        { icon: '💼', title: 'Module 6: Investment Banking', desc: 'IPOs, M&A advisory, underwriting', tag: 'IPO Launch Simulation' },
        { icon: '🕌', title: 'Module 7: Islamic Banking', desc: 'Sharia-compliant banking, Murabaha, Ijara', tag: 'Islamic vs Conventional Banking' }
      ]
    },
    {
      day: 3, title: 'Lending & Payments (8 Hours)',
      sessions: [
        { icon: '💰', title: 'Module 8: Lending Products', desc: 'Home, personal, auto, education, business loans', tag: 'Loan Portfolio Optimization' },
        { icon: '📄', title: 'Module 9: Retail Lending Process', desc: 'End-to-end loan journey from application to collection', tag: 'Complete Loan Processing Simulation' },
        { icon: '💳', title: 'Module 10: Payment Systems', desc: 'UPI, NEFT, RTGS, SWIFT, blockchain payments', tag: 'Payment Gateway Development' },
        { icon: '💳', title: 'Module 11: Cards Ecosystem', desc: 'Credit, debit, prepaid cards - Visa, MasterCard, RuPay', tag: 'Card Product Launch Strategy' }
      ]
    },
    {
      day: 4, title: 'Risk & Compliance (8 Hours)',
      sessions: [
        { icon: '👥', title: 'Module 12: Customer Personas', desc: 'Segment customers by demographics, behavior, profitability', tag: 'Customer Segmentation Workshop' },
        { icon: '🚨', title: 'Module 13: Crime and Compliance', desc: 'Anti-money laundering (AML), KYC procedures, fraud detection', tag: 'Fraud Detection Algorithm' },
        { icon: '⚖️', title: 'Module 14: Risk Management', desc: 'Credit, market, operational, liquidity risk - VaR models', tag: 'Risk Management Simulation' },
        { icon: '📋', title: 'Module 15: Banking Regulation', desc: 'RBI guidelines, Basel III norms, capital adequacy', tag: 'Regulatory Compliance Audit' }
      ]
    },
    {
      day: 5, title: 'Future Banking & AI (8 Hours)',
      sessions: [
        { icon: '💻', title: 'Module 16: Banking Software', desc: 'Hands-on with Finacle, Temenos, T24, cloud banking platforms', tag: 'Banking Software Configuration' },
        { icon: '🤖', title: 'GenAI & Agentic AI in Finance', desc: 'ChatGPT banking applications, AI trading algorithms, robo-advisors', tag: 'Build AI Banking Assistant' },
        { icon: '🚀', title: 'Module 17: New Age Banking & Fintech', desc: 'Neo-banks, DeFi, cryptocurrency, blockchain, fintech disruption', tag: 'Fintech Startup Pitch' },
        { icon: '🛡️', title: 'Module 18: Insurance Domain', desc: 'Life, health, general insurance, bancassurance partnerships', tag: 'Insurance Product Development' }
      ]
    }
  ];

  const careers = [
    { icon: '📱', title: 'Product Manager', desc: 'Design and launch banking products, manage product lifecycle', salary: '₹12-25 LPA', level: 'Entry to Mid-level' },
    { icon: '💼', title: 'Sales Consultant', desc: 'Sell banking products, manage client relationships', salary: '₹8-18 LPA', level: 'Entry Level' },
    { icon: '📊', title: 'Investment Banking Advisor', desc: 'M&A advisory, capital raising, financial modeling', salary: '₹15-45 LPA', level: 'Mid to Senior Level' },
    { icon: '🤖', title: 'Fintech AI Specialist', desc: 'Develop AI solutions for banking, implement ML models', salary: '₹18-35 LPA', level: 'Mid-level' },
    { icon: '⚖️', title: 'Risk Analyst', desc: 'Assess credit risk, market risk, develop risk models', salary: '₹10-22 LPA', level: 'Entry to Mid-level' },
    { icon: '🏛️', title: 'Compliance Officer', desc: 'Ensure regulatory compliance, AML monitoring', salary: '₹9-20 LPA', level: 'Entry to Mid-level' }
  ];

  const successFactors = [
    { icon: '🧠', title: 'Analytical Mindset', desc: 'Master data analysis, financial modeling, and problem-solving.' },
    { icon: '💻', title: 'Technology Fluency', desc: 'Embrace AI, blockchain, and emerging technologies.' },
    { icon: '🎯', title: 'Customer-Centric Thinking', desc: 'Understand customer needs and design user experiences.' },
    { icon: '📚', title: 'Continuous Learning', desc: 'Stay updated with regulations, market trends, and innovations.' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        * { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white px-6 py-16 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-[shimmer_3s_infinite]"></div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">🏦 BFSI Domain Excellence Program</h1>
          <p className="text-lg md:text-xl mb-6">40-Hour Professional Certification in Banking, Financial Services & Insurance</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 border-yellow-400 hover:scale-105 transition-transform">
                <div className="text-3xl font-black text-yellow-300">{stat.number}</div>
                <div className="text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-12">
        <h2 className="text-center text-4xl font-bold text-blue-900 mb-10 relative">
          Transform Your Career in BFSI
          <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overview.map((card, i) => (
            <div key={i} className="animate-card bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:-translate-y-2 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-3">{card.icon}</div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-gray-50 px-6 py-12">
        <h2 className="text-center text-4xl font-bold text-blue-900 mb-10 relative">
          Complete 40-Hour BFSI Curriculum
          <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded"></div>
        </h2>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center mb-8">
          <h3 className="text-xl font-bold mb-2">🎓 Professional Certification Program</h3>
          <p>Comprehensive 40-hour training with industry-standard evaluation</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {days.map((day) => (
            <div key={day.day} className="animate-card bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl flex items-center justify-center text-xl font-bold mr-3">{day.day}</div>
                  <div className="text-lg font-semibold text-blue-900">{day.title}</div>
                </div>
                
                <div className="space-y-3">
                  {day.sessions.map((session, i) => (
                    <div key={i} className="bg-gray-50 p-3 rounded-lg border-l-3 border-blue-500 hover:shadow-md transition-shadow">
                      <div className="font-semibold text-blue-900 text-sm mb-1 flex items-center gap-2">
                        <span>{session.icon}</span>
                        <span>{session.title}</span>
                      </div>
                      <div className="text-gray-600 text-xs mb-2">{session.desc}</div>
                      <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 text-yellow-900 px-2 py-1 rounded text-xs font-semibold">{session.tag}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Exam Card */}
          <div className="animate-card bg-gradient-to-br from-green-500 to-green-600 rounded-2xl overflow-hidden col-span-full hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="p-6 text-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-xl flex items-center justify-center text-xl font-bold mr-3">📝</div>
                <div className="text-lg font-semibold">Final Certification Exam</div>
              </div>
              <div className="bg-white/90 text-gray-800 p-3 rounded-lg">
                <div className="font-semibold text-blue-900 text-sm mb-1">🎓 Comprehensive BFSI Assessment</div>
                <div className="text-gray-600 text-xs mb-2">Industry-standard evaluation covering all 18 modules with practical scenarios</div>
                <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 text-yellow-900 px-2 py-1 rounded text-xs font-semibold">Professional BFSI Certificate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="px-6 py-12">
        <h2 className="text-center text-4xl font-bold text-blue-900 mb-10 relative">
          BFSI Career Prospects & Salary Ranges
          <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career, i) => (
            <div key={i} className="animate-card bg-white p-6 rounded-2xl shadow-lg border-t-4 border-blue-900 text-center hover:-translate-y-2 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-3">{career.icon}</div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">{career.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{career.desc}</p>
              <div className="text-2xl font-black text-yellow-500 mb-1">{career.salary}</div>
              <div className="text-sm text-blue-600 font-semibold">{career.level}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Factors */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white px-6 py-12">
        <h2 className="text-center text-4xl font-bold mb-10">What You Need to Succeed in Fintech</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {successFactors.map((factor, i) => (
            <div key={i} className="animate-card bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center hover:bg-white/20 hover:-translate-y-2 transition-all">
              <div className="text-4xl mb-3">{factor.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{factor.title}</h3>
              <p className="text-sm opacity-90">{factor.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-green-500 to-green-600 text-white px-6 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">🚀 Transform Students Into BFSI Professionals</h2>
        <p className="text-lg mb-6">Join 75+ colleges already building industry-ready talent</p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border-2 border-white/20">
          <div className="mt-4 bg-yellow-400/20 p-3 rounded-lg border-l-4 border-yellow-400">
            <p className="text-sm">🎁 <strong>Special Offer:</strong> Book a demo and receive a complimentary "AI in Banking" faculty workshop!</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <button className="bg-white text-green-600 px-6 py-3 rounded-full font-bold hover:scale-105 hover:shadow-xl transition-all">
            📅 Schedule Demo Session
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-green-600 transition-all">
            📄 Download Detailed Curriculum
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white px-6 py-8 text-center">
        <h3 className="text-yellow-400 font-bold text-lg mb-4">🏆 Program Highlights</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-6">
          <div>✅ Industry-Recognized Certification</div>
          <div>✅ 100% Practical Learning</div>
          <div>✅ Expert Industry Mentors</div>
          <div>✅ Real Banking Software Training</div>
          <div>✅ AI & Future Tech Focus</div>
          <div>✅ Guaranteed Skill Development</div>
        </div>
      </footer>
    </div>
  );
}