import React, { useState, useEffect } from 'react';
import { 
  DollarSign, 
  TrendingDown, 
  Brain, 
  BarChart3, 
  PieChart, 
  Zap,
  Target,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Layers,
  Database,
  Cloud,
  Settings,
  LineChart,
  Activity,
  TrendingUp,
  Sparkles,
  ShoppingCart,
  Users,
  GitCompare,
  Award,
  Clock,
  Shield,
  Workflow,
  Calculator,
  FileSpreadsheet,
  Network,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';
import { Link } from "react-router-dom";

export default function OptiCost() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [animatedSavings, setAnimatedSavings] = useState(0);
  const [selectedFeature, setSelectedFeature] = useState('cost-allocation');

  const costAllocationMethods = [
    {
      id: 'direct',
      name: 'Direct Cost Allocation',
      icon: <Calculator className="w-6 h-6" />,
      description: 'Trace costs directly to specific products, services, or departments',
      color: 'from-blue-600 to-cyan-600',
      benefits: ['Clear cost attribution', 'Easy to implement', 'High accuracy for direct costs']
    },
    {
      id: 'indirect',
      name: 'Indirect Cost Allocation',
      icon: <Network className="w-6 h-6" />,
      description: 'Allocate overhead and shared costs using intelligent distribution methods',
      color: 'from-cyan-600 to-blue-600',
      benefits: ['Comprehensive cost coverage', 'Fair distribution', 'Better overhead management']
    },
    {
      id: 'abc',
      name: 'Activity-Based Costing (ABC)',
      icon: <Workflow className="w-6 h-6" />,
      description: 'Assign costs based on activities that drive resource consumption',
      color: 'from-indigo-600 to-purple-600',
      benefits: ['Precise cost drivers', 'Process optimization', 'Strategic insights']
    },
    {
      id: 'hybrid',
      name: 'Hybrid Costing Models',
      icon: <Layers className="w-6 h-6" />,
      description: 'Combine multiple methods for comprehensive cost analysis',
      color: 'from-purple-600 to-pink-600',
      benefits: ['Maximum accuracy', 'Flexible approach', 'Industry best practices']
    }
  ];

  const keyFeatures = [
    {
      id: 'unit-cost',
      title: 'Unit Cost Identification',
      description: 'Calculate precise cost per unit across all product lines and services',
      icon: <Calculator className="w-8 h-8" />,
      color: 'from-blue-600 to-cyan-600',
      capabilities: [
        'Multi-level cost breakdown',
        'Variable vs. fixed cost analysis',
        'Batch costing support',
        'Real-time cost updates'
      ]
    },
    {
      id: 'pain-points',
      title: 'Pain Point Analysis',
      description: 'AI identifies cost inefficiencies and operational bottlenecks',
      icon: <AlertCircle className="w-8 h-8" />,
      color: 'from-cyan-600 to-blue-600',
      capabilities: [
        'Automated anomaly detection',
        'Cost variance analysis',
        'Resource utilization tracking',
        'Waste identification'
      ]
    },
    {
      id: 'market-compare',
      title: 'Market Price Comparison',
      description: 'Benchmark your costs against industry standards and competitors',
      icon: <GitCompare className="w-8 h-8" />,
      color: 'from-indigo-600 to-purple-600',
      capabilities: [
        'Real-time market data',
        'Competitor benchmarking',
        'Industry average analysis',
        'Price trend forecasting'
      ]
    },
    {
      id: 'vendor-optimization',
      title: 'Vendor Recommendation Engine',
      description: 'AI suggests optimal vendors based on quality, price, and reliability',
      icon: <ShoppingCart className="w-8 h-8" />,
      color: 'from-purple-600 to-pink-600',
      capabilities: [
        'Vendor scoring system',
        'Quality vs. price analysis',
        'Contract optimization',
        'Supplier performance tracking'
      ]
    },
    {
      id: 'integration',
      title: 'Multi-Source Integration',
      description: 'Seamlessly connect with ERP, accounting, and procurement systems',
      icon: <Network className="w-8 h-8" />,
      color: 'from-pink-600 to-red-600',
      capabilities: [
        'API-based integrations',
        'Real-time data sync',
        'Custom connector support',
        'Cloud-native architecture'
      ]
    },
    {
      id: 'dashboards',
      title: 'Intelligent Dashboards',
      description: 'Interactive visualizations for data-driven decision making',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-red-600 to-orange-600',
      capabilities: [
        'Customizable views',
        'Drill-down analytics',
        'Executive summaries',
        'Mobile-responsive design'
      ]
    }
  ];

  const businessImpact = [
    {
      metric: '20-30%',
      label: 'Cost Reduction',
      description: 'Average reduction in overall operational costs',
      icon: <TrendingDown className="w-8 h-8" />,
      color: 'text-green-400'
    },
    {
      metric: '60%',
      label: 'Faster Time to Market',
      description: 'Accelerated decision-making and procurement cycles',
      icon: <Clock className="w-8 h-8" />,
      color: 'text-blue-400'
    },
    {
      metric: '95%',
      label: 'Cost Accuracy',
      description: 'Precision in cost allocation and unit pricing',
      icon: <Target className="w-8 h-8" />,
      color: 'text-purple-400'
    },
    {
      metric: '100%',
      label: 'Quality Maintained',
      description: 'Zero compromise on product/service quality',
      icon: <Award className="w-8 h-8" />,
      color: 'text-cyan-400'
    }
  ];

  const integrationSources = [
    { name: 'SAP', logo: '💼' },
    { name: 'Oracle', logo: '🔶' },
    { name: 'Microsoft Dynamics', logo: '🪟' },
    { name: 'QuickBooks', logo: '📊' },
    { name: 'NetSuite', logo: '☁️' },
    { name: 'Salesforce', logo: '⚡' },
    { name: 'Workday', logo: '📈' },
    { name: 'Zoho', logo: '📱' }
  ];

  const industries = [
    'Manufacturing', 'Retail', 'Healthcare', 'Financial Services', 
    'Technology', 'Logistics', 'Hospitality', 'Education',
    'Construction', 'Telecommunications', 'Energy', 'Professional Services'
  ];

  useEffect(() => {
    let start = 0;
    const end = 28;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setAnimatedSavings(end);
        clearInterval(timer);
      } else {
        setAnimatedSavings(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
      <style>{`
        .feature-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(96, 165, 250, 0.3);
        }

        .pulse-animation {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .slide-in {
          animation: slideIn 0.5s ease-out;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-400/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-cyan-400/30 float-animation">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Industry-Agnostic AI Solution</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              OptiCost
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mt-3">
                AI-Powered Cost Allocation Platform
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your cost management with advanced AI that identifies unit costs, analyzes pain points, compares market prices, and optimizes vendor selection—all while maintaining quality excellence
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {['ABC Costing', 'Direct & Indirect Methods', 'Vendor Intelligence', 'Cloud-Native'].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all transform">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
                   <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
                   >
                       <Brain className="w-5 h-5" />
                       Schedule Demo
                   </Link>
            </div>

            {/* Impact Metrics */}
            <div className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl px-8 py-4">
              <p className="text-gray-300 text-sm mb-1">Average Cost Reduction</p>
              <p className="text-5xl font-bold text-green-400">
                {animatedSavings}%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact Stats */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessImpact.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1e2d4a] to-[#243452] rounded-2xl p-6 border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <div className={`${item.color} mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">
                  {item.metric}
                </h3>
                <p className="text-gray-300 font-semibold mb-2">{item.label}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Allocation Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Advanced Cost Allocation Methods
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple costing methodologies for comprehensive financial insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {costAllocationMethods.map((method) => (
              <div
                key={method.id}
                className="feature-card bg-[#1e2d4a] rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-400/50"
              >
                <div className={`bg-gradient-to-r ${method.color} p-6 text-white`}>
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm inline-flex mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{method.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {method.description}
                  </p>
                  <div className="space-y-2">
                    {method.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Comprehensive Feature Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for intelligent cost optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className="feature-card bg-[#1e2d4a] rounded-2xl p-8 border border-gray-700/50 hover:border-blue-400/50"
              >
                <div className={`inline-flex p-4 bg-gradient-to-r ${feature.color} rounded-xl mb-6 text-white shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                
                <div className="space-y-3">
                  <p className="text-cyan-400 font-semibold text-sm mb-3">Key Capabilities:</p>
                  {feature.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Sources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Seamless Multi-Source Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing ERP, accounting, and procurement systems
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {integrationSources.map((source, index) => (
              <div
                key={index}
                className="bg-[#1e2d4a] rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/50 transition-all hover:scale-105 text-center"
              >
                <div className="text-4xl mb-3">{source.logo}</div>
                <p className="text-white text-sm font-semibold">{source.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-2xl p-8 text-center">
            <Cloud className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Cloud-Native Architecture</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Built on modern cloud infrastructure for maximum scalability, security, and performance. Deploy on AWS, Azure, or Google Cloud.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['API-First Design', 'Real-Time Sync', 'Custom Connectors', '99.9% Uptime'].map((item, i) => (
                <span key={i} className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-lg text-blue-300 text-sm font-semibold">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Coverage */}
      <section className="py-16 bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Industry-Agnostic Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven success across diverse sectors and business models
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border border-indigo-400/30 rounded-xl text-white font-semibold hover:border-indigo-400 transition-all hover:scale-105 cursor-pointer"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1e2d4a] to-[#243452] rounded-3xl p-10 lg:p-16 border border-blue-400/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-green-400/10 px-4 py-2 rounded-full mb-6 border border-green-400/30">
                  <Award className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-semibold">Industry Best Practices</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Built on Proven Methodologies
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  OptiCost incorporates globally recognized costing frameworks and optimization strategies, ensuring your organization benefits from decades of financial management expertise.
                </p>
                <div className="space-y-4">
                  {[
                    'GAAP & IFRS Compliance',
                    'Six Sigma Quality Standards',
                    'Lean Manufacturing Principles',
                    'ISO 9001 Cost Management',
                    'Industry-Specific Regulations'
                  ].map((practice, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span className="text-white font-semibold">{practice}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Shield className="w-8 h-8" />, title: 'Enterprise Security', desc: 'SOC 2 & ISO 27001 certified' },
                  { icon: <Zap className="w-8 h-8" />, title: 'Lightning Fast', desc: 'Sub-second query response' },
                  { icon: <Users className="w-8 h-8" />, title: 'Expert Support', desc: '24/7 dedicated assistance' },
                  { icon: <TrendingUp className="w-8 h-8" />, title: 'Continuous Innovation', desc: 'Quarterly feature updates' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#0f1729] rounded-xl p-6 border border-gray-700/50">
                    <div className="text-cyan-400 mb-3">{item.icon}</div>
                    <h4 className="text-white font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-10 lg:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white font-semibold text-sm">Transform Your Cost Management Today</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Ready to Reduce Costs by 20-30%?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join leading organizations that have optimized their cost structure with OptiCost's AI-powered platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button className="bg-white text-indigo-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Start Free 30-Day Trial
                </button>
                 <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
                   >
                       <Brain className="w-5 h-5" />
                       Schedule Personalized Demo
                   </Link>
              </div>
              <p className="text-white/70 text-sm">
                No credit card required • Full feature access • Implementation support included
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}