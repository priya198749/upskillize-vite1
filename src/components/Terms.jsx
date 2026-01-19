import React from "react";
import { Link } from "react-router-dom";
import { FileText, CheckCircle, XCircle, AlertCircle, Scale, CreditCard, UserCheck, ShieldCheck } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452] pt-20">
      {/* Hero Header */}
      <div className="relative overflow-hidden pt-8">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6 shadow-lg">
              <Scale className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-200 mb-2">
              Please read these terms carefully before using our services
            </p>
            <p className="text-lg text-gray-300">
              Last Updated: January 10, 2026
            </p>
          </div>
        </div>
      </div>

      {/* Quick Overview */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 mb-12">
        <div className="bg-[#1e2d4a] rounded-2xl shadow-xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Overview</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">You Can</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>✓ Access course content</li>
                <li>✓ Get certificates</li>
                <li>✓ Contact support</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">You Cannot</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>✗ Share account access</li>
                <li>✗ Redistribute content</li>
                <li>✗ Violate copyrights</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Important</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>⚠ 7-day refund policy</li>
                <li>⚠ Account responsibility</li>
                <li>⚠ Age requirement: 18+</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#1e2d4a] rounded-2xl shadow-xl p-6 sticky top-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-6">Sections</h3>
              
              <nav className="space-y-3">
                <a href="#acceptance" className="flex items-center text-gray-200 hover:text-cyan-400 transition py-2 px-3 rounded-lg hover:bg-indigo-900/30">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span className="text-sm font-medium">Acceptance</span>
                </a>
                <a href="#eligibility" className="flex items-center text-gray-200 hover:text-cyan-400 transition py-2 px-3 rounded-lg hover:bg-indigo-900/30">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span className="text-sm font-medium">Eligibility</span>
                </a>
                <a href="#account" className="flex items-center text-gray-200 hover:text-cyan-400 transition py-2 px-3 rounded-lg hover:bg-indigo-900/30">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-sm font-medium">Account</span>
                </a>
                <a href="#payment" className="flex items-center text-gray-200 hover:text-cyan-400 transition py-2 px-3 rounded-lg hover:bg-indigo-900/30">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-sm font-medium">Payment & Refunds</span>
                </a>
                <a href="#ip" className="flex items-center text-gray-200 hover:text-cyan-400 transition py-2 px-3 rounded-lg hover:bg-indigo-900/30">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  <span className="text-sm font-medium">Intellectual Property</span>
                </a>
                <a href="#conduct" className="flex items-center text-gray-200 hover:text-cyan-400 transition py-2 px-3 rounded-lg hover:bg-indigo-900/30">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-sm font-medium">User Conduct</span>
                </a>
                <a href="#termination" className="flex items-center text-gray-200 hover:text-cyan-400 transition py-2 px-3 rounded-lg hover:bg-indigo-900/30">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  <span className="text-sm font-medium">Termination</span>
                </a>
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-600">
                <h4 className="font-semibold text-white mb-3">Questions?</h4>
                <p className="text-sm text-gray-300 mb-4">Contact our legal team</p>
                <a href="mailto:legal@upskillize.com" className="text-sm text-cyan-400 hover:text-cyan-300 font-medium">
                  legal@upskillize.com
                </a>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Introduction Card */}
            <div className="bg-[#1e2d4a] rounded-2xl shadow-xl p-8 border border-gray-700/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Welcome to Upskillize</h2>
              </div>
              <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border-l-4 border-indigo-500 rounded-r-xl p-6">
                <p className="text-gray-200 leading-relaxed mb-4">
                  These Terms of Service govern your access to and use of our website, courses, and services. By accessing 
                  or using our services, you agree to be bound by these Terms.
                </p>
                <p className="text-gray-200 leading-relaxed font-medium">
                  Please read these Terms carefully before using our services. If you do not agree, you may not access our services.
                </p>
              </div>
            </div>

            {/* Acceptance Card */}
            <div id="acceptance" className="bg-[#1e2d4a] rounded-2xl shadow-xl p-8 border border-gray-700/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Acceptance of Terms</h2>
              </div>
              <p className="text-gray-200 leading-relaxed mb-4">
                By creating an account, accessing our website, or using any of our services, you acknowledge that you have:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start bg-green-900/30 rounded-lg p-4 border border-green-700/30">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-200">Read and understood these Terms</span>
                </div>
                <div className="flex items-start bg-green-900/30 rounded-lg p-4 border border-green-700/30">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-200">Agreed to our Privacy Policy</span>
                </div>
                <div className="flex items-start bg-green-900/30 rounded-lg p-4 border border-green-700/30">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-200">Authority to bind your organization (if applicable)</span>
                </div>
                <div className="flex items-start bg-green-900/30 rounded-lg p-4 border border-green-700/30">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-200">Will comply with all Terms</span>
                </div>
              </div>
            </div>

            {/* Eligibility Card */}
            <div id="eligibility" className="bg-[#1e2d4a] rounded-2xl shadow-xl p-8 border border-gray-700/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Eligibility Requirements</h2>
              </div>
              
              <div className="bg-blue-900/30 border-l-4 border-blue-500 rounded-r-xl p-6 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-2">Age Requirement: 18+</p>
                    <p className="text-sm text-gray-200">
                      You must be at least 18 years old to use our services. By using our platform, you represent that you 
                      meet this age requirement and have the legal capacity to enter into a binding agreement.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="font-semibold text-white mb-4">You must also:</h3>
              <div className="space-y-3">
                <div className="flex items-center bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-lg p-4 border border-blue-700/30">
                  <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">✓</span>
                  <span className="text-gray-200">Provide accurate and complete information</span>
                </div>
                <div className="flex items-center bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-lg p-4 border border-blue-700/30">
                  <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">✓</span>
                  <span className="text-gray-200">Comply with all applicable laws and regulations</span>
                </div>
              </div>
            </div>

            {/* Account Card */}
            <div id="account" className="bg-[#1e2d4a] rounded-2xl shadow-xl p-8 border border-gray-700/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Account Registration & Security</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-900/20 rounded-r-lg">
                  <h3 className="font-semibold text-white mb-3">Your Responsibilities</h3>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Keep account credentials secure
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Maintain accurate information
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Report unauthorized access
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-pink-500 pl-6 py-4 bg-pink-900/20 rounded-r-lg">
                  <h3 className="font-semibold text-white mb-3">Prohibited Actions</h3>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li className="flex items-start">
                      <span className="text-pink-400 mr-2">✗</span>
                      Share account with others
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-400 mr-2">✗</span>
                      Create multiple accounts
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-400 mr-2">✗</span>
                      Use someone else's account
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-700/30">
                <p className="text-sm text-gray-200">
                  <strong className="text-white">Important:</strong> You are responsible for all activities under your account. We are not liable 
                  for losses from unauthorized use of your account.
                </p>
              </div>
            </div>

            {/* Payment & Refunds Card */}
            <div id="payment" className="bg-[#1e2d4a] rounded-2xl shadow-xl p-8 border border-gray-700/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Payment & Refunds</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-700/30">
                  <h3 className="font-semibold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3">₹</span>
                    Pricing & Payment
                  </h3>
                  <p className="text-gray-200 text-sm mb-4">
                    All prices are in Indian Rupees (INR). Payment must be made through approved methods before accessing course content.
                  </p>
                </div>

                <div className="border-2 border-green-500 rounded-xl p-6 bg-green-900/20">
                  <h3 className="font-semibold text-white mb-4 flex items-center">
                    <span className="text-2xl mr-3">🔄</span>
                    7-Day Refund Policy
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-900/40 rounded-lg p-4 border border-green-700/30">
                      <h4 className="font-semibold text-green-300 mb-2 text-sm">✓ Eligible for Refund:</h4>
                      <ul className="text-xs text-gray-200 space-y-1">
                        <li>• Less than 20% course completed</li>
                        <li>• Within 7 days of purchase</li>
                        <li>• Technical issues (if unresolved)</li>
                      </ul>
                    </div>

                    <div className="bg-red-900/40 rounded-lg p-4 border border-red-700/30">
                      <h4 className="font-semibold text-red-300 mb-2 text-sm">✗ Not Eligible:</h4>
                      <ul className="text-xs text-gray-200 space-y-1">
                        <li>• More than 20% completed</li>
                        <li>• After 7 days</li>
                        <li>• Promotional/discounted courses</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Intellectual Property Card */}
            <div id="ip" className="bg-[#1e2d4a] rounded-2xl shadow-xl p-8 border border-gray-700/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center mr-4">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Intellectual Property Rights</h2>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-yellow-900/30 border-l-4 border-orange-500 rounded-r-xl p-6 mb-6">
                <p className="font-medium text-white mb-2">All Content is Protected</p>
                <p className="text-sm text-gray-200">
                  All course content, videos, text, graphics, logos, and materials are owned by or licensed to Upskillize 
                  and protected by intellectual property laws.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-900/30 border-2 border-red-500/50 rounded-xl p-5">
                  <h4 className="font-semibold text-red-300 mb-3 flex items-center">
                    <XCircle className="w-5 h-5 mr-2" />
                    Strictly Prohibited
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">✗</span>
                      Copy or redistribute content
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">✗</span>
                      Share account access
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">✗</span>
                      Create derivative works
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">✗</span>
                      Commercial use of content
                    </li>
                  </ul>
                </div>

                <div className="bg-green-900/30 border-2 border-green-500/50 rounded-xl p-5">
                  <h4 className="font-semibold text-green-300 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    You May
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Access for personal learning
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Download for offline viewing
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Print for personal notes
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      Share certificates earned
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Conduct Card */}
            <div id="conduct" className="bg-[#1e2d4a] rounded-2xl shadow-xl p-8 border border-gray-700/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">User Conduct & Prohibited Activities</h2>
              </div>

              <div className="bg-red-900/30 border-l-4 border-red-500 rounded-r-xl p-6 mb-6">
                <p className="font-medium text-red-300 mb-2">Zero Tolerance Policy</p>
                <p className="text-sm text-gray-200">
                  We maintain a zero-tolerance policy for activities that harm our platform, users, or violate laws. 
                  Violations may result in immediate account termination.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-red-900/30 rounded-lg p-4 border border-red-700/30">
                  <h4 className="font-semibold text-red-300 text-sm mb-2">✗ Illegal Activity</h4>
                  <p className="text-xs text-gray-300">Any unlawful actions or violations of regulations</p>
                </div>
                <div className="bg-red-900/30 rounded-lg p-4 border border-red-700/30">
                  <h4 className="font-semibold text-red-300 text-sm mb-2">✗ Harassment</h4>
                  <p className="text-xs text-gray-300">Abusing, threatening, or harming others</p>
                </div>
                <div className="bg-red-900/30 rounded-lg p-4 border border-red-700/30">
                  <h4 className="font-semibold text-red-300 text-sm mb-2">✗ Malicious Code</h4>
                  <p className="text-xs text-gray-300">Uploading viruses or harmful software</p>
                </div>
                <div className="bg-red-900/30 rounded-lg p-4 border border-red-700/30">
                  <h4 className="font-semibold text-red-300 text-sm mb-2">✗ Unauthorized Access</h4>
                  <p className="text-xs text-gray-300">Attempting to breach our systems</p>
                </div>
                <div className="bg-red-900/30 rounded-lg p-4 border border-red-700/30">
                  <h4 className="font-semibold text-red-300 text-sm mb-2">✗ Data Scraping</h4>
                  <p className="text-xs text-gray-300">Collecting data without permission</p>
                </div>
                <div className="bg-red-900/30 rounded-lg p-4 border border-red-700/30">
                  <h4 className="font-semibold text-red-300 text-sm mb-2">✗ Impersonation</h4>
                  <p className="text-xs text-gray-300">Pretending to be someone else</p>
                </div>
              </div>
            </div>

            {/* Termination Card */}
            <div id="termination" className="bg-[#1e2d4a] rounded-2xl shadow-xl p-8 border border-gray-700/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center mr-4">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Account Termination</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-blue-700/30">
                  <h3 className="font-semibold text-white mb-4">Termination by You</h3>
                  <p className="text-sm text-gray-200 mb-4">
                    You may close your account at any time by contacting us. Note that:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Fees already paid are non-refundable
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Access to courses will be revoked
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-xl p-6 border border-orange-700/30">
                  <h3 className="font-semibold text-white mb-4">Termination by Us</h3>
                  <p className="text-sm text-gray-200 mb-4">
                    We may suspend or terminate your account if you:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      Violate these Terms
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      Engage in fraudulent activity
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      Fail to pay fees
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Important Notice Card */}
            <div className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-2xl shadow-xl p-8 text-white border border-yellow-500/30">
              <div className="flex items-start mb-6">
                <AlertCircle className="w-8 h-8 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Important Legal Notice</h2>
                  <p className="text-yellow-50 mb-4">
                    These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction 
                    of courts in Mumbai, Maharashtra.
                  </p>
                  <p className="text-yellow-50 font-medium">
                    BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS AND AGREE TO BE BOUND BY THEM.
                  </p>
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