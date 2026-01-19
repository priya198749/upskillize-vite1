import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-center overflow-x-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Page Not Found
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8">
          The page you are looking for doesn't exist.
        </p>
        <Link 
          to="/" 
          className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-indigo-600 text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-indigo-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}