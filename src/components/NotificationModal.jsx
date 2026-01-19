import React, { useState } from "react";
import { X, Mail } from "lucide-react";

export default function NotificationModal({ isOpen, onClose, courseTitle }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("sending");

    try {
      const response = await fetch('http://localhost:5000/send-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          courseName: courseTitle,
          date: new Date().toLocaleString()
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setTimeout(() => {
          onClose();
          setEmail("");
          setStatus("");
        }, 2500);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Stay Updated!</h2>
          </div>
          <p className="text-white/90">
            Get notified when <span className="font-semibold">{courseTitle}</span> launches
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {status !== "success" && status !== "error" && (
            <>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    disabled={isSubmitting}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100"
                  />
                </div>
              </div>

              <div className="bg-indigo-50 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-gray-700 mb-2">What you'll get:</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> Early access notification
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> Exclusive launch discounts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> Course updates and bonuses
                  </li>
                </ul>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isSubmitting ? "Submitting..." : "Notify Me When Available"}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </>
          )}

          {status === "success" && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">You're All Set!</h3>
              <p className="text-gray-600">
                We'll notify you when this program launches. Check your inbox for confirmation.
              </p>
            </div>
          )}

          {status === "error" && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Oops!</h3>
              <p className="text-gray-600 mb-4">
                Something went wrong. Please try again.
              </p>
              <button
                onClick={() => setStatus("")}
                className="text-indigo-600 font-semibold hover:text-indigo-700"
              >
                Try Again
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}