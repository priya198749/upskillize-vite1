import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Shield,
  AlertTriangle,
  FileSearch,
  Users,
  Clock,
  Award,
  Target,
  Briefcase,
  TrendingUp,
  Lock,
  Database,
  Search,
  BarChart3,
  Settings,
  Eye,
  FileText,
  Globe,
  Zap,
  Activity,
  Server,
  Bell,
  XCircle,
  CheckSquare,
  Layers,
  BookOpen,
  Download,
  Upload,
  RefreshCw,
  AlertCircle,
  Mail
} from 'lucide-react';

export default function VendorRiskProductTool() {
  const [activeProcess, setActiveProcess] = useState(0);
  const [selectedRisk, setSelectedRisk] = useState(0);

  const vendorRiskProcess = [
    {
      phase: "Vendor Identification & Onboarding",
      icon: <Users className="w-8 h-8" />,
      duration: "Day 1-3",
      description: "Initial vendor discovery and registration",
      activities: [
        "Automated vendor data collection and validation",
        "Risk tier classification (Critical/High/Medium/Low)",
        "Initial risk assessment questionnaire distribution",
        "Background checks and financial health analysis",
        "Regulatory and compliance status verification"
      ],
      automations: [
        "Auto-populate vendor data from public databases",
        "AI-driven risk tier assignment",
        "Automated email workflows for questionnaires"
      ]
    },
    {
      phase: "Due Diligence & Assessment",
      icon: <FileSearch className="w-8 h-8" />,
      duration: "Week 1-2",
      description: "Comprehensive risk evaluation",
      activities: [
        "Detailed due diligence questionnaire (DDQ) completion",
        "Security and compliance documentation review",
        "Financial stability and credit risk assessment",
        "Operational risk evaluation (SLAs, BCP/DR plans)",
        "Third-party audit report analysis (SOC 2, ISO 27001)"
      ],
      automations: [
        "Intelligent questionnaire routing",
        "Automated scoring based on responses",
        "Red flag detection and alerts"
      ]
    },
    {
      phase: "Risk Scoring & Analysis",
      icon: <BarChart3 className="w-8 h-8" />,
      duration: "Week 2-3",
      description: "Quantitative and qualitative risk evaluation",
      activities: [
        "Multi-dimensional risk scoring (Cyber, Financial, Operational)",
        "Inherent vs Residual risk calculation",
        "Risk heat map generation",
        "Comparative vendor benchmarking",
        "Gap analysis and remediation planning"
      ],
      automations: [
        "AI-powered risk scoring algorithms",
        "Real-time risk dashboard updates",
        "Automated heat map generation"
      ]
    },
    {
      phase: "Contract & SLA Management",
      icon: <FileText className="w-8 h-8" />,
      duration: "Week 3-4",
      description: "Legal and compliance documentation",
      activities: [
        "Data Processing Agreement (DPA) review",
        "Service Level Agreement (SLA) definition",
        "Insurance and liability coverage verification",
        "Right to audit clause inclusion",
        "Contract expiry tracking and renewals"
      ],
      automations: [
        "Contract clause extraction and analysis",
        "Automated renewal notifications",
        "SLA compliance tracking"
      ]
    },
    {
      phase: "Continuous Monitoring",
      icon: <Eye className="w-8 h-8" />,
      duration: "Ongoing",
      description: "Real-time vendor performance tracking",
      activities: [
        "Key Risk Indicators (KRI) monitoring",
        "News and media screening for vendor incidents",
        "Financial health monitoring (credit ratings)",
        "Security posture assessment (BitSight, SecurityScorecard)",
        "Regulatory compliance status tracking"
      ],
      automations: [
        "Real-time threat intelligence integration",
        "Automated alerts for risk threshold breaches",
        "Scheduled reassessment workflows"
      ]
    },
    {
      phase: "Reporting & Governance",
      icon: <Settings className="w-8 h-8" />,
      duration: "Monthly/Quarterly",
      description: "Executive oversight and compliance",
      activities: [
        "Executive dashboard and KPI reporting",
        "Board-level vendor risk reporting",
        "Regulatory audit preparation and documentation",
        "Vendor scorecard generation",
        "Action item tracking and remediation status"
      ],
      automations: [
        "Automated report generation",
        "Scheduled stakeholder notifications",
        "Compliance documentation export"
      ]
    }
  ];

  const keyRisks = [
    {
      category: "Cybersecurity Risks",
      icon: <Lock className="w-6 h-6" />,
      severity: "Critical",
      color: "red",
      risks: [
        "Data breaches exposing sensitive customer information",
        "Inadequate access controls and authentication",
        "Lack of encryption for data in transit and at rest",
        "Unpatched vulnerabilities and outdated systems",
        "Insufficient incident response capabilities"
      ],
      impact: "Direct financial loss, regulatory penalties, reputation damage"
    },
    {
      category: "Compliance & Regulatory Risks",
      icon: <Shield className="w-6 h-6" />,
      severity: "Critical",
      color: "red",
      risks: [
        "Non-compliance with GDPR, DPDPA, HIPAA, PCI-DSS",
        "Failure to maintain required certifications (ISO, SOC 2)",
        "Cross-border data transfer violations",
        "Inadequate data privacy policies and practices",
        "Missing or expired audit reports"
      ],
      impact: "Fines up to 4% revenue, legal liabilities, business disruption"
    },
    {
      category: "Operational Risks",
      icon: <Activity className="w-6 h-6" />,
      severity: "High",
      color: "orange",
      risks: [
        "Service disruptions and SLA breaches",
        "Single point of failure in critical operations",
        "Inadequate Business Continuity Plans (BCP/DR)",
        "Dependency concentration risk",
        "Poor change management processes"
      ],
      impact: "Service downtime, customer dissatisfaction, revenue loss"
    },
    {
      category: "Financial Risks",
      icon: <TrendingUp className="w-6 h-6" />,
      severity: "High",
      color: "orange",
      risks: [
        "Vendor financial instability or bankruptcy",
        "Inadequate insurance coverage",
        "Hidden or escalating costs",
        "Currency and payment risks",
        "Poor financial transparency"
      ],
      impact: "Service discontinuity, contractual disputes, cost overruns"
    },
    {
      category: "Reputation & ESG Risks",
      icon: <Globe className="w-6 h-6" />,
      severity: "Medium",
      color: "yellow",
      risks: [
        "Negative media coverage or scandals",
        "Poor environmental, social, governance practices",
        "Association with sanctioned entities",
        "Unethical business practices",
        "Labor and human rights violations"
      ],
      impact: "Brand damage, stakeholder loss of confidence, ESG rating impact"
    },
    {
      category: "Fourth-Party Risks",
      icon: <Layers className="w-6 h-6" />,
      severity: "Medium",
      color: "yellow",
      risks: [
        "Lack of visibility into vendor's subcontractors",
        "Cascading failures from fourth parties",
        "Inadequate fourth-party risk management by vendor",
        "Data sharing with undisclosed parties",
        "Concentration risk in vendor's supply chain"
      ],
      impact: "Extended risk exposure, compliance gaps, control failures"
    }
  ];

  const ourOffering = [
    {
      module: "Intelligent Vendor Discovery",
      icon: <Search className="w-10 h-10" />,
      features: [
        "Automated vendor data enrichment from 200+ sources",
        "AI-powered duplicate detection and consolidation",
        "Organizational hierarchy mapping",
        "Ultimate beneficial ownership (UBO) identification",
        "Relationship and dependency visualization"
      ],
      benefits: [
        "95% reduction in manual data entry",
        "Complete vendor portfolio visibility",
        "Accurate risk classification"
      ]
    },
    {
      module: "Dynamic Risk Assessment Engine",
      icon: <BarChart3 className="w-10 h-10" />,
      features: [
        "Multi-factor risk scoring across 15+ dimensions",
        "Customizable assessment templates and questionnaires",
        "Industry-specific risk frameworks (NIST, ISO 27001)",
        "Inherent vs Residual risk calculation",
        "Predictive risk analytics using machine learning"
      ],
      benefits: [
        "360° risk visibility",
        "Standardized assessment process",
        "Data-driven decision making"
      ]
    },
    {
      module: "Continuous Monitoring Platform",
      icon: <Eye className="w-10 h-10" />,
      features: [
        "Real-time threat intelligence feeds integration",
        "24/7 news and media monitoring",
        "Credit rating and financial health tracking",
        "Cybersecurity posture scoring (BitSight, SecurityScorecard)",
        "Regulatory sanctions and watchlist screening"
      ],
      benefits: [
        "Proactive risk detection",
        "80% faster incident response",
        "Automated compliance checks"
      ]
    },
    {
      module: "Workflow Automation & Orchestration",
      icon: <Zap className="w-10 h-10" />,
      features: [
        "Configurable assessment workflows",
        "Automated vendor onboarding and offboarding",
        "Intelligent task routing and escalation",
        "Remediation action plan management",
        "SLA tracking and automated notifications"
      ],
      benefits: [
        "70% faster vendor onboarding",
        "Zero missed deadlines",
        "Improved team productivity"
      ]
    },
    {
      module: "Contract & Document Management",
      icon: <FileText className="w-10 h-10" />,
      features: [
        "Centralized contract repository",
        "AI-powered contract clause extraction",
        "Automated renewal and expiry alerts",
        "DPA and NDA template management",
        "Version control and audit trail"
      ],
      benefits: [
        "100% contract compliance",
        "No missed renewals",
        "Rapid audit readiness"
      ]
    },
    {
      module: "Analytics & Reporting Hub",
      icon: <TrendingUp className="w-10 h-10" />,
      features: [
        "Executive dashboards with real-time KPIs",
        "Vendor scorecards and benchmarking",
        "Risk heat maps and trend analysis",
        "Regulatory reporting templates (GDPR, DORA)",
        "Custom report builder with 100+ metrics"
      ],
      benefits: [
        "Instant compliance reports",
        "Data-driven insights",
        "Board-ready presentations"
      ]
    }
  ];

  const keyHighlights = [
    {
      icon: <Zap className="w-8 h-8" />,
      metric: "85%",
      label: "Time Reduction",
      description: "Automated workflows save 100+ hours monthly per analyst"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      metric: "100%",
      label: "Risk Coverage",
      description: "Complete visibility across all vendor relationships"
    },
    {
      icon: <Target className="w-8 h-8" />,
      metric: "Real-Time",
      label: "Threat Detection",
      description: "Continuous monitoring with instant alerts"
    },
    {
      icon: <Database className="w-8 h-8" />,
      metric: "200+",
      label: "Data Sources",
      description: "Comprehensive intelligence from global databases"
    },
    {
      icon: <Award className="w-8 h-8" />,
      metric: "ISO 27001",
      label: "Certified",
      description: "Enterprise-grade security and compliance"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      metric: "Multi-Tenant",
      label: "Cloud Platform",
      description: "Scalable SaaS with 99.9% uptime SLA"
    }
  ];

  const technicalArchitecture = [
    {
      layer: "Data Integration Layer",
      technologies: ["REST APIs", "Webhooks", "SFTP/FTP", "Database Connectors"],
      description: "Seamless integration with 100+ enterprise systems"
    },
    {
      layer: "AI/ML Analytics Engine",
      technologies: ["Natural Language Processing", "Predictive Modeling", "Anomaly Detection", "Risk Scoring Algorithms"],
      description: "Intelligent automation and insights"
    },
    {
      layer: "Security & Compliance",
      technologies: ["AES-256 Encryption", "RBAC", "SOC 2 Type II", "GDPR Compliant"],
      description: "Bank-grade security and privacy"
    },
    {
      layer: "User Interface",
      technologies: ["Responsive Web App", "Mobile Apps (iOS/Android)", "Customizable Dashboards", "Multi-language Support"],
      description: "Intuitive user experience"
    }
  ];

  const integrations = [
    { name: "GRC Platforms", examples: "ServiceNow, Archer, MetricStream" },
    { name: "Procurement", examples: "SAP Ariba, Coupa, Oracle" },
    { name: "Security Tools", examples: "BitSight, SecurityScorecard, RiskRecon" },
    { name: "Financial Data", examples: "Dun & Bradstreet, Moody's, S&P" },
    { name: "Threat Intel", examples: "Recorded Future, CrowdStrike, ThreatConnect" },
    { name: "Collaboration", examples: "Microsoft Teams, Slack, Email" }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "Contact Sales",
      vendors: "Up to 100 vendors",
      features: [
        "Core risk assessment",
        "Basic monitoring",
        "Standard reports",
        "Email support"
      ],
      recommended: false
    },
    {
      name: "Professional",
      price: "Custom Pricing",
      vendors: "Up to 500 vendors",
      features: [
        "Advanced analytics",
        "Continuous monitoring",
        "Custom workflows",
        "Priority support",
        "API access"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "Let's Talk",
      vendors: "Unlimited vendors",
      features: [
        "Full platform access",
        "AI/ML capabilities",
        "Dedicated CSM",
        "24/7 support",
        "Custom integrations",
        "White-label options"
      ],
      recommended: false
    }
  ];

  const getSeverityColor = (color) => {
    const colors = {
      red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', badge: 'bg-red-500/20' },
      orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400', badge: 'bg-orange-500/20' },
      yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400', badge: 'bg-yellow-500/20' }
    };
    return colors[color] || colors.yellow;
  };

  return (
    <div className="w-full overflow-x-hidden bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#1e3a5f]">
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-blue-900/70 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">Enterprise Third-Party Risk Management</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Vendor Risk Assessment
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> & Management Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                AI-powered platform that automates vendor risk assessment, continuous monitoring, and compliance management across your entire third-party ecosystem
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <span className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  30-Day Free Trial
                </span>
                <span className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  No Credit Card
                </span>
                <span className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  SOC 2 Type II
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {keyHighlights.map((item, i) => (
                <div key={i} className="bg-[#1e2d4a] p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="text-cyan-400 mb-3">{item.icon}</div>
                  <h3 className="text-3xl font-bold text-white mb-1">{item.metric}</h3>
                  <p className="text-cyan-400 font-semibold text-sm mb-2">{item.label}</p>
                  <p className="text-gray-400 text-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Risk Management Process */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0f1729] to-[#1a2847]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Complete Vendor Risk Management Lifecycle
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end automation of the entire vendor risk management process
            </p>
          </div>
          
          <div className="space-y-6">
            {vendorRiskProcess.map((process, i) => (
              <div 
                key={i}
                className="bg-[#1e2d4a] rounded-xl border-2 border-cyan-500/30 hover:border-cyan-500 transition-all cursor-pointer overflow-hidden"
                onClick={() => setActiveProcess(i)}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {process.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{process.phase}</h3>
                          <p className="text-gray-400">{process.description}</p>
                        </div>
                        <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                          {process.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <CheckSquare className="w-5 h-5 text-cyan-400" />
                        Key Activities
                      </h4>
                      <ul className="space-y-2">
                        {process.activities.map((activity, j) => (
                          <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-green-400" />
                        Platform Automations
                      </h4>
                      <ul className="space-y-2">
                        {process.automations.map((auto, j) => (
                          <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{auto}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Risks Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Critical Vendor Risks We Help You Manage
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive coverage across all risk categories
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyRisks.map((risk, i) => {
              const colors = getSeverityColor(risk.color);
              return (
                <div 
                  key={i}
                  className={`bg-[#1e2d4a] rounded-xl border-2 ${colors.border} hover:border-cyan-500 transition-all p-6 cursor-pointer`}
                  onClick={() => setSelectedRisk(i)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center ${colors.text}`}>
                      {risk.icon}
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${colors.badge} ${colors.text}`}>
                      {risk.severity}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{risk.category}</h3>
                  <ul className="space-y-2 mb-4">
                    {risk.risks.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                        <AlertTriangle className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`${colors.bg} border ${colors.border} rounded-lg p-3`}>
                    <p className={`text-xs ${colors.text} font-semibold flex items-start gap-2`}>
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span><strong>Impact:</strong> {risk.impact}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Offering Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0f1729] to-[#1a2847]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Comprehensive Platform Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Six integrated modules for complete vendor risk management
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ourOffering.map((module, i) => (
              <div key={i} className="bg-[#1e2d4a] rounded-xl border-2 border-cyan-500/30 hover:border-cyan-500 transition-all group hover:shadow-lg hover:shadow-cyan-500/20 overflow-hidden">
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{module.module}</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                    <ul className="space-y-1.5">
                      {module.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                    <h4 className="text-sm font-semibold text-green-400 mb-1">Key Benefits:</h4>
                    {module.benefits.map((benefit, j) => (
                      <p key={j} className="text-xs text-green-300 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> {benefit}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Enterprise-Grade Architecture
            </h2>
            <p className="text-xl text-gray-300">
              Built for scale, security, and performance
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalArchitecture.map((layer, i) => (
              <div key={i} className="bg-[#1e2d4a] p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">{layer.layer}</h3>
                <p className="text-gray-300 mb-4">{layer.description}</p>
                <div className="flex flex-wrap gap-2">
                  {layer.technologies.map((tech, j) => (
                    <span key={j} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0f1729] to-[#1a2847]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Seamless Enterprise Integrations
            </h2>
            <p className="text-xl text-gray-300">
              Connect with 100+ enterprise systems out of the box
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, i) => (
              <div key={i} className="bg-[#1e2d4a] p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Server className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white">{integration.name}</h3>
                </div>
                <p className="text-gray-400 text-sm">{integration.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Flexible Pricing for Every Organization
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your vendor portfolio
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pricingTiers.map((tier, i) => (
              <div key={i} className={`bg-[#1e2d4a] p-8 rounded-xl border-2 ${
                tier.recommended 
                  ? 'border-cyan-500 shadow-lg shadow-cyan-500/20 transform scale-105' 
                  : 'border-gray-700/50'
              } relative`}>
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-cyan-400 mb-1">{tier.price}</p>
                <p className="text-gray-400 text-sm mb-6">{tier.vendors}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`w-full inline-flex items-center justify-center py-3 rounded-lg font-bold transition-all ${
                  tier.recommended 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-xl hover:scale-105' 
                    : 'bg-white/10 text-white border-2 border-white/30 hover:bg-white/20'
                }`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <Shield className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Transform Your Vendor Risk Management Today
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join industry leaders in automating third-party risk management
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-lg font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all">
              Schedule Live Demo
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-lg font-bold text-xl border-2 border-white/30 hover:bg-white/20 transition-all">
              <Mail className="w-6 h-6" />
              Contact Sales
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              30-Day Free Trial
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              No Implementation Fees
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              White-Glove Onboarding
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              Money-Back Guarantee
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}