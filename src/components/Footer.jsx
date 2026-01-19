import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full mt-16 text-white">
      
      {/* ===== MAIN FOOTER ===== */}
      <div className="bg-gradient-to-r bg-gradient-to-br via-cyan-500 to-green-400">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold">Upskillize</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Where academia meets industry: Expert-designed, AI-powered learning programs that transform students into 
              career-ready professionals.
            </p>
          </div>

          {/* Programs */}
          <div>
           <h3 className="text-xl font-bold">Programs</h3>
             <ul className="space-y-2 text-sm mt-4">
               <li>
                 <Link to="/courses/ai-fintech" className="text-white/80 transition-colors">
                   AI in Fintech
                 </Link>
               </li>
               <li>
                 <Link to="/courses/product-leadership" className="text-white/80 transition-colors">
                   Product Leadership
                 </Link>
               </li>
               <li>
                 <Link to="/courses/data-analytics-genai" className="text-white/80 transition-colors">
                   Data Analytics, GenAI & BI
                 </Link>
               </li>
               <li>
                 <Link to="/courses/technology-digital-transformation" className="text-white/80 transition-colors">
                   Technology & DT
                 </Link>
               </li>
               <li>
                 <Link to="/courses/integrated-courses" className="text-white/80 transition-colors">
                   Integrated Courses
                 </Link>
               </li>
               <li>
                 <Link to="/courses/cybersecurity" className="text-white/80 transition-colors">
                   Cybersecurity Professional Track
                 </Link>
               </li>
             <li>
               <Link to="/courses/mental-health-wellness" className="text-white/80 transition-colors">
                 Mental Health & Social Wellness
               </Link>
             </li>
           </ul>
         </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm mt-4">
              <li>
                <Link to="/academic" className="text-white/80">
                  Academic
                </Link>
              </li>
              <li>
                <Link to="/corporate/consulting" className="text-white/80">
                  Business Consulting
                </Link>
              </li>
              <li>
                <Link to="/corporate/training" className="text-white/80">
                  Corporate Training
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-white/80">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold">Contact Us</h3>
            <p className="mt-4"><strong className="font-bold text-white/80">Amit Agrawal</strong></p>
            <p>Co-Founder & CSO</p>
            <p className="text-sm text-white/80 mt-2">
              📞 +91 98203 97297
            </p>
            <p className="text-sm text-white/80 mt-2">✉️ amit@upskillize.com </p>
          </div>

        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="bg-[#0B1D2A] border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="text-sm text-white/70">
            © {new Date().getFullYear()} Upskillize – Bridging industry & academia
          </div>

          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-sm text-white/70">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-white/70">
              Terms
            </Link>
            <Link to="/contact" className="text-sm text-white/70">
              Contact
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}