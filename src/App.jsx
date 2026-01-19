import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import ScrollToTop from "./components/ScrollToTop";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";

import Home from "./pages/Home";
import Academic from "./pages/Academic";
import Corporate from "./pages/Corporate";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CourseDetails from "./pages/courses/CoursesDetails";
import SubCourses from "./pages/SubCourses";
import CoursesPage from "./pages/CoursesPage";


// About pages
import About from "./pages/About";

// New pages
import Solutions from "./pages/Products";
import CorporateConsulting from "./pages/Corporate/CorporateConsulting";
import CorporateTraining from "./pages/Corporate/CorporateTraining";
import OptiCost from "./pages/OptiCost";
import GDPR from "./pages/GDPR";
import VRM from "./pages/VRM";

// Courses pages
import BFSIDomainExcellence from "./pages/courses/BFSIDomainExcellence";
import InvestmentBankingWealthTech from "./pages/courses/InvestmentBankingWealthTech";
import RiskManagementRegTech from "./pages/courses/RiskManagementRegTech";
import AIProductManagementMastery from "./pages/courses/AIProductManagementMastery";
import ProductLeadershipProgram from "./pages/courses/ProductLeadershipProgram";
import DataToDecisionsPowerBI from "./pages/courses/DataToDecisionsPowerBI";
import MBAPlusPlus from "./pages/courses/MBAPlusPlus";
import CAIPLandingPage from "./pages/courses/CIPLandingPage";
import DigitalStrategyProgram from "./pages/courses/DigitalStrategyProgram";

import "./App.css";


function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <div className="min-h-screen w-full flex flex-col">
        
        {/* FIXED NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="flex-1">
          <Routes>
            {/* MAIN PAGES */}
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            
            {/* CORPORATES */}
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/corporate/consulting" element={<CorporateConsulting />} />
            <Route path="/corporate/training" element={<CorporateTraining />} />
            
            {/* ACADEMIC */}
            <Route path="/academic" element={<Academic />} />
            
            {/* ABOUT & CONTACT */}
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact />} />
            
            {/* COURSES (redirect to Academic for backward compatibility) */}
            <Route path="/courses" element={<Navigate to="/academic" replace />} />
            <Route path="/course/:slug" element={<CourseDetails />} />
            <Route path="/courses/:category" element={<CoursesPage />} />
            <Route path="/products/opti-cost" element={<OptiCost />} />
            <Route path="/products/gdpr" element={<GDPR />} />
            <Route path="/products/vra-platform" element={<VRM />} />

            {/* LEGAL */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            
            {/* Course Detail Pages */}
            <Route path="/courses/bfsi-domain-excellence-program" element={<BFSIDomainExcellence />} />
            <Route path="/courses/investment-banking-wealth-tech" element={<InvestmentBankingWealthTech />} />
            <Route path="/courses/risk-management-regtech-program" element={<RiskManagementRegTech />} />
            <Route path="/courses/the-mini-ceo-program" element={<ProductLeadershipProgram />} />
            <Route path="/courses/ai-product-management-mastery" element={<AIProductManagementMastery />} />
            <Route path="/courses/data-decisions" element={<DataToDecisionsPowerBI />} />
            <Route path="/courses/mba-plus-plus" element={<MBAPlusPlus />} />
            <Route path="/courses/ai-ml-business-leaders" element={<CAIPLandingPage />} />
            <Route path="/courses/digital-business-strategy-innovation" element={<DigitalStrategyProgram />} />

            {/* FALLBACK */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
       
      </div>
      <Footer />
    </Router>
  );
}

export default App;