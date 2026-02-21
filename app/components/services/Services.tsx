"use client";

import { translations } from '@/app/utils/translations';
import React, { useState, useEffect } from 'react';
import { FaNewspaper, FaMicrophoneAlt, FaShieldAlt, FaBolt, FaPlayCircle, FaBroadcastTower } from 'react-icons/fa';

export default function Services() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLang(savedLang);

    const handleLang = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", handleLang);
    return () => window.removeEventListener("langChange", handleLang);
  }, []);

  const t = translations[lang as 'en' | 'hi'];

  const serviceIcons = [
    { icon: <FaNewspaper />, color: "bg-black" },
    { icon: <FaShieldAlt />, color: "bg-blue-600" },
    { icon: <FaPlayCircle />, color: "bg-orange-500" },
    { icon: <FaMicrophoneAlt />, color: "bg-purple-600" },
  ];

  return (
    <section id="services" className="py-12 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10 border-b border-gray-200 pb-6">
          <div>
            <h2 className="text-red-600 font-bold text-xs uppercase tracking-[0.3em] mb-1">
              {t.premiumFeatures}
            </h2>
            <h3 className="text-3xl font-black text-black tracking-tight">
              DG News <span className="text-red-600">{t.ecosystem}</span>
            </h3>
          </div>

          <button className="hidden md:block border-2 border-black text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-black hover:text-white transition-all">
            {t.viewAll}
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[160px]">
          
          {/* Main LIVE Card */}
          <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[2rem] bg-black text-white p-8 flex flex-col justify-end cursor-pointer">
            
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-red-600 px-3 py-1 rounded-full animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="text-[10px] font-bold uppercase">{t.liveNow}</span>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" 
              alt="Live News" 
            />

            <div className="relative z-10">
              <div className="text-4xl mb-4 text-red-500">
                <FaBroadcastTower />
              </div>
              <h4 className="text-3xl font-black mb-2">{t.liveTvTitle}</h4>
              <p className="text-gray-300 text-sm max-w-xs">{t.liveTvDesc}</p>
            </div>
          </div>

          {/* Service Cards */}
          {t.servicesList.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-[2rem] bg-white border border-gray-200 p-6 transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col justify-between"
            >
              <div className={`w-12 h-12 ${serviceIcons[index].color} text-white rounded-2xl flex items-center justify-center text-xl shadow-md transition-transform group-hover:-rotate-12`}>
                {serviceIcons[index].icon}
              </div>

              <div>
                <h4 className="font-black text-black text-lg group-hover:text-red-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-xs mt-1 font-medium">
                  {item.desc}
                </p>
              </div>

              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}

          {/* App Promo Card */}
          <div className="md:col-span-2 bg-red-600 rounded-[2rem] p-6 flex items-center justify-between text-white group cursor-pointer relative overflow-hidden">
            
            <div>
              <h4 className="text-2xl font-black">{t.appTitle}</h4>
              <p className="text-white/80 text-xs font-medium">
                {t.appDesc}
              </p>
            </div>

            <div className="text-5xl opacity-20 absolute -right-4 transform group-hover:scale-125 transition-transform">
              <FaBolt />
            </div>

            <button className="bg-white text-red-600 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-tight">
              {t.installNow}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}