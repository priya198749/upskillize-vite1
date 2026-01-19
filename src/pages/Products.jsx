import React from "react";
import { Link } from "react-router-dom";
import {
  DollarSign,
  Brain,
  BarChart3,
  ArrowRight,
  Zap,
  Target,
  Cloud,
  TrendingUp,
  ShoppingCart,
  Mic
} from "lucide-react";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "OptiCost",
      tagline: "AI-Powered Cost Optimization",
      description: "Reduce infrastructure costs by up to 40% with intelligent AI-driven recommendations and automated optimizations for cloud, data storage, and compute resources.",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-cyan-600 to-blue-600",
      features: [
        "Real-time cost monitoring 24/7",
        "AI-powered optimization recommendations",
        "Automated cost-saving actions",
        "Predictive cost analytics"
      ],
      savings: "$43,500/month average savings",
      link: "/products/opti-cost",
      available: true
    },
    {
      id: 2,
      name: "GDPR",
      tagline: "Smart Pricing Intelligence",
      description: "Dynamic pricing optimization platform that helps you maximize revenue through data-driven pricing strategies and competitive intelligence.",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-blue-600 to-indigo-600",
      features: [
        "Competitive price tracking",
        "Dynamic pricing algorithms",
        "Market trend analysis",
        "Revenue optimization"
      ],
      savings: "15-25% revenue increase",
      link: "/products/gdpr",
      available: false
    },
    {
      id: 3,
      name: "VRA Platform",
      tagline: "Voice Recognition & Analytics",
      description: "Enterprise-grade voice recognition and analytics platform for customer service, compliance monitoring, and business intelligence.",
      icon: <Mic className="w-8 h-8" />,
      color: "from-indigo-600 to-purple-600",
      features: [
        "Real-time voice transcription",
        "Sentiment analysis",
        "Compliance monitoring",
        "Custom voice models"
      ],
      savings: "50% faster insights",
      link: "/products/vra-platform",
      available: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
      <style>{`
        .product-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(96, 165, 250, 0.3);
        }

        .feature-check {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .feature-check::before {
          content: "✓";
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
          font-weight: bold;
          font-size: 14px;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-400/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-cyan-400/30">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">AI-Powered Business Solutions</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Our Products
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mt-3">
                Transform Your Business
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge AI solutions designed to optimize costs, maximize revenue, and deliver actionable insights
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card bg-[#1e2d4a] rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-400/50 flex flex-col"
              >
                {/* Product Header */}
                <div className={`bg-gradient-to-r ${product.color} p-8 text-white relative`}>
                  {!product.available && (
                    <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Coming Soon
                    </div>
                  )}
                  <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm inline-flex mb-4">
                    {product.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                  <p className="text-sm opacity-90 font-semibold">{product.tagline}</p>
                </div>

                {/* Product Body */}
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-cyan-400" />
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 text-sm feature-check">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Savings Badge */}
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 text-green-400">
                      <TrendingUp className="w-5 h-5" />
                      <span className="font-semibold">{product.savings}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    {product.available ? (
                      <Link
                        to={product.link}
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
                      >
                        Explore {product.name}
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="w-full bg-gray-600/50 text-gray-400 py-3 rounded-lg font-semibold cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "500+", label: "Enterprise Clients", icon: <Cloud className="w-8 h-8" /> },
              { value: "$2M+", label: "Cost Savings Delivered", icon: <DollarSign className="w-8 h-8" /> },
              { value: "99.9%", label: "Platform Uptime", icon: <Zap className="w-8 h-8" /> }
            ].map((stat, i) => (
              <div key={i} className="text-center bg-[#1e2d4a] rounded-xl p-8 border border-gray-700/50">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900/30 rounded-full mb-4 text-cyan-400">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-10 lg:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Get started with our AI-powered solutions today and see measurable results in weeks
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/products/opti-cost"
                  className="bg-white text-indigo-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Try OptiCost Free
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
                >
                  Contact Sales
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <p className="text-white/70 text-sm mt-6">No credit card required • Setup in 5 minutes • Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}