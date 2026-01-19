import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      company: e.target.company.value,
      inquiry: e.target.inquiry.value,
      message: e.target.message.value,
    };

    setStatus("Sending...");

    try {
      console.log("Sending request to backend...");
      
      const res = await fetch("http://localhost:5000/send-mail", {
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
        e.target.reset();
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error details:", error);
      
      if (error.message.includes("Failed to fetch")) {
        setStatus("❌ Cannot connect to server. Make sure the backend is running on port 5000.");
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

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  className="border border-gray-300 rounded-lg p-2.5 sm:p-3 w-full text-sm sm:text-base focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder="Name"
                  required
                  disabled={isLoading}
                />
                <input
                  name="email"
                  type="email"
                  className="border border-gray-300 rounded-lg p-2.5 sm:p-3 w-full text-sm sm:text-base focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder="Email"
                  required
                  disabled={isLoading}
                />
              </div>

              <input
                name="phone"
                className="border border-gray-300 rounded-lg p-2.5 sm:p-3 w-full text-sm sm:text-base focus:outline-none focus:border-gray-400 transition-colors"
                placeholder="Phone (optional)"
                disabled={isLoading}
              />

              <input
                name="company"
                className="border border-gray-300 rounded-lg p-2.5 sm:p-3 w-full text-sm sm:text-base focus:outline-none focus:border-gray-400 transition-colors"
                placeholder="Company (optional)"
                disabled={isLoading}
              />

              <select
                name="inquiry"
                className="border border-gray-300 rounded-lg p-2.5 sm:p-3 w-full text-sm sm:text-base focus:outline-none focus:border-gray-400 transition-colors"
                disabled={isLoading}
              >
                <option>Course Info</option>
                <option>Corporate Training</option>
                <option>Partnership</option>
              </select>

              <textarea
                name="message"
                className="border border-gray-300 rounded-lg p-2.5 sm:p-3 w-full min-h-[100px] sm:min-h-[120px] text-sm sm:text-base focus:outline-none focus:border-gray-400 transition-colors"
                placeholder="Message"
                required
                disabled={isLoading}
              />

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gray-800 text-white px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <div className={`text-sm text-center mt-3 p-3 rounded-lg ${
                  status.includes("✅") 
                    ? "bg-green-100 text-green-800" 
                    : status.includes("❌")
                    ? "bg-red-100 text-red-800"
                    : "bg-blue-100 text-blue-800"
                }`}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}