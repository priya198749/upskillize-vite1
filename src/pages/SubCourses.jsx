import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Award, TrendingUp } from 'lucide-react';
import { courses } from '../data/coursesData';

export default function SubCourses() {
  const { slug } = useParams();

  // Find the course across all categories
  let foundCourse = null;
  let foundCategory = null;

  courses.forEach(category => {
    const course = category.subCourses.find(c => c.slug === slug);
    if (course) {
      foundCourse = course;
      foundCategory = category;
    }
  });

  // If course not found, redirect to home
  if (!foundCourse) {
    return <Navigate to="/" replace />;
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

  // Check if course is coming soon
  const isComingSoon = !foundCourse.hasDetailPage && !availableCourses.includes(foundCourse.slug);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a2847] via-[#2d3e5f] to-[#3d5278]">
      {/* Back Navigation */}
      <div className="bg-gradient-to-br from-[#1a2847] via-[#2d3e5f] to-[#3d5278] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to={`/courses/${foundCategory.slug}`}
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to {foundCategory.mainCategory}
          </Link>
        </div>
      </div>

      {isComingSoon ? (
        /* ========== COMING SOON VIEW ========== */
        <div className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${foundCategory.color} text-white p-12 text-center`}>
                <div className="text-6xl mb-6">🚀</div>
                <h1 className="text-4xl font-bold mb-4">
                  {foundCourse.title}
                </h1>
                <p className="text-lg opacity-90">
                  {foundCourse.description}
                </p>
              </div>

              {/* Coming Soon Badge */}
              <div className="p-8 text-center">
                <div className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold mb-8">
                  Coming Soon!
                </div>

                <p className="text-gray-600 text-lg mb-8">
                  We're working hard to bring you this comprehensive course. Stay tuned for launch updates!
                </p>

                {/* Course Info Preview */}
                <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">What You'll Learn</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="text-left">
                      <div className="flex items-center gap-3 mb-3">
                        <Clock size={28} className="text-indigo-600" />
                        <div>
                          <p className="font-bold text-gray-800">Duration</p>
                          <p className="text-gray-600">{foundCourse.duration}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-3 mb-3">
                        <Award size={28} className="text-indigo-600" />
                        <div>
                          <p className="font-bold text-gray-800">Level</p>
                          <p className="text-gray-600">{foundCourse.level}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-3 mb-3">
                        <Users size={28} className="text-indigo-600" />
                        <div>
                          <p className="font-bold text-gray-800">Students</p>
                          <p className="text-gray-600">{foundCourse.students}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-3 mb-3">
                        <TrendingUp size={28} className="text-green-600" />
                        <div>
                          <p className="font-bold text-gray-800">Salary Range</p>
                          <p className="text-green-600 font-bold">{foundCourse.salary}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Preview */}
                  <div className="text-left">
                    <h3 className="font-bold text-gray-800 mb-4 text-lg">Course Highlights:</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {foundCourse.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="text-green-500 mr-2 text-xl">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/"
                    className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition"
                  >
                    Browse Other Programs
                  </Link>
                  
                  <Link
                    to="/contact"
                    className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition"
                  >
                    📧 Get Notified
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ========== FULL COURSE DETAIL VIEW (for ready courses) ========== */
        <div className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Course Header */}
              <div className={`bg-gradient-to-r ${foundCategory.color} text-white p-12`}>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {foundCourse.title}
                </h1>
                <p className="text-xl opacity-90 mb-6">
                  {foundCourse.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/20 px-4 py-2 rounded-full">
                    <span className="font-semibold">📋 {foundCourse.shortCode}</span>
                  </div>
                  <div className="bg-white/20 px-4 py-2 rounded-full">
                    <span className="font-semibold">🎓 {foundCourse.certType}</span>
                  </div>
                  <div className="bg-white/20 px-4 py-2 rounded-full">
                    <span className="font-semibold">⏱️ {foundCourse.duration}</span>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-12">
                {/* Stats Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <Clock size={32} className="mx-auto text-indigo-600 mb-2" />
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-bold text-gray-900">{foundCourse.duration}</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <Award size={32} className="mx-auto text-purple-600 mb-2" />
                    <p className="text-sm text-gray-600">Level</p>
                    <p className="font-bold text-gray-900">{foundCourse.level}</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <Users size={32} className="mx-auto text-blue-600 mb-2" />
                    <p className="text-sm text-gray-600">Students</p>
                    <p className="font-bold text-gray-900">{foundCourse.students}</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <TrendingUp size={32} className="mx-auto text-green-600 mb-2" />
                    <p className="text-sm text-gray-600">Salary</p>
                    <p className="font-bold text-green-600">{foundCourse.salary}</p>
                  </div>
                </div>

                {/* What You'll Learn */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    What You'll Learn
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {foundCourse.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start p-4 bg-indigo-50 rounded-lg">
                        <span className="text-indigo-600 mr-3 text-xl">✓</span>
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certification */}
                <div className="mb-12 p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    🎓 Certification
                  </h2>
                  <p className="text-lg text-gray-700">
                    <strong>{foundCourse.certification}</strong>
                  </p>
                  <div className="flex gap-3 mt-4">
                    <span className="px-4 py-2 bg-indigo-600 text-white rounded-full font-semibold">
                      {foundCourse.shortCode}
                    </span>
                    <span className="px-4 py-2 bg-purple-600 text-white rounded-full font-semibold">
                      {foundCourse.certType}
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="flex-1 text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition"
                  >
                    Enroll Now
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 text-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg border-2 border-indigo-600 hover:bg-indigo-50 transition"
                  >
                    Request Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}