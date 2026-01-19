import React from 'react';

const CIPLandingPage = () => {
  const modules = [
    {
      number: "01",
      title: "AI Foundations for Business",
      meta: "Week 1 | 4 Hours | Strategy Foundation",
      topics: [
        "Evolution of AI: From Rule-Based Systems to GenAI",
        "AI vs. ML vs. Deep Learning vs. GenAI: Business Context",
        "The AI Business Value Chain and Impact Areas",
        "AI Maturity Model and Organizational Assessment",
        "Use Case Canvas and Opportunity Identification"
      ],
      caseStudies: [
        "Amazon: AI-powered supply chain optimization",
        "ICICI Bank: Deploying chatbots and predictive analytics",
        "Zomato: AI for demand forecasting and route optimization"
      ],
      project: "AI Opportunity Assessment Report (3-5 pages)"
    },
    {
      number: "02",
      title: "Generative AI Revolution - ChatGPT, Claude & Business Applications",
      meta: "Week 2 | 4 Hours | GenAI Mastery",
      topics: [
        "Large Language Models (LLMs): How ChatGPT Works (Non-Technical)",
        "GenAI Landscape: ChatGPT vs. Claude vs. Gemini vs. Copilot",
        "Prompt Engineering: Zero-shot, Few-shot, Chain-of-Thought",
        "GenAI for Business Functions: Marketing, Sales, Operations, HR",
        "Creating Custom GPTs and Claude Projects"
      ],
      caseStudies: [
        "Morgan Stanley: Deploying GPT-4 for wealth management",
        "Shopify: Using GenAI for merchant support"
      ],
      project: "GenAI Productivity Toolkit with 10 Custom Prompts"
    },
    {
      number: "03",
      title: "Machine Learning for Business Decision-Making",
      meta: "Week 3 | 4 Hours | ML Applications",
      topics: [
        "Supervised vs. Unsupervised vs. Reinforcement Learning",
        "ML Use Cases: Prediction, Classification, Clustering, Recommendation",
        "ML Model Lifecycle and Performance Metrics",
        "Customer Churn Prediction and Demand Forecasting"
      ],
      caseStudies: [
        "HDFC Bank: ML for fraud detection and credit underwriting",
        "Flipkart: ML-powered recommendation engine"
      ],
      project: "ML Use Case Business Proposal with ROI Model"
    },
    {
      number: "04",
      title: "AI Strategy Development & Roadmapping",
      meta: "Week 4 | 4 Hours | Strategic Planning",
      topics: [
        "AI Strategy Framework: Vision → Objectives → Initiatives → Metrics",
        "AI Maturity Assessment and Gap Analysis",
        "Prioritization Models: Value vs. Effort Matrix, RICE Scoring",
        "Building Business Cases: ROI, NPV, Payback Period"
      ],
      caseStudies: [
        "Reliance Jio: AI strategy for telecom and retail convergence",
        "TCS: AI-first approach for clients"
      ],
      project: "AI Strategy & Roadmap Document (15-slide deck)"
    },
    {
      number: "05",
      title: "AI in BFSI - Banking, Insurance & Financial Services",
      meta: "Week 5 | 4 Hours | Industry Deep-Dive: BFSI",
      topics: [
        "AI Applications: Lending, Trading, Risk Management, Customer Service",
        "Insurance: Claims Processing, Underwriting Automation, Fraud Detection",
        "Wealth Management: Robo-advisors, Portfolio Rebalancing",
        "Regulatory Compliance: SEBI, RBI, IRDAI Guidelines"
      ],
      caseStudies: [
        "JPMorgan COiN: Contract Intelligence using ML",
        "Lemonade Insurance: AI-powered claims processing"
      ],
      project: "AI Solution Design for BFSI (12-slide presentation)"
    },
    {
      number: "06",
      title: "AI in HealthTech, FinTech & Emerging Sectors",
      meta: "Week 6 | 4 Hours | Industry Deep-Dive: Beyond BFSI",
      topics: [
        "HealthTech: Medical Imaging, Telemedicine, Drug Discovery",
        "FinTech: Neo-banking, BNPL, Crypto Analytics, RegTech",
        "Retail/E-commerce: Personalization, Dynamic Pricing",
        "Manufacturing & Logistics: Predictive Maintenance, Route Optimization"
      ],
      caseStudies: [
        "Practo: AI for doctor discovery and scheduling",
        "Swiggy: AI for delivery optimization"
      ],
      project: "Cross-Industry AI Innovation Proposal (10-slide pitch)"
    },
    {
      number: "07",
      title: "Data Analytics & AI-Powered Business Intelligence",
      meta: "Week 7 | 4 Hours | Data-Driven Decision Making",
      topics: [
        "Data Lifecycle: Collection → Storage → Analysis → Visualization",
        "Analytics Spectrum: Descriptive, Diagnostic, Predictive, Prescriptive",
        "Power BI/Tableau: AI-Enhanced Dashboards",
        "Data Governance and Quality Frameworks"
      ],
      caseStudies: [
        "Airbnb: Data science for dynamic pricing",
        "Netflix: A/B testing and experimentation"
      ],
      project: "Executive Dashboard with AI Insights"
    },
    {
      number: "08",
      title: "AI Product Management & Development",
      meta: "Week 8 | 4 Hours | Building AI Products",
      topics: [
        "AI Product Lifecycle: Discovery → Design → Development → Deployment",
        "Writing PRDs (Product Requirements Documents) for AI Features",
        "Success Metrics: Business KPIs vs. ML Metrics",
        "MVP Definition and A/B Testing for AI Products"
      ],
      caseStudies: [
        "Spotify: Discover Weekly AI product development",
        "LinkedIn: AI for job matching"
      ],
      project: "AI Product Requirements Document (PRD) - 8-10 pages"
    },
    {
      number: "09",
      title: "AI Ethics, Governance & Risk Management",
      meta: "Week 9 | 4 Hours | Responsible AI",
      topics: [
        "Bias in AI: Sources, Examples, Mitigation Strategies",
        "Fairness, Transparency & Explainability (XAI)",
        "AI Governance Framework and Risk Assessment",
        "Regulatory Landscape: EU AI Act, India's DPDP Act, GDPR"
      ],
      caseStudies: [
        "Amazon: Hiring algorithm bias controversy",
        "Apple Card: Gender bias investigation"
      ],
      project: "AI Governance Framework Document (10 pages)"
    },
    {
      number: "10",
      title: "AI Implementation & Change Management",
      meta: "Week 10 | 4 Hours | Leading AI Transformation",
      topics: [
        "Implementation Roadmap: Pilot → Scale → Operationalize",
        "Vendor Selection: Build vs. Buy vs. Partner",
        "Change Management: Stakeholder Mapping and Communication",
        "Building AI Culture and Measuring Success"
      ],
      caseStudies: [
        "Microsoft: AI transformation journey",
        "Accenture: Scaling AI across consulting services"
      ],
      project: "AI Implementation & Change Management Plan (15-slide presentation)"
    }
  ];

  const stats = [
    { number: "$15.7T", label: "Global AI Economic Impact by 2030", source: "— PwC Global AI Study, 2023" },
    { number: "97M", label: "New Jobs Created by AI Globally", source: "— World Economic Forum, 2023" },
    { number: "86%", label: "Indian Companies Investing in AI", source: "— NASSCOM AI Report, 2024" },
    { number: "₹8-35L", label: "Average Salary for AI Professionals", source: "— Glassdoor India, 2024" }
  ];

  const programInfo = [
    { icon: "⏱️", title: "Duration", description: "40 Hours over 10 Weeks" },
    { icon: "📚", title: "Structure", description: "10 Modules × 4 Hours Each" },
    { icon: "🎓", title: "Mode of Delivery", description: "Hybrid: Classes in College Campus + Online Sessions" },
    { icon: "💰", title: "Program Fee", description: "₹35,000 + GST (₹41,300 Total)" },
    { icon: "🏆", title: "Certification", description: "Certified AI Professional (CAIP)" },
    { icon: "👥", title: "Target Audience", description: "MBA Students & Early-Career Business Professionals" }
  ];

  const careerServices = [
    { icon: "📝", title: "Resume & LinkedIn Optimization", description: "Professional resume audit, ATS optimization, LinkedIn enhancement, and personal branding guidance" },
    { icon: "🎤", title: "Interview Preparation", description: "Behavioral interviews (STAR method), case frameworks, technical discussions, and mock interviews with feedback" },
    { icon: "🎯", title: "Job Search Strategy", description: "Target company research, application customization, networking strategies, and salary negotiation guidance" },
    { icon: "🚀", title: "Post-Program Support", description: "6 months of career coaching, curated job board access, alumni network, and hiring partner connections" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-pulse-custom {
          animation: pulse 8s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-bg-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-20 px-5 text-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="absolute top-0 right-0 w-full h-full opacity-30 animate-pulse-custom"
             style={{
               background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
               top: '-50%',
               right: '-50%'
             }}>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 animate-fadeInUp">
            Applied AI for Business Professionals
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 font-light">
            Certified AI Professional (CAIP) Program
          </p>
          <p className="text-lg md:text-xl italic opacity-95">
            AI, ML & GenAI from Strategy to Execution
          </p>
        </div>
      </section>

      {/* AI Revolution Section */}
      <section className="py-20 px-5" style={{ background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5 gradient-text">
            🚀 The AI Revolution is Here
          </h2>
          <p className="text-center text-gray-600 text-base md:text-lg mb-12 max-w-3xl mx-auto">
            The global economy is being transformed by Artificial Intelligence. Those who master AI today will lead tomorrow's businesses.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1" style={{ 
                  background: index === 0 ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 
                             index === 1 ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' :
                             index === 2 ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' :
                             'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
                }}></div>
                <div className="text-4xl md:text-5xl font-extrabold mb-3 gradient-text">
                  {stat.number}
                </div>
                <div className="font-semibold text-gray-800 mb-2 text-sm md:text-base">{stat.label}</div>
                <div className="text-xs md:text-sm text-gray-500 italic">{stat.source}</div>
              </div>
            ))}
          </div>

          {/* AI Impact Content */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Why AI Skills Are Non-Negotiable for Business Professionals
            </h3>
            <p className="text-gray-600 leading-relaxed mb-5 text-sm md:text-base">
              Artificial Intelligence isn't just transforming technology—it's <span className="bg-indigo-100 px-2 py-1 rounded font-semibold text-indigo-700">revolutionizing every business function</span> from marketing to operations, finance to human resources. According to McKinsey's 2024 report, <span className="bg-indigo-100 px-2 py-1 rounded font-semibold text-indigo-700">companies that successfully implement AI see a 20-30% increase in productivity</span> and significant competitive advantages.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5 text-sm md:text-base">
              The demand for AI-skilled business professionals has <span className="bg-indigo-100 px-2 py-1 rounded font-semibold text-indigo-700">grown 344% over the past three years</span> (LinkedIn Emerging Jobs Report, 2024). Companies aren't just looking for data scientists—they need <span className="bg-indigo-100 px-2 py-1 rounded font-semibold text-indigo-700">product managers, strategy consultants, and business analysts who can bridge the gap between AI technology and business impact</span>.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5 text-sm md:text-base">
              In India, the AI market is projected to reach <span className="bg-indigo-100 px-2 py-1 rounded font-semibold text-indigo-700">$17 billion by 2027</span> (NASSCOM), with sectors like BFSI, Healthcare, Retail, and Manufacturing leading AI adoption. Yet, <span className="bg-indigo-100 px-2 py-1 rounded font-semibold text-indigo-700">only 12% of MBA graduates have practical AI skills</span> that employers seek. This skills gap represents an unprecedented opportunity for forward-thinking professionals.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              <strong>The future belongs to those who can harness AI strategically.</strong> Whether you're targeting roles in Product Management, Strategy Consulting, Business Analytics, or Digital Transformation, <span className="bg-indigo-100 px-2 py-1 rounded font-semibold text-indigo-700">AI literacy is now a prerequisite, not an advantage</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5 gradient-text">
            Program at a Glance
          </h2>
          <p className="text-center text-gray-600 text-base md:text-lg mb-12">
            A comprehensive 10-week journey from AI fundamentals to implementation mastery
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programInfo.map((info, index) => (
              <div key={index} className="p-8 rounded-xl border-l-4 border-indigo-600 hover:translate-x-2 transition-all" 
                   style={{ background: 'linear-gradient(to bottom right, rgba(102, 126, 234, 0.08), rgba(118, 75, 162, 0.08))' }}>
                <h4 className="text-lg md:text-xl font-bold text-indigo-600 mb-3">
                  {info.icon} {info.title}
                </h4>
                <p className="text-gray-600 text-sm md:text-base">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Philosophy */}
      <section className="py-20 px-5" style={{ background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5 gradient-text">
            Program Philosophy
          </h2>
          <p className="text-center text-gray-600 text-base md:text-lg mb-12">
            Inspired by ISB & Berkeley, Optimized for Indian Market
          </p>

          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">The Upskillize Approach</h3>
            <p className="text-gray-600 leading-relaxed mb-5 text-sm md:text-base">
              <strong>From ISB:</strong> We've adopted executive-level strategic thinking, industry-specific applications, and a leadership perspective that prepares you for senior roles.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5 text-sm md:text-base">
              <strong>From Berkeley:</strong> Our curriculum incorporates hands-on GenAI applications, practical case studies, and a business transformation focus that's shaping Silicon Valley.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
              <strong>Upskillize Differentiator:</strong> <span className="bg-indigo-100 px-2 py-1 rounded font-semibold text-indigo-700">70% hands-on portfolio building + 30% concepts</span>, affordable pricing designed for MBA budgets, and perfect alignment with India's AI job market demands. You'll build <span className="bg-indigo-100 px-2 py-1 rounded font-semibold text-indigo-700">11 portfolio projects</span> that demonstrate real AI skills to employers.
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Portfolio-First Learning</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-3 flex-shrink-0">✓</span>
                <span className="text-gray-600 text-sm md:text-base">10 weekly deliverables (one per module)</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-3 flex-shrink-0">✓</span>
                <span className="text-gray-600 text-sm md:text-base">1 comprehensive capstone project</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-3 flex-shrink-0">✓</span>
                <span className="text-gray-600 text-sm md:text-base">Real-world case studies from Indian & global companies</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-3 flex-shrink-0">✓</span>
                <span className="text-gray-600 text-sm md:text-base">Strategy to Execution methodology (plan → build → present)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 px-5" style={{ background: 'linear-gradient(to bottom right, rgba(240, 147, 251, 0.08), rgba(245, 87, 108, 0.08))' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5 gradient-text">
            Comprehensive Curriculum
          </h2>
          <p className="text-center text-gray-600 text-base md:text-lg mb-12">
            10 modules covering the complete spectrum of Applied AI for business
          </p>

          {modules.map((module, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 md:p-10 mb-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-indigo-600">
              <div className="flex flex-col md:flex-row items-start mb-6">
                <div className="w-16 h-16 text-white rounded-xl flex items-center justify-center text-2xl font-extrabold mb-4 md:mb-0 md:mr-5 flex-shrink-0"
                     style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                  {module.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{module.title}</h3>
                  <div className="inline-block bg-slate-100 px-4 py-2 rounded-lg text-xs md:text-sm text-gray-600">
                    {module.meta}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="text-base md:text-lg font-bold text-indigo-600 mb-3">Topics Covered:</h5>
                <ul className="space-y-2">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-indigo-600 font-bold mr-3 flex-shrink-0">→</span>
                      <span className="text-gray-600 text-sm md:text-base">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl p-5 mb-6" style={{ background: 'linear-gradient(to bottom right, rgba(79, 172, 254, 0.08), rgba(0, 242, 254, 0.08))' }}>
                <h5 className="text-base md:text-lg font-bold text-cyan-600 mb-3">Case Studies:</h5>
                <ul className="space-y-2">
                  {module.caseStudies.map((study, i) => (
                    <li key={i} className="text-gray-600 text-sm md:text-base">• {study}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl p-5 border-l-4 border-pink-500" style={{ background: 'linear-gradient(to bottom right, rgba(250, 112, 154, 0.08), rgba(254, 225, 64, 0.08))' }}>
                <h5 className="text-base md:text-lg font-bold text-pink-600 mb-2">📊 Portfolio Project:</h5>
                <p className="text-gray-600 text-sm md:text-base">{module.project}</p>
              </div>
            </div>
          ))}

          {/* Capstone Project */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg mt-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              🎯 Capstone Project: End-to-End AI Transformation Plan
            </h3>
            <p className="text-gray-600 leading-relaxed mb-5 text-sm md:text-base">
              Apply all learnings from the 10 modules to design a comprehensive AI strategy and implementation plan for a real or hypothetical company. This capstone project synthesizes strategic thinking, practical application, analytical rigor, and communication skills.
            </p>
            <p className="font-bold text-gray-800 mb-3 text-sm md:text-base">Deliverables:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-3 flex-shrink-0">✓</span>
                <span className="text-gray-600 text-sm md:text-base">30-slide presentation deck</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-3 flex-shrink-0">✓</span>
                <span className="text-gray-600 text-sm md:text-base">5-page executive summary for C-suite</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-3 flex-shrink-0">✓</span>
                <span className="text-gray-600 text-sm md:text-base">Supporting documentation (PRD, governance framework, financial models)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5 gradient-text">
            Assessment & Certification
          </h2>
          <p className="text-center text-gray-600 text-base md:text-lg mb-12">
            Balanced evaluation emphasizing practical skills
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="rounded-2xl p-8 md:p-10 border-4 border-indigo-600" style={{ background: 'linear-gradient(to bottom right, rgba(102, 126, 234, 0.08), rgba(118, 75, 162, 0.08))' }}>
              <div className="text-5xl md:text-6xl font-extrabold mb-3 gradient-text">70%</div>
              <h3 className="text-xl md:text-2xl font-bold mb-5 text-gray-800">Practical Assessment</h3>
              <ul className="space-y-3 text-gray-600 text-sm md:text-base">
                <li><strong>40%</strong> - Weekly Portfolio Projects (10 projects × 4%)</li>
                <li><strong>30%</strong> - Capstone Project (presentation + documentation)</li>
                <li>Focus on real-world application and problem-solving</li>
                <li>Portfolio-ready deliverables for job interviews</li>
              </ul>
            </div>

            <div className="rounded-2xl p-8 md:p-10 border-4 border-pink-500" style={{ background: 'linear-gradient(to bottom right, rgba(240, 147, 251, 0.08), rgba(245, 87, 108, 0.08))' }}>
              <div className="text-5xl md:text-6xl font-extrabold mb-3 gradient-text">30%</div>
              <h3 className="text-xl md:text-2xl font-bold mb-5 text-gray-800">Theory Examination</h3>
              <ul className="space-y-3 text-gray-600 text-sm md:text-base">
                <li><strong>60</strong> Multiple Choice Questions (MCQs)</li>
                <li><strong>90 minutes</strong> duration</li>
                <li>Coverage: All 10 modules with equal weightage</li>
                <li>Conceptual, case-based, and application-oriented questions</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg mb-10">
            <p className="font-bold text-gray-800 mb-3 text-sm md:text-base">Passing Criteria:</p>
            <ul className="space-y-2 text-gray-700 text-sm md:text-base">
              <li>• Minimum 70% overall score to receive CAIP certification</li>
              <li>• Completion of all 10 portfolio projects mandatory</li>
              <li>• Complete and present capstone project</li>
              <li>• Minimum attendance: 8 out of 10 sessions</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              🏆 Upon Successful Completion, You Receive:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-2xl md:text-3xl mr-4 flex-shrink-0">🎓</span>
                <div>
                  <strong className="text-gray-800 text-sm md:text-base">Digital Certificate:</strong>
                  <span className="text-gray-600 text-sm md:text-base"> Certified AI Professional (CAIP) issued by Upskillize</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl md:text-3xl mr-4 flex-shrink-0">📊</span>
                <div>
                  <strong className="text-gray-800 text-sm md:text-base">Transcript:</strong>
                  <span className="text-gray-600 text-sm md:text-base"> Detailed grade report for all modules</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl md:text-3xl mr-4 flex-shrink-0">🔗</span>
                <div>
                  <strong className="text-gray-800 text-sm md:text-base">Digital Badge:</strong>
                  <span className="text-gray-600 text-sm md:text-base"> Verifiable badge for LinkedIn with unique certificate ID</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl md:text-3xl mr-4 flex-shrink-0">💼</span>
                <div>
                  <strong className="text-gray-800 text-sm md:text-base">Portfolio Access:</strong>
                  <span className="text-gray-600 text-sm md:text-base"> Permanent access to all 11 submitted projects</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl md:text-3xl mr-4 flex-shrink-0">🤝</span>
                <div>
                  <strong className="text-gray-800 text-sm md:text-base">Alumni Network:</strong>
                  <span className="text-gray-600 text-sm md:text-base"> Lifetime access to resources and community</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Career Assistance */}
      <section className="py-20 px-5" style={{ background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5 gradient-text">
            Career Assistance Program
          </h2>
          <p className="text-center text-gray-600 text-base md:text-lg mb-12">
            Comprehensive support for your job search journey
          </p>

          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg mb-10">
            <p className="font-bold text-red-600 mb-2 text-sm md:text-base">Important Disclaimer:</p>
            <p className="text-gray-700 text-sm md:text-base">Upskillize does not guarantee job placements. The Career Assistance Program provides comprehensive support in your job search journey, including resume optimization, interview preparation, networking guidance, and access to opportunities. Final placement outcomes depend on individual performance, market conditions, and employer decisions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerServices.map((service, index) => (
              <div key={index} className="p-8 rounded-xl border-l-4 border-indigo-600 hover:translate-x-2 transition-all" 
                   style={{ background: 'linear-gradient(to bottom right, rgba(102, 126, 234, 0.08), rgba(118, 75, 162, 0.08))' }}>
                <h4 className="text-lg md:text-xl font-bold text-indigo-600 mb-3">
                  {service.icon} {service.title}
                </h4>
                <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-5 text-white text-center" style={{ background: 'linear-gradient(135deg, #2d3561 0%, #1f1c2e 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Ready to Become a Certified AI Professional?</h2>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Join the next generation of AI-powered business leaders. Transform from student to CAIP in just 10 weeks.
          </p>
          <a href="mailto:caip@upskillize.com" 
             className="inline-block px-12 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
             style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', color: '#2d3561' }}>
            Enroll Now →
          </a>
          <p className="mt-8 text-base opacity-80">
            Limited seats available. Early bird discount ends soon!
          </p>
        </div>
      </section>
    </div>
  );
};

export default CIPLandingPage;