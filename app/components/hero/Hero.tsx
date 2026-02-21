"use client";

import { translations } from "@/app/utils/translations";
import React, { useState, useEffect } from "react";

const HeroSection: React.FC = () => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLang(savedLang);

    const handleLang = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", handleLang);
    return () => window.removeEventListener("langChange", handleLang);
  }, []);

  const t = translations[lang as "en" | "hi"];
  const mainImageUrl =
    "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200&auto=format&fit=crop";

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8 text-black font-sans">

      {/* LEFT - Main Story */}
      <div className="lg:col-span-2 group cursor-pointer">
        <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white border border-gray-200">

          {/* LIVE Badge */}
          <div className="absolute top-4 left-4 z-20 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-2 animate-pulse">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            LIVE
          </div>

          {/* Image */}
          <div className="relative h-[400px] overflow-hidden">
            <img
              src={mainImageUrl}
              alt="Headline"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h1 className="text-3xl md:text-4xl font-extrabold hover:text-red-600 transition-colors leading-tight text-black">
              {t.heroTitle}
            </h1>

            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              {t.heroDesc}
            </p>

            <div className="mt-4 flex items-center text-sm text-gray-500">
              <span>{t.time}</span>
              <span className="mx-2">•</span>
              <span className="font-semibold text-red-600">
                {t.breaking}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT - Trending Section */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 h-fit">

        <h2 className="text-xl font-bold mb-5 flex items-center gap-2 border-b border-gray-200 pb-3 text-black">
          <span className="text-orange-500">🔥</span> {t.trendingTitle}
        </h2>

        <ul className="space-y-1">
          {t.trendingList.map((item, index) => (
            <li
              key={index}
              className="group border-b border-gray-100 last:border-0 py-3 cursor-pointer"
            >
              <div className="flex gap-3">
                <span className="text-gray-400 font-bold italic text-xl">
                  0{index + 1}
                </span>
                <p className="text-black font-medium group-hover:text-red-600 transition-colors">
                  {item}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <button className="mt-8 w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-all shadow-lg active:scale-95 text-sm uppercase tracking-wider">
          {t.viewAll} →
        </button>
      </div>
    </section>
  );
};

export default HeroSection;