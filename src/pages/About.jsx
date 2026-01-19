import React, { useEffect } from 'react';

const About = () => {
  // Inject styles on component mount
  useEffect(() => {
    const styleId = 'about-us-styles';
    
    // Check if styles already exist
    if (!document.getElementById(styleId)) {
      const styleSheet = document.createElement('style');
      styleSheet.id = styleId;
      styleSheet.textContent = styles;
      document.head.appendChild(styleSheet);
    }

    // Cleanup function to remove styles when component unmounts
    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  return (
    <div className="about-us-page">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">About Upskillize</span>
          <h1>Meet the Minds Behind<br/>Your Success</h1>
          <p className="hero-subtitle">
            Industry veterans and thought leaders dedicated to bridging the gap between 
            academic excellence and real-world industry expertise.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission-section">
        <div className="mission-content">
          <p className="mission-quote">
            At Upskillize, we empower professionals and students with practical, 
            industry-relevant skills in BFSI, AI Product Management, BI Tools, and GenAI. 
            Our approach combines deep domain expertise with innovative educational methodologies 
            to create transformative learning experiences that drive real career outcomes.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section leadership-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Leadership</span>
            <h2 className="section-title">Visionary Leadership</h2>
            <p className="section-description">
              Guiding Upskillize with strategic vision and extensive industry experience
            </p>
          </div>

          <div className="leader-card">
            <div className="leader-image-wrapper">
              <img 
                src="/images/advisorsIMG/AA.jpg" 
                alt="Amit Agrawal" 
                className="leader-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="leader-initials" style={{display: 'none'}}>AA</div>
            </div>
            <div className="leader-content">
              <h3 className="leader-name">Amit Agrawal</h3>
              <p className="leader-role">Co-Founder & Chief Sales Officer</p>
              <p className="leader-bio">
                A visionary leader with extensive experience in driving business growth and 
                building strategic partnerships across the EdTech and professional services landscape. 
                Amit brings unparalleled expertise in sales strategy, client relationship management, 
                and scaling business models. His passion for industry-academia collaboration has been 
                instrumental in establishing Upskillize's innovative B2B2C approach and forging partnerships 
                with premier MBA institutions to deliver cutting-edge professional education.
              </p>
              <a 
                href="https://www.linkedin.com/in/amit-agrawal-5468021/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="linkedin-btn"
              >
                <LinkedInIcon />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Advisors & Mentors Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Mentors</span>
            <h2 className="section-title">Advisors & Mentors</h2>
            <p className="section-description">
              Distinguished industry experts providing strategic guidance and mentorship
            </p>
          </div>

          <div className="advisors-grid">
            {/* Advisor 1: Dr. Nirakar Pradhan */}
            <AdvisorCard
              initials="NP"
              photo="/images/advisorsIMG/NP.jpg"
              name="Dr. Nirakar Pradhan"
              title="PhD, PRM, CFA, FRM"
              bio="30+ years of extensive leadership in the financial sector with expertise in investment management and risk. 
                   Former CIO at Future Generali India Life Insurance and CEO of PRMIA. 
                   Independent Director at Finance Industry Development Council (FIDC). 
                   Recognized thought leader in risk management and capital markets."
              linkedin="https://www.linkedin.com/in/drnirakar/"
            />

            {/* Advisor 2: Ramesh Gupta */}
            <AdvisorCard
              initials="RG"
              photo="/images/advisorsIMG/RG.jpg"
              name="Ramesh Gupta"
              title="FinTech, Product & Dx Specialist"
              bio="22+ years of global financial services experience with senior leadership roles at 
                   Credit Suisse Singapore, Emirates NBD Dubai, FIS Solutions, and Oracle Financial Services. 
                   Expert in risk management, regulatory compliance, and digital transformation with certifications 
                   including SAFe 6.0, FRM, and PABF from IIM Bangalore."
              linkedin="https://www.linkedin.com/in/krgupta/"
            />

            {/* Advisor 3: Alok Kumar */}
            <AdvisorCard
              initials="AK"
              photo="/images/advisorsIMG/AK.jpg"
              name="Alok Kumar"
              title="Business & Technology Executive"
              bio="Distinguished business and technology leader with deep expertise in digital transformation, 
                   consulting, and strategic execution across BFSI, thought leadership, and technology sectors. 
                   Proven track record of driving innovation and delivering complex enterprise solutions 
                   that bridge business objectives with cutting-edge technology."
              linkedin="https://www.linkedin.com/in/alokkumar1978/"
            />

            {/* Advisor 4: Rajendra vemulapalli */}
            <AdvisorCard
              initials="RV"
              photo="/images/advisorsIMG/RV.jpg"
              name="Rajendra Vemulapalli"
              title="Banking Technology & IT Strategy Expert"
              bio="Accomplished banking technology professional with extensive experience in core banking systems, 
                   digital transformation, and enterprise architecture. Proven expertise in leading large-scale 
                   technology implementations and driving innovation across financial services in global markets."
              linkedin="https://www.linkedin.com/in/rajendra-vemulapalli-75031013/"
            />

            {/* Advisor 5: Dr. PurnachandraRao B */}
            <AdvisorCard
              initials="PB"
              photo="/images/advisorsIMG/PR.jpg"
              name="Dr. PurnachandraRao B"
              title="DevOps, Cloud and Quantum Computing Expert"
              bio="Ph.D. in Computer Science with 20+ years bridging academic research and industry practice. 
                   Expert in DevOps architectures, cloud platforms, and Java technologies. Pioneering work in 
                   quantum computing algorithms, quantum cryptography, and quantum-inspired approaches to natural 
                   language processing and drug discovery, merging theoretical foundations with real-world applications."
              linkedin="https://www.linkedin.com/in/bobbepalli/"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Career?</h2>
          <p className="cta-subtitle">
            Join NextGen professionals advancing their skills with Upskillize
          </p>
          <a href="/courses" className="cta-button">
            Explore Our Programs
          </a>
        </div>
      </section>
    </div>
  );
};

// Reusable Advisor Card Component
const AdvisorCard = ({ initials, name, title, bio, linkedin, photo }) => (
  <div className="advisor-card">
    <div className="advisor-image-wrapper">
      {photo ? (
        <img 
          src={photo} 
          alt={name} 
          className="advisor-photo"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'flex';
          }}
        />
      ) : null}
      <div className="advisor-initials" style={{display: photo ? 'none' : 'flex'}}>{initials}</div>
    </div>
    <div className="advisor-content">
      <h3 className="advisor-name">{name}</h3>
      <p className="advisor-title">{title}</p>
      <p className="advisor-bio">{bio}</p>
      <a 
        href={linkedin} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="advisor-linkedin"
      >
        <LinkedInIcon />
        View Profile
      </a>
    </div>
  </div>
);

// LinkedIn Icon Component
const LinkedInIcon = () => (
  <svg className="linkedin-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Embedded CSS Styles
const styles = `
@import url('https://fonts.googleapis.com/css2?family=Spectral:wght@400;600;700&family=Work+Sans:wght@400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --navy-deep: #2E5C8A;
    --navy-mid: #4A6FA5;
    --blue-primary: #5B7BA8;
    --blue-accent: #3B7EA1;
    --teal-bright: #4E6D8E;
    --gray-50: #F9FAFB;
    --gray-100: #F3F4F6;
    --gray-300: #D1D5DB;
    --gray-600: #4B5563;
    --gray-800: #1F2937;
    --gray-900: #111827;
    --text-primary: var(--gray-900);
    --text-secondary: var(--gray-600);
    --bg-primary: #FFFFFF;
    --bg-secondary: var(--gray-50);
}

body {
    font-family: 'Work Sans', sans-serif;
    color: var(--text-primary);
    background: var(--bg-primary);
    line-height: 1.6;
    overflow-x: hidden;
}

.about-us-page {
    width: 100%;
    background: linear-gradient(to bottom right, #0f1729, #1a2847, #243452);
}

.hero {
    background: linear-gradient(135deg, #0a1628 0%, #1a2d4a 50%, #1e3a5f 100%);
    padding: 6rem 2rem 5rem;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(59, 126, 161, 0.15) 0%, transparent 70%);
    border-radius: 50%;
}

.hero::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(78, 109, 142, 0.1) 0%, transparent 70%);
    border-radius: 50%;
}

.hero-content {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    animation: fadeInUp 0.8s ease-out;
}

.hero-tag {
    display: inline-block;
    background: rgba(59, 126, 161, 0.2);
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-bottom: 1.5rem;
    backdrop-filter: blur(10px);
}

.hero h1 {
    font-family: 'Spectral', serif;
    font-size: 4rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.9);
    max-width: 700px;
    line-height: 1.8;
    font-weight: 400;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.section {
    padding: 5rem 0;
    background: transparent;
}

.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-tag {
    display: inline-block;
    color: #60a5fa;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 1rem;
}

.section-title {
    font-family: 'Spectral', serif;
    font-size: 3rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
}

.section-description {
    font-size: 1.2rem;
    color: #d1d5db;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
}

.leadership-section {
    background: linear-gradient(to right, rgba(14, 23, 41, 0.8), rgba(26, 45, 74, 0.8), rgba(30, 58, 95, 0.8));
}

.leader-card {
    background: rgba(30, 45, 74, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(96, 165, 250, 0.2);
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: 0;
    max-width: 1000px;
    margin: 0 auto;
    animation: fadeInScale 0.8s ease-out;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.leader-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 80px rgba(96, 165, 250, 0.2);
}

.leader-image-wrapper {
    position: relative;
    background: linear-gradient(135deg, #0a1628, #1a2d4a);
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.leader-image-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
    background-size: 200% 200%;
    animation: shimmer 3s infinite;
    z-index: 1;
}

@keyframes shimmer {
    0%, 100% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
}

.leader-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
    display: block;
    position: relative;
    z-index: 2;
}

.leader-initials {
    font-family: 'Spectral', serif;
    font-size: 7rem;
    font-weight: 700;
    color: white;
    text-shadow: 0 4px 20px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
}

.advisor-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    position: relative;
    z-index: 2;
}

.leader-content {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.leader-name {
    font-family: 'Spectral', serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.5rem;
}

.leader-role {
    font-size: 1.3rem;
    color: #60a5fa;
    font-weight: 600;
    margin-bottom: 1.5rem;
}

.leader-bio {
    font-size: 1.1rem;
    color: #d1d5db;
    line-height: 1.9;
    margin-bottom: 2rem;
}

.linkedin-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    background: #3b82f6;
    color: white;
    text-decoration: none;
    padding: 1rem 2rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    width: fit-content;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.linkedin-btn:hover {
    background: #FFD700;
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(59, 130, 246, 0.4);
}

.advisors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 2.5rem;
    margin-top: 3rem;
}

.advisor-card {
    background: rgba(30, 45, 74, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(96, 165, 250, 0.2);
    border-radius: 20px;
    padding: 0;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    animation: fadeInUp 0.6s ease-out backwards;
}

.advisor-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(96, 165, 250, 0.2);
    border-color: #60a5fa;
}

.advisor-image-wrapper {
    position: relative;
    background: linear-gradient(135deg, #0a1628, #1a2d4a);
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.advisor-image-wrapper::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(to top, rgba(0,0,0,0.3), transparent);
    z-index: 1;
}

.advisor-initials {
    font-family: 'Spectral', serif;
    font-size: 5rem;
    font-weight: 700;
    color: white;
    text-shadow: 0 4px 15px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
}

.advisor-content {
    padding: 2rem;
}

.advisor-name {
    font-family: 'Spectral', serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.5rem;
}

.advisor-title {
    font-size: 1rem;
    color: #60a5fa;
    font-weight: 600;
    margin-bottom: 1.25rem;
    line-height: 1.5;
}

.advisor-bio {
    font-size: 0.95rem;
    color: #d1d5db;
    line-height: 1.8;
    margin-bottom: 1.75rem;
}

.advisor-linkedin {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    color: #60a5fa;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    padding: 0.75rem 1.5rem;
    border: 2px solid #60a5fa;
    border-radius: 10px;
    transition: all 0.3s ease;
}

.advisor-linkedin:hover {
    background: #60a5fa;
    color: white;
    transform: translateX(4px);
}

.linkedin-icon {
    width: 20px;
    height: 20px;
}

.mission-section {
    background: linear-gradient(135deg, #0a1628, #1a2d4a);
    color: white;
    padding: 5rem 2rem;
    position: relative;
    overflow: hidden;
}

.mission-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 100px,
        rgba(255,255,255,0.02) 100px,
        rgba(255,255,255,0.02) 200px
    );
}

.mission-content {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}

.mission-quote {
    font-family: 'Spectral', serif;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.8;
    text-align: center;
    position: relative;
    padding: 2rem 3rem;
}

.mission-quote::before,
.mission-quote::after {
    font-family: 'Spectral', serif;
    font-size: 5rem;
    color: rgba(255, 255, 255, 0.3);
    opacity: 0.4;
    position: absolute;
}

.mission-quote::before {
    content: '"';
    top: 0;
    left: 0;
}

.mission-quote::after {
    content: '"';
    bottom: -1rem;
    right: 0;
}

.cta-section {
    background: linear-gradient(to right, rgba(14, 23, 41, 0.8), rgba(26, 45, 74, 0.8), rgba(30, 58, 95, 0.8));
    padding: 5rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.cta-section::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, transparent 70%);
    border-radius: 50%;
}

.cta-content {
    position: relative;
    z-index: 2;
}

.cta-title {
    font-family: 'Spectral', serif;
    font-size: 3rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1.5rem;
}

.cta-subtitle {
    font-size: 1.3rem;
    color: #d1d5db;
    margin-bottom: 2.5rem;
}

.cta-button {
    display: inline-block;
    background: #3b82f6;
    color: white;
    padding: 1.25rem 3rem;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(59, 130, 246, 0.3);
}

.cta-button:hover {
    transform: translateY(-4px);
    background: #FFD700;
    box-shadow: 0 12px 40px rgba(59, 130, 246, 0.4);
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInScale {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.advisor-card:nth-child(1) { animation-delay: 0.1s; }
.advisor-card:nth-child(2) { animation-delay: 0.2s; }
.advisor-card:nth-child(3) { animation-delay: 0.3s; }
.advisor-card:nth-child(4) { animation-delay: 0.4s; }
.advisor-card:nth-child(5) { animation-delay: 0.5s; }
.advisor-card:nth-child(6) { animation-delay: 0.6s; }

@media (max-width: 1024px) {
    .leader-card {
        grid-template-columns: 1fr;
        max-width: 600px;
    }

    .leader-image-wrapper {
        height: 400px !important;
        max-height: 400px;
    }

    .advisors-grid {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
}

@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.8rem;
    }

    .hero-subtitle {
        font-size: 1.2rem;
    }

    .section-title {
        font-size: 2.2rem;
    }

    .leader-name {
        font-size: 2rem;
    }

    .leader-content {
        padding: 2rem;
    }
    
    .leader-image-wrapper {
        height: 300px !important;
        max-height: 300px !important;
        width: 100%;
    }
    
    .leader-photo {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
    }

    .mission-quote {
        font-size: 1.5rem;
        padding: 1rem 1.5rem;
    }

    .cta-title {
        font-size: 2.2rem;
    }

    .advisors-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}

@media (max-width: 480px) {
    .hero {
        padding: 4rem 1.5rem 3rem;
    }

    .hero h1 {
        font-size: 2.2rem;
    }

    .section {
        padding: 3rem 0;
    }
    
    .leader-image-wrapper {
        height: 250px !important;
        max-height: 250px !important;
    }

    .leader-initials {
        font-size: 5rem;
    }

    .advisor-initials {
        font-size: 4rem;
    }
}
`;

export default About;