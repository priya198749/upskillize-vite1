import React, { useState, useEffect } from "react";
import { courses as coursesData } from "../data/coursesData";
import { ChevronDown, ChevronUp, ArrowLeft, BookOpen, Users, Award, TrendingUp } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import NotificationModal from "../components/NotificationModal";

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedComingSoonCourse, setSelectedComingSoonCourse] = useState(null);
  const categoryParam = searchParams.get('category');
  const [expandedCategory, setExpandedCategory] = useState(categoryParam || null);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  useEffect(() => {
    if (categoryParam) {
      setExpandedCategory(categoryParam);
      setTimeout(() => {
        const element = document.getElementById(`category-${categoryParam}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [categoryParam]);

  const toggleCategory = (id) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };
  
  const isCourseAvailable = (course) => {
    return course.hasDetailPage === true || 
           ['bfsi-domain-excellence-program', 'investment-banking-wealth-tech', 'risk-management-regtech-program', 
            'ai-product-management-mastery', 'the-mini-ceo-program', 'data-decisions', 
            'mba-plus-plus', 'ai-ml-business-leaders', 'digital-business-strategy-innovation'].includes(course.slug);
  };

  const handleComingSoonClick = (course, category) => {
    setSelectedComingSoonCourse({ ...course, category });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeComingSoon = () => {
    setSelectedComingSoonCourse(null);
  };

  if (selectedComingSoonCourse) {
    return (
      <div className="overflow-x-hidden">
        {/* Back Navigation */}
        <div className="bg-gradient-to-br from-[#1a2847] via-[#2d3e5f] to-[#3d5278] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <button 
              onClick={closeComingSoon}
              className="inline-flex items-center text-sm sm:text-base text-cyan-400 hover:text-cyan-300 font-semibold transition"
            >
              <ArrowLeft size={18} className="sm:w-5 sm:h-5 mr-2" />
              Back to All Courses
            </button>
          </div>
        </div>

        {/* Coming Soon Page */}
        <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452] flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-indigo-200">
            <div className="text-center mb-6 sm:mb-8">
              <div className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6">🚀</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
                {selectedComingSoonCourse.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 px-4">
                {selectedComingSoonCourse.description || "An exciting new course designed to advance your career"}
              </p>
              
              <div className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg md:text-xl font-bold mb-6 sm:mb-8 shadow-lg">
                Coming Soon!
              </div>
            </div>

            {/* Course Highlights */}
            <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-indigo-100">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                  <span className="text-xl sm:text-2xl mr-2 sm:mr-3">⏱️</span>
                  <div>
                    <div className="font-semibold text-sm sm:text-base text-gray-700">Duration</div>
                    <div className="text-sm sm:text-base text-gray-600">{selectedComingSoonCourse.duration}</div>
                  </div>
                </div>
                <div className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                  <span className="text-xl sm:text-2xl mr-2 sm:mr-3">📊</span>
                  <div>
                    <div className="font-semibold text-sm sm:text-base text-gray-700">Level</div>
                    <div className="text-sm sm:text-base text-gray-600">{selectedComingSoonCourse.level || "All Levels"}</div>
                  </div>
                </div>
                {selectedComingSoonCourse.students && (
                  <div className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                    <span className="text-xl sm:text-2xl mr-2 sm:mr-3">👥</span>
                    <div>
                      <div className="font-semibold text-sm sm:text-base text-gray-700">Students</div>
                      <div className="text-sm sm:text-base text-gray-600">{selectedComingSoonCourse.students} enrolled</div>
                    </div>
                  </div>
                )}
                {selectedComingSoonCourse.salary && (
                  <div className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                    <span className="text-xl sm:text-2xl mr-2 sm:mr-3">💰</span>
                    <div>
                      <div className="font-semibold text-sm sm:text-base text-gray-700">Salary Range</div>
                      <div className="text-sm sm:text-base text-green-600 font-bold">{selectedComingSoonCourse.salary}</div>
                    </div>
                  </div>
                )}
                {selectedComingSoonCourse.certification && (
                  <div className="flex items-start sm:col-span-2 bg-white p-3 rounded-lg shadow-sm">
                    <span className="text-xl sm:text-2xl mr-2 sm:mr-3">🎓</span>
                    <div>
                      <div className="font-semibold text-sm sm:text-base text-gray-700">Certification</div>
                      <div className="text-sm sm:text-base text-gray-600">{selectedComingSoonCourse.certification}</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 sm:mt-6">
                <h3 className="font-semibold text-sm sm:text-base text-gray-700 mb-2 sm:mb-3">Key Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedComingSoonCourse.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-indigo-700 rounded-full text-xs sm:text-sm font-medium shadow-sm border border-indigo-200"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-4">
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 px-4">
                We're working hard to bring you this comprehensive course. Stay tuned for updates!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={closeComingSoon}
                  className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold hover:from-indigo-700 hover:to-purple-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Browse Other Courses
                </button>
                
                <Link
                  to="/"
                  className="inline-block bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Go to Homepage
                </Link>
              </div>

              <div className="mt-6 sm:mt-8">
                <button 
                  onClick={() => setIsNotificationModalOpen(true)}
                  className="text-sm sm:text-base text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
                >
                  📧 Notify me when this course launches →
                </button>
              </div>
            </div>
          </div>
        </div>

        <NotificationModal
          isOpen={isNotificationModalOpen}
          onClose={() => setIsNotificationModalOpen(false)}
          courseTitle={selectedComingSoonCourse.title}
        />
      </div>
    );
  }

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452] min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hero Banner Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 sm:mb-16">
          <div className="grid md:grid-cols-2 gap-0 items-stretch">
            {/* Image Column */}
            <div className="relative h-full min-h-[350px] md:min-h-[500px] order-2 md:order-1">
              <img 
                src="https://plus.unsplash.com/premium_photo-1661418485113-aa181fd747b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fEJyaWRnZSUyMHRoZSUyMEdhcCUyMEJldHdlZW4lMjBBY2FkZW1pYSUyMGFuZCUyMEluZHVzdHJ5JTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D" 
                alt="Bridge the Gap Between Academia and Industry"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content Column */}
            <div className="p-8 sm:p-10 md:p-12 lg:p-16 order-1 md:order-2 flex flex-col justify-center bg-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Bridge the Gap Between Academia and Industry Reality
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Traditional education creates knowledge. We build capabilities. Our programs are designed by industry practitioners who understand the real-world challenges your teams face daily—from regulatory compliance complexities to AI implementation hurdles.
              </p>
              
              <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full p-1.5 sm:p-2 flex-shrink-0 mt-1">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <strong className="text-gray-900 font-bold text-sm sm:text-base">Industry-Aligned Curricula:</strong>
                    <span className="text-gray-600 text-sm sm:text-base"> Content developed from actual corporate challenges, not academic theory</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full p-1.5 sm:p-2 flex-shrink-0 mt-1">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <strong className="text-gray-900 font-bold text-sm sm:text-base">Hands-On Application:</strong>
                    <span className="text-gray-600 text-sm sm:text-base"> 70% experiential learning through case studies, simulations, and real projects</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full p-1.5 sm:p-2 flex-shrink-0 mt-1">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <strong className="text-gray-900 font-bold text-sm sm:text-base">Immediate Transferability:</strong>
                    <span className="text-gray-600 text-sm sm:text-base"> Skills that can be applied the very next day on the job</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full p-1.5 sm:p-2 flex-shrink-0 mt-1">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <strong className="text-gray-900 font-bold text-sm sm:text-base">Continuous Support:</strong>
                    <span className="text-gray-600 text-sm sm:text-base"> Post-training reinforcement and coaching to ensure lasting behavioral change</span>
                  </div>
                </div>
              </div>
              
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="bg-white/10 backdrop-blur-sm text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-500/30">
              🎓 Transform Your Career
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Programs
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Unlock industry-aligned courses built for real-world success
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <div className="flex items-center gap-2 text-white">
                <BookOpen size={20} />
                <span className="font-semibold">18 Courses</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <div className="flex items-center gap-2 text-white">
                <Users size={20} />
                <span className="font-semibold">50+ Capstone Project</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <div className="flex items-center gap-2 text-white">
                <Award size={20} />
                <span className="font-semibold">Industry Certified</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="space-y-6">
            {coursesData.map((category) => {
              // Sort subcourses: available courses first, coming soon courses last
              const sortedSubCourses = [...category.subCourses].sort((a, b) => {
                const aAvailable = isCourseAvailable(a);
                const bAvailable = isCourseAvailable(b);
                
                if (aAvailable && !bAvailable) return -1;
                if (!aAvailable && bAvailable) return 1;
                return 0;
              });

              return (
                <div
                  key={category.id}
                  id={`category-${category.id}`}
                  className="bg-gradient-to-br from-[#1e2d4a]/90 to-[#2d3e5f]/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/10 hover:shadow-2xl hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div
                    className="flex items-center justify-between p-6 sm:p-8 cursor-pointer hover:bg-white/5 transition-all duration-300 group"
                    onClick={() => toggleCategory(category.id)}
                  >
                    <div className="flex items-center gap-4 sm:gap-6 flex-1">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-30 blur-xl rounded-2xl`}></div>
                        <img
                          src={category.image}
                          alt={category.mainCategory}
                          className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl object-cover flex-shrink-0 shadow-lg border-2 border-cyan-400/30"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {category.mainCategory}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300 mb-2">
                          {category.shortDesc}
                        </p>
                        {category.subCourses.length > 0 && (
                          <div className="flex items-center gap-2">
                            <span className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${category.color} text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-md`}>
                              <BookOpen size={14} />
                              {category.subCourses.length} course{category.subCourses.length > 1 ? 's' : ''}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    {category.subCourses.length > 0 && (
                      <button className="text-cyan-400 p-3 hover:bg-white/10 rounded-xl transition-all duration-300 flex-shrink-0 group-hover:scale-110">
                        {expandedCategory === category.id ? (
                          <ChevronUp className="w-6 h-6 sm:w-7 sm:h-7" />
                        ) : (
                          <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7" />
                        )}
                      </button>
                    )}
                  </div>

                  {expandedCategory === category.id && category.subCourses.length > 0 && (
                    <div className="border-t border-white/10 bg-gradient-to-br from-[#0f1729]/50 to-[#1a2847]/50 backdrop-blur-sm p-6 sm:p-8">
                      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {sortedSubCourses.map((course) => {
                          const isAvailable = isCourseAvailable(course);
                          
                          return (
                            <div
                              key={course.id}
                              className={`group relative bg-gradient-to-br from-[#1e2d4a] via-[#2a3f5f] to-[#1e2d4a] p-5 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col border border-cyan-400/20 hover:border-cyan-400/60 transform hover:-translate-y-2 hover:scale-[1.02] ${
                                !isAvailable ? 'opacity-90' : ''
                              }`}
                              style={{
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(96, 165, 250, 0.1)',
                                minHeight: '480px'
                              }}
                            >
                              {/* Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                              
                              {/* Glow Effect */}
                              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-purple-500/0 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                              <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-4">
                                  <h4 className="text-lg sm:text-xl font-bold text-white flex-1 pr-2 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300" style={{ minHeight: '3.5rem' }}>
                                    {course.title}
                                  </h4>
                                  {!isAvailable && (
                                    <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1.5 rounded-full text-xs font-bold ml-2 whitespace-nowrap flex-shrink-0 shadow-lg animate-pulse">
                                      Coming Soon
                                    </span>
                                  )}
                                </div>

                                <div className="space-y-2.5 mb-4">
                                  <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                                    <strong className="font-semibold text-white">Duration:</strong> {course.duration}
                                  </div>
                                  {course.certification && (
                                    <>
                                      <div className="flex items-start gap-2 text-sm text-gray-300">
                                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 animate-pulse"></div>
                                        <div className="line-clamp-2">
                                          <strong className="font-semibold text-white">Certification:</strong> {course.certification}
                                        </div>
                                      </div>
                                      <div className="flex gap-2 flex-wrap mt-2">
                                        {course.shortCode && (
                                          <span className="text-xs bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-3 py-1.5 rounded-full font-semibold border border-cyan-400/40 backdrop-blur-sm">
                                            {course.shortCode}
                                          </span>
                                        )}
                                        {course.certType && (
                                          <span className="text-xs bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 px-3 py-1.5 rounded-full font-semibold border border-green-400/40 backdrop-blur-sm">
                                            {course.certType}
                                          </span>
                                        )}
                                      </div>
                                    </>
                                  )}
                                </div>

                                <div className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-indigo-500/10 rounded-xl p-4 mb-4 border border-cyan-400/20 backdrop-blur-sm flex-grow">
                                  <h5 className="text-xs font-bold text-cyan-400 mb-2 uppercase tracking-wide flex items-center gap-2">
                                    <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></span>
                                    Key Skills
                                  </h5>
                                  <ul className="space-y-2">
                                    {course.highlights.slice(0, 3).map((highlight, i) => (
                                      <li key={i} className="flex items-start text-sm text-gray-200">
                                        <span className="text-cyan-400 mr-2 flex-shrink-0 mt-0.5">◆</span>
                                        <span className="line-clamp-1">{highlight}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="flex gap-3 pt-4 border-t border-cyan-400/20 mt-auto">
                                  {isAvailable ? (
                                    <Link
                                      to={`/courses/${course.slug}`}
                                      className="flex-1 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500 transition-all duration-300 text-white text-sm font-bold shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-0.5"
                                    >
                                      Learn More
                                    </Link>
                                  ) : (
                                    <button
                                      onClick={() => handleComingSoonClick(course, category)}
                                      className="flex-1 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500 transition-all duration-300 text-white text-sm font-bold shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-0.5"
                                    >
                                      Learn More
                                    </button>
                                  )}
                                  
                                  {isAvailable ? (
                                    <Link
                                      to="/contact"
                                      className="flex-1 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 transition-all duration-300 text-white text-sm font-bold shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-0.5"
                                    >
                                      Enroll Now
                                    </Link>
                                  ) : (
                                    <button
                                      onClick={() => handleComingSoonClick(course, category)}
                                      className="flex-1 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 transition-all duration-300 text-white text-sm font-bold shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-0.5"
                                    >
                                      Enroll Now
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}