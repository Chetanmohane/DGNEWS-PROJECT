import { FaNewspaper, FaMicrophoneAlt, FaShieldAlt, FaMobileAlt, FaBolt, FaPlayCircle } from 'react-icons/fa';

const services = [
  { title: "DG E-Paper", desc: "Har subah apne mobile par payein digital newspaper ka asli anubhav.", icon: <FaNewspaper />, color: "from-red-500 to-orange-500" },
  { title: "DG Fact-Check", desc: "Social media par viral ho rahi afwahon ki sacchai janiye hamare experts se.", icon: <FaShieldAlt />, color: "from-blue-500 to-cyan-500" },
  { title: "Audio News", desc: "Kaam ke saath-saath suniye din bhar ki badi khabrein hamare podcast par.", icon: <FaMicrophoneAlt />, color: "from-purple-500 to-pink-500" },
  { title: "Hyper-Local News", desc: "Apne shehar aur colony ki har choti-badi khabar se jude rahiye.", icon: <FaBolt />, color: "from-yellow-500 to-amber-500" },
  { title: "Video Shorts", desc: "60 seconds mein poore din ka update, fast aur accurate.", icon: <FaPlayCircle />, color: "from-orange-500 to-red-500" },
  { title: "App Exclusive", desc: "Personalized notifications aur offline reading ka maza lein.", icon: <FaMobileAlt />, color: "from-green-500 to-emerald-500" }
];

export default function Services() {
  return (
    // section id="services" anchor link ke liye zaroori hai
    <section id="services" className="py-16 md:py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Responsive Text Sizes */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-red-600 font-bold tracking-[2px] md:tracking-[3px] uppercase text-xs md:text-sm mb-3">
            Premium Experience
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Khabron Se <span className="text-red-600">Aage</span>
          </h3>
          <div className="w-16 md:w-24 h-1.5 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Highlighted Cards Grid - Responsive Columns */}
        {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {services.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-1 rounded-2xl transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-3"
            >
              {/* Animated Gradient Border (Highlight) */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]`}></div>

              {/* Main Card Content */}
              <div className="relative bg-white p-6 md:p-8 rounded-[14px] h-full flex flex-col items-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all">
                
                {/* Icon with Glowing Effect - Smaller on Mobile */}
                <div className={`mb-4 md:mb-6 p-4 md:p-5 rounded-2xl bg-gradient-to-br ${item.color} text-white text-2xl md:text-3xl shadow-lg transform group-hover:rotate-[360deg] transition-transform duration-700`}>
                  {item.icon}
                </div>

                <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h4>
                
                <p className="text-gray-500 leading-relaxed text-xs md:text-sm mb-6 md:mb-8">
                  {item.desc}
                </p>

                {/* Subtle Button Highlight */}
                <button className="mt-auto py-2 px-5 md:px-6 rounded-full border-2 border-gray-100 font-bold text-[10px] md:text-xs uppercase tracking-wider group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}