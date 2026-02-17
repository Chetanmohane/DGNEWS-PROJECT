"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const sliderData = [
  {
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop",
    title: "Chandrayaan-4: Bharat Ka Agla Kadam, Moon Sample Return Mission Taiyar",
    tag: "Space",
    color: "bg-blue-600"
  },
  {
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop",
    title: "Digital Rupee: RBI Ne Jaari Kiye Naye Features, Ab Offline Bhi Hoga Bhugtan",
    tag: "Finance",
    color: "bg-green-600"
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    title: "Semiconductor Hub: Bharat Mein Shuru Hui Pehli Chip Manufacturing Unit",
    tag: "Tech",
    color: "bg-purple-600"
  },
];

export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-12 bg-white">
      
      {/* --- 1. LIVE BREAKING TICKER --- */}
      <div className="bg-black text-white py-2 overflow-hidden flex items-center mb-6 shadow-lg">
        <div className="bg-red-600 px-6 py-1 font-black italic text-sm z-10 skew-x-[-20deg] ml-4 shrink-0 border-r-4 border-white">
          <span className="inline-block skew-x-[20deg]">BREAKING</span>
        </div>
        <div className="flex animate-marquee whitespace-nowrap gap-12 text-sm font-bold tracking-wide uppercase">
          <span>• Stock Market Update: Sensex 90,000 ke par pahuncha</span>
          <span>• Weather Alert: Madhya Pradesh mein bhari baarish ki chetavani</span>
          <span>• DGNews Exclusive: 2026 ka naya budget jald pesh hoga</span>
          <span>• Sports: India vs Australia series ka aagaz kal se</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- 2. MAIN AUTO-SCROLL SLIDER --- */}
        <div className="lg:col-span-2 relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] h-[350px] md:h-[550px]">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect={'fade'}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="h-full w-full"
          >
            {sliderData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full w-full group overflow-hidden">
                  <img 
                    src={slide.image} 
                    alt="" 
                    className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110" 
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-6 md:p-12 flex flex-col justify-end">
                    <motion.span 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className={`${slide.color} text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full w-fit mb-4 uppercase tracking-[2px] shadow-lg`}
                    >
                      {slide.tag}
                    </motion.span>
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-white text-3xl md:text-5xl font-black leading-tight drop-shadow-2xl"
                    >
                      {slide.title}
                    </motion.h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* --- 3. TRENDING SIDEBAR --- */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 pb-4">
            <h3 className="text-2xl font-black tracking-tighter text-gray-900 italic underline decoration-red-600">TRENDING</h3>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_rgba(220,38,38,1)]"></span>
              <span className="text-[10px] font-bold text-red-600 uppercase">Live Now</span>
            </div>
          </div>
          
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <motion.div 
                whileHover={{ x: 10 }}
                key={i} 
                className="flex gap-5 cursor-pointer group items-start border-b border-gray-50 pb-4"
              >
                <span className="text-4xl font-black text-gray-100 group-hover:text-red-600 transition-colors duration-300">
                  0{i}
                </span>
                <div>
                  <h4 className="font-bold text-gray-800 leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                    {i === 1 ? "Bhopal Metro ki testing shuru, janiye kab se chalegi" : "Gold rates mein aayi badi giravat, kharidne ka sahi samay"}
                  </h4>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest italic">Politics</span>
                    <span className="text-[10px] text-gray-300">• 5 min read</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Ticker Animation Style */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(10%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}