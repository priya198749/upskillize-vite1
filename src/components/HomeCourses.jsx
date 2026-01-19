import {
  Brain,
  ShieldCheck,
  BarChart3,
  Cpu,
  Layers,
  LineChart,
  HeartHandshake,
  Briefcase,
} from "lucide-react";

const COURSES = [
  {
    title: "AI in FinTech",
    desc: "AI-driven solutions for banking, fraud detection, risk analysis, and digital payments.",
    icon: <Cpu size={36} />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Product Leadership",
    desc: "Product strategy, roadmapping, execution, and leadership for high-impact products.",
    icon: <Briefcase size={36} />,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Data Analytics",
    desc: "Analyze, visualize, and interpret data to drive smarter business decisions.",
    icon: <BarChart3 size={36} />,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "GenAI & Business Intelligence",
    desc: "Generative AI, dashboards, and intelligent business insights.",
    icon: <Brain size={36} />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Technology & Digital Transformation",
    desc: "Cloud, AI adoption, automation, and enterprise digital transformation.",
    icon: <Layers size={36} />,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Integrated Courses",
    desc: "Cross-disciplinary programs combining technology, business, and leadership.",
    icon: <LineChart size={36} />,
    color: "from-sky-500 to-indigo-500",
  },
  {
    title: "Cybersecurity",
    desc: "Network security, threat detection, compliance, and cyber defense.",
    icon: <ShieldCheck size={36} />,
    color: "from-red-500 to-rose-500",
  },
  {
    title: "Mental Health & Social Wellness",
    desc: "Emotional well-being, workplace wellness, and social resilience.",
    icon: <HeartHandshake size={36} />,
    color: "from-green-500 to-lime-500",
  },
];

export default function HomeCourses() {
  return (
    <section className="w-full bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800">
          Industry-Focused Programs
        </h2>

        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Specialized programs designed to meet real-world industry demands.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((item, index) => (
              <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
              >

              <div
                className={`p-6 bg-gradient-to-r ${item.color} text-white`}
              >
                {item.icon}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.desc}
                </p>

                <button className="mt-5 text-indigo-600 font-semibold group-hover:underline">
                  View Programs →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
