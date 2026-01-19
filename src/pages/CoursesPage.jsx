import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { courses } from "../data/coursesData";
import NotificationModal from "../components/NotificationModal";

export default function CoursesPage() {
  const { category } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  
  // Find the category data
  const categoryData = courses.find(c => c.slug === category);

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center px-4 sm:px-6 overflow-x-hidden">
        <div className="max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-8 sm:p-12 text-center">
          <div className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6">❌</div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Category Not Found
          </h1>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold hover:from-indigo-700 hover:to-purple-700 transition"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    );
  }

  // Check if category has no courses (Coming Soon)
  if (!categoryData.subCourses || categoryData.subCourses.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452] overflow-x-hidden">
        {/* Back Navigation */}
        <div className="bg-[#1a2847] py-3 sm:py-4 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Link 
              to="/"
              className="inline-flex items-center text-sm sm:text-base text-cyan-400 hover:text-cyan-300 font-semibold transition"
            >
              <ArrowLeft size={18} className="sm:w-5 sm:h-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="py-12 sm:py-16 px-4 sm:px-6 flex items-center justify-center min-h-[80vh]">
          <div className="max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
            {/* Header with gradient */}
            <div className={`bg-gradient-to-r ${categoryData.color} text-white p-8 sm:p-12 text-center`}>
              <div className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6">🚀</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                {categoryData.mainCategory}
              </h1>
              <p className="text-base sm:text-lg md:text-xl opacity-90">
                {categoryData.shortDesc}
              </p>
            </div>

            {/* Coming Soon Badge */}
            <div className="p-6 sm:p-8 md:p-12 text-center">
              <div className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold mb-6 sm:mb-8 animate-pulse">
                Coming Soon!
              </div>

              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4">
                We're working hard to bring you comprehensive courses in {categoryData.mainCategory}. Stay tuned for exciting programs launching soon!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  to="/"
                  className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold hover:from-indigo-700 hover:to-purple-700 transition"
                >
                  Browse Other Programs
                </Link>
                
                <button
                  onClick={() => {
                    setSelectedCourse(categoryData.mainCategory);
                    setIsModalOpen(true);
                  }}
                  className="inline-block bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition"
                >
                  📧 Get Notified
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Modal */}
        <NotificationModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          courseTitle={selectedCourse}
        />
      </div>
    );
  }

  // List of courses that have detailed pages (ready/available courses)
  const availableCourses = [
    'bfsi-domain-excellence-program', 
    'investment-banking-wealth-tech', 
    'risk-management-regtech-program', 
    'ai-product-management-mastery', 
    'the-mini-ceo-program', 
    'data-decisions', 
    'mba-plus-plus', 
    'ai-ml-business-leaders', 
    'digital-business-strategy-innovation'
  ];

  // Check if course is available
  const isCourseAvailable = (course) => {
    return course.hasDetailPage === true || availableCourses.includes(course.slug);
  };

  // Sort courses: ready courses first, then coming soon
  const sortedCourses = [...categoryData.subCourses].sort((a, b) => {
    const aReady = isCourseAvailable(a);
    const bReady = isCourseAvailable(b);
    
    if (aReady && !bReady) return -1;
    if (!aReady && bReady) return 1;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452] overflow-x-hidden">
      {/* Back Navigation */}
      <div className="bg-[#1a2847] py-3 sm:py-4 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link 
            to="/"
            className="inline-flex items-center text-sm sm:text-base text-cyan-400 hover:text-cyan-300 font-semibold transition"
          >
            <ArrowLeft size={18} className="sm:w-5 sm:h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Header Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4 px-4">
            {categoryData.mainCategory}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            {categoryData.shortDesc}
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`grid gap-6 ${
            sortedCourses.length === 1 
              ? 'grid-cols-1 justify-items-center' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}>
            {sortedCourses.map((course) => {
              const isComingSoon = !isCourseAvailable(course);
              
              return (
                <div
                  key={course.id}
                  className={`group relative bg-gradient-to-br from-[#1e2d4a] via-[#2a3f5f] to-[#1e2d4a] p-5 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col border border-cyan-400/20 hover:border-cyan-400/60 transform hover:-translate-y-2 hover:scale-[1.02] ${
                    sortedCourses.length === 1 ? 'max-w-md w-full' : ''
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
                      {isComingSoon && (
                        <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1.5 rounded-full text-xs font-bold ml-2 whitespace-nowrap flex-shrink-0 shadow-lg animate-pulse">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    <div className="space-y-2.5 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        <strong className="font-semibold text-white">Duration:</strong> {course.duration}
                      </div>
                      {course.certification && (
                        <>
                          <div className="flex items-start gap-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5"></div>
                            <div className="line-clamp-2">
                              <strong className="font-semibold text-white">Certification:</strong> {course.certification}
                            </div>
                          </div>
                          <div className="flex gap-2 flex-wrap mt-2">
                            {course.shortCode && (
                              <span className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1.5 rounded-full font-semibold border border-cyan-400/40">
                                {course.shortCode}
                              </span>
                            )}
                            {course.certType && (
                              <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1.5 rounded-full font-semibold border border-green-400/40">
                                {course.certType}
                              </span>
                            )}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-indigo-500/10 rounded-xl p-4 mb-4 border border-cyan-400/20 flex-grow">
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
                      <Link
                        to={`/course/${course.slug}`}
                        className="flex-1 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500 transition-all duration-300 text-white text-sm font-bold shadow-lg"
                      >
                        Learn More
                      </Link>
                      
                      <Link
                        to="/contact"
                        className="flex-1 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 transition-all duration-300 text-white text-sm font-bold shadow-lg"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notification Modal */}
      <NotificationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseTitle={selectedCourse}
      />
    </div>
  );
}