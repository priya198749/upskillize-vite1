import React, { useEffect } from 'react';

export default function ProductLeadershipProgram() {
  const styles = {
    root: {
      fontFamily: "'Poppins', sans-serif",
      lineHeight: '1.6',
      color: '#1E3A5F',
      background: '#F4F6F8',
      margin: 0,
      padding: 0
    },
    nav: {
      background: 'linear-gradient(135deg, #006B7D 0%, #1E3A5F 100%)',
      padding: '15px 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 800,
      color: '#FFFFFF'
    },
    hero: {
      background: 'linear-gradient(135deg, #006B7D 0%, #1E3A5F 100%)',
      color: '#FFFFFF',
      padding: '100px 20px 80px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '1000px',
      margin: '0 auto'
    },
    upskillizeBrand: {
      fontSize: '1.8rem',
      fontWeight: 700,
      color: '#F7B731',
      marginBottom: '10px',
      letterSpacing: '2px'
    },
    heroH1: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '3.5rem',
      fontWeight: 900,
      marginBottom: '20px',
      textShadow: '2px 4px 10px rgba(0, 0, 0, 0.3)'
    },
    tagline: {
      fontSize: '1.6rem',
      marginBottom: '30px',
      opacity: 0.95,
      fontWeight: 300
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      marginTop: '40px'
    },
    statCard: {
      background: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)',
      padding: '20px',
      borderRadius: '15px',
      border: '2px solid rgba(255, 255, 255, 0.3)'
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: 900,
      color: '#F7B731',
      display: 'block'
    },
    statLabel: {
      fontSize: '0.9rem',
      marginTop: '5px',
      opacity: 0.95
    },
    section: {
      padding: '80px 20px',
      background: '#FFFFFF'
    },
    sectionAlt: {
      background: '#F4F6F8'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#1E3A5F',
      marginBottom: '50px'
    },
    moduleGrid: {
      display: 'grid',
      gap: '40px',
      marginTop: '40px'
    },
    moduleCard: {
      background: '#FFFFFF',
      borderRadius: '20px',
      padding: '40px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      borderLeft: '6px solid #006B7D',
      transition: 'transform 0.3s ease'
    },
    moduleHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '25px',
      gap: '20px'
    },
    moduleNumber: {
      background: 'linear-gradient(135deg, #006B7D 0%, #1E3A5F 100%)',
      color: '#FFFFFF',
      width: '60px',
      height: '60px',
      borderRadius: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      fontWeight: 700,
      flexShrink: 0
    },
    moduleInfo: {
      flex: 1
    },
    moduleTitle: {
      fontSize: '1.8rem',
      fontWeight: 700,
      color: '#1E3A5F',
      marginBottom: '5px'
    },
    moduleDuration: {
      color: '#006B7D',
      fontWeight: 600
    },
    moduleContent: {
      marginTop: '20px'
    },
    topicList: {
      listStyle: 'none',
      padding: 0
    },
    topicItem: {
      background: '#F4F6F8',
      padding: '20px',
      marginBottom: '15px',
      borderRadius: '12px',
      borderLeft: '4px solid #FF6B35'
    },
    topicTitle: {
      fontWeight: 600,
      color: '#1E3A5F',
      marginBottom: '8px',
      fontSize: '1.1rem'
    },
    topicDescription: {
      color: '#666',
      fontSize: '0.95rem',
      lineHeight: '1.6'
    },
    topicTools: {
      marginTop: '10px',
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap'
    },
    toolBadge: {
      background: '#006B7D',
      color: '#FFFFFF',
      padding: '5px 12px',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: 600
    },
    deliverablesSection: {
      background: '#E6F7F9',
      padding: '40px',
      borderRadius: '20px',
      marginTop: '40px',
      border: '2px solid #006B7D'
    },
    deliverablesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '25px',
      marginTop: '30px'
    },
    deliverableCard: {
      background: '#FFFFFF',
      padding: '25px',
      borderRadius: '15px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
    },
    deliverableIcon: {
      fontSize: '2.5rem',
      marginBottom: '15px'
    },
    deliverableTitle: {
      fontWeight: 700,
      color: '#1E3A5F',
      marginBottom: '10px',
      fontSize: '1.1rem'
    },
    deliverableDescription: {
      color: '#666',
      fontSize: '0.9rem'
    },
    toolsSection: {
      background: 'linear-gradient(135deg, #006B7D 0%, #1E3A5F 100%)',
      color: '#FFFFFF',
      padding: '60px 20px'
    },
    toolsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '25px',
      marginTop: '40px'
    },
    toolCard: {
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(10px)',
      padding: '30px',
      borderRadius: '15px',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      textAlign: 'center'
    },
    toolIcon: {
      fontSize: '3rem',
      marginBottom: '15px'
    },
    toolName: {
      fontSize: '1.2rem',
      fontWeight: 700,
      marginBottom: '10px'
    },
    ctaSection: {
      background: '#FF6B35',
      color: '#FFFFFF',
      padding: '80px 20px',
      textAlign: 'center'
    },
    ctaButton: {
      background: '#FFFFFF',
      color: '#FF6B35',
      padding: '18px 40px',
      borderRadius: '30px',
      fontWeight: 700,
      fontSize: '1.1rem',
      textDecoration: 'none',
      display: 'inline-block',
      marginTop: '30px',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    footer: {
      background: '#1E3A5F',
      color: '#FFFFFF',
      padding: '40px 20px',
      textAlign: 'center'
    },
    footerLink: {
      color: '#F7B731',
      textDecoration: 'none'
    }
  };

  const modules = [
    {
      number: 1,
      title: "Product Thinking & User Research",
      duration: "5 Hours",
      topics: [
        {
          icon: "🎯",
          title: "What is Product Management?",
          description: "Role of PM, stakeholder management, PM vs Project Manager, career paths (APM → PM → Senior PM → Director → VP → CPO). Product lifecycle and PM responsibilities at each stage."
        },
        {
          icon: "🔍",
          title: "User Research Fundamentals",
          description: "Conducting user interviews, creating discussion guides, synthesis techniques. Qualitative vs quantitative research, empathy mapping, user journey mapping.",
          tools: ["📝 Interview Scripts", "🗺️ Journey Maps", "❤️ Empathy Maps"]
        },
        {
          icon: "👤",
          title: "User Personas & Jobs-to-be-Done",
          description: "Creating data-driven personas, identifying user jobs/pains/gains, customer segmentation. Building proto-personas vs research-backed personas."
        },
        {
          icon: "🎨",
          title: "Product Teardown Analysis",
          description: "Analyze successful products (Swiggy, CRED, Notion). Reverse-engineer product decisions, identify monetization strategies, competitive positioning."
        }
      ]
    },
    {
      number: 2,
      title: "Product Strategy & Vision",
      duration: "5 Hours",
      topics: [
        {
          icon: "🚀",
          title: "Product Vision & Strategy",
          description: "Crafting compelling vision statements, defining product strategy, aligning with company goals. Creating product positioning and value propositions."
        },
        {
          icon: "🎯",
          title: "OKRs & Goal Setting",
          description: "Writing effective OKRs (Objectives and Key Results), cascading OKRs across teams, measuring progress. Company → Product → Feature OKR hierarchy.",
          tools: ["📊 OKR Frameworks", "🎯 SMART Goals"]
        },
        {
          icon: "🗺️",
          title: "Product Roadmapping",
          description: "Building quarterly and annual roadmaps, prioritization frameworks (RICE, MoSCoW, Kano Model, Value vs Effort), stakeholder communication."
        },
        {
          icon: "🏆",
          title: "Competitive Analysis",
          description: "SWOT analysis, feature comparison matrices, identifying competitive moats and differentiation strategies."
        }
      ]
    },
    {
      number: 3,
      title: "Design & Prototyping",
      duration: "5 Hours",
      topics: [
        {
          icon: "🎨",
          title: "Figma Mastery",
          description: "Complete Figma training from basics to advanced. Create wireframes, mockups, high-fidelity prototypes. Component libraries, auto-layout, interactive prototypes.",
          tools: ["🎨 Figma", "📐 Wireframing", "🖼️ Prototyping"]
        },
        {
          icon: "🧩",
          title: "UI/UX Principles",
          description: "Design thinking process, usability heuristics, accessibility (WCAG), mobile-first design, responsive design principles."
        },
        {
          icon: "🛠️",
          title: "No-Code App Building",
          description: "Build working MVPs using Glide. Database design, user authentication, CRUD operations. Launch a functional app without coding.",
          tools: ["📱 Glide", "🗄️ Google Sheets"]
        },
        {
          icon: "✅",
          title: "User Testing & Feedback",
          description: "Conducting usability tests, creating test scripts, analyzing feedback, iterating on designs based on user input."
        }
      ]
    },
    {
      number: 4,
      title: "Writing PRDs & Working with Engineering",
      duration: "5 Hours",
      topics: [
        {
          icon: "📄",
          title: "Product Requirements Documents (PRDs)",
          description: "Writing comprehensive PRDs: problem statement, user stories, acceptance criteria, technical requirements, success metrics. Industry-standard PRD templates.",
          tools: ["📝 Notion", "📋 Confluence"]
        },
        {
          icon: "📖",
          title: "User Stories & Acceptance Criteria",
          description: "Writing effective user stories (As a [user], I want [goal], so that [benefit]). Creating testable acceptance criteria, edge cases, error handling."
        },
        {
          icon: "🔄",
          title: "Agile & Scrum Methodology",
          description: "Sprint planning, daily standups, sprint reviews, retrospectives. Working with engineering teams, backlog grooming, story pointing.",
          tools: ["📊 Jira", "🔀 Linear", "📈 Monday.com"]
        },
        {
          icon: "👨‍💻",
          title: "Technical Literacy for PMs",
          description: "Understanding APIs, databases, frontend vs backend, cloud infrastructure basics. Speaking the language of engineering teams."
        }
      ]
    },
    {
      number: 5,
      title: "Product Analytics & Metrics",
      duration: "5 Hours",
      topics: [
        {
          icon: "📊",
          title: "Data-Driven Product Management",
          description: "Defining success metrics, North Star metrics, KPI trees, metric frameworks (AARRR - Acquisition, Activation, Retention, Referral, Revenue)."
        },
        {
          icon: "📈",
          title: "Product Analytics Tools",
          description: "Google Analytics 4, Mixpanel, Amplitude setup and usage. Event tracking, funnel analysis, cohort retention, user segmentation.",
          tools: ["📊 Google Analytics 4", "📈 Mixpanel", "🎯 Amplitude"]
        },
        {
          icon: "🧪",
          title: "A/B Testing & Experimentation",
          description: "Designing experiments, sample size calculation, statistical significance, p-values, confidence intervals. Running multivariate tests."
        },
        {
          icon: "📉",
          title: "Cohort Analysis & Retention",
          description: "Building cohort retention curves, identifying drop-off points, calculating churn rates, improving retention strategies."
        }
      ]
    },
    {
      number: 6,
      title: "Growth & Go-to-Market Strategy",
      duration: "6 Hours",
      topics: [
        {
          icon: "🚀",
          title: "Growth Frameworks & Loops",
          description: "AARRR funnel optimization, growth loops (viral, content, paid, sales-led), identifying growth levers, scaling strategies."
        },
        {
          icon: "📢",
          title: "User Acquisition Channels",
          description: "Organic growth (SEO, content marketing, community), Paid channels (Google Ads, Facebook Ads, LinkedIn Ads), channel-product fit."
        },
        {
          icon: "⚡",
          title: "Activation & Onboarding",
          description: "Designing onboarding flows, reducing time-to-value, identifying 'aha moments', activation metrics, progressive disclosure."
        },
        {
          icon: "🔁",
          title: "Retention & Engagement",
          description: "Email campaigns, push notifications, in-app messaging, habit formation, engagement loops, preventing churn."
        },
        {
          icon: "💰",
          title: "Monetization & Pricing",
          description: "Pricing strategies (freemium, subscription, usage-based), pricing experiments, LTV:CAC ratio, revenue optimization."
        },
        {
          icon: "🎯",
          title: "Go-to-Market Strategy",
          description: "Product launches, beta programs, positioning and messaging, launch planning, measuring launch success."
        }
      ]
    },
    {
      number: 7,
      title: "AI Product Management",
      duration: "4 Hours",
      topics: [
        {
          icon: "🤖",
          title: "AI/ML Product Fundamentals",
          description: "Understanding ML product lifecycle, supervised vs unsupervised learning, model training and deployment, AI ethics and bias."
        },
        {
          icon: "💬",
          title: "ChatGPT & LLM Integration",
          description: "Building products with ChatGPT API, prompt engineering, RAG (Retrieval Augmented Generation), LLM product design patterns.",
          tools: ["🤖 ChatGPT API", "🧠 Claude API", "⚡ OpenAI"]
        },
        {
          icon: "📊",
          title: "AI Product Metrics",
          description: "Model accuracy, precision, recall, F1 score, understanding when ML is adding value vs when it's not needed."
        },
        {
          icon: "🚀",
          title: "Building AI Features",
          description: "Recommendation systems, personalization engines, chatbots, content moderation, predictive analytics use cases."
        }
      ]
    },
    {
      number: 8,
      title: "PM Interviews & Capstone Project",
      duration: "5 Hours",
      topics: [
        {
          icon: "🎤",
          title: "Product Sense Interviews",
          description: "CIRCLES method (Comprehend, Identify, Report, Cut, List, Evaluate, Summarize), product design questions, feature prioritization."
        },
        {
          icon: "📊",
          title: "Analytical Interviews",
          description: "RCA (Root Cause Analysis), metrics questions, A/B test interpretation, SQL questions for PMs, business case analysis."
        },
        {
          icon: "🤝",
          title: "Behavioral Interviews",
          description: "STAR method (Situation, Task, Action, Result), leadership questions, conflict resolution, stakeholder management stories."
        },
        {
          icon: "💼",
          title: "Portfolio & Resume Building",
          description: "Creating PM portfolio websites, optimizing LinkedIn profiles, writing compelling PM resumes, showcasing projects effectively."
        },
        {
          icon: "🎯",
          title: "Capstone Project Presentation",
          description: "10-minute presentation of complete product: from user research to launch strategy. Present to cohort and receive feedback."
        },
        {
          icon: "🎭",
          title: "Mock Interviews",
          description: "3 full-length mock interviews covering product sense, analytics, and behavioral questions. Detailed feedback and improvement areas."
        }
      ]
    }
  ];

  const deliverables = [
    { icon: "📊", title: "Product Teardown Analysis", description: "Complete analysis of a successful product (Swiggy/CRED/Notion)" },
    { icon: "📝", title: "User Research Summary", description: "Synthesis from 3+ user interviews with insights and patterns" },
    { icon: "👤", title: "User Personas", description: "2 research-backed personas with jobs, pains, and gains" },
    { icon: "🗺️", title: "User Journey Maps", description: "Current state and future state journey maps" },
    { icon: "🎯", title: "Product Vision & OKRs", description: "Vision statement with quarterly OKRs and success metrics" },
    { icon: "🗺️", title: "Product Roadmap", description: "6-month roadmap with prioritized features (RICE scoring)" },
    { icon: "🎨", title: "Figma Prototype", description: "High-fidelity interactive prototype (5-7 screens)" },
    { icon: "📱", title: "Working No-Code App", description: "Functional MVP built in Glide with live link" },
    { icon: "📄", title: "Complete PRD", description: "8-12 page professional Product Requirements Document" },
    { icon: "📊", title: "Metrics Dashboard", description: "Interactive Power BI dashboard tracking product KPIs" },
    { icon: "🧪", title: "A/B Test Plan", description: "Experiment design with hypothesis, metrics, and statistical analysis" },
    { icon: "📈", title: "Cohort Analysis", description: "Retention curves and churn analysis with insights" },
    { icon: "🚀", title: "GTM Strategy", description: "Complete go-to-market plan with launch timeline" },
    { icon: "📈", title: "Growth Experiments", description: "10 documented growth experiments with success criteria" },
    { icon: "💼", title: "Portfolio Website", description: "Professional portfolio showcasing all projects" },
    { icon: "🎤", title: "Capstone Presentation", description: "10-minute presentation walking through complete product" }
  ];

  const tools = [
    { icon: "🎨", name: "Figma", description: "Prototyping & Design" },
    { icon: "📊", name: "Jira / Linear", description: "Project Management" },
    { icon: "📝", name: "Notion", description: "Documentation & PRDs" },
    { icon: "📱", name: "Glide", description: "No-Code Development" },
    { icon: "📈", name: "Mixpanel", description: "Product Analytics" },
    { icon: "📊", name: "Google Analytics 4", description: "Web Analytics" },
    { icon: "💾", name: "SQL", description: "Data Analysis" },
    { icon: "📊", name: "Power BI", description: "Dashboards" },
    { icon: "🤖", name: "ChatGPT API", description: "AI Integration" },
    { icon: "🎯", name: "Amplitude", description: "User Behavior" }
  ];

  return (
    <div style={styles.root}>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroH1}>Product Leadership: The Mini CEO Program</h1>
          <p style={styles.tagline}>From User Research to Product Launch - Master the Complete PM Journey</p>
          <p style={{fontSize: '1.2rem', marginTop: '20px'}}>Build Products End-to-End with Data-Driven Decision Making</p>
          
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>40</span>
              <span style={styles.statLabel}>Hours Intensive Training</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>8</span>
              <span style={styles.statLabel}>Comprehensive Modules</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>16</span>
              <span style={styles.statLabel}>Portfolio Deliverables</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>10+</span>
              <span style={styles.statLabel}>Professional Tools</span>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Complete Product Management Curriculum</h2>
          
          <div style={styles.moduleGrid}>
            {modules.map((module) => (
              <div key={module.number} style={styles.moduleCard}>
                <div style={styles.moduleHeader}>
                  <div style={styles.moduleNumber}>{module.number}</div>
                  <div style={styles.moduleInfo}>
                    <div style={styles.moduleTitle}>{module.title}</div>
                    <div style={styles.moduleDuration}>{module.duration}</div>
                  </div>
                </div>
                <div style={styles.moduleContent}>
                  <div style={styles.topicList}>
                    {module.topics.map((topic, index) => (
                      <div key={index} style={styles.topicItem}>
                        <div style={styles.topicTitle}>{topic.icon} {topic.title}</div>
                        <div style={styles.topicDescription}>{topic.description}</div>
                        {topic.tools && (
                          <div style={styles.topicTools}>
                            {topic.tools.map((tool, toolIndex) => (
                              <span key={toolIndex} style={styles.toolBadge}>{tool}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section style={{...styles.section, ...styles.sectionAlt}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Your Complete Product Portfolio (16 Deliverables)</h2>
          <p style={{textAlign: 'center', fontSize: '1.1rem', color: '#666', marginBottom: '40px'}}>
            Walk into interviews with proof of skills, not just certificates
          </p>
          
          <div style={styles.deliverablesSection}>
            <div style={styles.deliverablesGrid}>
              {deliverables.map((item, index) => (
                <div key={index} style={styles.deliverableCard}>
                  <div style={styles.deliverableIcon}>{item.icon}</div>
                  <div style={styles.deliverableTitle}>{item.title}</div>
                  <div style={styles.deliverableDescription}>{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Mastery */}
      <section style={styles.toolsSection}>
        <div style={styles.container}>
          <h2 style={{...styles.sectionTitle, color: 'white'}}>Master 10+ Professional Tools</h2>
          <p style={{textAlign: 'center', fontSize: '1.1rem', marginBottom: '40px', opacity: 0.95}}>
            Industry-standard toolkit from research to launch
          </p>
          
          <div style={styles.toolsGrid}>
            {tools.map((tool, index) => (
              <div key={index} style={styles.toolCard}>
                <div style={styles.toolIcon}>{tool.icon}</div>
                <div style={styles.toolName}>{tool.name}</div>
                <p style={{fontSize: '0.9rem', opacity: 0.9}}>{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <h2 style={{fontSize: '2.5rem', marginBottom: '20px'}}>Ready to Build Products That Matter?</h2>
          <p style={{fontSize: '1.3rem', marginBottom: '20px'}}>Master the complete PM journey from user research to product launch</p>
          <p style={{fontSize: '1.1rem', opacity: 0.95}}>Graduate with 16 portfolio deliverables that get you hired at ₹18-22 LPA</p>
          
          <a href="mailto:ramesh@upskillize.com" style={styles.ctaButton}>Start Your PM Journey</a>
          
          <div style={{marginTop: '50px', padding: '30px', background: 'rgba(255,255,255,0.1)', borderRadius: '20px'}}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '20px'}}>Part of MBA++ Program - Semester 4</h3>
            <p style={{fontSize: '1.1rem', opacity: 0.95}}>
              This course is Semester 4 of the comprehensive MBA++ Chartered Digital Business Leader (CDBL) program.
              Complete all 4 semesters to earn the prestigious CDBL certification.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}