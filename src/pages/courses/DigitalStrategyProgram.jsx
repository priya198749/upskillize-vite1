import React from 'react';

export default function DigitalStrategyProgram() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900">
      <div className="max-w-7xl mx-auto p-5">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-teal-500 text-white p-16 rounded-3xl mb-10 shadow-2xl">
          <h1 className="text-6xl font-bold mb-4 text-center drop-shadow-lg">
            Digital Business Strategy & Innovation
          </h1>
          <h2 className="text-3xl mb-3 text-center font-light">
            40-Hour Executive Program for MBA Leaders
          </h2>
          <div className="text-2xl mb-8 text-center italic opacity-90">
            "Where Strategy Meets Innovation Meets Digital Transformation"
          </div>
          
          <div className="bg-white bg-opacity-15 p-6 rounded-2xl mt-8 backdrop-blur-md">
            <div className="text-4xl font-extrabold mb-3 text-center uppercase tracking-wider">
              UPSKILLIZE
            </div>
            <div className="text-xl font-light mb-5 text-center italic">
              Excel Beyond
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-8">
              {[
                { number: '40', label: 'Hours' },
                { number: '8', label: 'Modules' },
                { number: '32', label: 'Topics' },
                { number: '25+', label: 'Case Studies' },
                { number: '₹12-50L', label: 'Salary Range' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white bg-opacity-20 p-5 rounded-xl backdrop-blur-sm border-2 border-white border-opacity-30">
                  <span className="block text-5xl font-bold mb-1">{stat.number}</span>
                  <span className="block text-base opacity-90">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Four Pillar Framework */}
        <div className="bg-white p-12 rounded-3xl mb-10 shadow-xl">
          <h2 className="text-center text-5xl mb-10 text-purple-700 font-bold">
            🎯 Our 4-Pillar Learning Framework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '1', icon: '🎯', title: 'Strategy Foundation', desc: 'Master strategic thinking, competitive analysis, business models, and strategic decision-making frameworks', gradient: 'from-purple-700 to-purple-600' },
              { num: '2', icon: '💡', title: 'Innovation Mastery', desc: 'Learn design thinking, innovation management, agile methodologies, and lean startup principles', gradient: 'from-teal-500 to-teal-600' },
              { num: '3', icon: '🚀', title: 'Digital Transformation', desc: 'Drive digital strategy, platform business models, data strategy, and digital operating models', gradient: 'from-blue-500 to-blue-600' },
              { num: '4', icon: '💼', title: 'Leadership Excellence', desc: 'Develop strategic leadership, change management, culture building, and executive presence', gradient: 'from-orange-500 to-orange-600' }
            ].map((pillar, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${pillar.gradient} p-8 rounded-2xl text-white text-center relative overflow-hidden hover:-translate-y-3 transition-all duration-300 hover:shadow-2xl`}>
                <div className="absolute top-0 right-5 text-8xl font-extrabold opacity-20">{pillar.num}</div>
                <div className="text-5xl mb-4">{pillar.icon}</div>
                <div className="text-2xl font-bold mb-4">{pillar.title}</div>
                <div className="text-base opacity-90">{pillar.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-white p-12 rounded-3xl mb-10 shadow-xl">
          <h2 className="text-center text-5xl mb-10 text-teal-500 font-bold">
            💎 Why This Program Transforms MBA Careers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏆', title: 'Executive-Level Curriculum', desc: '20 years of Fortune 500 and McKinsey/BCG consulting wisdom condensed into actionable frameworks used by top strategists' },
              { icon: '📊', title: 'Real-World Case Studies', desc: 'Learn from Tesla, Amazon, Netflix, Google, Microsoft, Reliance, Tata, DBS Bank, and Disney transformations' },
              { icon: '🎓', title: 'Practical Application', desc: 'Every module includes hands-on exercises, group discussions, and strategic simulations—not just theory' },
              { icon: '💼', title: 'Career Acceleration', desc: 'Position yourself for strategy consulting, digital transformation, product management, and innovation leadership roles' },
              { icon: '🔄', title: 'Integrated Approach', desc: 'Unique blend of strategy, innovation, digital transformation, and leadership—not taught in silos' },
              { icon: '🌟', title: 'Capstone Project', desc: 'Design a complete digital transformation strategy for a real company—portfolio-ready deliverable' }
            ].map((value, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-l-4 border-purple-700 hover:translate-x-3 transition-all duration-300 hover:shadow-lg">
                <div className="text-5xl mb-4 text-purple-700">{value.icon}</div>
                <div className="text-xl font-bold mb-3 text-gray-800">{value.title}</div>
                <div className="text-gray-600 leading-relaxed">{value.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Modules Section */}
        <div className="mb-10">
          {/* Module 1 */}
          <ModuleCard
            number="MODULE 1 • PILLAR 1: STRATEGY FOUNDATIONS"
            title="Strategic Thinking & Business Foundation"
            duration="⏱️ Duration: 5 Hours | 4 Topics"
            borderColor="border-purple-700"
            topics={[
              {
                title: "Topic 1: Foundations of Business Strategy",
                content: [
                  "Porter's Five Forces framework for industry analysis",
                  "SWOT and PESTEL analysis for strategic planning",
                  "Competitive advantage and sustainable value creation",
                  "Industry analysis and strategic positioning"
                ],
                exercise: "Analyze industry structure for e-commerce sector using Porter's Five Forces",
                caseStudy: "Amazon's strategic evolution from books to \"everything store\" to cloud computing",
                discussion: "\"Is competitive advantage sustainable in the digital age?\""
              },
              {
                title: "Topic 2: Strategic Planning & Execution",
                content: [
                  "Vision, mission, and strategic objectives alignment",
                  "OKRs vs KPIs vs Balanced Scorecard frameworks",
                  "Strategy mapping and organizational cascade",
                  "Execution frameworks and accountability systems"
                ],
                exercise: "Develop a complete strategic plan for a fintech startup",
                caseStudy: "Google's OKR framework and how it drives innovation at scale",
                discussion: "Build OKRs for a fictional retail company entering digital space"
              },
              {
                title: "Topic 3: Business Model Innovation",
                content: [
                  "Business Model Canvas deep dive (9 building blocks)",
                  "Revenue models and dynamic pricing strategies",
                  "Platform vs pipeline business models",
                  "Ecosystem thinking and network effects"
                ],
                exercise: "Design a disruptive business model for traditional banking",
                caseStudy: "Netflix's transformation from DVD rental to streaming to content production",
                discussion: "\"Why do most business model innovations fail to scale?\""
              },
              {
                title: "Topic 4: Strategic Risk Management",
                content: [
                  "Identifying strategic risks vs operational risks",
                  "Risk assessment frameworks and heat maps",
                  "Scenario planning and contingency strategies",
                  "Black swan events and strategic resilience building"
                ],
                exercise: "Build comprehensive risk matrix for international expansion strategy",
                caseStudy: "Nokia's strategic failure—What went wrong and lessons learned",
                discussion: "Scenario planning exercise for uncertain post-pandemic future"
              }
            ]}
          />

          {/* Module 2 */}
          <ModuleCard
            number="MODULE 2 • PILLAR 1: STRATEGY FOUNDATIONS"
            title="Competitive Strategy & Market Analysis"
            duration="⏱️ Duration: 5 Hours | 4 Topics"
            borderColor="border-teal-500"
            bgGradient="from-teal-500 to-teal-600"
            topics={[
              {
                title: "Topic 1: Competitive Analysis & Market Intelligence",
                content: [
                  "Competitor mapping and strategic benchmarking",
                  "Market segmentation and targeting strategies",
                  "Blue Ocean vs Red Ocean strategy frameworks",
                  "Disruptive innovation theory (Christensen)"
                ],
                exercise: "Create competitive positioning map for electric vehicle market",
                caseStudy: "Tesla's blue ocean strategy in automotive industry",
                discussion: "\"When should you avoid competition entirely?\""
              },
              {
                title: "Topic 2: Corporate Strategy & Portfolio Management",
                content: [
                  "Vertical vs horizontal integration strategies",
                  "Diversification strategies (Ansoff Matrix)",
                  "M&A strategy and synergy analysis",
                  "Portfolio optimization (BCG Matrix, GE Matrix)"
                ],
                exercise: "Evaluate potential acquisition target using synergy analysis",
                caseStudy: "Tata Group's diversification strategy across industries",
                discussion: "Build corporate portfolio strategy for conglomerate"
              },
              {
                title: "Topic 3: Global Strategy & Market Entry",
                content: [
                  "International expansion frameworks and evaluation",
                  "Market entry modes (export, JV, acquisition, greenfield)",
                  "Localization vs standardization strategies",
                  "Emerging market strategies and challenges"
                ],
                exercise: "Design market entry plan for Southeast Asian expansion",
                caseStudy: "Walmart's India entry challenges and Flipkart acquisition",
                discussion: "\"Should strategies be global or local in digital age?\""
              },
              {
                title: "Topic 4: Strategic Decision-Making",
                content: [
                  "Data-driven vs intuition-based decision frameworks",
                  "Decision trees and strategic analysis tools",
                  "Strategic trade-offs and prioritization matrices",
                  "Real options thinking for uncertain environments"
                ],
                exercise: "Make strategic go/no-go decision for new product launch",
                caseStudy: "Reed Hastings' strategic decisions at Netflix",
                discussion: "Strategic prioritization exercise using weighted scoring"
              }
            ]}
          />

          {/* Module 3 */}
          <ModuleCard
            number="MODULE 3 • PILLAR 2: INNOVATION MASTERY"
            title="Innovation Strategy & Management"
            duration="⏱️ Duration: 5 Hours | 4 Topics"
            borderColor="border-purple-700"
            topics={[
              {
                title: "Topic 1: Innovation Fundamentals & Types",
                content: [
                  "Incremental vs radical vs disruptive innovation",
                  "Product, process, and business model innovation",
                  "Open innovation and crowdsourcing strategies",
                  "Innovation metrics, KPIs, and ROI measurement"
                ],
                exercise: "Identify innovation opportunities using innovation matrix",
                caseStudy: "Apple's innovation ecosystem and product development",
                discussion: "\"Can innovation be taught, managed, or systematized?\""
              },
              {
                title: "Topic 2: Design Thinking & Customer-Centric Innovation",
                content: [
                  "Design thinking 5-stage process (Empathize, Define, Ideate, Prototype, Test)",
                  "Empathy mapping and customer journey mapping",
                  "Rapid prototyping and iterative testing",
                  "Fail fast, learn fast mindset cultivation"
                ],
                exercise: "Complete full design thinking sprint for customer problem",
                caseStudy: "IDEO's shopping cart redesign project methodology",
                discussion: "Solve real customer problem using design thinking"
              },
              {
                title: "Topic 3: Innovation Labs & Intrapreneurship",
                content: [
                  "Setting up and running corporate innovation labs",
                  "Intrapreneurship vs entrepreneurship dynamics",
                  "Idea management systems and governance",
                  "Innovation culture building in large organizations"
                ],
                exercise: "Design innovation lab structure for large corporation",
                caseStudy: "Google X and moonshot thinking approach",
                discussion: "\"Why do big companies struggle with innovation?\""
              },
              {
                title: "Topic 4: Technology & Emerging Trends",
                content: [
                  "Emerging technologies: AI, Blockchain, IoT, AR/VR, Quantum",
                  "Technology adoption curves and diffusion models",
                  "Tech stack decisions for modern businesses",
                  "Future-proofing strategies and scenario planning"
                ],
                exercise: "Create technology roadmap for retail company",
                caseStudy: "Reliance Jio's technology strategy and disruption",
                discussion: "Evaluate emerging technologies for business application"
              }
            ]}
          />

          {/* Module 4 */}
          <ModuleCard
            number="MODULE 4 • PILLAR 2: INNOVATION MASTERY"
            title="Agile & Innovation Execution"
            duration="⏱️ Duration: 5 Hours | 4 Topics"
            borderColor="border-teal-500"
            bgGradient="from-teal-500 to-teal-600"
            topics={[
              {
                title: "Topic 1: Agile Fundamentals for Business",
                content: [
                  "Agile mindset and principles (beyond software)",
                  "Scrum, Kanban, and Lean methodologies",
                  "Sprints, standups, retrospectives, and ceremonies",
                  "Agile transformation for non-tech functions"
                ],
                exercise: "Run mini Scrum sprint for project planning",
                caseStudy: "Spotify's agile scaling model (squads, tribes, chapters)",
                discussion: "Apply agile principles to marketing campaign"
              },
              {
                title: "Topic 2: Lean Startup & MVP Development",
                content: [
                  "Build-Measure-Learn cycle and feedback loops",
                  "Minimum Viable Product (MVP) design principles",
                  "Pivoting vs persevering decision frameworks",
                  "Validated learning and customer discovery"
                ],
                exercise: "Define MVP for mobile app idea with limited resources",
                caseStudy: "Instagram's pivot from Burbn to photo-sharing success",
                discussion: "\"When should you pivot and when should you persevere?\""
              },
              {
                title: "Topic 3: Innovation Portfolio Management",
                content: [
                  "Horizon 1, 2, 3 framework (McKinsey)",
                  "70-20-10 innovation budget allocation",
                  "Killing projects vs doubling down decisions",
                  "Innovation pipeline management and stage-gates"
                ],
                exercise: "Balance innovation portfolio across three horizons",
                caseStudy: "Amazon's 3-horizon approach to innovation",
                discussion: "Portfolio optimization and resource allocation exercise"
              },
              {
                title: "Topic 4: Measuring Innovation Success",
                content: [
                  "Innovation KPIs and metrics frameworks",
                  "ROI of innovation investments and payback",
                  "Time-to-market metrics and velocity",
                  "Learning velocity and experimentation metrics"
                ],
                exercise: "Design comprehensive innovation scorecard",
                caseStudy: "3M's 15% rule and innovation outcomes",
                discussion: "\"Should failed innovations be celebrated?\""
              }
            ]}
          />

          {/* Module 5 */}
          <ModuleCard
            number="MODULE 5 • PILLAR 3: DIGITAL TRANSFORMATION"
            title="Digital Transformation Strategy"
            duration="⏱️ Duration: 5 Hours | 4 Topics"
            borderColor="border-purple-700"
            topics={[
              {
                title: "Topic 1: Digital Transformation Fundamentals",
                content: [
                  "What is digital transformation (not just digitization)",
                  "Digital maturity models and assessment",
                  "Transformation roadmap and phased approach",
                  "Change management for digital initiatives"
                ],
                exercise: "Assess digital maturity of traditional manufacturing company",
                caseStudy: "DBS Bank's complete digital transformation journey",
                discussion: "\"Why do 70% of digital transformations fail?\""
              },
              {
                title: "Topic 2: Platform Business Models & Ecosystems",
                content: [
                  "Platform economics and network effects",
                  "Two-sided and multi-sided platforms",
                  "Platform governance, rules, and curation",
                  "API economy and partnership strategies"
                ],
                exercise: "Design platform business model for healthcare industry",
                caseStudy: "Uber vs traditional taxi—platform economics analysis",
                discussion: "Platform strategy development for B2B company"
              },
              {
                title: "Topic 3: Data Strategy & Analytics",
                content: [
                  "Data as strategic asset and competitive advantage",
                  "Building data-driven culture and literacy",
                  "Analytics maturity progression (descriptive to prescriptive)",
                  "AI/ML strategy for business applications"
                ],
                exercise: "Develop comprehensive data strategy for retail chain",
                caseStudy: "Netflix's data-driven content creation strategy",
                discussion: "\"How much data collection is too much?\""
              },
              {
                title: "Topic 4: Customer Experience in Digital Age",
                content: [
                  "Omnichannel customer experience design",
                  "Customer data platforms (CDP) and personalization",
                  "Personalization at scale using AI",
                  "Digital CX metrics and measurement"
                ],
                exercise: "Map complete digital customer journey",
                caseStudy: "Disney's MagicBand and seamless experience",
                discussion: "Design omnichannel strategy for bank"
              }
            ]}
          />

          {/* Module 6 */}
          <ModuleCard
            number="MODULE 6 • PILLAR 3: DIGITAL TRANSFORMATION"
            title="Digital Operating Models"
            duration="⏱️ Duration: 5 Hours | 4 Topics"
            borderColor="border-teal-500"
            bgGradient="from-teal-500 to-teal-600"
            topics={[
              {
                title: "Topic 1: Agile Organizations & Ways of Working",
                content: [
                  "Traditional hierarchical vs agile organizations",
                  "Cross-functional teams, squads, and tribes",
                  "Remote and hybrid work models",
                  "Organizational design for speed and innovation"
                ],
                exercise: "Redesign organizational structure for agility",
                caseStudy: "ING Bank's complete agile transformation",
                discussion: "\"Is traditional hierarchy dead in digital age?\""
              },
              {
                title: "Topic 2: Digital Products & Product Management",
                content: [
                  "Product thinking vs project thinking mindset",
                  "Product lifecycle management frameworks",
                  "Product roadmapping and feature prioritization",
                  "Product-led growth strategies and PLG metrics"
                ],
                exercise: "Create quarterly product roadmap with priorities",
                caseStudy: "Slack's product-led growth success story",
                discussion: "Prioritize features using RICE scoring framework"
              },
              {
                title: "Topic 3: Technology Architecture & Cloud Strategy",
                content: [
                  "Monolithic vs microservices architecture",
                  "Cloud migration strategies (lift-shift, re-platform, refactor)",
                  "Legacy system modernization approaches",
                  "Technology debt management and reduction"
                ],
                exercise: "Develop cloud migration strategy for enterprise",
                caseStudy: "Netflix's migration to AWS and microservices",
                discussion: "\"Build vs buy vs partner—how to decide?\""
              },
              {
                title: "Topic 4: Digital Security & Risk",
                content: [
                  "Cybersecurity in digital business context",
                  "Data privacy regulations (GDPR, CCPA) compliance",
                  "Digital operational resilience and continuity",
                  "Crisis management in digital age"
                ],
                exercise: "Conduct comprehensive digital risk assessment",
                caseStudy: "Target data breach—lessons learned and recovery",
                discussion: "Develop digital security strategy and governance"
              }
            ]}
          />

          {/* Module 7 */}
          <ModuleCard
            number="MODULE 7 • PILLAR 4: LEADERSHIP EXCELLENCE"
            title="Strategic Leadership & Change Management"
            duration="⏱️ Duration: 5 Hours | 4 Topics"
            borderColor="border-purple-700"
            topics={[
              {
                title: "Topic 1: Leadership in Digital Age",
                content: [
                  "Traditional command-control vs digital leadership",
                  "Leading through uncertainty and ambiguity",
                  "Vision setting and inspirational communication",
                  "Building and leading high-performing teams"
                ],
                exercise: "Craft compelling vision statement for transformation",
                caseStudy: "Satya Nadella's Microsoft cultural transformation",
                discussion: "\"What makes a great digital leader different?\""
              },
              {
                title: "Topic 2: Change Management & Transformation",
                content: [
                  "Kotter's 8-step change model in practice",
                  "Overcoming resistance to change strategies",
                  "Change communication and storytelling",
                  "Transformation governance and steering"
                ],
                exercise: "Design comprehensive change management plan",
                caseStudy: "Adobe's shift from perpetual licenses to subscription model",
                discussion: "Stakeholder engagement and communication strategy"
              },
              {
                title: "Topic 3: Culture & Innovation Mindset",
                content: [
                  "Building innovation and experimentation culture",
                  "Psychological safety and learning from failure",
                  "Diversity and inclusion as innovation drivers",
                  "Creating learning organizations (Peter Senge)"
                ],
                exercise: "Assess and redesign organizational culture",
                caseStudy: "Pixar's creative culture and innovation practices",
                discussion: "\"Can organizational culture be engineered?\""
              },
              {
                title: "Topic 4: Strategic Communication & Stakeholder Management",
                content: [
                  "Executive presence and influence without authority",
                  "Board-level strategic presentations",
                  "Managing diverse stakeholder expectations",
                  "Crisis communication and reputation management"
                ],
                exercise: "Present strategy to mock board of directors",
                caseStudy: "Elon Musk's communication style—effectiveness and risks",
                discussion: "Stakeholder mapping and engagement planning"
              }
            ]}
          />

          {/* Module 8 */}
          <ModuleCard
            number="MODULE 8 • PILLAR 4: LEADERSHIP EXCELLENCE"
            title="Strategic Project & Capstone"
            duration="⏱️ Duration: 5 Hours | 4 Topics + Major Project"
            borderColor="border-teal-500"
            bgGradient="from-teal-500 to-teal-600"
            topics={[
              {
                title: "Topic 1: Project Management for Strategic Initiatives",
                content: [
                  "Waterfall vs Agile project management for strategy",
                  "Strategic project governance structures",
                  "Resource allocation and budget management",
                  "Managing strategic project portfolios"
                ],
                exercise: "Create detailed project charter for transformation",
                caseStudy: "Sydney Opera House—famous project failure analysis",
                discussion: "\"Why do strategic projects fail more than tactical ones?\""
              },
              {
                title: "Topic 2: Consulting Skills & Frameworks",
                content: [
                  "Problem-solving frameworks (issue trees, hypothesis-driven)",
                  "Client management and expectation setting",
                  "Executive presentation skills and storytelling",
                  "Consulting career paths and progression"
                ],
                exercise: "Solve business case study McKinsey-style",
                caseStudy: "BCG's approach to strategy consulting",
                discussion: "Consulting-style presentation to executives"
              },
              {
                title: "Topic 3: Strategic Career Planning",
                content: [
                  "Strategy careers: Consulting, Corporate Strategy, Product Management",
                  "Building personal brand as strategic leader",
                  "Interview preparation for strategy roles",
                  "Salary negotiation strategies for strategic positions"
                ],
                exercise: "Build comprehensive 5-year career strategy",
                caseStudy: "Career paths of successful strategists and CDOs",
                discussion: "Case interviews for strategy consulting"
              },
              {
                title: "Topic 4: Capstone Project - Digital Transformation Strategy",
                content: [
                  "Choose: Real company for digital transformation strategy",
                  "Strategic Analysis: SWOT, Porter's Five Forces, PESTEL, competitive positioning",
                  "Innovation Roadmap: Horizon 1-2-3 initiatives and innovation portfolio",
                  "Digital Transformation Blueprint: Technology, process, culture changes",
                  "Change Management Plan: Stakeholder engagement, communication, governance",
                  "Financial Projections: Investment required, ROI analysis, payback period",
                  "Executive Presentation: 20-minute board-level presentation"
                ],
                exercise: "Present to panel of faculty + industry experts with Q&A",
                caseStudy: "Deliverables: 30-page document, Executive summary, PowerPoint, Financial model, Roadmap",
                discussion: "Learn from other teams' transformation plans and provide feedback",
                isCapstone: true
              }
            ]}
          />
        </div>

        {/* Assessment Section */}
        <div className="bg-gradient-to-br from-purple-700 to-purple-600 text-white p-12 rounded-3xl mb-10 shadow-2xl">
          <h2 className="text-center text-5xl mb-10 font-bold">📊 Assessment & Certification Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-15 p-8 rounded-2xl backdrop-blur-md border-2 border-white border-opacity-30">
              <h3 className="text-2xl font-bold mb-4">📝 Continuous Assessment (70%)</h3>
              <ul className="space-y-3 ml-5 list-disc">
                <li><strong>Module Assignments:</strong> Strategic analysis exercises (20%)</li>
                <li><strong>Case Study Solutions:</strong> Written analyses of real companies (20%)</li>
                <li><strong>Group Discussions:</strong> Participation and insights (10%)</li>
                <li><strong>Mini Projects:</strong> Module-level deliverables (20%)</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-15 p-8 rounded-2xl backdrop-blur-md border-2 border-white border-opacity-30">
              <h3 className="text-2xl font-bold mb-4">🎯 Final Capstone Project (30%)</h3>
              <ul className="space-y-3 ml-5 list-disc">
                <li><strong>Strategic Document:</strong> Comprehensive transformation plan (10%)</li>
                <li><strong>Executive Presentation:</strong> Board-level pitch (10%)</li>
                <li><strong>Financial Analysis:</strong> ROI and investment justification (5%)</li>
                <li><strong>Peer & Faculty Review:</strong> Quality and feasibility (5%)</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8 text-xl">
            <strong>🏆 Certification:</strong> Executive Certificate in Digital Business Strategy & Innovation<br />
            <em className="text-lg">Minimum 60% overall score required | Portfolio-ready capstone project</em>
          </div>
        </div>

        {/* Career Outcomes */}
        <div className="bg-white p-12 rounded-3xl mb-10 shadow-xl">
          <h2 className="text-center text-5xl mb-10 text-blue-600 font-bold">💼 Career Outcomes & Salary Expectations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Strategy & Consulting',
                level: 'Entry Level (1-3 years)',
                color: 'border-purple-700',
                roles: [
                  { title: 'Strategy Analyst', salary: '₹12-20 LPA' },
                  { title: 'Management Consultant', salary: '₹15-30 LPA' },
                  { title: 'Business Analyst - Strategy', salary: '₹10-18 LPA' }
                ]
              },
              {
                title: 'Digital & Innovation',
                level: 'Mid Level (2-5 years)',
                color: 'border-teal-500',
                roles: [
                  { title: 'Digital Transformation Manager', salary: '₹18-35 LPA' },
                  { title: 'Innovation Manager', salary: '₹15-28 LPA' },
                  { title: 'Product Manager', salary: '₹20-40 LPA' },
                  { title: 'Growth Manager', salary: '₹18-32 LPA' }
                ]
              },
              {
                title: 'Leadership Roles',
                level: 'Senior Level (5+ years)',
                color: 'border-blue-600',
                roles: [
                  { title: 'Head of Strategy', salary: '₹30-50 LPA' },
                  { title: 'Chief Digital Officer (CDO)', salary: '₹40-80 LPA' },
                  { title: 'VP Product', salary: '₹35-60 LPA' },
                  { title: 'Strategy Director', salary: '₹35-55 LPA' }
                ]
              },
              {
                title: 'Entrepreneurship',
                level: 'Independent / Founder',
                color: 'border-orange-500',
                roles: [
                  { title: 'Startup Founder / Co-Founder', salary: 'Variable: ₹0-10Cr+' },
                  { title: 'Independent Strategy Consultant', salary: '₹5K-15K per day' },
                  { title: 'Innovation Advisor / Fractional CDO', salary: '₹2L-10L per month' }
                ]
              }
            ].map((category, idx) => (
              <div key={idx} className={`bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-t-4 ${category.color}`}>
                <h3 className="text-2xl mb-2 text-gray-800 font-bold">{category.title}</h3>
                <div className="text-sm text-gray-600 mb-5 font-semibold">{category.level}</div>
                {category.roles.map((role, roleIdx) => (
                  <div key={roleIdx} className="bg-white p-4 rounded-lg mb-4 shadow-sm">
                    <div className="font-bold text-gray-800 mb-1">{role.title}</div>
                    <div className="text-purple-700 font-bold text-lg">{role.salary}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Placement Assistance */}
        <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-12 rounded-3xl mb-10 shadow-2xl">
          <h2 className="text-center text-5xl mb-5 font-bold">🎯 Placement Assistance Program</h2>
          <div className="text-center text-xl mb-10 font-semibold bg-white bg-opacity-20 p-4 rounded-xl">
            ⚠️ PLACEMENT ASSISTANCE - NOT GUARANTEE
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: '📄 Resume & Profile Building',
                items: [
                  'Strategic resume templates for consulting & product roles',
                  'LinkedIn profile optimization for strategy professionals',
                  'Portfolio building with capstone project',
                  'Personal branding for strategists',
                  'GitHub/portfolio website setup'
                ]
              },
              {
                title: '🎤 Interview Preparation',
                items: [
                  'Case interview prep (McKinsey, BCG, Bain style)',
                  'Product management interview frameworks',
                  'Behavioral interview preparation (STAR method)',
                  'Executive presence and communication',
                  'Salary negotiation strategies',
                  'Mock interviews with industry experts'
                ]
              },
              {
                title: '🤝 Industry Connections',
                items: [
                  '50+ partner companies (Consulting, Tech, BFSI)',
                  'Direct referrals to hiring managers',
                  'Guest lectures from industry leaders',
                  'Alumni network of strategists and consultants',
                  'Strategy community access'
                ]
              },
              {
                title: '📈 Career Support',
                items: [
                  '6-month post-course job search support',
                  'Job opening alerts for strategy roles',
                  'Application review and optimization',
                  'Career counseling and mentorship',
                  'Transition support (consulting, product, digital transformation)'
                ]
              },
              {
                title: '🏢 Target Companies',
                items: [
                  'Consulting: McKinsey, BCG, Bain, Deloitte, EY, PwC',
                  'Tech: Amazon, Google, Microsoft, Meta, Adobe',
                  'BFSI: HDFC, ICICI, Axis, JPMorgan, Goldman Sachs',
                  'Startups: Razorpay, Swiggy, Zomato, CRED, Paytm',
                  'Corporates: Tata, Reliance, Mahindra, Aditya Birla'
                ]
              },
              {
                title: '🎓 Learning Resources',
                items: [
                  'Lifetime access to course materials',
                  'Strategy frameworks library (100+ frameworks)',
                  'Case study database (200+ cases)',
                  'Industry reports and whitepapers',
                  'Updates on new methodologies and trends',
                  'Quarterly alumni webinars'
                ]
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-white bg-opacity-15 p-6 rounded-2xl backdrop-blur-md border-2 border-white border-opacity-30">
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <ul className="space-y-2 ml-5 list-disc text-sm">
                  {card.items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-12 rounded-3xl text-center shadow-2xl">
          <h2 className="text-5xl mb-8 font-bold">📞 Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8">
            Join India's most comprehensive Digital Business Strategy & Innovation program<br />
            Build the skills that McKinsey, BCG, and tech giants demand
          </p>
          
          <a href="mailto:gupta1070@gmail.com" className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white py-5 px-10 rounded-full font-bold text-xl mt-8 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Enroll Now - Transform Your Career
          </a>
          
          <p className="mt-10 text-lg opacity-90">
            <strong>UPSKILLIZE</strong> - Excel Beyond<br />
            <em>Where MBA Talent Meets Strategic Leadership</em>
          </p>
        </div>
      </div>
    </div>
  );
}

// Module Card Component
function ModuleCard({ number, title, duration, borderColor, bgGradient = 'from-purple-700 to-purple-600', topics }) {
  return (
    <div className={`bg-white p-10 rounded-3xl mb-8 shadow-xl border-t-8 ${borderColor}`}>
      <div className="mb-8">
        <span className={`inline-block bg-gradient-to-r ${bgGradient} text-white py-2 px-5 rounded-full font-bold text-sm mb-4`}>
          {number}
        </span>
        <h2 className="text-4xl text-gray-800 mb-3 font-bold">{title}</h2>
        <p className="text-gray-600 text-lg font-medium">{duration}</p>
      </div>
      
      <div className="space-y-6">
        {topics.map((topic, idx) => (
          <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-l-4 border-purple-700 hover:translate-x-2 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-2xl text-gray-800 mb-4 font-bold">{topic.title}</h3>
            <div className="text-gray-600 mb-4">
              {topic.isCapstone ? (
                <div>
                  <strong className="text-purple-700 text-lg">🎯 MAJOR INTEGRATED PROJECT - Everything You've Learned</strong>
                  <ul className="ml-5 mt-3 space-y-1 list-disc">
                    {topic.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <ul className="ml-5 space-y-1 list-disc">
                  {topic.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
            {topic.exercise && (
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-3 rounded-lg mt-3 border-l-4 border-teal-500">
                <strong className="text-teal-700">🎯 Exercise:</strong> {topic.exercise}
              </div>
            )}
            {topic.caseStudy && (
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-3 rounded-lg mt-3 border-l-4 border-orange-500">
                <strong className="text-orange-700">📚 {topic.isCapstone ? 'Deliverables' : 'Case Study'}:</strong> {topic.caseStudy}
              </div>
            )}
            {topic.discussion && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg mt-3 border-l-4 border-blue-500 italic">
                <strong className="text-blue-700">💬 {topic.isCapstone ? 'Peer Review' : 'Discussion'}:</strong> {topic.discussion}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}