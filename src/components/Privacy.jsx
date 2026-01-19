import React from "react";
import { Link } from "react-router-dom";
import { Shield, Lock, Eye, Users, Bell, FileText, Globe, Heart } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452] pt-20">
      {/* Hero Header */}
      <div className="relative overflow-hidden pt-8">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6 shadow-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-200 mb-2">
              Your privacy is important to us
            </p>
            <p className="text-lg text-gray-300">
              Last Updated: January 10, 2026
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links Navigation */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 mb-12">
        <div className="bg-[#1e2d4a] rounded-2xl shadow-xl p-6 border border-gray-700/50">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Navigation</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#collection" className="flex items-center text-cyan-400 hover:text-cyan-300 transition">
              <Eye className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Data Collection</span>
            </a>
            <a href="#usage" className="flex items-center text-cyan-400 hover:text-cyan-300 transition">
              <FileText className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">How We Use Data</span>
            </a>
            <a href="#security" className="flex items-center text-cyan-400 hover:text-cyan-300 transition">
              <Lock className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Data Security</span>
            </a>
            <a href="#rights" className="flex items-center text-cyan-400 hover:text-cyan-300 transition">
              <Users className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Your Rights</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#1e2d4a] rounded-2xl shadow-xl p-6 sticky top-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-6">Key Points</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-900/40 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white text-sm">Secure Data</h4>
                    <p className="text-xs text-gray-300 mt-1">We use encryption to protect your information</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-900/40 rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white text-sm">Transparency</h4>
                    <p className="text-xs text-gray-300 mt-1">Clear about what data we collect and why</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-900/40 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white text-sm">Your Control</h4>
                    <p className="text-xs text-gray-300 mt-1">You can access, update, or delete your data</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-900/40 rounded-lg flex items-center justify-center">
                    <Bell className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white text-sm">Updates</h4>
                    <p className="text-xs text-gray-300 mt-1">We'll notify you of policy changes</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-600">
                <h4 className="font-semibold text-white mb-3">Need Help?</h4>
                <p className="text-sm text-gray-300 mb-4">Contact our privacy team</p>
                <a href="mailto:privacy@upskillize.com" className="text-sm text-indigo-400 hover:text-indigo-800 font-medium">
                  privacy@upskillize.com
                </a>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Introduction Card */}
            <div className="bg-[#1e2d4a] rounded-2xl shadow-xl border border-gray-700/50 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Commitment to You</h2>
              </div>
              <p className="text-gray-200 leading-relaxed mb-4">
                At Upskillize, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                website and use our services.
              </p>
              <p className="text-gray-200 leading-relaxed">
                By accessing or using our services, you agree to this Privacy Policy. If you do not agree with the terms of 
                this Privacy Policy, please do not access the site.
              </p>
            </div>

            {/* Information Collection Card */}
            <div id="collection" className="bg-[#1e2d4a] rounded-2xl shadow-xl border border-gray-700/50 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-500 pl-6 py-2">
                  <h3 className="text-lg font-semibold text-white mb-3">Personal Information</h3>
                  <p className="text-gray-200 leading-relaxed mb-3">
                    We may collect personal information that you voluntarily provide when you:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center text-sm text-gray-200">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      Register for an account
                    </div>
                    <div className="flex items-center text-sm text-gray-200">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      Enroll in a course
                    </div>
                    <div className="flex items-center text-sm text-gray-200">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      Subscribe to newsletter
                    </div>
                    <div className="flex items-center text-sm text-gray-200">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      Contact support
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl p-6 border border-indigo-700/30">
                  <h4 className="font-semibold text-white mb-3">This may include:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start text-sm text-gray-200">
                      <span className="text-indigo-400 mr-2">✓</span>
                      Name and contact information
                    </div>
                    <div className="flex items-start text-sm text-gray-200">
                      <span className="text-indigo-400 mr-2">✓</span>
                      Educational background
                    </div>
                    <div className="flex items-start text-sm text-gray-200">
                      <span className="text-indigo-400 mr-2">✓</span>
                      Payment information
                    </div>
                    <div className="flex items-start text-sm text-gray-200">
                      <span className="text-indigo-400 mr-2">✓</span>
                      Profile preferences
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6 py-2">
                  <h3 className="text-lg font-semibold text-white mb-3">Automatically Collected Information</h3>
                  <p className="text-gray-200 leading-relaxed mb-3">
                    When you visit our website, we automatically collect certain information about your device:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center text-sm text-gray-200">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      IP address and browser type
                    </div>
                    <div className="flex items-center text-sm text-gray-200">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Device information
                    </div>
                    <div className="flex items-center text-sm text-gray-200">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Usage patterns
                    </div>
                    <div className="flex items-center text-sm text-gray-200">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Clickstream data
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use Data Card */}
            <div id="usage" className="bg-[#1e2d4a] rounded-2xl shadow-xl border border-gray-700/50 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
              </div>
              
              <p className="text-gray-200 leading-relaxed mb-6">
                We use the information we collect for various purposes to provide and improve our services:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-5 border border-green-700/30">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <h4 className="font-semibold text-white">Service Delivery</h4>
                  </div>
                  <p className="text-sm text-gray-300">
                    Providing, operating, and maintaining our educational platform and courses
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl p-5 border border-blue-700/30">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <h4 className="font-semibold text-white">Personalization</h4>
                  </div>
                  <p className="text-sm text-gray-300">
                    Customizing your learning experience and recommending relevant content
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-5 border border-purple-700/30">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <h4 className="font-semibold text-white">Communication</h4>
                  </div>
                  <p className="text-sm text-gray-300">
                    Sending course updates, support responses, and important notifications
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-900/30 to-yellow-900/30 rounded-xl p-5 border border-orange-700/30">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <h4 className="font-semibold text-white">Improvement</h4>
                  </div>
                  <p className="text-sm text-gray-300">
                    Analyzing usage trends to optimize and enhance our platform
                  </p>
                </div>
              </div>
            </div>

            {/* Data Security Card */}
            <div id="security" className="bg-[#1e2d4a] rounded-2xl shadow-xl border border-gray-700/50 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Data Security</h2>
              </div>

              <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 border-l-4 border-red-500 rounded-r-xl p-6 mb-6">
                <p className="text-gray-200 leading-relaxed font-medium">
                  We implement appropriate technical and organizational security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-red-900/40 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Lock className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Encryption</h4>
                    <p className="text-sm text-gray-300">Data encrypted in transit and at rest</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-orange-900/40 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Access Control</h4>
                    <p className="text-sm text-gray-300">Strict authentication measures</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-yellow-900/40 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Eye className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Monitoring</h4>
                    <p className="text-sm text-gray-300">Regular security assessments</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-900/40 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Training</h4>
                    <p className="text-sm text-gray-300">Employee data protection training</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights Card */}
            <div id="rights" className="bg-[#1e2d4a] rounded-2xl shadow-xl border border-gray-700/50 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Your Rights and Choices</h2>
              </div>

              <p className="text-gray-200 leading-relaxed mb-6">
                You have certain rights regarding your personal information. Contact us to exercise these rights:
              </p>

              <div className="space-y-4">
                <div className="flex items-start bg-gradient-to-r from-indigo-900/20 to-blue-900/20 rounded-xl p-4 border border-indigo-700/30">
                  <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">→</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Access Your Data</h4>
                    <p className="text-sm text-gray-300">Request a copy of your personal information</p>
                  </div>
                </div>

                <div className="flex items-start bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">→</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Correct Information</h4>
                    <p className="text-sm text-gray-300">Update inaccurate or incomplete data</p>
                  </div>
                </div>

                <div className="flex items-start bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl p-4 border border-red-700/30">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">→</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Delete Your Data</h4>
                    <p className="text-sm text-gray-300">Request deletion of your personal information</p>
                  </div>
                </div>

                <div className="flex items-start bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-4">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">→</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Opt-Out</h4>
                    <p className="text-sm text-gray-300">Unsubscribe from marketing communications anytime</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Back Button */}
            <div className="text-center pt-8">
              <Link 
                to="/" 
                className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                <span>← Back to Homepage</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}