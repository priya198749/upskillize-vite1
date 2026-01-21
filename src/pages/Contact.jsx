import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiry: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setStatus("Sending...");

    try {
      console.log("Sending request to backend...");
      
      const res = await fetch("https://upskillize-vite1.onrender.com/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", res.status);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log("Response data:", data);

      if (data.success) {
        setStatus("✅ Message sent successfully! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          inquiry: "",
          message: ""
        });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error details:", error);
      
      if (error.message.includes("Failed to fetch")) {
        setStatus("❌ Cannot connect to server. Please check your internet connection and try again.");
      } else if (error.message.includes("NetworkError")) {
        setStatus("❌ Network error. Please check your internet connection.");
      } else {
        setStatus(`❌ Error: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452] overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
            Get in Touch
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto px-4">
            Have questions about courses, corporate training, or partnerships?
            We're here to help.
          </p>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-6">
              Contact Us
            </h2>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-2.5 sm:p-3 w-full text-sm sm:text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Name"
                  disabled={isLoading}
                />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-2.5 sm:p-3 w-full text-sm sm:text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Email"
                  disabled={isLoading}
                />
              </div>

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-2.5 sm:p-3 w-full text-sm sm:text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="Phone (optional)"
                disabled={isLoading}
              />

              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-2.5 sm:p-3 w-full text-sm sm:text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="Company (optional)"
                disabled={isLoading}
              />

              <select
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-2.5 sm:p-3 w-full text-sm sm:text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white cursor-pointer"
                disabled={isLoading}
              >
                <option value="">Select inquiry type</option>
                <option value="Academic Training">Academic Training</option>
                <option value="Business Consulting">Business Consulting</option>
                <option value="Corporate Training">Corporate Training</option>
                <option value="Products">Products</option>
                <option value="Partnership">Partnership</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-2.5 sm:p-3 w-full min-h-[100px] sm:min-h-[120px] text-sm sm:text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                placeholder="Message"
                disabled={isLoading}
              />

              <button
                onClick={handleSubmit}
                disabled={isLoading || !formData.name || !formData.email || !formData.inquiry || !formData.message}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition-all disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              {status && (
                <div className={`text-sm text-center mt-3 p-3 rounded-lg font-medium ${
                  status.includes("✅") 
                    ? "bg-green-100 text-green-800 border border-green-300" 
                    : status.includes("❌")
                    ? "bg-red-100 text-red-800 border border-red-300"
                    : "bg-blue-100 text-blue-800 border border-blue-300"
                }`}>
                  {status}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}