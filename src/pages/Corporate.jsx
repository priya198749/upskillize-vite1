import React from "react";

export default function Corporate() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452] overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center px-4 text-white">
          Corporate Training Solutions
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl mb-8 sm:mb-10 mx-auto text-center px-4">
          Upskill your workforce with AI-Driven Programs, Domain Training and Leadership Development.
        </p>

        {/* Section: Why Choose Us */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {[
            {
              title: "Customized Programs",
              desc: "Tailored to your business goals and employee skill levels.",
            },
            {
              title: "Industry Expert Trainers",
              desc: "Sessions delivered by leaders from top global companies.",
            },
            {
              title: "Live + On-Demand Learning",
              desc: "Flexible, scalable training for modern organizations.",
            },
          ].map((box, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-indigo-600 mb-2">
                {box.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">{box.desc}</p>
            </div>
          ))}
        </div>

        {/* Section: Banner */}
        <div className="bg-white/10 backdrop-blur-sm text-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg mb-12 sm:mb-16 border border-white/20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center">Corporate Courses We Offer</h2>
          <p className="mb-4 sm:mb-6 max-w-3xl mx-auto text-center text-sm sm:text-base px-4 text-gray-200">
            AI Transformation • Product Leadership • Risk & Compliance • BFSI Domain Excellence
          </p>
        </div>

        {/* Section: Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {[
            {
              title: "AI Upskilling Program",
              points: [
                "GenAI Hands-on Labs",
                "AI product lifecycle",
                "Data-driven decision training",
              ],
            },
            {
              title: "BFSI Domain Excellence",
              points: [
                "Regulatory compliance",
                "FinTech ecosystem",
                "Digital banking innovations",
              ],
            },
          ].map((pkg, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-white rounded-xl shadow hover:shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-3 sm:mb-4">
                {pkg.title}
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                {pkg.points.map((pt, i) => (
                  <li key={i}>• {pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}