import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Users, TrendingUp, Award, Briefcase, BookOpen, Target, Brain, MessageSquare, Clock, Star, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CorporateReadinessProgram() {
  const [activeCourse, setActiveCourse] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroBackgrounds = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
      overlay: "from-black/80 via-black/60 to-transparent"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      overlay: "from-indigo-900/80 via-indigo-900/60 to-transparent"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      overlay: "from-purple-900/80 via-purple-900/60 to-transparent"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
      overlay: "from-blue-900/80 via-blue-900/60 to-transparent"
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBackgrounds.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, [heroBackgrounds.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroBackgrounds.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroBackgrounds.length) % heroBackgrounds.length);
  };

  const stats = [
    { value: "8.25%", label: "Graduates in Aligned Roles", sublabel: "Economic Survey 2024-25" },
    { value: "42.6%", label: "Overall Employability", sublabel: "Down from 44.3% in 2023" },
    { value: "50%+", label: "In Elementary Jobs", sublabel: "Skills Mismatch Crisis" }
  ];

  const focusAreas = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Corporate Virtues",
      description: "Core ethical values, integrity, accountability, and professionalism for business decisions",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Social Interactions & Communication",
      description: "Master verbal, non-verbal, written communication, networking, and conflict resolution",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Personality Enhancement",
      description: "Cultivate self-awareness, confidence, adaptability, resilience, and continuous learning",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const courses = [
    {
      title: "Ethical Foundations & Corporate Readiness",
      sessions: [
        {
          name: "Your Professional Debut: Mastering First Impressions",
          growth: "Weak Professional First Impressions",
          points: ["First impressions importance", "Dress code & attire", "Body language & posture", "Verbal & behavioral impression"],
          outcome: "Students will make standout professional impressions, crucial for securing jobs and building rapport"
        },
        {
          name: "Silent Signals: Decoding & Projecting Professional Body Language",
          growth: "Unprofessional Body Language",
          points: ["Reading body language", "Maintaining eye contact", "Empathetic listening", "Paraphrasing techniques"],
          outcome: "Students will project confidence and credibility, leading to stronger impressions in interviews"
        },
        {
          name: "Teamwork & Collaboration",
          growth: "Ineffective Teamwork & Dynamics",
          points: ["Understanding team dynamics", "Leadership vs. followership", "Mutual respect", "Delegating tasks"],
          outcome: "Graduates will be valuable, collaborative team players contributing effectively"
        },
        {
          name: "Corporate Culture & Continuous Learning",
          growth: "Limited Corporate Culture Understanding",
          points: ["Adapting to corporate environments", "Growth mindset", "Networking skills", "Seeking mentorship"],
          outcome: "Understanding corporate culture enables quick integration and career progression"
        }
      ]
    },
    {
      title: "Empowerment Essentials",
      sessions: [
        {
          name: "Self-Awareness & Goal Setting",
          growth: "Self-awareness gaps",
          points: ["Identifying strengths & weaknesses", "Understanding interests", "Listening as foundation", "Career direction clarity"],
          outcome: "Gain profound self-understanding for informed career decisions and clear professional roadmap"
        },
        {
          name: "Time Management & Productivity",
          growth: "Poor time and task management",
          points: ["Prioritization techniques", "Avoiding procrastination", "Setting boundaries", "Communicating deadlines"],
          outcome: "Develop strong organizational skills and ability to prioritize effectively under pressure"
        },
        {
          name: "Stress Management & Resilience",
          growth: "Lack of proactive coping mechanisms",
          points: ["Identifying stressors", "Coping mechanisms", "Positive mindset development", "Professional communication of stress"],
          outcome: "Develop emotional intelligence and self-regulation skills to manage workplace pressure"
        },
        {
          name: "Adaptability & Problem Solving",
          growth: "Rigidity in ambiguous situations",
          points: ["Embracing change", "Creative thinking", "Analytical approaches", "Articulating problems & solutions"],
          outcome: "Equips students with courage and skills to address disagreements professionally"
        }
      ]
    },
    {
      title: "Beyond Words: Bridging Gaps with Communication",
      sessions: [
        {
          name: "Verbal Communication & Public Speaking",
          growth: "Public speaking anxiety",
          points: ["Building confidence", "Overcoming stage fright", "Effective public speaking", "Structuring presentations"],
          outcome: "Develop strong verbal communication skills for clear and persuasive presentations"
        },
        {
          name: "Written Communication & Email Etiquette",
          growth: "Inability to write professionally",
          points: ["Professional correspondence", "Clarity & conciseness", "Grammar & tone", "Structuring emails & reports"],
          outcome: "Produce professional, effective written communications enhancing credibility"
        },
        {
          name: "Interpersonal Communication & Conflict Resolution",
          growth: "Rigidity in changing situations",
          points: ["Building rapport & empathy", "Managing emotions", "Expressing disagreements", "Giving/receiving feedback"],
          outcome: "Address disagreements professionally and contribute to harmonious work environment"
        },
        {
          name: "Business Ethics & Integrity",
          growth: "Unaware of ethical dilemmas",
          points: ["Developing ethical compass", "Honesty & transparency", "Accountability & fairness", "Avoiding conflicts of interest"],
          outcome: "Navigate moral dilemmas with integrity and maintain positive professional reputation"
        }
      ]
    }
  ];

  const methodologies = [
    { name: "Challenge Based Learning (CBL)", icon: <Target className="w-6 h-6" /> },
    { name: "Video Analysis", icon: <BookOpen className="w-6 h-6" /> },
    { name: "Collaborative Group Discussions", icon: <Users className="w-6 h-6" /> },
    { name: "Immersive Role-Playing Scenarios", icon: <Award className="w-6 h-6" /> },
    { name: "Case Studies", icon: <Brain className="w-6 h-6" /> }
  ];

  const programStructure = {
    duration: "13 Weeks",
    frequency: "1 class per week",
    sessionDuration: "60-75 minutes",
    targetAudience: "8th Semester Students"
  };

  const stakeholders = [
    {
      type: "Students",
      benefits: [
        "Enhanced Employability & Job Readiness",
        "Stronger Foundations",
        "Increased Confidence & Poise",
        "Effective Networking Skills",
        "Ethical Decision-Making",
        "Adaptability & Resilience"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      type: "Universities / Colleges",
      benefits: [
        "Higher Placement Rates",
        "Competitive Advantage",
        "Smoother Career Transitions",
        "Increased Student Engagement",
        "Bridging the Industry Gap",
        "Reputation for Innovation",
        "Increased University Advocacy"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="w-full overflow-x-hidden bg-gradient-to-br from-[#0a1628] via-[#0f1f3d] to-[#152847]">
      <style>{`
        .hero-background-image {
          transition: opacity 1500ms ease-in-out;
        }
      `}</style>

      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden p-0 min-h-[85vh] flex items-center">
        {/* Background Images */}
        {heroBackgrounds.map((bg, index) => (
          <div
            key={bg.id}
            className={`hero-background-image absolute inset-0 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${bg.image})` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${bg.overlay}`}></div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroBackgrounds.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <div className="max-w-[1400px] mx-auto px-12 relative z-[2] w-full flex items-center min-h-[85vh]">
          {/* Hero Content */}
          <div className="py-16 text-center w-full">
            <div className="inline-block bg-white/10 backdrop-blur-sm text-purple-300 px-5 py-2 rounded-[30px] text-[0.85rem] font-semibold mb-8 border border-purple-400/30">
              🎓 Professional Transformation
            </div>
            
            <h1 className="text-[2.8rem] sm:text-[3.5rem] lg:text-[4rem] font-extrabold mb-6 leading-[1.15] tracking-[-0.02em] text-white">
              Mastering <span className="bg-gradient-to-br from-white to-purple-300 bg-clip-text text-transparent" style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Corporate</span><br/>
              Readiness
            </h1>
            
            <p className="text-[1.25rem] leading-[1.7] text-white/90 mb-12 font-normal max-w-4xl mx-auto">
              Bridge the gap from campus to corporate with essential virtues, refined skills, 
              and unwavering ethical foundations that prepare students for real-world success
            </p>
            
            <div className="flex gap-6 flex-wrap justify-center">
              <a
                href="#curriculum"
                className="inline-flex items-center gap-3 py-[1.1rem] px-[2.8rem] rounded-xl font-semibold text-base bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-[400ms]"
              >
                View Curriculum
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 py-[1.1rem] px-[2.8rem] rounded-xl font-semibold text-base bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-[400ms]"
              >
                Enroll Your Students →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Statistics */}
      <section className="py-20 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              The Employability Crisis
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Why corporate readiness training is essential for today's graduates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-[#1e2d4a]/80 to-[#2a3f5f]/80 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center hover:border-purple-400/50 transition-all">
                <div className="text-5xl font-bold text-purple-400 mb-3">{stat.value}</div>
                <div className="text-xl text-white font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.sublabel}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl p-8 border border-red-500/20">
            <p className="text-gray-200 text-lg text-center leading-relaxed">
              <span className="font-bold text-red-400">The Reality:</span> Most graduates lack essential soft skills, professional etiquette, 
              and corporate culture understanding—making them unprepared for workplace success despite technical qualifications.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] via-[#0f1f3d] to-[#152847]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Three Pillars of Readiness
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive approach to professional transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area, i) => (
              <div key={i} className="bg-gradient-to-br from-[#1e2d4a]/80 to-[#2a3f5f]/80 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-400/50 transition-all hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-lg flex items-center justify-center mb-6 text-white`}>
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                <p className="text-gray-300 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Comprehensive Curriculum
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              13 weeks of intensive, experiential learning covering all aspects of corporate readiness
            </p>
          </div>

          {/* Course Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {courses.map((course, i) => (
              <button
                key={i}
                onClick={() => setActiveCourse(i)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeCourse === i
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {course.title}
              </button>
            ))}
          </div>

          {/* Course Content */}
          <div className="bg-gradient-to-br from-[#1e2d4a]/80 to-[#2a3f5f]/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              {courses[activeCourse].title}
            </h3>

            <div className="space-y-6">
              {courses[activeCourse].sessions.map((session, i) => (
                <div key={i} className="bg-[#0a1628]/50 rounded-xl p-6 border border-white/10 hover:border-purple-400/30 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{session.name}</h4>
                      <p className="text-red-400 text-sm font-semibold mb-3">
                        Addresses: {session.growth}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-14">
                    <div>
                      <p className="text-cyan-400 font-semibold mb-2 text-sm">Discussion Points:</p>
                      <ul className="space-y-1">
                        {session.points.map((point, j) => (
                          <li key={j} className="text-gray-300 text-sm flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-emerald-400 font-semibold mb-2 text-sm">End Outcome:</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{session.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] via-[#0f1f3d] to-[#152847]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our Unique Approach
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experiential curriculum because every student should gain practical, hands-on experience before entering the corporate world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodologies.map((method, i) => (
              <div key={i} className="bg-gradient-to-br from-[#1e2d4a]/80 to-[#2a3f5f]/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all hover:scale-105 text-center">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{method.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Overall Program Structure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(programStructure).map(([key, value], i) => (
              <div key={i} className="bg-gradient-to-br from-[#1e2d4a]/80 to-[#2a3f5f]/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">{value}</div>
                <div className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Session Framework</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { phase: "Welcome & Recap", time: "5-10 min", desc: "Review previous week's key takeaways" },
                { phase: "Introduction to New Topic", time: "15-20 min", desc: "Present theory and importance" },
                { phase: "Interactive Activity/Discussion", time: "30-45 min", desc: "Group activities, role-playing, case studies" },
                { phase: "Practical Application/Tips", time: "20-30 min", desc: "Actionable advice and real-world examples" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.phase}</h4>
                    <p className="text-cyan-400 text-sm mb-1">{item.time}</p>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholders Benefits */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] via-[#0f1f3d] to-[#152847]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Who Benefits?
            </h2>
            <p className="text-xl text-gray-300">
              Creating value for students and institutions alike
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stakeholders.map((stakeholder, i) => (
              <div key={i} className={`bg-gradient-to-br from-[#1e2d4a]/80 to-[#2a3f5f]/80 backdrop-blur-sm rounded-xl p-8 border border-white/10`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${stakeholder.color} rounded-lg flex items-center justify-center text-white`}>
                    {i === 0 ? <Users className="w-7 h-7" /> : <Building className="w-7 h-7" />}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{stakeholder.type}</h3>
                </div>
                <div className="space-y-3">
                  {stakeholder.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0f1729] via-[#1a2847] to-[#243452]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Bridge the Campus-Corporate Gap?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of students who've transformed into industry-ready professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Enroll Your Students
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              Request Partnership Info
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}