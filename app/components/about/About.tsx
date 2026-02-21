"use client";

import { translations } from "@/app/utils/translations";
import React, { useState, useEffect } from "react";

const About: React.FC = () => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLang(savedLang);

    const handleLang = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", handleLang);
    return () => window.removeEventListener("langChange", handleLang);
  }, []);

  const t = translations[lang as "en" | "hi"];

  return (
    <section className="py-20 bg-white overflow-hidden px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT - Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] shadow-2xl">
              <div className="h-[350px] md:h-[450px] w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200&auto=format&fit=crop" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Journalist" 
                />
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 right-4 lg:-right-6 z-20 bg-white p-6 rounded-3xl shadow-xl border border-gray-200 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-red-600 text-white w-14 h-14 flex items-center justify-center rounded-2xl font-black text-2xl">DG</div>
                <div>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">{t.since}</p>
                  <p className="text-black font-black text-xl leading-none">2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-8">
            
            <div className="space-y-4">
              <span className="inline-block px-5 py-2 rounded-xl text-[10px] font-black tracking-[0.3em] bg-red-600 text-white uppercase">
                {t.aboutTag}
              </span>

              <h2 className="text-5xl lg:text-7xl font-black text-black leading-[0.95] tracking-tighter">
                {t.aboutTitle1} <br />
                <span className="text-red-600 italic">{t.aboutTitle2}</span>
              </h2>
            </div>

            <p className="text-black text-lg md:text-xl leading-relaxed font-medium">
              {t.aboutDesc}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-10 w-full pt-4">
              <div className="border-l-4 border-red-600 pl-6">
                <p className="text-4xl font-black text-black">50M+</p>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">{t.stats1}</p>
              </div>
              <div className="border-l-4 border-red-600 pl-6">
                <p className="text-4xl font-black text-black">200+</p>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">{t.stats2}</p>
              </div>
            </div>

            {/* Button */}
            <div className="pt-6 w-full sm:w-auto">
              <button className="flex items-center justify-center gap-4 bg-black text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-red-600 transition active:scale-95">
                <span>{t.aboutBtn}</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
