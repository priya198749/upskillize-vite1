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
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-base font-semibold mb-3">Social Media</h4>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.linkedin.com/in/upskillize-excel-beyond-a88b883a7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://x.com/upskillize36330" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
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