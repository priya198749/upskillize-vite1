import React, { useEffect } from 'react';

export default function PowerBILandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.value-card, .module-card, .career-card, .journey-stage, .tool-card');
    elements.forEach(el => {
      el.style.opacity = '0';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-blue-600 to-purple-600">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
        body { overflow-x: hidden; }
        html, body { width: 100%; }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .hero-bg {
          background: linear-gradient(135deg, #1B365D 0%, #3182ce 50%, #8B5CF6 100%);
          background-size: 400% 400%;
          animation: gradientShift 8s ease infinite;
          position: relative;
          overflow: hidden;
        }
        .hero-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%);
          animation: shimmer 4s infinite;
        }
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, #3182ce, #8B5CF6, #FFB300);
          border-radius: 2px;
        }
      `}</style>

      <div className="max-w-7xl mx-auto bg-white shadow-2xl">
        {/* Hero */}
        <section className="hero-bg text-white py-20 px-10 text-center relative z-10">
          <div className="text-2xl font-bold text-orange-400 mb-2 uppercase tracking-widest">UPSKILLIZE</div>
          <h1 className="text-5xl md:text-6xl font-black mb-5 drop-shadow-lg">Data to Decisions:<br/>Power BI, AI & Data Mastery</h1>
          <p className="text-xl md:text-2xl mb-4 opacity-95">40-Hour Intensive Certification for High-Impact Analytics Careers</p>
          <p className="text-lg md:text-xl text-orange-400 font-semibold mb-10 italic">"Where Data Meets Intelligence Meets Career Success"</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12 max-w-5xl mx-auto">
            {[
              { num: '40', label: 'Hours Intensive Training' },
              { num: '8', label: 'Comprehensive Modules' },
              { num: '32', label: 'Practical Topics' },
              { num: '20+', label: 'Real Case Studies' },
              { num: '₹8-35L', label: 'Salary Range' }
            ].map((stat, i) => (
              <div key={i} className="bg-white bg-opacity-15 backdrop-blur-xl p-6 rounded-3xl border border-white border-opacity-20 hover:scale-105 hover:-translate-y-2 transition-all duration-400">
                <div className="text-4xl font-black text-orange-400 mb-2 drop-shadow">{stat.num}</div>
                <div className="text-sm opacity-95 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Journey */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-10 text-center">
          <h2 className="text-4xl font-extrabold mb-12 relative inline-block section-title">The Strategic 3-Stage Learning Journey</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-95">Build strong fundamentals, master Power BI tools completely, then leverage GenAI for intelligent decision-making</p>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { emoji: '📊', title: 'STAGE 1: Foundations', desc: 'Build rock-solid fundamentals in data quality, SQL, analytics thinking, and visualization principles.' },
              { emoji: '🔧', title: 'STAGE 2: Power BI Mastery', desc: 'Complete Power BI expertise from basics to enterprise deployment. DAX, data modeling, security, performance.' },
              { emoji: '🤖', title: 'STAGE 3: AI Intelligence', desc: 'Integrate ML, predictive analytics, and GenAI for decision intelligence. Build dashboards that predict the future.' },
              { emoji: '🚀', title: 'STAGE 4: Career Launch', desc: 'Portfolio projects, interview prep, placement assistance with 50+ partners. Launch your ₹8-35 LPA career.' }
            ].map((stage, i) => (
              <div key={i} className="journey-stage bg-white bg-opacity-15 backdrop-blur-xl p-8 rounded-3xl border-2 border-white border-opacity-20 hover:-translate-y-3 hover:bg-opacity-25 transition-all duration-400">
                <div className="text-5xl mb-4">{stage.emoji}</div>
                <div className="text-xl font-bold mb-4">{stage.title}</div>
                <div className="opacity-95 leading-relaxed">{stage.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Value Props */}
        <section className="py-20 px-10">
          <h2 className="text-center text-5xl font-extrabold text-blue-900 mb-16 relative inline-block w-full section-title">Why This Program Changes Everything</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Strategic 3-Stage Approach', desc: 'Unlike courses that jump to tools, we build foundations first, master Power BI completely, then add AI intelligence—giving you unbeatable depth and breadth.' },
              { icon: '🤖', title: 'GenAI Integration', desc: 'The only Power BI course teaching ChatGPT & Claude integration for decision intelligence—skills 90% of analysts don\'t have yet.' },
              { icon: '🏆', title: 'Portfolio-Ready Projects', desc: 'Graduate with 3 portfolio projects + 1 major capstone. Walk into interviews with proof of skills, not just certificates.' },
              { icon: '📚', title: '20+ Real Case Studies', desc: 'Learn from actual implementations at HDFC Bank, Amazon, Flipkart, Netflix, Zomato—not theoretical examples.' },
              { icon: '⚡', title: '100% Hands-On Learning', desc: 'Zero boring lectures. Every topic has practical exercises, group discussions, and real-world applications—you learn by doing.' },
              { icon: '🤝', title: 'Placement Assistance', desc: '50+ hiring partners, 5 mock interviews, resume building, 6-month post-course support—we\'re invested in your success.' }
            ].map((value, i) => (
              <div key={i} className="value-card bg-white p-8 rounded-3xl shadow-xl border border-gray-200 hover:-translate-y-3 hover:shadow-2xl transition-all duration-400 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
                <div className="text-5xl mb-5">{value.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 text-white py-16 px-10">
          <h2 className="text-center text-4xl font-extrabold mb-12">🛠️ Master These Industry-Standard Tools</h2>
          <p className="text-center text-xl mb-10 max-w-3xl mx-auto opacity-95">Comprehensive toolkit from data foundations to AI-powered decision making</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Power BI Ecosystem (85%)', desc: 'Power BI Desktop, Service, DAX, Power Query, Mobile, APIs, Embedded, Report Server—complete mastery' },
              { title: 'Excel Power Tools (10%)', desc: 'Power Pivot, Power Query, Advanced Excel formulas, Pivot Tables—bridging to Power BI' },
              { title: 'SQL Fundamentals (5%)', desc: 'Database querying, JOINs, aggregations, subqueries—essential data extraction skills' },
              { title: 'GenAI Integration', desc: 'ChatGPT, Claude APIs, Microsoft Copilot, prompt engineering for analytics—future-ready skills' },
              { title: 'Azure ML & AI', desc: 'Azure Machine Learning, AutoML, Cognitive Services—predictive analytics integration' },
              { title: 'Python & R Basics', desc: 'pandas, matplotlib, statistical analysis—programmatic data manipulation intro' }
            ].map((tool, i) => (
              <div key={i} className="tool-card bg-white bg-opacity-10 backdrop-blur-xl p-6 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 hover:-translate-y-2 transition-all duration-300">
                <div className="text-lg font-bold text-orange-400 mb-3">{tool.title}</div>
                <div className="text-sm opacity-95 leading-relaxed">{tool.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* STAGE 1: Foundations */}
        <section className="py-20 px-10 bg-gray-100">
          <h2 className="text-center text-5xl font-extrabold text-blue-900 mb-12 relative inline-block w-full section-title">📊 STAGE 1: Strong Fundamentals (Modules 1-2)</h2>
          <p className="text-center text-xl text-gray-600 mb-10 max-w-3xl mx-auto">Build unshakeable foundations in data quality, SQL, analytics thinking, and visualization principles</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Module 1 */}
            <div className="module-card bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-200 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-600 transition-all duration-400">
              <div className="module-header bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                <div className="text-5xl font-black text-orange-400 mb-3">Module 1</div>
                <div className="text-2xl font-bold mb-2">Data Fundamentals & BI Foundation</div>
                <div className="text-lg text-orange-400 font-semibold">5 Hours</div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {[
                    { title: '🎯 The Data Journey - From Raw to Refined', desc: 'Understanding data types, structures, formats, and quality principles. The cost of bad data in business.', badges: ['⚡ Audit messy dataset', '📊 Amazon\'s data quality', '💬 Bad data impact'] },
                    { title: '🎯 Business Intelligence Fundamentals', desc: 'BI evolution, modern data stack, building data-driven culture in organizations.', badges: ['⚡ Map decision process', '📊 Netflix transformation', '💬 Design BI strategy'] },
                    { title: '🎯 Analytics Thinking & Problem-Solving', desc: 'Asking right questions, analytical frameworks, from business problem to data solution.', badges: ['⚡ Business to analytics', '📊 Swiggy optimization', '💬 Solve business problem'] },
                    { title: '🎯 Data Storytelling & Visualization Principles', desc: 'Visual perception science, chart types, color theory, dashboard psychology.', badges: ['⚡ Redesign bad dashboard', '📊 Hans Rosling\'s Gapminder', '💬 Peer critique session'] }
                  ].map((topic, i) => (
                    <li key={i} className="bg-gray-100 p-5 rounded-xl border-l-4 border-blue-600 hover:bg-white hover:translate-x-1 hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-blue-900 mb-2">{topic.title}</div>
                      <div className="text-gray-600 text-sm mb-3 leading-relaxed">{topic.desc}</div>
                      <div className="flex flex-wrap gap-2">
                        {topic.badges.map((badge, j) => (
                          <span key={j} className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${badge.includes('⚡') ? 'bg-gradient-to-r from-orange-400 to-yellow-400' : badge.includes('📊') ? 'bg-gradient-to-r from-green-600 to-green-700' : 'bg-gradient-to-r from-purple-600 to-indigo-600'}`}>
                            {badge}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Module 2 */}
            <div className="module-card bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-200 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-600 transition-all duration-400">
              <div className="module-header bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                <div className="text-5xl font-black text-orange-400 mb-3">Module 2</div>
                <div className="text-2xl font-bold mb-2">Data Management & SQL Essentials</div>
                <div className="text-lg text-orange-400 font-semibold">5 Hours</div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {[
                    { title: '🎯 Introduction to Databases & SQL', desc: 'Relational database concepts, SQL fundamentals: SELECT, WHERE, ORDER BY, filtering data.', badges: ['⚡ Write 20 SQL queries', '📊 Flipkart catalog DB', '💬 SQL speed challenge'] },
                    { title: '🎯 SQL Joins & Data Combination', desc: 'INNER JOIN, LEFT JOIN, RIGHT JOIN, combining data from multiple tables, UNION.', badges: ['⚡ Join customer-order tables', '📊 HDFC 360-view', '💬 Multi-table query design'] },
                    { title: '🎯 SQL Aggregations & Analytics Functions', desc: 'GROUP BY, aggregate functions, window functions, subqueries and CTEs.', badges: ['⚡ Calculate business KPIs', '📊 Zomato analytics', '💬 Build dashboard query'] },
                    { title: '🎯 Data Extraction & Preparation', desc: 'Connecting data sources, cleaning, handling missing values, validation.', badges: ['⚡ Clean messy dataset', '📊 Uber data pipeline', '💬 Fix 10 quality issues'] }
                  ].map((topic, i) => (
                    <li key={i} className="bg-gray-100 p-5 rounded-xl border-l-4 border-blue-600 hover:bg-white hover:translate-x-1 hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-blue-900 mb-2">{topic.title}</div>
                      <div className="text-gray-600 text-sm mb-3 leading-relaxed">{topic.desc}</div>
                      <div className="flex flex-wrap gap-2">
                        {topic.badges.map((badge, j) => (
                          <span key={j} className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${badge.includes('⚡') ? 'bg-gradient-to-r from-orange-400 to-yellow-400' : badge.includes('📊') ? 'bg-gradient-to-r from-green-600 to-green-700' : 'bg-gradient-to-r from-purple-600 to-indigo-600'}`}>
                            {badge}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* STAGE 2: Power BI Mastery */}
        <section className="py-20 px-10">
          <h2 className="text-center text-5xl font-extrabold text-blue-900 mb-12 relative inline-block w-full section-title">🔧 STAGE 2: Power BI Tools Mastery (Modules 3-5)</h2>
          <p className="text-center text-xl text-gray-600 mb-10 max-w-3xl mx-auto">Complete Power BI expertise from basics to enterprise deployment</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Module 3 */}
            <div className="module-card bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-200 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-600 transition-all duration-400">
              <div className="module-header bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                <div className="text-5xl font-black text-orange-400 mb-3">Module 3</div>
                <div className="text-2xl font-bold mb-2">Power BI Desktop Mastery - Core Skills</div>
                <div className="text-lg text-orange-400 font-semibold">5 Hours</div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {[
                    { title: '🛠️ Power BI Desktop - Interface & First Dashboard', desc: 'Complete walkthrough: report, data, model views. Creating first visualizations.', badges: ['⚡ Build sales dashboard', '📊 Paytm quick wins', '💬 Peer learning session'] },
                    { title: '🛠️ Power Query - Data Transformation Engine', desc: 'Power Query Editor, M language basics, merging, appending, transformations.', badges: ['⚡ Transform 5 datasets', '📊 ICICI ETL automation', '💬 Clean messiest dataset'] },
                    { title: '🛠️ Essential DAX - Calculated Columns & Measures', desc: 'DAX fundamentals, calculated columns vs measures, context understanding.', badges: ['⚡ Create 15 metrics', '📊 Banking KPI library', '💬 DAX problem-solving'] },
                    { title: '🛠️ Visualization Mastery - Charts & Formatting', desc: 'Choosing right visuals, formatting, themes, conditional formatting.', badges: ['⚡ Create 10 chart types', '📊 McKinsey storytelling', '💬 Dashboard design critique'] }
                  ].map((topic, i) => (
                    <li key={i} className="bg-gray-100 p-5 rounded-xl border-l-4 border-blue-600 hover:bg-white hover:translate-x-1 hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-blue-900 mb-2">{topic.title}</div>
                      <div className="text-gray-600 text-sm mb-3 leading-relaxed">{topic.desc}</div>
                      <div className="flex flex-wrap gap-2">
                        {topic.badges.map((badge, j) => (
                          <span key={j} className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${badge.includes('⚡') ? 'bg-gradient-to-r from-orange-400 to-yellow-400' : badge.includes('📊') ? 'bg-gradient-to-r from-green-600 to-green-700' : 'bg-gradient-to-r from-purple-600 to-indigo-600'}`}>
                            {badge}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Module 4 */}
            <div className="module-card bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-200 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-600 transition-all duration-400">
              <div className="module-header bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                <div className="text-5xl font-black text-orange-400 mb-3">Module 4</div>
                <div className="text-2xl font-bold mb-2">Advanced Power BI - Data Modeling & DAX</div>
                <div className="text-lg text-orange-400 font-semibold">5 Hours</div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {[
                    { title: '🛠️ Data Modeling Excellence', desc: 'Star schema, snowflake design, fact/dimension tables, relationships, cardinality.', badges: ['⚡ Design star schema', '📊 Walmart architecture', '💬 Build optimal model'] },
                    { title: '🛠️ Advanced DAX - Time Intelligence & Complex Calculations', desc: 'Time intelligence, CALCULATE, iterator functions, optimization.', badges: ['⚡ Build 20 advanced metrics', '📊 TCS YoY analysis', '💬 DAX competition'] },
                    { title: '🛠️ Power BI Service & Collaboration', desc: 'Publishing reports, workspaces, sharing, scheduled refresh, mobile optimization.', badges: ['⚡ Publish & automate refresh', '📊 Reliance deployment', '💬 Shared workspace setup'] },
                    { title: '🛠️ Interactive Features & Advanced Visuals', desc: 'Slicers, filters, bookmarks, drill-down, custom visuals, UX design.', badges: ['⚡ Multi-page executive dashboard', '📊 Deloitte self-service', '💬 Design for 3 personas'] }
                  ].map((topic, i) => (
                    <li key={i} className="bg-gray-100 p-5 rounded-xl border-l-4 border-blue-600 hover:bg-white hover:translate-x-1 hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-blue-900 mb-2">{topic.title}</div>
                      <div className="text-gray-600 text-sm mb-3 leading-relaxed">{topic.desc}</div>
                      <div className="flex flex-wrap gap-2">
                        {topic.badges.map((badge, j) => (
                          <span key={j} className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${badge.includes('⚡') ? 'bg-gradient-to-r from-orange-400 to-yellow-400' : badge.includes('📊') ? 'bg-gradient-to-r from-green-600 to-green-700' : 'bg-gradient-to-r from-purple-600 to-indigo-600'}`}>
                            {badge}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Module 5 */}
            <div className="module-card bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-200 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-600 transition-all duration-400 md:col-span-2 max-w-3xl mx-auto">
              <div className="module-header bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                <div className="text-5xl font-black text-orange-400 mb-3">Module 5</div>
                <div className="text-2xl font-bold mb-2">Enterprise Power BI & Real-World Applications</div>
                <div className="text-lg text-orange-400 font-semibold">5 Hours</div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {[
                    { title: '🛠️ Row-Level Security & Data Governance', desc: 'Implementing RLS, role-based access, data classification, audit logs.', badges: ['⚡ Implement sales territory RLS', '📊 Multi-tenant security', '💬 Design org access control'] },
                    { title: '🛠️ Performance Optimization & Best Practices', desc: 'Query tuning, model size reduction, aggregations, DirectQuery vs Import.', badges: ['⚡ Optimize slow dashboard', '📊 Amazon scaling', '💬 Speed challenge: 50% faster'] },
                    { title: '🛠️ Power BI Integration & Automation', desc: 'Embedding, REST API, Power Automate, Excel integration.', badges: ['⚡ Automate report delivery', '📊 White-label analytics', '💬 Connect external system'] },
                    { title: '🛠️ Real-World Dashboard Projects', desc: 'Industry-specific: Finance P&L, customer analytics, supply chain, HR dashboards.', badges: ['⚡ Build industry dashboard', '📊 Fortune 500 examples', '💬 Create signature dashboard'] }
                  ].map((topic, i) => (
                    <li key={i} className="bg-gray-100 p-5 rounded-xl border-l-4 border-blue-600 hover:bg-white hover:translate-x-1 hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-blue-900 mb-2">{topic.title}</div>
                      <div className="text-gray-600 text-sm mb-3 leading-relaxed">{topic.desc}</div>
                      <div className="flex flex-wrap gap-2">
                        {topic.badges.map((badge, j) => (
                          <span key={j} className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${badge.includes('⚡') ? 'bg-gradient-to-r from-orange-400 to-yellow-400' : badge.includes('📊') ? 'bg-gradient-to-r from-green-600 to-green-700' : 'bg-gradient-to-r from-purple-600 to-indigo-600'}`}>
                            {badge}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* STAGE 3: AI Intelligence */}
        <section className="py-20 px-10 bg-gray-100">
          <h2 className="text-center text-5xl font-extrabold text-blue-900 mb-12 relative inline-block w-full section-title">🤖 STAGE 3: AI-Powered Intelligent Decisions (Modules 6-7)</h2>
          <p className="text-center text-xl text-gray-600 mb-10 max-w-3xl mx-auto">Leverage AI, ML, and GenAI for competitive decision-making advantage</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Module 6 */}
            <div className="module-card bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-200 hover:-translate-y-2 hover:shadow-2xl hover:border-purple-600 transition-all duration-400">
              <div className="module-header bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
                <div className="text-5xl font-black text-orange-400 mb-3">Module 6</div>
                <div className="text-2xl font-bold mb-2">AI & Machine Learning for Business Analytics</div>
                <div className="text-lg text-orange-400 font-semibold">5 Hours</div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {[
                    { title: '🤖 AI & ML Fundamentals for Analysts', desc: 'Understanding AI, ML, Deep Learning. When to use AI vs traditional analytics. Ethics.', badges: ['⚡ Identify AI opportunities', '📊 Google AI-first approach', '💬 AI vs human decisions?'] },
                    { title: '🤖 Predictive Analytics in Power BI', desc: 'Forecasting, key influencers, anomaly detection, decomposition tree, Q&A visual.', badges: ['⚡ Build sales forecast', '📊 Amazon demand forecasting', '💬 Prediction accuracy challenge'] },
                    { title: '🤖 AutoML & AI-Powered Insights', desc: 'Azure AutoML, classification models (churn, fraud), regression models, evaluation.', badges: ['⚡ Build churn model', '📊 Bajaj Finance credit scoring', '💬 Train on business problems'] },
                    { title: '🤖 Advanced AI Visuals & Cognitive Services', desc: 'Sentiment analysis, image recognition, text analytics, Python/R integration.', badges: ['⚡ Sentiment from reviews', '📊 Social media analytics', '💬 Design AI-powered dashboard'] }
                  ].map((topic, i) => (
                    <li key={i} className="bg-gray-100 p-5 rounded-xl border-l-4 border-purple-600 hover:bg-white hover:translate-x-1 hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-blue-900 mb-2">{topic.title}</div>
                      <div className="text-gray-600 text-sm mb-3 leading-relaxed">{topic.desc}</div>
                      <div className="flex flex-wrap gap-2">
                        {topic.badges.map((badge, j) => (
                          <span key={j} className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${badge.includes('⚡') ? 'bg-gradient-to-r from-orange-400 to-yellow-400' : badge.includes('📊') ? 'bg-gradient-to-r from-green-600 to-green-700' : 'bg-gradient-to-r from-purple-600 to-indigo-600'}`}>
                            {badge}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Module 7 */}
            <div className="module-card bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-200 hover:-translate-y-2 hover:shadow-2xl hover:border-purple-600 transition-all duration-400">
              <div className="module-header bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6">
                <div className="text-5xl font-black text-orange-400 mb-3">Module 7</div>
                <div className="text-2xl font-bold mb-2">GenAI Revolution - Decision Intelligence</div>
                <div className="text-lg text-orange-400 font-semibold">5 Hours</div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {[
                    { title: '🤖 GenAI Fundamentals & Large Language Models', desc: 'Understanding GPT, Claude, Gemini. Prompt engineering basics for analytics.', badges: ['⚡ ChatGPT data analysis', '📊 Microsoft Copilot transformation', '💬 Prompt engineering workshop'] },
                    { title: '🤖 GenAI for Data Analysis & Insights', desc: 'EDA with AI, insight generation, NL to SQL, explaining complex analysis, code generation.', badges: ['⚡ AI-assisted analysis', '📊 Bloomberg AI analysis', '💬 Discover hidden patterns'] },
                    { title: '🤖 Building AI-Enhanced Dashboards', desc: 'GPT API integration, NL interfaces, AI commentary, dynamic reports, chatbots.', badges: ['⚡ Add AI commentary layer', '📊 Salesforce conversational analytics', '💬 Dashboard with AI Q&A'] },
                    { title: '🤖 Decision Intelligence - AI for Strategic Decisions', desc: 'Prescriptive analytics, scenario planning, recommendation engines, autonomous systems.', badges: ['⚡ Build recommendation system', '📊 Netflix AI decisions', '💬 GenAI in 5 years?'] }
                  ].map((topic, i) => (
                    <li key={i} className="bg-gray-100 p-5 rounded-xl border-l-4 border-purple-600 hover:bg-white hover:translate-x-1 hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-blue-900 mb-2">{topic.title}</div>
                      <div className="text-gray-600 text-sm mb-3 leading-relaxed">{topic.desc}</div>
                      <div className="flex flex-wrap gap-2">
                        {topic.badges.map((badge, j) => (
                          <span key={j} className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${badge.includes('⚡') ? 'bg-gradient-to-r from-orange-400 to-yellow-400' : badge.includes('📊') ? 'bg-gradient-to-r from-green-600 to-green-700' : 'bg-gradient-to-r from-purple-600 to-indigo-600'}`}>
                            {badge}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* STAGE 4: Career Excellence */}
        <section className="py-20 px-10">
          <h2 className="text-center text-5xl font-extrabold text-blue-900 mb-12 relative inline-block w-full section-title">🚀 STAGE 4: Career Excellence & Capstone (Module 8)</h2>
          <p className="text-center text-xl text-gray-600 mb-10 max-w-3xl mx-auto">Launch your high-paying analytics career with confidence and portfolio-ready projects</p>
          
          <div className="max-w-3xl mx-auto">
            <div className="module-card bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-200 hover:-translate-y-2 hover:shadow-2xl hover:border-green-600 transition-all duration-400">
              <div className="module-header bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
                <div className="text-5xl font-black text-orange-400 mb-3">Module 8</div>
                <div className="text-2xl font-bold mb-2">Career Success & Capstone Project</div>
                <div className="text-lg text-orange-400 font-semibold">5 Hours</div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {[
                    { title: '🎯 BI Career Landscape & Opportunities', desc: 'Career paths, industry opportunities, required skills, building personal brand.', badges: ['⚡ Create 5-year roadmap', '📊 CDO career journeys', '💬 LinkedIn optimization & Q&A'] },
                    { title: '🎯 Interview Preparation & Portfolio Building', desc: 'BI interview questions, technical assessments, salary negotiation, portfolio on GitHub.', badges: ['⚡ Mock interview', '📊 Alumni success stories', '💬 20 rapid-fire questions'] },
                    { title: '🎯 Freelancing & Consulting in Analytics', desc: 'Finding projects, pricing services, client management, scaling to agency.', badges: ['⚡ Create freelance profile', '📊 ₹5L/month freelancers', '💬 Pitch to mock clients'] },
                    { title: '🎯 Capstone Project - End-to-End BI Solution', desc: 'Complete BI project: data pipeline, modeling, dashboard, AI insights, presentation, documentation.', badges: ['⚡ Build complete solution', '📊 Your portfolio project', '💬 Present to board & peers'] }
                  ].map((topic, i) => (
                    <li key={i} className="bg-gray-100 p-5 rounded-xl border-l-4 border-green-600 hover:bg-white hover:translate-x-1 hover:shadow-lg transition-all duration-300">
                      <div className="font-bold text-blue-900 mb-2">{topic.title}</div>
                      <div className="text-gray-600 text-sm mb-3 leading-relaxed">{topic.desc}</div>
                      <div className="flex flex-wrap gap-2">
                        {topic.badges.map((badge, j) => (
                          <span key={j} className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${badge.includes('⚡') ? 'bg-gradient-to-r from-orange-400 to-yellow-400' : badge.includes('📊') ? 'bg-gradient-to-r from-green-600 to-green-700' : 'bg-gradient-to-r from-purple-600 to-indigo-600'}`}>
                            {badge}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Career Prospects */}
        <section className="py-20 px-10 bg-gray-100">
          <h2 className="text-center text-5xl font-extrabold text-blue-900 mb-12 relative inline-block w-full section-title">💼 Career Prospects & Salary Ranges</h2>
          <p className="text-center text-xl text-gray-600 mb-10 max-w-3xl mx-auto">Data-driven decision-makers are in unprecedented demand across all industries</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: '📊', title: 'Business Intelligence Analyst', desc: 'Data analysis, dashboard creation, reporting, insight generation for business teams', salary: '₹8-16 LPA', level: 'Entry Level (0-2 years)' },
              { icon: '📈', title: 'Data Analyst', desc: 'Statistical analysis, data visualization, trends identification, business recommendations', salary: '₹7-15 LPA', level: 'Entry Level (0-2 years)' },
              { icon: '🔧', title: 'Power BI Developer', desc: 'Dashboard development, DAX expertise, data modeling, Power BI solutions', salary: '₹8-18 LPA', level: 'Entry to Mid-level (0-3 years)' },
              { icon: '🎨', title: 'Data Visualization Specialist', desc: 'Visual design, storytelling with data, interactive dashboards, UX for analytics', salary: '₹12-22 LPA', level: 'Mid-level (2-5 years)' },
              { icon: '💼', title: 'Analytics Consultant', desc: 'Client advisory, BI strategy, dashboard implementation, training and support', salary: '₹14-28 LPA', level: 'Mid-level (2-5 years)' },
              { icon: '📋', title: 'MIS Manager', desc: 'Management reporting, team leadership, dashboard governance, stakeholder management', salary: '₹12-24 LPA', level: 'Mid-level (3-5 years)' },
              { icon: '🚀', title: 'Analytics Manager', desc: 'Team management, analytics strategy, enterprise BI, C-suite reporting', salary: '₹20-35 LPA', level: 'Senior Level (5+ years)' },
              { icon: '🤖', title: 'AI Analytics Specialist', desc: 'ML integration, predictive models, GenAI dashboards, decision intelligence', salary: '₹18-35 LPA', level: 'Specialized (2-5 years)' },
              { icon: '💰', title: 'Freelance BI Consultant', desc: 'Independent projects, multiple clients, flexible work, portfolio building', salary: '₹2K-5K/day', level: 'Entrepreneurial' }
            ].map((career, i) => (
              <div key={i} className="career-card bg-white p-8 rounded-3xl shadow-lg text-center border-2 border-transparent hover:border-blue-600 hover:-translate-y-2 hover:shadow-2xl transition-all duration-400">
                <div className="text-4xl mb-4">{career.icon}</div>
                <div className="text-lg font-extrabold text-blue-900 mb-3">{career.title}</div>
                <div className="text-sm text-gray-600 mb-4 leading-relaxed">{career.desc}</div>
                <div className="text-2xl font-extrabold text-green-600 mb-2">{career.salary}</div>
                <div className="text-sm text-blue-600 font-semibold">{career.level}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Placement Assistance */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 px-10">
          <h2 className="text-center text-4xl font-extrabold mb-8">🤝 Comprehensive Placement Assistance</h2>
          <p className="text-center text-xl mb-4 max-w-3xl mx-auto opacity-95">We don't just teach you—we support your entire career launch journey</p>
          <p className="text-center text-sm mb-10 max-w-3xl mx-auto opacity-90 italic">*Placement assistance provided to all students completing the program with 60%+ score. Job placement depends on individual performance, market conditions, and company requirements.</p>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: '📝 Resume & Profile Building',
                items: ['Professional BI resume templates', 'LinkedIn profile optimization', 'GitHub portfolio setup', 'Personal branding workshop']
              },
              {
                title: '🎤 Interview Preparation',
                items: ['5 mock interviews with feedback', '150+ question bank with answers', 'Technical assessment practice', 'Behavioral interview coaching', 'Salary negotiation strategies']
              },
              {
                title: '🔗 Job Search Support',
                items: ['Exclusive job portal access', 'Referrals to 50+ partner companies', 'Application strategy & tracking', 'Networking events with alumni', 'Direct hiring manager introductions']
              },
              {
                title: '🌟 Ongoing Support',
                items: ['6-month post-course counseling', 'Alumni network (500+ professionals)', 'Monthly virtual job fairs', 'Quarterly industry webinars', 'Lifetime job listings access', 'Freelance project opportunities']
              }
            ].map((placement, i) => (
              <div key={i} className="placement-card bg-white bg-opacity-15 backdrop-blur-xl p-6 rounded-2xl border border-white border-opacity-20">
                <div className="text-lg font-bold text-orange-400 mb-4">{placement.title}</div>
                <ul className="placement-list space-y-2">
                  {placement.items.map((item, j) => (
                    <li key={j} className="text-sm pl-7 relative">
                      <span className="absolute left-0">✅</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="bg-white bg-opacity-15 backdrop-blur-xl p-8 rounded-3xl mt-10 max-w-4xl mx-auto border-2 border-white border-opacity-20">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">💼 Our Hiring Partners Include:</h3>
            <p className="text-lg leading-relaxed opacity-95">
              HDFC Bank • Deloitte • Accenture • TCS • Wipro • Infosys • Capgemini • ICICI Bank • Axis Bank • Paytm • PhonePe • Razorpay • Freshworks • Zomato • Swiggy • and 35+ more companies actively hiring BI professionals
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-purple-700 text-white py-20 px-10 text-center">
          <div className="text-3xl font-bold text-orange-400 mb-4 uppercase">UPSKILLIZE</div>
          <h2 className="text-4xl font-extrabold mb-5">Transform Students Into Data-to-Decisions Professionals</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-95">Join 50+ colleges already partnering with Upskillize for industry-ready analytics talent development</p>
          
          <div className="flex justify-center gap-5 flex-wrap mb-10">
            <a href="tel:+919620368991" className="px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full text-lg font-bold hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">📞 Schedule Demo Session</a>
            <a href="mailto:gupta1070@gmail.com" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-lg font-bold hover:bg-white hover:text-blue-700 transition-all duration-300">📄 Download Curriculum</a>
          </div>
          
          {/* Special Benefits */}
          <div className="bg-white bg-opacity-15 backdrop-blur-xl p-8 rounded-3xl max-w-4xl mx-auto border-2 border-white border-opacity-20">
            <h3 className="text-2xl font-bold text-orange-400 mb-6">🎯 Special Benefits for Partner Colleges</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[
                'Faculty training on Power BI & AI',
                'Collaborative placement support',
                'Customized curriculum options',
                'Guest lectures from industry experts',
                'Internship facilitation program',
                'Industry-academia collaboration events'
              ].map((benefit, i) => (
                <div key={i} className="flex items-start p-3">
                  <span className="text-orange-400 font-black mr-3 text-xl">✓</span>
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 max-w-4xl mx-auto">
            <div className="text-orange-400 text-2xl font-extrabold mb-4">"Your Gateway to AI-Powered Analytics Careers"</div>
            <div className="text-lg opacity-95 leading-relaxed italic">
              "In 20 years of building BI systems for Fortune 500 companies, I've seen one truth: The analysts who understand BOTH the fundamentals AND cutting-edge AI are the ones commanding ₹35 LPA salaries. This program gives you that rare combination—solid data foundations, complete Power BI mastery, and GenAI integration that 90% of professionals don't have yet."
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}