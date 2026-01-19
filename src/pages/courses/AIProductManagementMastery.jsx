import React from 'react';

export default function AIProductManagementMastery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-700 to-pink-500 p-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          line-height: 1.7;
        }

        .brochure-container {
          max-width: 1300px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 30px;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          animation: fadeInUp 1.2s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 40%, #f093fb 80%, #f5576c 100%);
          color: white;
          text-align: center;
          padding: 80px 50px;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: -60%;
          left: -60%;
          width: 220%;
          height: 220%;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="sparkle" width="50" height="50" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="2" fill="white" opacity="0.15"/><circle cx="40" cy="40" r="1" fill="white" opacity="0.1"/><circle cx="25" cy="35" r="1.5" fill="white" opacity="0.12"/><circle cx="5" cy="45" r="1" fill="white" opacity="0.08"/></pattern></defs><rect width="100" height="100" fill="url(%23sparkle)"/></svg>');
          z-index: 1;
          animation: sparkleMove 20s linear infinite;
        }

        @keyframes sparkleMove {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .hero-section > * {
          position: relative;
          z-index: 2;
        }

        .hero-badge {
          background: rgba(255, 255, 255, 0.2);
          padding: 12px 25px;
          border-radius: 30px;
          font-size: 1em;
          font-weight: 600;
          margin-bottom: 30px;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          display: inline-block;
        }

        .hero-title {
          font-family: 'Poppins', sans-serif;
          font-size: 4em;
          font-weight: 800;
          margin-bottom: 25px;
          line-height: 1.1;
          text-shadow: 0 6px 15px rgba(0,0,0,0.3);
          background: linear-gradient(45deg, #ffffff, #f0f8ff, #e6f3ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.5em;
          margin-bottom: 50px;
          opacity: 0.95;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 300;
          line-height: 1.6;
        }

        .ai-mascot {
          width: 250px;
          height: 250px;
          margin: 40px auto 50px;
          background: linear-gradient(135deg, #ff6b6b, #ee5a24, #ffa726, #42a5f5);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 6em;
          box-shadow: 0 25px 50px rgba(0,0,0,0.3);
          border: 10px solid rgba(255,255,255,0.3);
          animation: float 3s ease-in-out infinite;
          position: relative;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .ai-mascot::after {
          content: '';
          position: absolute;
          width: 120%;
          height: 120%;
          border-radius: 50%;
          border: 3px dashed rgba(255,255,255,0.4);
          animation: spin 15s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin: 50px auto;
          max-width: 900px;
        }

        .stat-card {
          background: rgba(255,255,255,0.2);
          padding: 30px 25px;
          border-radius: 20px;
          backdrop-filter: blur(15px);
          border: 2px solid rgba(255,255,255,0.3);
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-number {
          font-size: 3em;
          font-weight: 800;
          display: block;
          margin-bottom: 8px;
          color: #ffffff;
        }

        .stat-label {
          font-size: 1.1em;
          opacity: 0.9;
          font-weight: 500;
        }

        .key-highlight {
          background: rgba(255,255,255,0.25);
          padding: 25px 40px;
          border-radius: 20px;
          font-size: 1.6em;
          font-weight: 600;
          margin-top: 40px;
          backdrop-filter: blur(15px);
          border: 2px solid rgba(255,255,255,0.4);
        }

        .curriculum-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 80px 50px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-family: 'Poppins', sans-serif;
          font-size: 3.5em;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.3em;
          color: #4a5568;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .practical-badge {
          display: inline-block;
          background: linear-gradient(45deg, #10b981, #059669);
          color: white;
          padding: 15px 30px;
          border-radius: 50px;
          font-size: 1.2em;
          font-weight: 700;
          margin: 30px 0;
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
          animation: pulse-glow 2s infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3); }
          50% { box-shadow: 0 15px 35px rgba(16, 185, 129, 0.5); }
        }

        .topic-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 40px;
          margin-bottom: 60px;
        }

        .topic-card {
          background: white;
          border-radius: 25px;
          padding: 40px 35px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          border: 3px solid transparent;
        }

        .topic-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 8px;
          border-radius: 25px 25px 0 0;
        }

        .topic-card:nth-child(1)::before { background: linear-gradient(90deg, #f59e0b, #f97316); }
        .topic-card:nth-child(2)::before { background: linear-gradient(90deg, #3b82f6, #1d4ed8); }
        .topic-card:nth-child(3)::before { background: linear-gradient(90deg, #10b981, #059669); }
        .topic-card:nth-child(4)::before { background: linear-gradient(90deg, #8b5cf6, #7c3aed); }
        .topic-card:nth-child(5)::before { background: linear-gradient(90deg, #ef4444, #dc2626); }

        .topic-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.15);
        }

        .topic-card:nth-child(1):hover { border-color: #f59e0b; }
        .topic-card:nth-child(2):hover { border-color: #3b82f6; }
        .topic-card:nth-child(3):hover { border-color: #10b981; }
        .topic-card:nth-child(4):hover { border-color: #8b5cf6; }
        .topic-card:nth-child(5):hover { border-color: #ef4444; }

        .topic-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 25px;
        }

        .topic-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.8em;
          font-weight: 700;
          color: #1a202c;
          line-height: 1.3;
          flex: 1;
          margin-right: 20px;
        }

        .topic-duration {
          background: linear-gradient(45deg, #1a202c, #2d3748);
          color: white;
          padding: 12px 20px;
          border-radius: 25px;
          font-size: 1em;
          font-weight: 700;
          white-space: nowrap;
        }

        .module-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .module-item {
          background: linear-gradient(135deg, #f8fafc, #f1f5f9);
          margin-bottom: 20px;
          padding: 20px 25px;
          border-radius: 15px;
          border-left: 5px solid;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
        }

        .topic-card:nth-child(1) .module-item { border-color: #f59e0b; }
        .topic-card:nth-child(2) .module-item { border-color: #3b82f6; }
        .topic-card:nth-child(3) .module-item { border-color: #10b981; }
        .topic-card:nth-child(4) .module-item { border-color: #8b5cf6; }
        .topic-card:nth-child(5) .module-item { border-color: #ef4444; }

        .module-item:hover {
          transform: translateX(8px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }

        .module-title {
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 10px;
          font-size: 1.1em;
          line-height: 1.4;
        }

        .module-description {
          font-size: 0.95em;
          color: #4a5568;
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .practical-activity {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          padding: 12px 18px;
          border-radius: 10px;
          font-size: 0.9em;
          font-weight: 600;
          margin-top: 10px;
          display: inline-block;
        }

        .info-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }

        .info-panel {
          padding: 60px 50px;
        }

        .left-panel {
          background: linear-gradient(135deg, #f0f9ff 0%, #dbeafe 100%);
          border-right: 3px solid #bfdbfe;
        }

        .right-panel {
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
        }

        .panel-title {
          font-family: 'Poppins', sans-serif;
          font-size: 2.5em;
          font-weight: 800;
          margin-bottom: 30px;
          color: #1a202c;
          position: relative;
          padding-bottom: 20px;
        }

        .panel-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100px;
          height: 5px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 3px;
        }

        .panel-subtitle {
          font-family: 'Poppins', sans-serif;
          font-size: 1.6em;
          font-weight: 600;
          color: #2d3748;
          margin: 30px 0 20px 0;
        }

        .panel-text {
          font-size: 1.1em;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 25px;
        }

        .benefit-list {
          list-style: none;
          margin: 25px 0;
          padding: 0;
        }

        .benefit-item {
          position: relative;
          margin-bottom: 18px;
          padding-left: 40px;
          font-size: 1.1em;
          line-height: 1.6;
          color: #2d3748;
        }

        .benefit-item::before {
          content: "🚀";
          position: absolute;
          left: 0;
          top: 0;
          font-size: 1.5em;
        }

        .salary-showcase {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 40px;
          border-radius: 25px;
          margin: 35px 0;
          text-align: center;
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
        }

        .salary-amount {
          font-size: 3.5em;
          font-weight: 800;
          margin-bottom: 15px;
          text-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }

        .salary-description {
          font-size: 1.2em;
          opacity: 0.95;
          font-weight: 500;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          margin: 35px 0;
        }

        .feature-card {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          border-top: 5px solid;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .feature-card:nth-child(1) { border-color: #f59e0b; }
        .feature-card:nth-child(2) { border-color: #3b82f6; }
        .feature-card:nth-child(3) { border-color: #10b981; }
        .feature-card:nth-child(4) { border-color: #8b5cf6; }

        .feature-icon {
          font-size: 3em;
          margin-bottom: 20px;
          display: block;
        }

        .feature-title {
          font-weight: 700;
          font-size: 1.3em;
          margin-bottom: 15px;
          color: #1a202c;
        }

        .feature-text {
          color: #4a5568;
          line-height: 1.6;
        }

        .capstone-section {
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
          color: white;
          padding: 80px 50px;
          text-align: center;
        }

        .capstone-title {
          font-family: 'Poppins', sans-serif;
          font-size: 3em;
          font-weight: 800;
          margin-bottom: 30px;
          text-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }

        .capstone-description {
          font-size: 1.3em;
          line-height: 1.7;
          max-width: 900px;
          margin: 0 auto 40px;
          opacity: 0.95;
        }

        .exam-info {
          background: rgba(255,255,255,0.1);
          padding: 30px 40px;
          border-radius: 20px;
          margin: 40px auto;
          max-width: 700px;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255,255,255,0.2);
        }

        .exam-title {
          font-size: 1.8em;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .cta-section {
          background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%);
          color: white;
          text-align: center;
          padding: 80px 50px;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="3" fill="white" opacity="0.1"/><circle cx="80" cy="80" r="2" fill="white" opacity="0.15"/><circle cx="50" cy="30" r="2" fill="white" opacity="0.1"/><circle cx="30" cy="70" r="1" fill="white" opacity="0.08"/><circle cx="70" cy="50" r="2" fill="white" opacity="0.12"/></svg>');
          z-index: 1;
        }

        .cta-section > * {
          position: relative;
          z-index: 2;
        }

        .cta-title {
          font-family: 'Poppins', sans-serif;
          font-size: 3.2em;
          font-weight: 800;
          margin-bottom: 50px;
          text-shadow: 0 4px 8px rgba(0,0,0,0.3);
          line-height: 1.2;
        }

        .cta-button {
          display: inline-block;
          background: white;
          color: #10b981;
          padding: 30px 70px;
          font-size: 1.6em;
          font-weight: 800;
          text-decoration: none;
          border-radius: 70px;
          transition: all 0.4s ease;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          border: 5px solid transparent;
          font-family: 'Poppins', sans-serif;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
        }

        .cta-button:hover {
          background: transparent;
          color: white;
          border-color: white;
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.4);
        }

        .contact-section {
          margin-top: 60px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-title {
          font-family: 'Poppins', sans-serif;
          font-size: 2em;
          margin-bottom: 30px;
          grid-column: 1 / -1;
          text-align: center;
        }

        .contact-card {
          background: rgba(255,255,255,0.2);
          padding: 25px;
          border-radius: 20px;
          text-align: center;
          backdrop-filter: blur(15px);
          border: 2px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          background: rgba(255,255,255,0.3);
        }

        .contact-icon {
          font-size: 2.5em;
          margin-bottom: 15px;
          display: block;
        }

        .contact-card a {
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1em;
        }

        @media (max-width: 1024px) {
          .topic-grid {
            grid-template-columns: 1fr;
          }
          
          .info-section {
            grid-template-columns: 1fr;
          }
          
          .left-panel {
            border-right: none;
            border-bottom: 3px solid #bfdbfe;
          }
        }

        @media (max-width: 768px) {
          .brochure-container {
            border-radius: 20px;
          }
          
          .hero-section {
            padding: 50px 25px;
          }
          
          .hero-title {
            font-size: 3em;
          }
          
          .hero-subtitle {
            font-size: 1.3em;
          }
          
          .ai-mascot {
            width: 200px;
            height: 200px;
            font-size: 4.5em;
          }
          
          .curriculum-section, .info-panel, .capstone-section, .cta-section {
            padding: 50px 25px;
          }
          
          .section-title {
            font-size: 2.8em;
          }
          
          .topic-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }
          
          .topic-card {
            padding: 30px 25px;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          
          .cta-title {
            font-size: 2.5em;
          }
          
          .cta-button {
            padding: 25px 50px;
            font-size: 1.4em;
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="brochure-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-badge">🇮🇳 India's Premier AI Product Management Program</div>
          
          <h1 className="hero-title">AI Product Management Mastery</h1>
          <p className="hero-subtitle">Transform into an industry-ready AI Product Manager with India's most comprehensive, practical-oriented program. Master cutting-edge AI technologies, user-centric design thinking, and modern development practices in just 40 intensive hours.</p>
          
          <div className="ai-mascot">🤖</div>
          
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">40</span>
              <span className="stat-label">Hours of Intensive Learning</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">25</span>
              <span className="stat-label">Hands-on Modules</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">70%</span>
              <span className="stat-label">Practical Learning</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">1</span>
              <span className="stat-label">Industry Capstone Project</span>
            </div>
          </div>
          
          <div className="key-highlight">
            🚀 Launch Your AI Product Management Career with Industry-Ready Skills
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="curriculum-section">
          <div className="section-header">
            <h2 className="section-title">Industry-Best Curriculum</h2>
            <p className="section-subtitle">Designed by industry experts from top AI companies, this program follows the latest industry practices with seamless course flow and practical-first approach.</p>
            <div className="practical-badge">⚡ 70% Practical • 30% Theory</div>
          </div>

          <div className="topic-grid">
            {/* Topic 1 */}
            <div className="topic-card">
              <div className="topic-header">
                <h3 className="topic-title">Topic 1: AI Product Management Fundamentals</h3>
                <div className="topic-duration">8 Hours</div>
              </div>
              <ul className="module-list">
                <li className="module-item">
                  <div className="module-title">Module 1.1: AI Product Management Paradigm Shift</div>
                  <div className="module-description">• Traditional vs AI-first product thinking • Strategic AI mindset development • Industry transformation patterns</div>
                  <div className="practical-activity">🎯 Case Study: Netflix's AI-First Transformation Strategy</div>
                </li>
                <li className="module-item">
                  <div className="module-title">Module 1.2: AI Product Development Lifecycle (PDLC)</div>
                  <div className="module-description">• AI-specific development frameworks • Iterative improvement cycles • Continuous learning systems</div>
                  <div className="practical-activity">🔧 Workshop: Design Your AI Product Roadmap Framework</div>
                </li>
                <li className="module-item">
                  <div className="module-title">Module 1.3: Essential AI/ML Concepts for PMs</div>
                  <div className="module-description">• Machine learning fundamentals • Deep learning basics • Neural network architectures • Algorithm selection strategies</div>
                  <div className="practical-activity">🧠 Hands-on Lab: Build Your First ML Model (No-Code)</div>
                </li>
                <li className="module-item">
                  <div className="module-title">Module 1.4: Data Strategy & AI Product Requirements</div>
                  <div className="module-description">• Data-driven product decisions • Quality frameworks • Privacy considerations • Data pipeline design</div>
                  <div className="practical-activity">📊 Project: Conduct AI Readiness Data Audit</div>
                </li>
                <li className="module-item">
                  <div className="module-title">Module 1.5: AI Ethics & Responsible Product Development</div>
                  <div className="module-description">• Bias detection frameworks • Fairness implementation • Regulatory compliance • Ethical decision trees</div>
                  <div className="practical-activity">⚖️ Simulation: Resolve Real AI Ethics Dilemmas</div>
                </li>
              </ul>
            </div>

            {/* Topic 2 */}
            <div className="topic-card">  
              <div className="topic-header">
                <h3 className="topic-title">Topic 2: User-Centric AI Product Strategy</h3>
                <div className="topic-duration">8 Hours</div>
              </div>
              <ul className="module-list">
                <li className="module-item">
                  <div className="module-title">Module 2.1: AI Opportunity Identification & Strategic Alignment</div>
                  <div className="module-description">• Business problem framing for AI • Market opportunity analysis • ROI modeling for AI investments • Stakeholder alignment strategies</div>
                  <div className="practical-activity">💡 Workshop: AI Strategy Canvas Creation & Validation</div>
                </li>
                <li className="module-item">
                  <div className="module-title">Module 2.2: User Journey Mapping for AI Products</div>
                  <div className="module-description">• AI-specific user journey design • Emotional touchpoint mapping • AI interaction patterns • Trust-building user flows</div>
                  <div className="practical-activity">🗺️ Lab: Create Comprehensive AI User Journey Maps</div>
                </li>
                <li className="module-item">
                  <div className="module-title">Module 2.3: Epics, User Stories & Acceptance Criteria for AI</div>
                  <div className="module-description">• AI-focused epic structuring • User story writing for AI features • Acceptance criteria frameworks • Stakeholder story alignment</div>
                  <div className="practical-activity">📝 Activity: Write Complete AI Product Epic with User Stories</div>
                </li>
                <li className="module-item">
                  <div className="module-title">Module 2.4: Behavior-Driven Development (BDD) for AI Products</div>
                  <div className="module-description">• Given-When-Then scenarios for AI • BDD collaboration frameworks • AI-specific behavior testing • Cross-functional BDD implementation</div>
                  <div className="practical-activity">🎭 Workshop: Design BDD Scenarios for AI Chatbot Features</div>
                </li>
                <li className="module-item">
                  <div className="module-title">Module 2.5: AI Product Roadmapping & Prioritization</div>
                  <div className="module-description">• AI feature prioritization frameworks • Technical debt management • Release planning for AI products • Stakeholder communication strategies</div>
                  <div className="practical-activity">🎯 Project: Build Complete AI Product Roadmap (6-Month)</div>
                </li>
              </ul>
            </div>

            {/* Topic 3 */}
            <div className="topic-card">
              <div className="topic-header">
                <h3 className="topic-title">Topic 3: Generative AI & Modern Development Practices</h3>
                <div className="topic-duration">8 Hours</div>
              </div>
              <ul className="module-list">
                <li className="module-item">
                  <div className="module-title">Module 3.1: Generative AI Fundamentals & Product Applications</div>
                  <div className="module-description">• GenAI capabilities overview • LLM vs traditional AI • Platform comparison (GPT, Gemini, Claude) • Use case identification</div>
                  <div className="practical-activity">✨ Comparison Lab: Evaluate GenAI Platforms for Product Use Cases</div>
                </li>
                <li className="module-item">
                  <div className="module-title">Module 3.2: Advanced Prompt Engineering & LLM Integration</div>
                  <div className="module-description">• Prompt optimization techniques • Chain-of-thought reasoning • Context management • API integration strategies</div>
                  <div className="practical-activity">🔧 Hands-on: Master Advanced Prompting for Product Management</div>
                </li>
                <li className="module-item">
                  <div className="module-title">Module 3.3: Modern SDLC with AI/ML Integration</div>
                  <div className="module-description">• AI-enhanced development lifecycle • MLOps fundamentals • Version control for ML models • Automated testing pipelines</div>
                  <div className="practical-activity">⚙️ Workshop: Design AI-Integrated Development Pipeline</div>
                </li>
                <li className="module-item">
                  <div className="module-title">Module 3.4: Agile/Scrum Methodologies for AI Development</div>
                  <div className="module-description">• AI-specific sprint planning • Cross-functional team coordination • Risk management in AI sprints • Stakeholder communication</div>
                  <div className="practical-activity">🏃‍♂️ Sprint Simulation: Manage AI Feature Development Team</div>
                </li>
                <li className="module-item">
                  <div className="module-title">Module 3.5: DevOps, MLOps & Continuous Integration</div>
                  <div className="module-description">• CI/CD for AI products • Model deployment strategies • Monitoring and maintenance • Automated quality assurance</div>
                  <div className="practical-activity">🚀 Project: Setup Complete MLOps Pipeline for AI Product</div>
                </li>
              </ul>
            </div>

            {/* Topic 4 */}
            <div className="topic-card">
              <div className="topic-header">
                <h3 className="topic-title">Topic 4: AI Product Development & Testing</h3>
                <div className="topic-duration">8 Hours</div>
              </div>
              <ul className="module-list">
                <li className="module-item">
                  <div className="module-title">Module 4.1: No-Code/Low-Code AI Product Development</div>
                  <div className="module-description">• Platform evaluation & selection • Rapid prototyping techniques • Integration capabilities • Scalability considerations</div>
                  <div className="practical-activity">🛠️ Build Challenge: Create AI-Powered Customer Service Bot</div>
                </li>
                <li className="module-item">
                  <div className="module-title">Module 4.2: AI Product Testing Methodologies & QA</div>
                  <div className="module-description">• AI-specific testing frameworks • Model validation techniques • Performance benchmarking • Error handling strategies</div>
                  <div className="practical-activity">🧪 Testing Lab: Comprehensive AI Model Validation Project</div>
                </li>
                <li className="module-item">
                  <div className="module-title">Module 4.3: A/B Testing & Experimentation for AI Products</div>
                  <div className="module-description">• Experiment design for AI features • Statistical significance in AI • Multivariate testing approaches • Continuous optimization frameworks</div>
                  <div className="practical-activity">📊 Experiment: Design & Execute AI Feature A/B Test</div>
                </li>
                <li className="module-item">
                  <div className="module-title">Module 4.4: Performance Monitoring & AI Model Evaluation</div>
                  <div className="module-description">• KPI frameworks for AI products • Real-time monitoring systems • Model drift detection • Performance optimization strategies</div>
                  <div className="practical-activity">📈 Dashboard Project: Build AI Product Analytics System</div>
                </li>
                <li className="module-item">
                  <div className="module-title">Module 4.5: AI Product Security & Compliance</div>
                  <div className="module-description">• Security frameworks for AI • Data privacy protection • Regulatory compliance (GDPR, etc.) • Risk assessment methodologies</div>
                  <div className="practical-activity">🔒 Audit Exercise: Comprehensive AI Product Security Assessment</div>
                </li>
              </ul>
            </div>

            {/* Topic 5 */}
            <div className="topic-card">
              <div className="topic-header">
                <h3 className="topic-title">Topic 5: AI Product Launch, Growth & Capstone</h3>
                <div className="topic-duration">8 Hours</div>
              </div>
              <ul className="module-list">
                <li className="module-item">
                  <div className="module-title">Module 5.1: Go-to-Market Strategy for AI Products</div>
                  <div className="module-description">• AI product positioning strategies • Market entry planning • Channel optimization • Customer acquisition frameworks</div>
                  <div className="practical-activity">🚀 GTM Workshop: Complete AI Product Launch Strategy</div>
                </li>
                <li className="module-item">
                  <div className="module-title">Module 5.2: User Adoption & Change Management for AI</div>
                  <div className="module-description">• AI adoption psychology • Change management frameworks • User training strategies • Resistance handling techniques</div>
                  <div className="practical-activity">👥 Simulation: Lead AI Product Adoption Initiative</div>
                </li>
                <li className="module-item">
                  <div className="module-title">Module 5.3: AI Product Analytics & Success Metrics</div>
                  <div className="module-description">• Success metric identification • Analytics implementation • ROI measurement • Continuous improvement loops</div>
                  <div className="practical-activity">📊 Analytics Project: Design Complete AI Product KPI Dashboard</div>
                </li>
                <li className="module-item">
                  <div className="module-title">Module 5.4: Scaling AI Products & Infrastructure</div>
                  <div className="module-description">• Scaling strategies for AI systems • Infrastructure planning • Cost optimization • Global expansion considerations</div>
                  <div className="practical-activity">📈 Scaling Exercise: Plan AI Product Scale from 1K to 1M Users</div>
                </li>
                <li className="module-item">
                  <div className="module-title">Module 5.5: Industry Capstone Project & Best Practices</div>
                  <div className="module-description">• Complete AI product development • Real-world implementation • Industry mentor guidance • Portfolio presentation</div>
                  <div className="practical-activity">🏆 Capstone: End-to-End AI Product Development & Presentation</div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="info-section">
          <div className="info-panel left-panel">
            <h2 className="panel-title">Why Choose This Program?</h2>
            <p className="panel-text">India's AI market is projected to reach $17 billion by 2027. The demand for skilled AI Product Managers has grown by 400% in the past 2 years, making this the perfect time to master these critical skills.</p>

            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <div className="feature-title">Industry-Focused</div>
                <div className="feature-text">Curriculum co-created with AI product leaders from top Indian and global companies</div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <div className="feature-title">Practical-First Learning</div>
                <div className="feature-text">70% hands-on projects with real-world case studies and industry tools</div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏆</div>
                <div className="feature-title">Career Transformation</div>
                <div className="feature-text">Dedicated placement support with portfolio building and interview preparation</div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🧠</div>
                <div className="feature-title">Expert Mentorship</div>
                <div className="feature-text">Learn from seasoned AI product leaders from companies like Google, Microsoft, and Flipkart</div>
              </div>
            </div>

            <h3 className="panel-subtitle">🎓 Certification & Recognition</h3>
            <p className="panel-text">Earn the prestigious <strong>Certified AI Product Manager (CAIPM)</strong> credential, recognized by leading tech companies across India and internationally. Stand out in the competitive AI job market.</p>

            <h3 className="panel-subtitle">🤝 Perfect For</h3>
            <ul className="benefit-list">
              <li className="benefit-item"><strong>Students</strong> pursuing engineering, MBA, or technology degrees</li>
              <li className="benefit-item"><strong>Working Professionals</strong> in tech, product, and business roles</li>
              <li className="benefit-item"><strong>Business Analysts</strong> transitioning to AI product management</li>
              <li className="benefit-item"><strong>Product Managers</strong> seeking AI specialization</li>
              <li className="benefit-item"><strong>Tech Leads & Engineers</strong> moving into product roles</li>
              <li className="benefit-item"><strong>Entrepreneurs & Startup Founders</strong> building AI products</li>
              <li className="benefit-item"><strong>Consultants</strong> advising on AI transformation</li>
            </ul>
          </div>

          <div className="info-panel right-panel">
            <h2 className="panel-title">Career Transformation</h2>
            
            <div className="salary-showcase">
              <div className="salary-amount">₹6L - ₹45L</div>
              <div className="salary-description"><strong>Annual Salary Range in India</strong><br />AI Product Managers are among the highest-paid professionals in tech</div>
            </div>

            <h3 className="panel-subtitle">🎯 Target Roles After Completion</h3>
            <ul className="benefit-list">
              <li className="benefit-item"><strong>AI Product Manager</strong> - Lead AI product strategy and development</li>
              <li className="benefit-item"><strong>ML Product Manager</strong> - Specialize in machine learning products</li>
              <li className="benefit-item"><strong>AI Strategy Lead</strong> - Drive organizational AI transformation</li>
              <li className="benefit-item"><strong>Product Owner (AI/ML)</strong> - Own AI product backlogs and roadmaps</li>
              <li className="benefit-item"><strong>Business Analyst (AI Focus)</strong> - Analyze AI product requirements</li>
              <li className="benefit-item"><strong>AI Solutions Architect</strong> - Design comprehensive AI solutions</li>
              <li className="benefit-item"><strong>Innovation Manager</strong> - Drive AI innovation initiatives</li>
              <li className="benefit-item"><strong>Digital Transformation Lead</strong> - Lead AI-powered transformations</li>
            </ul>

            <h3 className="panel-subtitle">🏢 High-Demand Career Opportunities</h3>
            <p className="panel-text">AI Product Managers are in exceptional demand across leading organizations worldwide including:</p>
            <ul className="benefit-list">
              <li className="benefit-item"><strong>Tech Giants:</strong> Google India, Microsoft, Amazon, IBM</li>
              <li className="benefit-item"><strong>Indian Unicorns:</strong> Flipkart, Paytm, Swiggy, Zomato, BYJU'S</li>
              <li className="benefit-item"><strong>Consulting:</strong> Accenture, Deloitte, McKinsey, PwC</li>
              <li className="benefit-item"><strong>IT Services:</strong> TCS, Infosys, Wipro, HCL Technologies</li>
              <li className="benefit-item"><strong>AI Startups:</strong> Ola, PhonePe, Razorpay, Freshworks</li>
            </ul>

            <h3 className="panel-subtitle">💼 Professional Development Support</h3>
            <ul className="benefit-list">
              <li className="benefit-item">AI product management resume optimization guidance</li>
              <li className="benefit-item">Portfolio development with capstone project showcase</li>
              <li className="benefit-item">Mock interviews and industry best practices training</li>
              <li className="benefit-item">Networking opportunities with industry professionals</li>
              <li className="benefit-item">Career guidance and industry insights sessions</li>
              <li className="benefit-item">Lifetime alumni network access and support</li>
            </ul>
          </div>
        </section>

        {/* Capstone & Exam Section */}
        <section className="capstone-section">
          <h2 className="capstone-title">🏆 Industry Capstone Project & Certification</h2>
          <p className="capstone-description">
            Culminate your learning journey with a comprehensive capstone project where you'll design, develop, and launch a complete AI product from ideation to market. Work on real industry challenges with mentorship from experienced AI product leaders.
          </p>
          
          <div className="exam-info">
            <h3 className="exam-title">📋 Final Certification Exam</h3>
            <p>Complete a comprehensive assessment covering all course modules including practical scenarios, case study analysis, and strategic decision-making. Pass with 70% or higher to earn your CAIPM certification.</p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <div className="feature-title">Real-World Project</div>
              <div className="feature-text">Solve actual industry challenges with guidance from AI product experts</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <div className="feature-title">Portfolio Ready</div>
              <div className="feature-text">Build a showcase project that demonstrates your AI PM skills to employers</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <div className="feature-title">Industry Recognition</div>
              <div className="feature-text">CAIPM certification recognized by 500+ companies across India</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <div className="feature-title">Expert Mentorship</div>
              <div className="feature-text">1-on-1 guidance from senior AI product managers throughout your project</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <h2 className="cta-title">🚀 Transform Your Career Today!<br />Join India's #1 AI Product Management Program</h2>
          <a href="#registration" className="cta-button">Enroll Now & Secure Your AI Future!</a>
          
          <div className="contact-section">
            <h3 className="contact-title">🤝 Ready to Start Your AI Journey?</h3>
          </div>
        </section>
      </div>
    </div>
  );
}