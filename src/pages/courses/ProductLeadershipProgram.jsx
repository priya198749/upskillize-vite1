import React, { useEffect } from 'react';

export default function ProductLeadershipProgram() {
  const careerLevels = [
    {
      icon: '🎯',
      title: 'Associate Product Manager',
      years: '0-2',
      salary: '₹6-12 LPA',
      focus: 'Learning & Execution',
      color: '#1E3A5F'
    },
    {
      icon: '📊',
      title: 'Product Manager',
      years: '2-5',
      salary: '₹12-25 LPA',
      focus: 'Feature Ownership',
      color: '#FF6B35'
    },
    {
      icon: '🚀',
      title: 'Senior Product Manager',
      years: '5-8',
      salary: '₹25-45 LPA',
      focus: 'Product Strategy',
      color: '#F7B731'
    },
    {
      icon: '👑',
      title: 'Lead Product Manager',
      years: '8-12',
      salary: '₹45-70 LPA',
      focus: 'Team Leadership',
      color: '#F7B731'
    },
    {
      icon: '💼',
      title: 'Director of Product',
      years: '12-15',
      salary: '₹70-1.2 Cr',
      focus: 'Portfolio Management',
      color: '#006B7D'
    },
    {
      icon: '🌟',
      title: 'VP of Product',
      years: '15-20',
      salary: '₹1.2-2 Cr',
      focus: 'Strategic Vision',
      color: '#006B7D'
    },
    {
      icon: '👨‍💼',
      title: 'Chief Product Officer',
      years: '20+',
      salary: '₹2+ Cr',
      focus: 'Business Impact',
      color: '#FF6B35'
    }
  ];

  const funFacts = [
    {
      icon: '🎭',
      title: 'You\'re the "CEO of the Product"',
      pills: ['Strategy', 'Vision', 'Execution'],
      description: 'Everyone calls you a mini-CEO, but unlike real CEOs, you can\'t hire or fire anyone. You influence without authority - like being a parent to teenagers who won\'t listen! You set the vision, make tough calls, and somehow convince engineering that yes, this feature IS worth building.',
      highlight: '💡 Reality Check: You pitch like a CEO, negotiate like a diplomat, and code... well, you used to code.',
      color: '#FF6B35'
    },
    {
      icon: '🎪',
      title: 'Master Juggler of Chaos',
      pills: ['Stakeholders', 'Priorities', 'Deadlines'],
      description: 'Your day: Sales wants a demo feature by Friday. Engineering says it\'ll take 3 sprints. Design wants to "explore the problem space." Marketing needs the messaging yesterday. And the CEO just asked "why can\'t we be like [insert competitor]?" Meanwhile, you\'re smiling and saying "Let me prioritize that in the roadmap!"',
      highlight: '😅 Truth Bomb: You spend 50% of your time saying "no" nicely and 50% wondering if you should have said "yes"',
      color: '#F7B731'
    },
    {
      icon: '🔮',
      title: 'Professional Fortune Teller',
      pills: ['User Research', 'Data Analysis', 'Market Trends'],
      description: 'Based on 47 user interviews, 12 A/B tests, competitor analysis, and a hunch from that one user feedback, you must predict: Will users want this? Will it drive revenue? Will engineering build it without crying? You\'re essentially reading tea leaves, but with spreadsheets and Figma prototypes.',
      highlight: '🎯 Plot Twist: Sometimes the CEO\'s "gut feeling" overrides your 3-month research study',
      color: '#1E3A5F'
    },
    {
      icon: '🗣️',
      title: 'Professional Translator',
      pills: ['Tech', 'Business', 'Design'],
      description: 'Engineering: "We need to refactor the API architecture for scalability."\nYou to Business: "This will make the app faster."\nBusiness: "Can we monetize dark mode?"\nYou to Engineering: "They want to know if we can add premium themes."\nDesign: "The user flow needs more delight moments."\nYou to everyone: "Let\'s add some animations!"',
      highlight: '🎓 Skill Unlocked: Speaking 5 languages - Tech, Business, Design, Executive, and Sarcasm',
      color: '#006B7D'
    },
    {
      icon: '🎬',
      title: 'Director of Never-Ending Movies',
      pills: ['Roadmap', 'Iterations', 'Pivots'],
      description: 'You plan a beautiful 6-month roadmap. Month 2: competitors launch your feature. Month 3: CEO discovers a "game-changing opportunity." Month 4: your star engineer quits. Month 5: users want the exact opposite of what you built. Month 6: "Let\'s pivot!" Your roadmap is more of a suggestion than a plan.',
      highlight: '🎬 Director\'s Cut: The feature you killed? It\'s back. The feature you loved? Also killed. Welcome to product!',
      color: '#F7B731'
    },
    {
      icon: '🤝',
      title: 'Professional Meeting Attender',
      pills: ['Daily Standups', 'Planning', 'Reviews', 'Retros'],
      description: 'Your calendar is a Tetris game of meetings: Sprint planning, backlog grooming, design review, stakeholder sync, user interview, leadership update, customer call, engineering 1:1s, cross-functional alignment, strategy session. You\'re basically a professional meeting attendee who occasionally builds products.',
      highlight: '⏰ Fun Fact: You have 3 calendars and none of them have free time. "Working hours" are 7 PM - 10 PM',
      color: '#006B7D'
    },
    {
      icon: '🎨',
      title: 'The Ultimate Swiss Army Knife',
      pills: ['Strategy', 'Analytics', 'Design', 'Tech', 'Business'],
      description: 'Monday: Writing SQL queries for user analysis\nTuesday: Mocking up screens in Figma\nWednesday: Building financial models\nThursday: Debugging with engineers\nFriday: Presenting strategy to leadership\nWeekend: Reading about AI, blockchain, and "the next big thing"\n\nYou\'re not an expert in anything, but you know enough about everything to be dangerous!',
      highlight: '🦸 Superpower: You can talk about APIs, CAC, NPS, and UX in the same sentence and actually make sense',
      color: '#FF6B35'
    },
    {
      icon: '💔',
      title: 'Professional Dream Killer',
      pills: ['Scope', 'Resources', 'Reality'],
      description: 'Designer: "I have this AMAZING idea—"\nYou: "How long will it take to build?"\nEngineer: "Can we add this cool feature—"\nYou: "Does it solve a user problem?"\nExecutive: "Why don\'t we just—"\nYou: "Let me check if that\'s in our Q3 priorities."\n\nYou\'re not mean, you\'re just protecting everyone from building the wrong things. But they still think you\'re the fun police.',
      highlight: '😢 Harsh Truth: You kill more ideas than you ship. And that\'s actually your job done right.',
      color: '#FF6B35'
    }
  ];

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

      {/* Career Progression */}
      <section style={{background: 'linear-gradient(135deg, #E6F7F9 0%, #F4F6F8 100%)', padding: '80px 20px'}}>
        <div style={{maxWidth: 1400, margin: '0 auto', background: 'white', padding: 50, borderRadius: 20, boxShadow: '0 20px 60px rgba(102,126,234,0.15)'}}>
          <div style={{textAlign: 'center', marginBottom: 60}}>
            <div style={{display: 'inline-block', background: 'linear-gradient(135deg, #006B7D 0%, #1E3A5F 100%)', color: 'white', padding: '8px 24px', borderRadius: 25, fontSize: 12, fontWeight: 'bold', letterSpacing: 1, marginBottom: 20, boxShadow: '0 4px 15px rgba(79,70,229,0.3)'}}>FULFILLING, CHALLENGING & REWARDING</div>
            <h1 style={{fontSize: '3rem', background: 'linear-gradient(135deg, #006B7D 0%, #1E3A5F 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 10, fontWeight: 800}}>Product Management Career Progression Path</h1>
            <h2 style={{fontSize: '1.8rem', color: '#1E3A5F', fontWeight: 600}}>From Associate PM to C-Suite Leadership in 20+ Years</h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 30, marginBottom: 60}}>
            {careerLevels.map((l, i) => (
              <div key={i} style={{textAlign: 'center', padding: '30px 20px', background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)', borderRadius: 20, border: `3px solid ${l.color}`, minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div>
                  <div style={{fontSize: '4rem', marginBottom: 15}}>{l.icon}</div>
                  <div style={{fontSize: '1rem', fontWeight: 'bold', color: '#1E3A5F', marginBottom: 20, lineHeight: 1.3, minHeight: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 10px'}}>{l.title}</div>
                </div>
                <div>
                  <div style={{background: 'linear-gradient(135deg, #006B7D 0%, #1E3A5F 100%)', color: 'white', padding: '14px 20px', borderRadius: 10, fontWeight: 'bold', fontSize: '1.3rem', margin: '15px auto 10px', maxWidth: '140px', minWidth: '110px', whiteSpace: 'nowrap'}}>{l.years}</div>
                  <div style={{fontSize: '0.8rem', color: '#64748B', fontWeight: 600, marginBottom: 15}}>Years</div>
                  <div style={{fontSize: '1.1rem', fontWeight: 'bold', color: '#006B7D', margin: '12px 0 8px'}}>{l.salary}</div>
                  <div style={{fontSize: '0.85rem', color: '#718096', lineHeight: 1.4, padding: '0 5px'}}>{l.focus}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20}}>
            {[{n: '3-7', l: 'Years per level', s: 'Early career growth'}, {n: '3-5x', l: 'Salary growth', s: 'APM to Senior PM'}, {n: '15+', l: 'Leadership years', s: 'To executive level'}, {n: '20+', l: 'C-Suite impact', s: 'Strategic influence'}].map((c, i) => (
              <div key={i} style={{background: 'linear-gradient(135deg, #E6F7F9 0%, #F4F6F8 100%)', padding: 25, borderRadius: 12, textAlign: 'center', border: '2px solid #E0E7FF'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', background: 'linear-gradient(135deg, #006B7D 0%, #1E3A5F 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 10}}>{c.n}</div>
                <div style={{fontSize: '1rem', color: '#1E3A5F', fontWeight: 600, marginBottom: 5}}>{c.l}</div>
                <div style={{fontSize: '0.85rem', color: '#718096'}}>{c.s}</div>
              </div>
            ))}
          </div>

          <div style={{marginTop: 40, background: 'linear-gradient(135deg, #006B7D 0%, #1E3A5F 100%)', padding: 40, borderRadius: 15, color: 'white'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 30, flexWrap: 'wrap'}}>
              <div style={{width: 80, height: 80, background: 'rgba(255,255,255,0.2)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', flexShrink: 0}}>⚡</div>
              <div style={{flex: 1}}>
                <h3 style={{fontSize: '1.8rem', marginBottom: 15}}>Accelerate Your PM Career with Upskillize</h3>
                <p style={{fontSize: '1rem', lineHeight: 1.6, opacity: 0.95, marginBottom: 10}}>Our industry-aligned programs equip you with the skills, portfolio, and mentorship needed to fast-track your journey from APM to leadership roles.</p>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 20}}>
                  {['✓ 70% Hands-on Learning', '✓ Real-world Portfolio', '✓ Industry Mentors', '✓ Career Support'].map((b, i) => (
                    <div key={i} style={{background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: 8, fontSize: '0.85rem', fontWeight: 600}}>{b}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section style={{background: 'linear-gradient(135deg, #E6F7F9 0%, #F4F6F8 100%)', padding: '80px 20px'}}>
        <div style={{maxWidth: 1200, margin: '0 auto', background: 'white', padding: '60px 50px', borderRadius: 25, boxShadow: '0 20px 60px rgba(79,70,229,0.15)'}}>
          <div style={{textAlign: 'center', marginBottom: 50}}>
            <div style={{display: 'inline-block', background: 'linear-gradient(135deg, #FBBF24 0%, #F7B731 100%)', color: 'white', padding: '10px 30px', borderRadius: 30, fontSize: 14, fontWeight: 'bold', letterSpacing: 1.5, marginBottom: 20, boxShadow: '0 4px 15px rgba(251,191,36,0.4)'}}>✨ FUN FACTS ✨</div>
            <h1 style={{fontSize: '3.5rem', background: 'linear-gradient(135deg, #006B7D 0%, #1E3A5F 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 15, fontWeight: 900}}>The PM Life</h1>
            <p style={{fontSize: '1.1rem', color: '#64748B', fontStyle: 'italic'}}>What They Don't Tell You in Job Descriptions 😄</p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: 30, marginBottom: 40}}>
            {funFacts.map((f, i) => (
              <div key={i} style={{background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)', borderRadius: 20, padding: 35, border: `3px solid ${f.color}`}}>
                <div style={{width: 80, height: 80, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, fontSize: 40, background: `linear-gradient(135deg, ${f.color} 0%, ${f.color}dd 100%)`, boxShadow: '0 8px 20px rgba(0,0,0,0.1)'}}>{f.icon}</div>
                <div style={{fontSize: '1.3rem', fontWeight: 'bold', color: '#1E3A5F', marginBottom: 15, lineHeight: 1.3}}>{f.title}</div>
                {f.pills && (
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 15}}>
                    {f.pills.map((p, j) => (
                      <span key={j} style={{background: 'white', color: '#1E3A5F', padding: '6px 14px', borderRadius: 20, fontSize: '0.75rem', fontWeight: 600, border: '2px solid #E9D5FF'}}>{p}</span>
                    ))}
                  </div>
                )}
                <div style={{fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: 15, whiteSpace: 'pre-line'}}>{f.description}</div>
                <div style={{background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)', padding: '12px 15px', borderRadius: 10, fontSize: '0.9rem', color: '#92400E', fontWeight: 600, fontStyle: 'italic', borderLeft: '4px solid #F7B731'}}>{f.highlight}</div>
              </div>
            ))}
          </div>

          <div style={{background: 'linear-gradient(135deg, #006B7D 0%, #1E3A5F 100%)', padding: 40, borderRadius: 20, textAlign: 'center', color: 'white'}}>
            <h3 style={{fontSize: '2rem', marginBottom: 15}}>Ready to Start Your PM Journey?</h3>
            <p style={{fontSize: '1rem', lineHeight: 1.6, maxWidth: 800, margin: '0 auto 25px', opacity: 0.95}}>Upskillize's Product Management programs are designed to give you real-world experience across all these areas. Learn from industry veterans, build a portfolio, and master the art of saying the right "yes" (and "no")!</p>
            <div style={{display: 'flex', justifyContent: 'center', gap: 15, flexWrap: 'wrap'}}>
              {['🎯 Real Product Scenarios', '💼 Build Your Portfolio', '🧠 Industry Mentorship', '🚀 Career Support'].map((b, i) => (
                <div key={i} style={{background: 'rgba(255,255,255,0.2)', padding: '10px 20px', borderRadius: 25, fontSize: '0.9rem', fontWeight: 600, backdropFilter: 'blur(10px)', border: '2px solid rgba(255,255,255,0.3)'}}>{b}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{background: '#FF6B35', color: '#FFF', padding: '80px 20px', textAlign: 'center'}}>
        <div style={{maxWidth: 1200, margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', marginBottom: 20}}>Ready to Build Products That Matter?</h2>
          <p style={{fontSize: '1.3rem', marginBottom: 20}}>Master the complete PM journey from user research to product launch</p>
          <p style={{fontSize: '1.1rem', opacity: 0.95}}>Graduate with 16 portfolio deliverables that get you hired at ₹18-22 LPA</p>
          
          <a href="mailto:ramesh@upskillize.com" style={{background: '#FFF', color: '#FF6B35', padding: '18px 40px', borderRadius: 30, fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', display: 'inline-block', marginTop: 30, cursor: 'pointer'}}>Start Your PM Journey</a>
          
          <div style={{marginTop: 50, padding: 30, background: 'rgba(255,255,255,0.1)', borderRadius: 20}}>
            <h3 style={{fontSize: '1.5rem', marginBottom: 20}}>Part of MBA++ Program - Semester 4</h3>
            <p style={{fontSize: '1.1rem', opacity: 0.95}}>This course is Semester 4 of the comprehensive MBA++ Chartered Digital Business Leader (CDBL) program. Complete all 4 semesters to earn the prestigious CDBL certification.</p>
          </div>
        </div>
      </section>
    </div>
  );
}