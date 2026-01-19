import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { courses } from "../../data/coursesData";
import DigitalStrategyProgram from "./DigitalStrategyProgram";
import BFSIDomainExcellence from "./BFSIDomainExcellence";
import InvestmentBankingWealthTech from "./InvestmentBankingWealthTech";
import RiskManagementRegTech from "./RiskManagementRegTech";
import AIProductManagementMastery from "./AIProductManagementMastery";
import ProductLeadershipProgram from "./ProductLeadershipProgram";
import DataToDecisionsPowerBI from "./DataToDecisionsPowerBI";
import MBAPlusPlus from "./MBAPlusPlus";
import CIPLandingPage from "./CIPLandingPage";
import NotificationModal from "../../components/NotificationModal";

export default function CourseDetails() {
  const { slug } = useParams();
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  // Find the course by slug
  const course = courses
    .flatMap(cat => cat.subCourses)
    .find(c => c.slug === slug);

  // Find the parent category
  const category = courses.find(cat => 
    cat.subCourses.some(c => c.slug === slug)
  );

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center px-4 sm:px-6 overflow-x-hidden">
        <div className="max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-8 sm:p-12 text-center">
          <div className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6">❌</div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Course Not Found
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
            Sorry, we couldn't find the course you're looking for.
          </p>
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

  // Map course slugs to their detailed page components
  const detailPageComponents = {
    'bfsi-domain-excellence-program': BFSIDomainExcellence,
    'investment-banking-wealth-tech': InvestmentBankingWealthTech,
    'risk-management-regtech-program': RiskManagementRegTech,
    'ai-product-management-mastery': AIProductManagementMastery,
    'the-mini-ceo-program': ProductLeadershipProgram,
    'data-decisions': DataToDecisionsPowerBI,
    'mba-plus-plus': MBAPlusPlus,
    'ai-ml-business-leaders': CIPLandingPage,
    'digital-business-strategy-innovation': DigitalStrategyProgram
  };

  // Check if this course has a detailed page component
  const DetailComponent = detailPageComponents[slug];

  if (DetailComponent) {
    return (
      <div className="overflow-x-hidden">
        {/* Back Navigation */}
        <div className="bg-gradient-to-br from-[#1a2847] via-[#2d3e5f] to-[#3d5278] py-3 sm:py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Link 
              to={`/courses/${category.slug}`}
              className="inline-flex items-center text-sm sm:text-base text-cyan-400 hover:text-cyan-300 font-semibold transition"
            >
              <ArrowLeft size={18} className="sm:w-5 sm:h-5 mr-2" />
              Back to {category.mainCategory}
            </Link>
          </div>
        </div>

        {/* Full Course Page */}
        <DetailComponent />
      </div>
    );
  }

  // Otherwise, show the "Coming Soon" page with course details
  return (
    <div className="overflow-x-hidden">
      {/* Back Navigation */}
      <div className="bg-gradient-to-br from-[#1a2847] via-[#2d3e5f] to-[#3d5278] py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link 
            to={`/courses/${category.slug}`}
            className="inline-flex items-center text-sm sm:text-base text-cyan-400 hover:text-cyan-300 font-semibold transition"
          >
            <ArrowLeft size={18} className="sm:w-5 sm:h-5 mr-2" />
            Back to {category.mainCategory}
          </Link>
        </div>
      </div>

      {/* Coming Soon Page */}
      <div className="min-h-screen bg-gradient-to-br from-[#1a2847] via-[#2d3e5f] to-[#3d5278] flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12">
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6">🚀</div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">
              {course.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 sm:mb-6 px-4">
              {course.description}
            </p>
            
            <div className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg md:text-xl font-bold mb-6 sm:mb-8">
              Coming Soon!
            </div>
          </div>

          {/* Course Highlights */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">What You'll Learn</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-start">
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3">⏱️</span>
                <div>
                  <div className="font-semibold text-sm sm:text-base text-gray-700">Duration</div>
                  <div className="text-sm sm:text-base text-gray-600">{course.duration}</div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3">📊</span>
                <div>
                  <div className="font-semibold text-sm sm:text-base text-gray-700">Level</div>
                  <div className="text-sm sm:text-base text-gray-600">{course.level}</div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3">👥</span>
                <div>
                  <div className="font-semibold text-sm sm:text-base text-gray-700">Students</div>
                  <div className="text-sm sm:text-base text-gray-600">{course.students} enrolled</div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3">💰</span>
                <div>
                  <div className="font-semibold text-sm sm:text-base text-gray-700">Salary Range</div>
                  <div className="text-sm sm:text-base text-green-600 font-bold">{course.salary}</div>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6">
              <h3 className="font-semibold text-sm sm:text-base text-gray-700 mb-2 sm:mb-3">Key Skills</h3>
              <div className="flex flex-wrap gap-2">
                {course.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-gray-700 rounded-full text-xs sm:text-sm font-medium shadow-sm"
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
              <Link
                to={`/courses/${category.slug}`}
                className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold hover:from-indigo-700 hover:to-purple-700 transition"
              >
                Browse Other Courses
              </Link>
              
              <Link
                to="/"
                className="inline-block bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition"
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

      {/* Notification Modal */}
      <NotificationModal
        isOpen={isNotificationModalOpen}
        onClose={() => setIsNotificationModalOpen(false)}
        courseTitle={course.title}
      />
    </div>
  );
}