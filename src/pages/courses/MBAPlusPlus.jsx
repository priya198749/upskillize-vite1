import React from 'react';

const MBAPlusPlus = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="font-sans leading-relaxed text-[#1E3A5F] bg-[#F4F6F8]">
      <style>{`
        :root {
          --deep-teal: #006B7D;
          --energetic-orange: #FF6B35;
          --warm-gold: #F7B731;
          --professional-navy: #1E3A5F;
          --clean-white: #FFFFFF;
          --soft-gray: #F4F6F8;
          --light-teal: #E6F7F9;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        html { scroll-behavior: smooth; }

        .gradient-teal { background: linear-gradient(135deg, #006B7D 0%, #1E3A5F 100%); }
        .gradient-orange-gold { background: linear-gradient(135deg, #FF6B35, #F7B731); }

        .hero-animation::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(247, 183, 49, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%);
          animation: pulse 8s ease-in-out infinite;
        }

        .badge-blur { backdrop-filter: blur(10px); }
        .cert-card-blur { backdrop-filter: blur(10px); }
        
        .career-card-hover { transition: all 0.3s ease; }
        .career-card-hover:hover { transform: translateY(-10px); box-shadow: 0 15px 40px rgba(0,0,0,0.15); }

        .btn-hover-primary { transition: all 0.3s ease; }
        .btn-hover-primary:hover { background: #E65A2A; transform: translateY(-3px); box-shadow: 0 10px 25px rgba(255, 107, 53, 0.3); }

        .btn-hover-secondary { transition: all 0.3s ease; }
        .btn-hover-secondary:hover { background: #F4F6F8; transform: translateY(-3px); }

        .complement-table-row { transition: background 0.3s ease; }
        .complement-table-row:hover { background: #E6F7F9; }

        .timeline-step {
          position: relative;
          padding-left: 60px;
          padding-bottom: 40px;
          border-left: 3px solid #006B7D;
        }

        .timeline-step:last-child { border-left: 3px solid transparent; }

        .timeline-step::before {
          content: '';
          position: absolute;
          left: -12px; top: 0;
          width: 22px; height: 22px;
          border-radius: 50%;
          background: #006B7D;
          border: 4px solid white;
        }

        .year {
          position: absolute;
          left: -60px; top: -5px;
          background: #FF6B35;
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 0.9rem;
          white-space: nowrap;
        }
      `}</style>

      {/* Navigation */}
      <nav className="gradient-teal py-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
          <div className="text-2xl font-extrabold text-white">MBA++ Program</div>
          <ul className="flex list-none gap-8">
            <li><a href="#overview" onClick={(e) => handleSmoothScroll(e, '#overview')} className="text-white no-underline font-medium hover:text-[#F7B731] transition-colors">Overview</a></li>
            <li><a href="#semesters" onClick={(e) => handleSmoothScroll(e, '#semesters')} className="text-white no-underline font-medium hover:text-[#F7B731] transition-colors">Curriculum</a></li>
            <li><a href="#certifications" onClick={(e) => handleSmoothScroll(e, '#certifications')} className="text-white no-underline font-medium hover:text-[#F7B731] transition-colors">Certifications</a></li>
            <li><a href="#career" onClick={(e) => handleSmoothScroll(e, '#career')} className="text-white no-underline font-medium hover:text-[#F7B731] transition-colors">Career</a></li>
            <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="text-white no-underline font-medium hover:text-[#F7B731] transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-teal text-white py-24 px-5 text-center relative overflow-hidden hero-animation">
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-3xl font-bold text-[#F7B731] mb-2 tracking-widest">UPSKILLIZE</div>
          <h1 className="text-6xl font-black mb-5" style={{ fontFamily: 'Playfair Display, serif', textShadow: '2px 4px 10px rgba(0, 0, 0, 0.3)' }}>MBA++ Program</h1>
          <p className="text-3xl mb-8 opacity-95 font-light">Chartered Digital Business Leader (CDBL)</p>
          <p className="text-2xl mt-5 font-semibold leading-tight">Complement Your Regular MBA with Industry-Relevant Courses</p>
          <p className="text-xl mt-4 opacity-95">Jump into the industry with greater career prospects, market opportunities & quick career progression</p>
          
          <div className="flex justify-center gap-5 mt-10 flex-wrap">
            <div className="bg-white/20 badge-blur py-4 px-8 rounded-full font-semibold border-2 border-white/30">4 Semesters | 16 Months</div>
            <div className="bg-white/20 badge-blur py-4 px-8 rounded-full font-semibold border-2 border-white/30">4 hours/week</div>
            <div className="bg-white/20 badge-blur py-4 px-8 rounded-full font-semibold border-2 border-white/30">4 Certifications + Chartered Qualification</div>
            <div className="bg-white/20 badge-blur py-4 px-8 rounded-full font-semibold border-2 border-white/30">100% Parallel to MBA</div>
          </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="bg-white py-20 px-5" id="overview">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-[#1E3A5F] text-center mb-12 font-bold">The MBA Reality Check</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="p-10 rounded-2xl border-2 bg-[#FFF5F5] border-[#FFC9C9]">
              <h3 className="text-3xl mb-5 text-[#1E3A5F]">🎓 Traditional MBA Alone</h3>
              <ul className="list-none ml-0">
                <li className="py-2 pl-8 relative before:content-['❌'] before:absolute before:left-0">Theory-heavy, tool-light education</li>
                <li className="py-2 pl-8 relative before:content-['❌'] before:absolute before:left-0">No practical portfolio of work</li>
                <li className="py-2 pl-8 relative before:content-['❌'] before:absolute before:left-0">No domain specialization (Fintech/HealthTech)</li>
                <li className="py-2 pl-8 relative before:content-['❌'] before:absolute before:left-0">Limited data analytics skills</li>
                <li className="py-2 pl-8 relative before:content-['❌'] before:absolute before:left-0">No product management training</li>
                <li className="py-2 pl-8 relative before:content-['❌'] before:absolute before:left-0">Generic management roles</li>
                <li className="py-2 pl-8 relative before:content-['❌'] before:absolute before:left-0">₹8-12 LPA average placement</li>
              </ul>
            </div>
            
            <div className="p-10 rounded-2xl border-2 bg-[#E6F7F9] border-[#006B7D]">
              <h3 className="text-3xl mb-5 text-[#006B7D]">🚀 MBA + CDBL Program</h3>
              <ul className="list-none ml-0">
                <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0">Hands-on tools mastery (10+ professional tools)</li>
                <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0">4 complete portfolios with 25+ deliverables</li>
                <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0">Deep Fintech or HealthTech expertise</li>
                <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0">SQL, Power BI, Analytics proficiency</li>
                <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0">Product Management end-to-end skills</li>
                <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0">APM, PM, Growth PM, Analyst roles</li>
                <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0">₹14-22 LPA placement potential</li>
              </ul>
            </div>
          </div>

          <div className="gradient-orange-gold text-white p-10 rounded-2xl mt-12 text-center text-2xl font-semibold">
            <p>Don't graduate with just a degree. Graduate with a <strong>Chartered Qualification</strong>, <strong>industry-ready portfolio</strong>, and <strong>technical skills</strong> that directly translate to high-paying jobs.</p>
          </div>
        </div>
      </section>

      {/* Certifications Highlight */}
      <section className="gradient-teal text-white py-20 px-5" id="certifications">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl mb-5 font-bold">Graduate with 5 Credentials</h2>
          <p className="text-2xl opacity-95 mb-12">Your MBA Degree + 4 Specialized Certifications + 1 Chartered Qualification</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white/20 cert-card-blur p-6 rounded-2xl border-2 border-white/30">
              <div className="text-5xl mb-4">🏦</div>
              <h4 className="text-xl font-bold mb-2">BFSI Foundations</h4>
              <p className="text-sm">Industry Knowledge Certification</p>
            </div>
            
            <div className="bg-white/20 cert-card-blur p-6 rounded-2xl border-2 border-white/30">
              <div className="text-5xl mb-4">💡</div>
              <h4 className="text-xl font-bold mb-2">Domain Specialist</h4>
              <p className="text-sm">Fintech or HealthTech Certification</p>
            </div>
            
            <div className="bg-white/20 cert-card-blur p-6 rounded-2xl border-2 border-white/30">
              <div className="text-5xl mb-4">📊</div>
              <h4 className="text-xl font-bold mb-2">Data Analytics</h4>
              <p className="text-sm">Power BI & SQL Certification</p>
            </div>
            
            <div className="bg-white/20 cert-card-blur p-6 rounded-2xl border-2 border-white/30">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-bold mb-2">Product Leadership</h4>
              <p className="text-sm">Mini CEO Program Certification</p>
            </div>
            
            <div className="bg-white/30 cert-card-blur p-6 rounded-2xl border-3 border-[#F7B731]">
              <div className="text-5xl mb-4">🏆</div>
              <h4 className="text-xl font-bold mb-2">Chartered Digital Business Leader</h4>
              <p className="text-sm font-bold">CDBL Chartered Qualification</p>
            </div>
          </div>
          
          <div className="gradient-orange-gold text-white p-8 rounded-2xl mt-12 text-xl font-semibold">
            Post-nominals: <strong>MBA, CDBL</strong> (like CFA for Investment Bankers)
          </div>
        </div>
      </section>

      {/* Program Overview Table */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-[#1E3A5F] text-center mb-12 font-bold">Program Structure at a Glance</h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
            <table className="w-full border-collapse min-w-full">
              <thead>
                <tr className="bg-[#1E3A5F] text-white">
                  <th className="p-4 text-left border-2 border-white">Semester</th>
                  <th className="p-4 text-left border-2 border-white">Duration</th>
                  <th className="p-4 text-left border-2 border-white">Time Commitment</th>
                  <th className="p-4 text-left border-2 border-white">Course Focus</th>
                  <th className="p-4 text-left border-2 border-white">Certification Earned</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#E6F7F9] transition-colors">
                  <td className="p-4 border-2 border-[#F4F6F8] font-bold">Term 1</td>
                  <td className="p-4 border-2 border-[#F4F6F8]">3-4 months</td>
                  <td className="p-4 border-2 border-[#F4F6F8]">4-6 hours/week</td>
                  <td className="p-4 border-2 border-[#F4F6F8]">BFSI Domain Excellence</td>
                  <td className="p-4 border-2 border-[#F4F6F8]">🎓 Certified FinTech Professional (CFP)</td>
                </tr>
                <tr className="hover:bg-[#E6F7F9] transition-colors">
                  <td className="p-4 border-2 border-[#F4F6F8] font-bold">Term 2</td>
                  <td className="p-4 border-2 border-[#F4F6F8]">3-4 months</td>
                  <td className="p-4 border-2 border-[#F4F6F8]">4-6 hours/week</td>
                  <td className="p-4 border-2 border-[#F4F6F8]">Investment Banking & WealthTech Excellence</td>
                  <td className="p-4 border-2 border-[#F4F6F8]">🎓 Certified WealthTech Professional (CWP)</td>
                </tr>
                <tr className="hover:bg-[#E6F7F9] transition-colors">
                  <td className="p-4 border-2 border-[#F4F6F8] font-bold">Term 3</td>
                  <td className="p-4 border-2 border-[#F4F6F8]">3-4 months</td>
                  <td className="p-4 border-2 border-[#F4F6F8]">4-6 hours/week</td>
                  <td className="p-4 border-2 border-[#F4F6F8]">Data to Decisions: Power BI, AI & Data Mastery</td>
                  <td className="p-4 border-2 border-[#F4F6F8]">🎓 Certified Data Analytics Professional (CDAP)</td>
                </tr>
                <tr className="hover:bg-[#E6F7F9] transition-colors">
                  <td className="p-4 border-2 border-[#F4F6F8] font-bold">Term 4</td>
                  <td className="p-4 border-2 border-[#F4F6F8]">3-4 months</td>
                  <td className="p-4 border-2 border-[#F4F6F8]">4-6 hours/week</td>
                  <td className="p-4 border-2 border-[#F4F6F8]">Product Leadership: Mini CEO Program</td>
                  <td className="p-4 border-2 border-[#F4F6F8]">🎓 Certified Product Manager (CPM)</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="gradient-orange-gold text-white p-8 rounded-2xl mt-10 text-center text-xl font-semibold">
            <strong>Complete Program = 4 Certificates + CDBL Chartered Qualification</strong><br />
            Total Investment: 256 hours over 16 months | Just 1 hour per day, 4 days a week
            Complementary Guest Lectures, Career Guidance Support, Mock Interviews and Placement Assistance
          </div>
        </div>
      </section>

            {/* Semester Details Section - ALL 4 SEMESTERS COMPLETE */}
      <section className="bg-white py-20 px-5" id="semesters">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-[#1E3A5F] text-center mb-12 font-bold">Semester-by-Semester Journey</h2>
          
          {/* SEMESTER 1 - BFSI Domain Excellence */}
          <div className="bg-[#F4F6F8] rounded-2xl p-10 mb-10 border-l-8 border-[#006B7D] relative">
            <div className="absolute top-5 right-5 bg-[#006B7D] text-white py-2 px-5 rounded-full font-bold text-sm">TERM 1</div>
            <h3 className="text-3xl text-[#1E3A5F] mb-4 font-bold">BFSI Domain Excellence (40 Hours)</h3>
            <p className="text-xl text-[#006B7D] mb-8 italic">Banking, Financial Services & Insurance - 18 Comprehensive Modules</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border-l-4 border-[#006B7D] shadow-md">
                <h4 className="text-[#006B7D] mb-4 text-xl font-bold">🏦 Banking Foundations (8h)</h4>
                <ul className="list-none ml-0 text-sm space-y-2">
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Live NSE/BSE trading analysis & financial markets</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Banking evolution: PSU vs Private vs Foreign banks</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Compare JP Morgan, HSBC, DBS global operations</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Banking business model workshop</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border-l-4 border-[#006B7D] shadow-md">
                <h4 className="text-[#006B7D] mb-4 text-xl font-bold">🏪 Banking Products & Services (8h)</h4>
                <ul className="list-none ml-0 text-sm space-y-2">
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Retail Banking: Savings, FDs, personal loans, wealth management</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Corporate Banking: ₹100 crore deal structuring</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Investment Banking: IPO launches, M&A advisory</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Islamic Banking: Sharia-compliant products</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border-l-4 border-[#006B7D] shadow-md">
                <h4 className="text-[#006B7D] mb-4 text-xl font-bold">💳 Lending & Payments (8h)</h4>
                <ul className="list-none ml-0 text-sm space-y-2">
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Complete loan portfolio: Home, personal, auto, education, business</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">End-to-end loan processing simulation</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">UPI, NEFT, RTGS, SWIFT - ₹500 crore daily transactions</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Cards ecosystem: Visa, MasterCard, RuPay operations</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border-l-4 border-[#006B7D] shadow-md">
                <h4 className="text-[#006B7D] mb-4 text-xl font-bold">⚖️ Risk & Compliance (8h)</h4>
                <ul className="list-none ml-0 text-sm space-y-2">
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Customer personas: Millennials, HNIs, SMEs segmentation</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">AML, KYC, fraud detection algorithms</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Credit, market, operational risk - VaR models</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">RBI guidelines, Basel III, regulatory audits</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border-l-4 border-[#006B7D] shadow-md">
                <h4 className="text-[#006B7D] mb-4 text-xl font-bold">🤖 Future Banking & AI (8h)</h4>
                <ul className="list-none ml-0 text-sm space-y-2">
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Build AI Banking Assistant with ChatGPT</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Neo-banks, DeFi, cryptocurrency, blockchain</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Fintech disruption: PhonePe, Razorpay models</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Insurance domain: Life, health, bancassurance</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border-l-4 border-[#006B7D] shadow-md">
                <h4 className="text-[#006B7D] mb-4 text-xl font-bold">🎯 Interesting Highlights</h4>
                <ul className="list-none ml-0 text-sm space-y-2">
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">🚀 Launch your own fintech startup pitch</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">💼 Analyze Zomato/Paytm IPO case studies</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">🌐 Global banking comparison dashboards</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">🤖 GenAI applications in banking & finance</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#E6F7F9] p-6 rounded-2xl mt-8 border-2 border-[#006B7D]">
              <h4 className="text-[#1E3A5F] mb-4 text-xl font-bold">📦 Capstone Projects (Portfolio)</h4>
              <ul className="list-none ml-0">
                <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">Fintech unicorn business model analysis (CRED, Razorpay, PhonePe)</li>
                <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">Traditional vs neo-banking value proposition comparison</li>
                <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">Regulatory impact assessment on digital lending platforms</li>
                <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">Customer segmentation strategy for retail banking</li>
              </ul>
            </div>

            <div className="gradient-orange-gold text-white p-8 rounded-2xl mt-8 text-center text-xl font-semibold">
              <strong>MBA Complement:</strong> Your MBA teaches financial accounting theory & banking basics → CDBL adds real-world BFSI depth with live market analysis, actual product design, and fintech innovation
            </div>

            <div className="bg-[#FFF9E6] p-6 rounded-2xl mt-6 border-2 border-[#F7B731] flex items-center gap-4">
              <div className="text-4xl">⏰</div>
              <div>
                <p className="font-bold text-lg text-[#1E3A5F]">Time Commitment:</p>
                <p className="text-[#1E3A5F]">2 live sessions per week × 2 hours = 4 hours</p>
                <p className="text-[#1E3A5F]"><strong>Self-study:</strong> 1-2 hours per week (flexible) | <strong>No overnight assignments</strong></p>
              </div>
            </div>
          </div>

          {/* SEMESTER 2 - Investment Banking & WealthTech OR HealthTech */}
          <div className="bg-[#F4F6F8] rounded-2xl p-10 mb-10 border-l-8 border-[#FF6B35] relative">
            <div className="absolute top-5 right-5 bg-[#006B7D] text-white py-2 px-5 rounded-full font-bold text-sm">TERM 2</div>
            <h3 className="text-3xl text-[#1E3A5F] mb-4 font-bold">Investment Banking & WealthTech Excellence (40 Hours)</h3>
            <p className="text-xl text-[#006B7D] mb-8 italic">Choose Your Track: Fintech OR HealthTech (16 Modules)</p>
            
            {/* Track A - Fintech */}
            <div className="bg-gradient-to-br from-[#FFF9E6] to-[#FFE6CC] p-8 rounded-2xl border-2 border-[#F7B731] mb-8">
              <h4 className="text-2xl text-[#1E3A5F] mb-6 font-bold">💼 Track A: Investment Banking & WealthTech</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border-l-4 border-[#006B7D] shadow-md">
                  <h5 className="text-[#006B7D] mb-3 text-lg font-bold">💼 Investment Banking Foundations (8h)</h5>
                  <ul className="list-none ml-0 text-sm space-y-1">
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">History & evolution from traditional to modern banking</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">Capital markets: NSE, BSE, NYSE operations</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">IPO process: Analyze Zomato/Paytm launches</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">M&A and basic financial modeling</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border-l-4 border-[#006B7D] shadow-md">
                  <h5 className="text-[#006B7D] mb-3 text-lg font-bold">💰 WealthTech & Digital Assets (8h)</h5>
                  <ul className="list-none ml-0 text-sm space-y-1">
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">Robo-advisors: Wealthfront, Betterment, Smallcase</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">Alternative investments: Fractional real estate, P2P</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">Cryptocurrency & blockchain: DeFi basics</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">Institutional digital asset adoption</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border-l-4 border-[#006B7D] shadow-md">
                  <h5 className="text-[#006B7D] mb-3 text-lg font-bold">🛡️ Risk Management & RegTech (8h)</h5>
                  <ul className="list-none ml-0 text-sm space-y-1">
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">Basic risk assessment frameworks</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">AI in risk analytics & credit scoring</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">RegTech: KYC, AML automation</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">ESG & sustainable finance principles</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border-l-4 border-[#006B7D] shadow-md">
                  <h5 className="text-[#006B7D] mb-3 text-lg font-bold">📈 Quantitative Methods & Trading (8h)</h5>
                  <ul className="list-none ml-0 text-sm space-y-1">
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">Statistical analysis & portfolio optimization</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">Trading technology platforms & algorithms</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">High-frequency trading (HFT) basics</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">Market microstructure & order types</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border-l-4 border-[#006B7D] shadow-md">
                  <h5 className="text-[#006B7D] mb-3 text-lg font-bold">🤖 AI & Innovation in Finance (8h)</h5>
                  <ul className="list-none ml-0 text-sm space-y-1">
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">GenAI applications in trading & wealth management</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">Machine learning for investment strategies</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">Predictive analytics for market trends</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">Autonomous financial systems</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border-l-4 border-[#006B7D] shadow-md">
                  <h5 className="text-[#006B7D] mb-3 text-lg font-bold">🎯 Track A Highlights</h5>
                  <ul className="list-none ml-0 text-sm space-y-1">
                    <li className="pl-4 relative before:content-['💼'] before:absolute before:left-0">Build complete IPO launch strategy</li>
                    <li className="pl-4 relative before:content-['🤖'] before:absolute before:left-0">Design robo-advisor algorithm</li>
                    <li className="pl-4 relative before:content-['🌐'] before:absolute before:left-0">Global IB career paths (Singapore, Dubai, London)</li>
                    <li className="pl-4 relative before:content-['📊'] before:absolute before:left-0">Real deal execution simulations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Track B - HealthTech */}
            <div className="bg-gradient-to-br from-[#E6F9F5] to-[#CCEFE6] p-8 rounded-2xl border-2 border-[#10B981] mb-8">
              <h4 className="text-2xl text-[#1E3A5F] mb-6 font-bold">🏥 Track B: HealthTech Innovation (40 Hours)</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border-l-4 border-[#10B981] shadow-md">
                  <h5 className="text-[#10B981] mb-3 text-lg font-bold">🏥 Digital Health Platforms (8h)</h5>
                  <ul className="list-none ml-0 text-sm space-y-1">
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">Telemedicine: Practo, MFine, Tata 1mg models</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">Diagnostics tech: AI in radiology, home testing</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">Pharmacy aggregation business models</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">Mental health platforms: Wysa, InnerHour</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border-l-4 border-[#10B981] shadow-md">
                  <h5 className="text-[#10B981] mb-3 text-lg font-bold">💊 HealthTech Business Models (8h)</h5>
                  <ul className="list-none ml-0 text-sm space-y-1">
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">Health insurance tech: Claim automation</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">Hospital information systems (HIS, EMR, EHR)</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">Chronic disease management platforms</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF6B35]">Wearables & IoT in healthcare</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border-l-4 border-[#10B981] shadow-md">
                  <h5 className="text-[#10B981] mb-3 text-lg font-bold">🎯 Track B Highlights</h5>
                  <ul className="list-none ml-0 text-sm space-y-1">
                    <li className="pl-4 relative before:content-['🚀'] before:absolute before:left-0">Design teleconsultation product for rural India</li>
                    <li className="pl-4 relative before:content-['🤖'] before:absolute before:left-0">Build AI-powered symptom checker</li>
                    <li className="pl-4 relative before:content-['📊'] before:absolute before:left-0">Subscription model for chronic care</li>
                    <li className="pl-4 relative before:content-['💡'] before:absolute before:left-0">HealthTech startup pitch deck</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#E6F7F9] p-6 rounded-2xl mt-8 border-2 border-[#006B7D]">
              <h4 className="text-[#1E3A5F] mb-4 text-xl font-bold">📦 Capstone Projects (Portfolio)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-bold mb-3 text-[#1E3A5F]">Track A - Fintech/WealthTech:</p>
                  <ul className="list-none ml-0">
                    <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">Design robo-advisory platform MVP</li>
                    <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">IPO pricing & valuation analysis</li>
                    <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">ESG scoring framework development</li>
                    <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">DeFi protocol comparison study</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-3 text-[#1E3A5F]">Track B - HealthTech:</p>
                  <ul className="list-none ml-0">
                    <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">Telemedicine platform for Tier 2/3 cities</li>
                    <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">Predictive analytics for patient readmission</li>
                    <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">Subscription model for chronic disease management</li>
                    <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">Health insurance claim automation workflow</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="gradient-orange-gold text-white p-8 rounded-2xl mt-8 text-center text-xl font-semibold">
              <strong>MBA Complement:</strong> Your MBA teaches generic strategy & operations theory → CDBL adds deep Fintech/HealthTech vertical expertise making you a specialist, not a generalist
            </div>

            <div className="gradient-orange-gold text-white p-8 rounded-2xl mt-4 text-center text-xl font-semibold">
              <strong>Recruiter sees:</strong> "MBA with Investment Banking & WealthTech Specialization" or "MBA with HealthTech Innovation Specialization" – Not just "MBA with Finance/Marketing"
            </div>
          </div>

          {/* SEMESTER 3 - Data to Decisions */}
          <div className="bg-[#F4F6F8] rounded-2xl p-10 mb-10 border-l-8 border-[#10B981] relative">
            <div className="absolute top-5 right-5 bg-[#006B7D] text-white py-2 px-5 rounded-full font-bold text-sm">TERM 3</div>
            <h3 className="text-3xl text-[#1E3A5F] mb-4 font-bold">Data to Decisions: Power BI, AI & Data Mastery (40 Hours)</h3>
            <p className="text-xl text-[#006B7D] mb-8 italic">Learn to work with data BEFORE making product decisions - 8 Comprehensive Modules</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border-l-4 border-[#10B981] shadow-md">
                <h4 className="text-[#10B981] mb-4 text-xl font-bold">📊 Stage 1: Data Foundations (10h)</h4>
                <ul className="list-none ml-0 text-sm space-y-2">
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Data quality frameworks & ETL processes</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">SQL fundamentals: Joins, aggregations, window functions</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Data visualization principles & chart selection</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Excel Power Tools: Power Pivot, Power Query</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border-l-4 border-[#10B981] shadow-md">
                <h4 className="text-[#10B981] mb-4 text-xl font-bold">🔧 Stage 2: Power BI Mastery (15h)</h4>
                <ul className="list-none ml-0 text-sm space-y-2">
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Power BI Desktop: Interface, first dashboard creation</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Power Query: Data transformation engine, M language</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Essential DAX: Calculated columns, measures, context</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Visualization mastery: Charts, formatting, themes</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Data modeling: Star schema, relationships, cardinality</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border-l-4 border-[#10B981] shadow-md">
                <h4 className="text-[#10B981] mb-4 text-xl font-bold">🚀 Advanced Power BI (8h)</h4>
                <ul className="list-none ml-0 text-sm space-y-2">
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Advanced DAX: Time intelligence, CALCULATE, iterators</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Power BI Service: Publishing, workspaces, scheduled refresh</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Interactive features: Slicers, filters, bookmarks, drill-down</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Row-level security & data governance</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border-l-4 border-[#10B981] shadow-md">
                <h4 className="text-[#10B981] mb-4 text-xl font-bold">🤖 Stage 3: AI Intelligence (7h)</h4>
                <ul className="list-none ml-0 text-sm space-y-2">
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Machine learning integration with Power BI</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Predictive analytics: Forecasting, anomaly detection</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">GenAI integration: ChatGPT/Claude for insights</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Natural language queries (Q&A visuals)</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Cognitive services: Sentiment analysis, key phrases</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border-l-4 border-[#10B981] shadow-md">
                <h4 className="text-[#10B981] mb-4 text-xl font-bold">💻 Tools & Technologies</h4>
                <ul className="list-none ml-0 text-sm space-y-2">
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Power BI Desktop, Service, Mobile, APIs (85%)</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Excel Power Tools (10%)</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">SQL & Database connectivity (5%)</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Python/R integration for ML</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">GenAI: ChatGPT, Claude for analytics</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border-l-4 border-[#10B981] shadow-md">
                <h4 className="text-[#10B981] mb-4 text-xl font-bold">🎯 Interesting Highlights</h4>
                <ul className="list-none ml-0 text-sm space-y-2">
                  <li className="pl-6 relative before:content-['📊'] before:absolute before:left-0">Build dashboards analyzing real companies: HDFC, Amazon, Netflix</li>
                  <li className="pl-6 relative before:content-['🤖'] before:absolute before:left-0">Create AI-powered sales forecasting model</li>
                  <li className="pl-6 relative before:content-['🚀'] before:absolute before:left-0">Design self-service BI for 3 user personas</li>
                  <li className="pl-6 relative before:content-['💡'] before:absolute before:left-0">Performance optimization: Make dashboard 50% faster</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#E6F7F9] p-6 rounded-2xl mt-8 border-2 border-[#006B7D]">
              <h4 className="text-[#1E3A5F] mb-4 text-xl font-bold">📚 20+ Real Case Studies You'll Analyze</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div>
                  <p className="font-bold mb-2 text-[#1E3A5F]">Banking & Finance:</p>
                  <ul className="list-none ml-0 text-sm">
                    <li className="py-1">🏦 HDFC Bank customer analytics</li>
                    <li className="py-1">💳 ICICI ETL automation</li>
                    <li className="py-1">📊 Paytm quick wins dashboard</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-2 text-[#1E3A5F]">E-commerce & Retail:</p>
                  <ul className="list-none ml-0 text-sm">
                    <li className="py-1">🛒 Amazon scaling architecture</li>
                    <li className="py-1">🛍️ Walmart data modeling</li>
                    <li className="py-1">🍕 Zomato delivery optimization</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-2 text-[#1E3A5F]">Consulting & Tech:</p>
                  <ul className="list-none ml-0 text-sm">
                    <li className="py-1">💼 McKinsey storytelling dashboards</li>
                    <li className="py-1">🎯 Deloitte self-service BI</li>
                    <li className="py-1">💻 TCS YoY analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#E6F7F9] p-6 rounded-2xl mt-8 border-2 border-[#006B7D]">
              <h4 className="text-[#1E3A5F] mb-4 text-xl font-bold">📦 Complete Portfolio (6 Data Analytics Deliverables)</h4>
              <ul className="list-none ml-0">
                <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">10 SQL queries solving real business problems (loan portfolio, customer segmentation)</li>
                <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]"><strong>3 Professional Power BI Dashboards:</strong> Sales Performance, Marketing ROI, Product Engagement</li>
                <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">Cohort retention analysis with actionable insights</li>
                <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">A/B test design and analysis framework</li>
                <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">Event tracking plan for Semester 4 product</li>
                <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">Metrics framework document defining KPIs</li>
              </ul>
            </div>

            <div className="gradient-orange-gold text-white p-8 rounded-2xl mt-8 text-center text-xl font-semibold">
              <strong>MBA Complement:</strong> Your MBA teaches business analytics theory & Excel basics → CDBL adds hands-on SQL, Power BI certification-level skills, and real dashboard building with AI integration
            </div>

            <div className="bg-[#FFF9E6] p-6 rounded-2xl mt-6 border-2 border-[#F7B731] flex items-center gap-4">
              <div className="text-4xl">💻</div>
              <div>
                <p className="font-bold text-lg text-[#1E3A5F]">Hands-on practice:</p>
                <p className="text-[#1E3A5F]">2-3 hours per week (build dashboards at your pace)</p>
                <p className="text-[#1E3A5F]"><strong>No theoretical exams</strong> - only practical projects you can complete over weekends</p>
                <p className="text-[#1E3A5F]"><strong>100% Hands-On Learning:</strong> Every topic has exercises, group discussions, real-world applications</p>
              </div>
            </div>
          </div>

          {/* SEMESTER 4 - Product Leadership */}
          <div className="bg-[#F4F6F8] rounded-2xl p-10 mb-10 border-l-8 border-[#8B5CF6] relative">
            <div className="absolute top-5 right-5 bg-[#006B7D] text-white py-2 px-5 rounded-full font-bold text-sm">TERM 4 - CAPSTONE</div>
            <h3 className="text-3xl text-[#1E3A5F] mb-4 font-bold">Product Leadership: The Mini CEO Program (40 Hours)</h3>
            <p className="text-xl text-[#006B7D] mb-8 italic">Build complete products using all skills from Semesters 1-3</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border-l-4 border-[#8B5CF6] shadow-md">
                <h4 className="text-[#8B5CF6] mb-4 text-xl font-bold">🎯 Core Product Skills</h4>
                <ul className="list-none ml-0 text-sm space-y-2">
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">User research & problem validation</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Product strategy & OKRs</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Roadmapping (RICE, MoSCoW, Kano)</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Figma mastery & prototyping</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">No-code app development (Glide)</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">PRD writing & Agile/Scrum</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border-l-4 border-[#8B5CF6] shadow-md">
                <h4 className="text-[#8B5CF6] mb-4 text-xl font-bold">📈 Data-Driven PM (uses Sem 3 skills)</h4>
                <ul className="list-none ml-0 text-sm space-y-2">
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Advanced product analytics</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Metrics dashboard creation</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">A/B testing at scale</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Growth loops & funnel optimization</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">GTM strategy with data</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border-l-4 border-[#8B5CF6] shadow-md">
                <h4 className="text-[#8B5CF6] mb-4 text-xl font-bold">🤖 Modern PM Skills</h4>
                <ul className="list-none ml-0 text-sm space-y-2">
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">AI Product Management</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">ChatGPT integration</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">ML product basics</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">Growth marketing & viral loops</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">CIRCLES interview method</li>
                  <li className="pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-[#FF6B35] before:font-bold">3 mock interviews</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#E6F7F9] p-6 rounded-2xl mt-8 border-2 border-[#006B7D]">
              <h4 className="text-[#1E3A5F] mb-4 text-xl font-bold">📦 Complete Portfolio (16 Total Deliverables)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-bold mb-3 text-[#1E3A5F]">Research & Strategy:</p>
                  <ul className="list-none ml-0">
                    <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">Product teardown analysis</li>
                    <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">User research summary (3 interviews)</li>
                    <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">2 User personas + Journey maps</li>
                    <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">Product vision & OKRs document</li>
                    <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">6-month product roadmap</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-3 text-[#1E3A5F]">Execution & Growth:</p>
                  <ul className="list-none ml-0">
                    <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">High-fidelity Figma prototype (5-7 screens)</li>
                    <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">Working no-code app (Glide)</li>
                    <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">Complete PRD (8-12 pages)</li>
                    <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">Interactive metrics dashboard (Power BI)</li>
                    <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">A/B test plan with statistical analysis</li>
                    <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">Data-driven GTM strategy</li>
                    <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">Growth experiments roadmap (10 experiments)</li>
                    <li className="py-2 pl-8 relative before:content-['✅'] before:absolute before:left-0 before:text-[#10B981]">10-minute capstone presentation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="gradient-orange-gold text-white p-8 rounded-2xl mt-8 text-center text-xl font-semibold">
              <strong>Perfect Timing:</strong> Final MBA semester = lighter courseload<br />
              Capstone presentation = ready-made interview project for placements
            </div>
          </div>
          
        </div>
      </section>

      {/* MBA Complement Table */}
      <section className="bg-[#F4F6F8] py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-[#1E3A5F] text-center mb-6 font-bold">How CDBL Complements Your MBA</h2>
          <p className="text-center text-xl text-[#006B7D] mb-12 italic">MBA Teaches You WHAT, CDBL Teaches You HOW</p>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg overflow-x-auto">
            <table className="w-full border-collapse min-w-full">
              <thead>
                <tr className="bg-[#006B7D] text-white">
                  <th className="p-4 text-left border-2 border-white">Aspect</th>
                  <th className="p-4 text-left border-2 border-white">Your Regular MBA</th>
                  <th className="p-4 text-left border-2 border-white">MBA++ (CDBL Program)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="complement-table-row">
                  <td className="p-4 border-2 border-[#E6F7F9] font-semibold">Schedule</td>
                  <td className="p-4 border-2 border-[#E6F7F9]">Mon-Fri full time on campus</td>
                  <td className="p-4 border-2 border-[#E6F7F9]">Weekend live sessions (2h Sat + 2h self-study)</td>
                </tr>
                <tr className="complement-table-row">
                  <td className="p-4 border-2 border-[#E6F7F9] font-semibold">Duration</td>
                  <td className="p-4 border-2 border-[#E6F7F9]">2 years / 4 semesters</td>
                  <td className="p-4 border-2 border-[#E6F7F9]">Runs parallel - 16 months across your MBA</td>
                </tr>
                <tr className="complement-table-row">
                  <td className="p-4 border-2 border-[#E6F7F9] font-semibold">Focus</td>
                  <td className="p-4 border-2 border-[#E6F7F9]">Business theory, management fundamentals</td>
                  <td className="p-4 border-2 border-[#E6F7F9]">Practical tools, domain skills, portfolio building</td>
                </tr>
                <tr className="complement-table-row">
                  <td className="p-4 border-2 border-[#E6F7F9] font-semibold">Outcomes</td>
                  <td className="p-4 border-2 border-[#E6F7F9]">MBA Degree</td>
                  <td className="p-4 border-2 border-[#E6F7F9]">4 Certifications + Chartered CDBL Qualification</td>
                </tr>
                <tr className="complement-table-row">
                  <td className="p-4 border-2 border-[#E6F7F9] font-semibold">Skills</td>
                  <td className="p-4 border-2 border-[#E6F7F9]">Strategic thinking, leadership, Excel basics</td>
                  <td className="p-4 border-2 border-[#E6F7F9]">SQL, Power BI, Figma, Python, Product Management</td>
                </tr>
                <tr className="complement-table-row">
                  <td className="p-4 border-2 border-[#E6F7F9] font-semibold">Portfolio</td>
                  <td className="p-4 border-2 border-[#E6F7F9]">Case studies, reports, presentations</td>
                  <td className="p-4 border-2 border-[#E6F7F9]">25+ project deliverables ready for interviews</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#006B7D] text-white p-8 rounded-2xl mt-10 text-center">
            <h3 className="text-2xl mb-4">💡 Key Insight</h3>
            <p className="text-xl">Your MBA teaches you WHAT to do as a business leader. CDBL teaches you HOW to do it with real tools, frameworks, and deliverables</p>
          </div>
        </div>
      </section>
      <section id="career" className="bg-[#F4F6F8] py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-[#1E3A5F] text-center mb-12 font-bold">Career Outcomes: Where You'll Go After Graduation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-9 rounded-2xl border-l-8 border-[#006B7D] transition-all career-card-hover shadow-lg">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-[#1E3A5F] text-2xl mb-2 font-bold">Associate Product Manager (APM)</h4>
              <p className="text-[#006B7D] font-bold text-2xl mb-4">₹18-22 LPA</p>
              <p className="mb-3"><strong>Companies:</strong> Flipkart, Google, Swiggy, PhonePe, Amazon, CRED</p>
              <p className="text-sm"><strong>What you'll do:</strong> Support senior PMs, own small features, learn product lifecycle, conduct user research, write user stories. Build foundation for PM career.</p>
            </div>
            
            <div className="bg-white p-9 rounded-2xl border-l-8 border-[#006B7D] transition-all career-card-hover shadow-lg">
              <div className="text-5xl mb-4">🚀</div>
              <h4 className="text-[#1E3A5F] text-2xl mb-2 font-bold">Product Manager (PM)</h4>
              <p className="text-[#006B7D] font-bold text-2xl mb-4">₹22-28 LPA</p>
              <p className="mb-3"><strong>Companies:</strong> Razorpay, Meesho, Zerodha, Dream11, PolicyBazaar</p>
              <p className="text-sm"><strong>What you'll do:</strong> Own complete product areas, define roadmaps, set OKRs, lead cross-functional teams, manage product launches. Your CDBL training makes this transition smooth.</p>
            </div>
            
            <div className="bg-white p-9 rounded-2xl border-l-8 border-[#006B7D] transition-all career-card-hover shadow-lg">
              <div className="text-5xl mb-4">📊</div>
              <h4 className="text-[#1E3A5F] text-2xl mb-2 font-bold">Business Analyst</h4>
              <p className="text-[#006B7D] font-bold text-2xl mb-4">₹12-16 LPA</p>
              <p className="mb-3"><strong>Companies:</strong> Consulting firms, Fintech companies, E-commerce platforms</p>
              <p className="text-sm"><strong>What you'll do:</strong> Data analysis, market research, strategic recommendations, dashboard creation, and stakeholder reporting.</p>
            </div>

            <div className="bg-white p-9 rounded-2xl border-l-8 border-[#006B7D] transition-all career-card-hover shadow-lg">
              <div className="text-5xl mb-4">💡</div>
              <h4 className="text-[#1E3A5F] text-2xl mb-2 font-bold">Growth Manager</h4>
              <p className="text-[#006B7D] font-bold text-2xl mb-4">₹16-24 LPA</p>
              <p className="mb-3"><strong>Companies:</strong> Startups, D2C brands, SaaS companies</p>
              <p className="text-sm"><strong>What you'll do:</strong> User acquisition strategies, retention campaigns, A/B testing, growth experiments, and data-driven marketing.</p>
            </div>

            <div className="bg-white p-9 rounded-2xl border-l-8 border-[#006B7D] transition-all career-card-hover shadow-lg">
              <div className="text-5xl mb-4">📈</div>
              <h4 className="text-[#1E3A5F] text-2xl mb-2 font-bold">Data Analyst</h4>
              <p className="text-[#006B7D] font-bold text-2xl mb-4">₹14-18 LPA</p>
              <p className="mb-3"><strong>Companies:</strong> Tech companies, Banks, E-commerce platforms</p>
              <p className="text-sm"><strong>What you'll do:</strong> Build Power BI dashboards, analyze business metrics, SQL queries, and provide data-driven insights to leadership.</p>
            </div>

            <div className="bg-white p-9 rounded-2xl border-l-8 border-[#006B7D] transition-all career-card-hover shadow-lg">
              <div className="text-5xl mb-4">🎨</div>
              <h4 className="text-[#1E3A5F] text-2xl mb-2 font-bold">Product Designer (Non-Tech)</h4>
              <p className="text-[#006B7D] font-bold text-2xl mb-4">₹12-18 LPA</p>
              <p className="mb-3"><strong>Companies:</strong> Design studios, Startups, Product companies, Agencies</p>
              <p className="text-sm"><strong>What you'll do:</strong> User research, wireframing, prototyping in Figma, UI/UX design, and design system management.</p>
            </div>
          </div>

          {/* Salary Comparison - EXACT FROM HTML */}
          <div className="bg-white p-10 rounded-2xl mt-12 text-center shadow-lg">
            <h3 className="text-[#1E3A5F] mb-8 text-3xl font-bold">Salary Comparison</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              <div className="p-8 bg-[#FFF5F5] rounded-2xl border-2 border-[#FFC9C9]">
                <h4 className="text-[#1E3A5F] mb-4 text-xl font-bold">Traditional MBA Only</h4>
                <div className="text-5xl font-extrabold text-[#1E3A5F] my-5">₹8-12 LPA</div>
                <p>Management Trainee, Sales Executive, Operations roles</p>
              </div>
              <div className="p-8 bg-[#E6F7F9] rounded-2xl border-2 border-[#006B7D]">
                <h4 className="text-[#1E3A5F] mb-4 text-xl font-bold">MBA + CDBL Graduate</h4>
                <div className="text-5xl font-extrabold text-[#006B7D] my-5">₹14-22 LPA</div>
                <p>APM, PM, Analyst roles at top tech companies</p>
              </div>
            </div>
            <div className="gradient-orange-gold text-white p-8 rounded-2xl mt-8 text-xl font-semibold">
              <strong>50-150% Higher Starting Salary</strong> with MBA + CDBL vs MBA alone
            </div>
          </div>

          {/* Career Progression Timeline - EXACT FROM HTML */}
          <div className="bg-white p-10 rounded-2xl mt-12 shadow-lg">
            <h3 className="text-[#1E3A5F] text-center text-3xl mb-10 font-bold">Your Career Progression Path</h3>
            
            <div className="max-w-4xl mx-auto">
              <div className="timeline-step">
                <div className="year">Year 0-2</div>
                <div className="bg-[#F4F6F8] p-6 rounded-xl">
                  <h4 className="text-2xl text-[#006B7D] font-bold mb-2">Associate Product Manager (APM)</h4>
                  <p className="text-[#FF6B35] font-bold text-xl mb-3">₹18-22 LPA</p>
                  <p>Support senior PMs, own small features, learn product lifecycle, conduct user research, write user stories. Build foundation for PM career.</p>
                </div>
              </div>
              
              <div className="timeline-step">
                <div className="year">Year 2-5</div>
                <div className="bg-[#F4F6F8] p-6 rounded-xl">
                  <h4 className="text-2xl text-[#006B7D] font-bold mb-2">Product Manager (PM)</h4>
                  <p className="text-[#FF6B35] font-bold text-xl mb-3">₹22-35 LPA</p>
                  <p>Own complete product areas, define roadmaps, set OKRs, lead cross-functional teams, manage launches. Your CDBL training makes this transition smooth.</p>
                </div>
              </div>
              
              <div className="timeline-step">
                <div className="year">Year 5-8</div>
                <div className="bg-[#F4F6F8] p-6 rounded-xl">
                  <h4 className="text-2xl text-[#006B7D] font-bold mb-2">Senior Product Manager</h4>
                  <p className="text-[#FF6B35] font-bold text-xl mb-3">₹35-50 LPA</p>
                  <p>Own product lines, define multi-year strategy, mentor junior PMs, influence company direction, manage complex stakeholders.</p>
                </div>
              </div>
              
              <div className="timeline-step">
                <div className="year">Year 8-12</div>
                <div className="bg-[#F4F6F8] p-6 rounded-xl">
                  <h4 className="text-2xl text-[#006B7D] font-bold mb-2">Director of Product</h4>
                  <p className="text-[#FF6B35] font-bold text-xl mb-3">₹50-80 LPA</p>
                  <p>Lead product teams (5-15 PMs), set product org strategy, hire and develop talent, partner with C-suite on company direction.</p>
                </div>
              </div>
              
              <div className="timeline-step">
                <div className="year">Year 12+</div>
                <div className="bg-[#F4F6F8] p-6 rounded-xl">
                  <h4 className="text-2xl text-[#006B7D] font-bold mb-2">VP Product / Chief Product Officer</h4>
                  <p className="text-[#FF6B35] font-bold text-xl mb-3">₹80L - ₹2 CR+</p>
                  <p>Lead entire product organization, set company product vision, represent product at board level, drive innovation at scale.</p>
                </div>
              </div>
            </div>
            
            <div className="gradient-orange-gold text-white p-8 rounded-2xl mt-10 text-center text-xl font-semibold">
              <strong>Faster Career Progression:</strong> CDBL graduates reach Senior PM in 5-6 years vs 8-10 years for traditional MBA graduates
            </div>
          </div>
        </div>
      </section>

      {/* Placement Assistance Section - EXACT FROM HTML */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-[#1E3A5F] text-center mb-12 font-bold">Placement Assistance & Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#E6F7F9] p-8 rounded-2xl text-center border-2 border-[#006B7D] transition-all hover:shadow-xl">
              <div className="text-5xl mb-4">🎤</div>
              <h4 className="text-[#1E3A5F] text-xl mb-3 font-bold">Mock Interviews</h4>
              <p>3 full-length APM/PM interviews with detailed feedback. Practice CIRCLES method, behavioral questions, and product sense questions.</p>
            </div>
            
            <div className="bg-[#E6F7F9] p-8 rounded-2xl text-center border-2 border-[#006B7D] transition-all hover:shadow-xl">
              <div className="text-5xl mb-4">📄</div>
              <h4 className="text-[#1E3A5F] text-xl mb-3 font-bold">Resume Optimization</h4>
              <p>ATS-optimized resume templates. Multiple review rounds. Keyword matching for PM/Analyst roles. LinkedIn profile optimization.</p>
            </div>
            
            <div className="bg-[#E6F7F9] p-8 rounded-2xl text-center border-2 border-[#006B7D] transition-all hover:shadow-xl">
              <div className="text-5xl mb-4">💼</div>
              <h4 className="text-[#1E3A5F] text-xl mb-3 font-bold">Portfolio Website</h4>
              <p>Create professional portfolio website showcasing all 25+ deliverables. Notion/Webflow templates provided. GitHub repos for projects.</p>
            </div>
            
            <div className="bg-[#E6F7F9] p-8 rounded-2xl text-center border-2 border-[#006B7D] transition-all hover:shadow-xl">
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="text-[#1E3A5F] text-xl mb-3 font-bold">Hiring Partner Network</h4>
              <p>Referrals to 12+ hiring partners including startups and established companies. Direct introductions for top performers (85%+ scores).</p>
            </div>
            
            <div className="bg-[#E6F7F9] p-8 rounded-2xl text-center border-2 border-[#006B7D] transition-all hover:shadow-xl">
              <div className="text-5xl mb-4">📚</div>
              <h4 className="text-[#1E3A5F] text-xl mb-3 font-bold">Interview Prep Materials</h4>
              <p>100+ PM interview questions with solutions. CIRCLES framework templates. Salary negotiation guide for Indian market.</p>
            </div>
            
            <div className="bg-[#E6F7F9] p-8 rounded-2xl text-center border-2 border-[#006B7D] transition-all hover:shadow-xl">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-[#1E3A5F] text-xl mb-3 font-bold">Career Counseling</h4>
              <p>1-on-1 career guidance sessions. Help targeting right companies. Job search strategy. Offer evaluation and negotiation support.</p>
            </div>
          </div>
          
          {/* Disclaimer Box - EXACT FROM HTML */}
          <div className="bg-[#FFF9E6] border-2 border-[#F7B731] rounded-2xl p-8 mt-12">
            <h4 className="text-[#1E3A5F] text-2xl mb-4 font-bold">⚠️ Important Placement Disclaimer</h4>
            <div className="space-y-4 text-[#1E3A5F]">
              <p><strong>No Placement Guarantee:</strong> Upskillize does not guarantee job placements. Employment outcomes depend on multiple factors including your academic performance, interview skills, market conditions, and individual effort.</p>
              <p><strong>Our Commitment:</strong> We provide comprehensive placement assistance, career support, interview preparation, and hiring partner referrals. However, final hiring decisions rest with employers. We help you become job-ready, but you are responsible for your job search and career decisions.</p>
              <p><strong>Success Depends On You:</strong> Students who complete all assignments with 70%+ scores, attend mock interviews, and actively participate in job search activities have historically achieved better placement outcomes (₹14-22 LPA range). Your dedication and performance directly impact your career results.</p>
            </div>
          </div>
          
          <div className="bg-[#E6F7F9] border-2 border-[#006B7D] p-8 rounded-2xl mt-8 text-center">
            <h4 className="text-[#1E3A5F] mb-4 text-2xl font-bold">Placement Support Duration</h4>
            <p className="text-lg"><strong>6 Months Post-Program</strong> - Resume reviews, mock interviews, referrals, and career counseling</p>
          </div>
        </div>
      </section>

      {/* ========== END OF PART 3 - CONTINUE WITH PART 4 (FOOTER) ========== */}
      {/* ========== PART 4 - CTA & FOOTER (FINAL PART) - ADD AFTER PART 3 ========== */}

      {/* CTA Section - EXACT FROM HTML */}
      <section id="contact" className="gradient-teal text-white py-20 px-5 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl mb-5 font-bold">Ready to Transform Your MBA Journey?</h2>
          <p className="text-2xl mb-8">Don't just get an MBA. Get an MBA that launches careers.</p>
          <p className="text-3xl font-bold mb-10">Become a Chartered Digital Business Leader.</p>
          
          <div className="flex justify-center gap-5 mt-10 flex-wrap">
            <a href="mailto:ramesh@upskillize.com" className="py-5 px-10 rounded-full font-semibold text-lg no-underline transition-all bg-[#FF6B35] text-white btn-hover-primary">
              Enroll Now
            </a>
            <a href="mailto:ramesh@upskillize.com" className="py-5 px-10 rounded-full font-semibold text-lg no-underline transition-all bg-white text-[#006B7D] btn-hover-secondary">
              Schedule a Call
            </a>
          </div>
          
          {/* College Partnership Section */}
          <div className="mt-16 bg-white/10 backdrop-blur-md p-10 rounded-2xl border-2 border-white/20">
            <h3 className="text-3xl mb-6 font-bold">For Colleges: Partner With Us</h3>
            <p className="text-xl mb-4">Differentiate your MBA program. Increase placement rates by 15-25%. Boost average packages by 50-100%.</p>
            <p className="text-xl mb-6">Be the ONLY college offering MBA + CDBL Chartered Certification in your region.</p>
            <a href="mailto:hello@upskillize.com" className="inline-block py-4 px-8 rounded-full font-semibold text-lg no-underline transition-all bg-[#FF6B35] text-white btn-hover-primary">
              Explore Partnership
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default MBAPlusPlus;