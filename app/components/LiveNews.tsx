"use client";
import React, { useState, useEffect } from 'react';
import { FaPlay, FaGlobeAmericas, FaBolt, FaRegClock, FaShareAlt, FaSignal } from 'react-icons/fa';
import { translations } from "../utils/translations"; // Path check karein

export default function LiveNewsSection() {
  const [lang, setLang] = useState("en");
  const [activeChannel, setActiveChannel] = useState('DG-MAIN');

  useEffect(() => {
    // Initial Load
    const savedLang = localStorage.getItem("lang") || "en";
    setLang(savedLang);

    // Language Change Listener
    const handleLang = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", handleLang);
    return () => window.removeEventListener("langChange", handleLang);
  }, []);

  const t = translations[lang as 'en' | 'hi'];

  return (
    <section id="live-tv" className="py-16 bg-[#0f172a] text-slate-200 overflow-hidden relative font-sans selection:bg-red-500/30 transition-colors duration-300">
      
      {/* Soft Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-red-400 font-semibold uppercase tracking-widest text-xs">{t.liveTag}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
              {t.liveCentral.split(' ')[0]} <span className="text-red-500">{t.liveCentral.split(' ')[1]}</span>
            </h2>
          </div>

          {/* Minimal Stats Bar */}
          <div className="flex items-center gap-6 bg-slate-800/50 border border-slate-700/50 p-4 rounded-2xl backdrop-blur-md">
            <div className="flex items-center gap-3 px-2 border-r border-slate-700">
               <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
               </div>
               <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">{t.statsViewers}</p>
                  <p className="text-lg font-bold text-white tracking-tight">28,491</p>
               </div>
            </div>
            <div className="px-2">
               <p className="text-[10px] text-slate-400 font-bold uppercase">{t.statsSignal}</p>
               <p className="text-sm font-bold text-emerald-400 flex items-center gap-2 tracking-wide uppercase">{t.statsExcellent} <FaSignal className="text-[10px]" /></p>
            </div>
          </div>
        </div>

        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="group relative aspect-video rounded-3xl overflow-hidden border border-slate-700 shadow-xl bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2000" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]"
                alt="Broadcast"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full flex items-center justify-center pl-1 hover:bg-red-500 hover:border-red-500 transition-all shadow-2xl active:scale-95">
                  <FaPlay size={24} />
                </button>
              </div>

              <div className="absolute top-6 left-6 flex gap-3">
                <div className="bg-red-500 text-white px-4 py-1.5 rounded-lg font-bold text-[10px] uppercase tracking-wider shadow-lg">
                  {activeChannel}
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md text-slate-300 px-4 py-1.5 rounded-lg font-bold text-[10px] uppercase border border-slate-700">
                  {t.statsQuality}
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-slate-900/60 backdrop-blur-xl border border-white/5 p-6 rounded-2xl">
                  <p className="text-red-400 font-bold text-[10px] uppercase tracking-widest mb-1">{t.headlineTag}</p>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight tracking-tight">
                    DG News Impact: Sarkar ne maani maang, naye tax rules par phir se hogi charcha.
                  </h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {['DG-MAIN', 'POLITICS', 'GLOBAL', 'BIZ'].map((ch) => (
                <button 
                  key={ch}
                  onClick={() => setActiveChannel(ch)}
                  className={`py-4 rounded-xl text-[10px] font-bold tracking-widest border transition-all duration-300 ${activeChannel === ch ? 'bg-red-500 border-red-500 text-white shadow-lg' : 'bg-slate-800/40 border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-800'}`}
                >
                  {ch}
                </button>
              ))}
            </div>
          </div>

          {/* Right Feed Panel */}
          <div className="lg:col-span-4">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-3xl p-8 flex flex-col h-full shadow-lg">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-700/50">
                <div className="flex items-center gap-2">
                  <FaBolt className="text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-300">{t.quickFeed}</span>
                </div>
                <FaShareAlt className="text-slate-500 cursor-pointer hover:text-white transition-colors" size={14} />
              </div>

              <div className="space-y-8 flex-1">
                {t.liveUpdates.map((u: any) => (
                  <div key={u.id} className="relative pl-6 border-l border-slate-700 group cursor-pointer hover:border-red-500/50 transition-colors">
                    <div className={`absolute -left-[4.5px] top-0 w-2 h-2 rounded-full transition-all ${u.type === 'urgent' ? 'bg-red-500 shadow-[0_0_8px_#ef4444]' : 'bg-slate-600'}`}></div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-[10px] font-bold tracking-wider">
                        <span className={u.type === 'urgent' ? 'text-red-400' : 'text-slate-500'}>{u.title}</span>
                        <span className="text-slate-600 flex items-center gap-1 uppercase"><FaRegClock /> {u.time}</span>
                      </div>
                      <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors leading-relaxed">
                        {u.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full py-4 bg-slate-700 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-red-500 transition-all shadow-md">
                {t.fullCoverage}
              </button>
            </div>
          </div>
        </div>

        {/* --- TICKER --- */}
        <div className="mt-12 bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden flex h-14 shadow-xl">
          <div className="bg-red-500 text-white px-8 h-full flex items-center font-bold text-sm z-10 whitespace-nowrap uppercase tracking-widest">
            {t.latestHeadlines}
          </div>
          <div className="flex-1 overflow-hidden relative flex items-center">
            <div className="animate-marquee whitespace-nowrap flex gap-16">
              {[1, 2].map((i) => (
                <p key={i} className="text-slate-300 font-medium text-sm uppercase tracking-wide">
                  • DG NEWS: Desh ki har badi khabar sabse pehle • BIZ: Nifty hits record high • WEATHER: Mumbai alert • SPORTS: India clinches Gold
                </p>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 40s linear infinite; }
      `}</style>
    </section>
  );
}