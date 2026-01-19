import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  Shield,
  AlertTriangle,
  Database,
  Lock,
  Eye,
  FileText,
  TrendingUp,
  BarChart3,
  Users,
  Globe,
  Zap,
  Search,
  Bell,
  Settings,
  Award,
  Target,
  Briefcase,
  Clock,
  CheckSquare,
  XCircle,
  Activity,
  Server,
  Key,
  FileSearch,
  BookOpen,
  Smartphone
} from 'lucide-react';

export default function GDPR() {
  const [activeRisk, setActiveRisk] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  const industryProblems = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Regulatory Compliance Burden",
      description: "Organizations struggle to keep up with evolving GDPR and DPDPA regulations",
      impact: "Risk of ₹250 Cr+ penalties and reputational damage"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Sprawl & Silos",
      description: "Personal data scattered across multiple systems without central visibility",
      impact: "Inability to respond to data subject requests within mandated timelines"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Lack of Real-Time Monitoring",
      description: "No automated tracking of data processing activities and consent management",
      impact: "Delayed breach detection and non-compliance incidents"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Manual Documentation",
      description: "Time-consuming manual processes for maintaining Records of Processing Activities (RoPA)",
      impact: "80+ hours/month spent on compliance documentation"
    }
  ];

  const keyRisks = [
    {
      risk: "Regulatory Penalties",
      details: "GDPR: Up to 4% of global revenue or €20M | DPDPA: Up to ₹250 Crores",
      severity: "Critical",
      color: "text-red-400"
    },
    {
      risk: "Data Breach Consequences",
      details: "72-hour breach notification requirement; failure leads to severe penalties",
      severity: "Critical",
      color: "text-red-400"
    },
    {
      risk: "Consent Management Failures",
      details: "Invalid or expired consents leading to unauthorized data processing",
      severity: "High",
      color: "text-orange-400"
    },
    {
      risk: "Cross-Border Data Transfer",
      details: "Non-compliant international data transfers without adequate safeguards",
      severity: "High",
      color: "text-orange-400"
    },
    {
      risk: "Third-Party Vendor Risks",
      details: "Data processors not meeting GDPR/DPDPA compliance standards",
      severity: "Medium",
      color: "text-yellow-400"
    },
    {
      risk: "Individual Rights Violations",
      details: "Failure to honor data subject access, deletion, and portability requests",
      severity: "High",
      color: "text-orange-400"
    }
  ];

  const ourOffering = [
    {
      icon: <Database className="w-12 h-12" />,
      title: "Automated Data Discovery & Mapping",
      features: [
        "AI-powered scanning across all systems and databases",
        "Automatic classification of personal and sensitive data",
        "Visual data flow diagrams and lineage tracking",
        "Integration with 100+ enterprise applications"
      ]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Comprehensive Compliance Management",
      features: [
        "Built-in GDPR and DPDPA compliance frameworks",
        "Automated Records of Processing Activities (RoPA)",
        "Privacy Impact Assessment (PIA/DPIA) workflows",
        "Regulatory change tracking and alerts"
      ]
    },
    {
      icon: <Bell className="w-12 h-12" />,
      title: "Real-Time Monitoring & Alerts",
      features: [
        "Continuous compliance monitoring dashboard",
        "Automated breach detection and 72-hour notification",
        "Consent expiry and renewal alerts",
        "Risk scoring with actionable insights"
      ]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Data Subject Rights Management",
      features: [
        "Self-service portal for access requests (DSAR)",
        "Automated right to erasure (deletion) workflows",
        "Data portability in machine-readable formats",
        "Consent management with granular controls"
      ]
    },
    {
      icon: <FileSearch className="w-12 h-12" />,
      title: "Advanced Analytics & Reporting",
      features: [
        "Pre-built compliance dashboards and reports",
        "Audit trail with immutable logging",
        "Custom report builder with 50+ metrics",
        "Executive and regulatory reporting templates"
      ]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Third-Party Risk Management",
      features: [
        "Vendor compliance assessment questionnaires",
        "Data Processing Agreement (DPA) management",
        "Cross-border transfer impact analysis",
        "Continuous vendor risk monitoring"
      ]
    }
  ];

  const keyHighlights = [
    {
      icon: <Zap className="w-6 h-6" />,
      metric: "90%",
      label: "Reduction in Compliance Workload",
      description: "Automated workflows save 70+ hours monthly"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      metric: "100%",
      label: "GDPR & DPDPA Coverage",
      description: "Comprehensive compliance across all requirements"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      metric: "72 Hours",
      label: "Breach Notification Ready",
      description: "Automated incident response workflows"
    },
    {
      icon: <Database className="w-6 h-6" />,
      metric: "100+",
      label: "System Integrations",
      description: "Seamless connectivity with enterprise tools"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      metric: "Real-Time",
      label: "Compliance Monitoring",
      description: "Continuous risk assessment and alerting"
    },
    {
      icon: <Award className="w-6 h-6" />,
      metric: "ISO 27001",
      label: "Certified Security",
      description: "Enterprise-grade data protection"
    }
  ];

  const technicalCapabilities = [
    {
      category: "Data Discovery",
      capabilities: [
        "Automated PII/SPI detection using ML",
        "Database, file system, and cloud scanning",
        "Dark data identification",
        "Duplicate data detection"
      ]
    },
    {
      category: "Consent Management",
      capabilities: [
        "Granular consent capture and tracking",
        "Multi-channel consent collection",
        "Consent withdrawal processing",
        "Version control and audit logs"
      ]
    },
    {
      category: "Access Controls",
      capabilities: [
        "Role-based access control (RBAC)",
        "Data minimization enforcement",
        "Purpose limitation tracking",
        "Encryption at rest and in transit"
      ]
    },
    {
      category: "Reporting & Analytics",
      capabilities: [
        "Pre-built compliance dashboards",
        "Custom KPI tracking",
        "Regulatory submission reports",
        "Data subject request metrics"
      ]
    }
  ];

  const benefitsByRole = [
    {
      role: "Chief Privacy Officer (CPO)",
      benefits: [
        "360° compliance visibility across the organization",
        "Automated regulatory reporting and documentation",
        "Risk-based prioritization dashboard"
      ],
      icon: <Shield />
    },
    {
      role: "IT/Security Teams",
      benefits: [
        "Centralized data inventory and classification",
        "Automated breach detection and response",
        "API-based integrations with existing tools"
      ],
      icon: <Server />
    },
    {
      role: "Legal & Compliance",
      benefits: [
        "Audit-ready documentation and evidence",
        "DPA and contract management",
        "Regulatory change impact analysis"
      ],
      icon: <FileText />
    },
    {
      role: "Business Units",
      benefits: [
        "Self-service data subject request portal",
        "Simplified privacy impact assessments",
        "Consent management workflows"
      ],
      icon: <Users />
    }
  ];

  const implementationTimeline = [
    { phase: "Discovery & Planning", duration: "Week 1-2", activities: "Data landscape assessment, integration planning" },
    { phase: "System Integration", duration: "Week 3-4", activities: "Connect data sources, configure workflows" },
    { phase: "Data Mapping", duration: "Week 5-6", activities: "Automated scanning, classification, RoPA creation" },
    { phase: "User Training", duration: "Week 7", activities: "Role-based training for all stakeholders" },
    { phase: "Go-Live & Support", duration: "Week 8+", activities: "Production deployment, ongoing optimization" }
  ];

  return (
    <div className="w-full overflow-x-hidden bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#1e3a5f]">
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-blue-900/70 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">Enterprise Data Privacy & Compliance</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                GDPR & DPDPA
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Compliance Made Simple</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                AI-powered data management platform that automates compliance, reduces risk, and transforms privacy from a burden into a competitive advantage
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <span className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  ISO 27001 Certified
                </span>
                <span className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Cloud & On-Premise
                </span>
                <span className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  30-Day Free Trial
                </span>
              </div>
            </div>

            {/* Right Content - Key Stats */}
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

      {/* Industry Problems Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0f1729] to-[#1a2847]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              The Data Privacy Challenge
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Organizations face mounting pressure from regulators, customers, and stakeholders
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {industryProblems.map((problem, i) => (
              <div key={i} className="bg-[#1e2d4a] p-8 rounded-xl border border-gray-700/50 hover:border-red-500/50 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                    {problem.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
                    <p className="text-gray-300 mb-3">{problem.description}</p>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                      <p className="text-sm text-red-400 font-semibold flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        {problem.impact}
                      </p>
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
              Critical Compliance Risks
            </h2>
            <p className="text-xl text-gray-300">
              What's at stake without proper data privacy management
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyRisks.map((item, i) => (
              <div 
                key={i} 
                className="bg-[#1e2d4a] p-6 rounded-xl border-2 border-cyan-500/30 hover:border-cyan-500 transition-all cursor-pointer"
                onClick={() => setActiveRisk(i)}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">{item.risk}</h3>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    item.severity === 'Critical' ? 'bg-red-500/20 text-red-400' :
                    item.severity === 'High' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {item.severity}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Offering Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0f1729] to-[#1a2847]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Comprehensive Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end data privacy and compliance management platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ourOffering.map((module, i) => (
              <div 
                key={i} 
                className="bg-[#1e2d4a] rounded-xl border-2 border-cyan-500/30 hover:border-cyan-500 transition-all group hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{module.title}</h3>
                  <ul className="space-y-2.5">
                    {module.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Technical Capabilities
            </h2>
            <p className="text-xl text-gray-300">
              Enterprise-grade features built for scale and performance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalCapabilities.map((tech, i) => (
              <div key={i} className="bg-[#1e2d4a] p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all">
                <h3 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.capabilities.map((cap, j) => (
                    <li key={j} className="text-gray-300 text-sm flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits by Role */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0f1729] to-[#1a2847]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Benefits Across Your Organization
            </h2>
            <p className="text-xl text-gray-300">
              Value for every stakeholder
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefitsByRole.map((roleData, i) => (
              <div key={i} className="bg-[#1e2d4a] p-8 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white">
                    {roleData.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{roleData.role}</h3>
                </div>
                <ul className="space-y-3">
                  {roleData.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Fast, Seamless Implementation
            </h2>
            <p className="text-xl text-gray-300">
              Go from procurement to production in just 8 weeks
            </p>
          </div>
          <div className="space-y-4">
            {implementationTimeline.map((phase, i) => (
              <div key={i} className="bg-[#1e2d4a] p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-500 transition-all">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-gray-300 mt-1">{phase.activities}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <Shield className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Data Privacy Program?
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join leading enterprises in automating GDPR and DPDPA compliance
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { label: "Starter", price: "Contact Sales", features: ["Up to 1M records", "Core compliance features", "Email support"] },
              { label: "Enterprise", price: "Custom Pricing", features: ["Unlimited records", "Advanced analytics", "24/7 priority support"], highlighted: true },
              { label: "Custom", price: "Let's Talk", features: ["Tailored solutions", "Dedicated success manager", "Custom integrations"] }
            ].map((plan, i) => (
              <div key={i} className={`bg-[#1e2d4a] p-8 rounded-xl border-2 ${plan.highlighted ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' : 'border-gray-700/50'}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.label}</h3>
                <p className="text-3xl font-bold text-cyan-400 mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                  plan.highlighted 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-xl hover:scale-105' 
                    : 'bg-white/10 text-white border-2 border-white/30 hover:bg-white/20'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              30-Day Free Trial
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              No Credit Card Required
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