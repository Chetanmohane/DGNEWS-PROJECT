"use client";
import { useState } from 'react';
import { FaTv, FaRegClock, FaUsers, FaShareAlt, FaPlay, FaSignal, FaBroadcastTower, FaBolt } from 'react-icons/fa';

const liveUpdates = [
  { id: 1, time: "Just Now", title: "Breaking News", text: "DG News Exclusive: Naye digital law par sarkar ka bada faisla.", type: "urgent" },
  { id: 2, time: "10 Mins Ago", title: "Sports Update", text: "Champions Trophy ki taiyariyan tez, stadium ka jayza lene pahunchi team.", type: "normal" },
  { id: 3, time: "22 Mins Ago", title: "Weather", text: "Mumbai-Pune Expressway par bhari kohra, travel advisory jaari.", type: "urgent" },
];

export default function LiveNewsSection() {
  const [activeChannel, setActiveChannel] = useState('main');

  return (
    <section id="live-tv" className="py-12 md:py-24 bg-[#020617] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Top Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-5">
            <div className="h-16 w-1.5 bg-red-600 rounded-full hidden md:block"></div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <FaBroadcastTower className="text-red-500 animate-pulse" />
                <span className="text-red-500 font-black uppercase tracking-[5px] text-[10px] md:text-xs">Digital Broadcast</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic">
                LIVE <span className="text-red-600">CENTRAL</span>
              </h2>
            </div>
          </div>

          {/* Real-time Stats Badge */}
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-2xl backdrop-blur-xl">
             <div className="flex items-center gap-3 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-xl">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                </div>
                <span className="text-sm font-black text-red-500 tracking-tighter">18,432 VIEWERS</span>
             </div>
             <div className="hidden sm:flex items-center gap-4 px-4">
                <div className="text-center">
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Signal</p>
                  <p className="text-xs font-black text-green-500">EXCELLENT</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Latency</p>
                  <p className="text-xs font-black">24MS</p>
                </div>
             </div>
          </div>
        </div>

        {/* --- Main Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* 1. Video Section (Left Side - 8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="group relative aspect-video bg-black rounded-[2.5rem] overflow-hidden border-[8px] border-slate-900 shadow-[0_0_100px_rgba(220,38,38,0.15)] transition-all duration-700 hover:border-red-600/40">
              
              <img 
                src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2070&auto=format&fit=crop" 
                alt="Live Stream" 
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-all duration-1000"
              />

              {/* Play UI Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/80 via-transparent to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="relative group/btn">
                  <div className="absolute inset-0 bg-red-600 rounded-full blur-2xl opacity-40 group-hover/btn:opacity-80 transition-all"></div>
                  <div className="relative w-20 h-20 md:w-28 md:h-28 bg-red-600 rounded-full flex items-center justify-center pl-2 shadow-2xl transition-transform hover:scale-110 active:scale-95">
                    <FaPlay className="text-white text-3xl md:text-5xl" />
                  </div>
                </button>
              </div>

              {/* Top Control Overlay */}
              <div className="absolute top-8 left-8 flex gap-3">
                <span className="bg-red-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-white rounded-full animate-pulse"></span> LIVE
                </span>
                <span className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                  DG NEWS MAIN
                </span>
              </div>

              {/* Bottom News Bar */}
              <div className="absolute bottom-0 inset-x-0 p-8 md:p-12">
                <div className="bg-red-600/10 backdrop-blur-sm border-l-4 border-red-600 p-4 rounded-r-2xl max-w-3xl">
                  <span className="text-red-500 font-black text-xs uppercase tracking-widest mb-1 block">Headlines</span>
                  <h3 className="text-xl md:text-3xl font-black leading-tight tracking-tight">
                    Desh ki sabse badi khabar: Shehar mein alert jaari, dekhiye exclusive ground reporting DG News par.
                  </h3>
                </div>
              </div>
            </div>

            {/* Quick Channel Tabs */}
            <div className="flex gap-4 p-2 bg-slate-900/50 rounded-2xl border border-white/5 overflow-x-auto whitespace-nowrap scrollbar-hide">
               {['DG MAIN', 'DG BIZ', 'DG SPORTS', 'DG LOCAL'].map((ch) => (
                 <button 
                  key={ch}
                  className={`px-6 py-3 rounded-xl text-[10px] font-black tracking-widest transition-all ${activeChannel === ch ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
                  onClick={() => setActiveChannel(ch)}
                 >
                   {ch}
                 </button>
               ))}
            </div>
          </div>

          {/* 2. Timeline Section (Right Side - 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col h-full space-y-6">
            <div className="bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-8 backdrop-blur-md flex flex-col h-full">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <FaBolt className="text-yellow-500" />
                  <h3 className="text-sm font-black uppercase tracking-[3px] text-slate-200">Fast Feed</h3>
                </div>
                <FaShareAlt className="text-slate-500 cursor-pointer hover:text-white" />
              </div>

              <div className="space-y-10 flex-1 overflow-y-auto pr-2 custom-scrollbar max-h-[500px]">
                {liveUpdates.map((update) => (
                  <div key={update.id} className="relative pl-8 border-l border-slate-800 hover:border-red-600 transition-colors group">
                    <div className={`absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full transition-all group-hover:scale-150 ${update.type === 'urgent' ? 'bg-red-600 shadow-[0_0_10px_red]' : 'bg-slate-600'}`}></div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">{update.title}</span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1">
                          <FaRegClock /> {update.time}
                        </span>
                      </div>
                      <p className={`text-sm md:text-base font-bold leading-relaxed transition-colors ${update.type === 'urgent' ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                        {update.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-10 w-full py-5 bg-white text-black hover:bg-red-600 hover:text-white rounded-2xl font-black text-xs uppercase tracking-[3px] transition-all shadow-xl active:scale-95">
                Download Full Report
              </button>
            </div>
          </div>
        </div>

        {/* --- 3. Professional News Ticker --- */}
        <div className="mt-16 bg-white flex items-center overflow-hidden h-16 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="bg-red-600 text-white px-8 md:px-12 h-full flex items-center font-black italic text-base md:text-xl z-10 whitespace-nowrap shadow-2xl">
            TOP STORIES
          </div>
          <div className="flex-1 overflow-hidden bg-white">
            <div className="animate-marquee whitespace-nowrap flex items-center h-full">
              <p className="inline-block text-black font-black text-sm md:text-xl mx-8 uppercase tracking-tighter">
                • PM Modi Visit: Shehar ko mili nayi saugat • Cricket: Team India ne jeeta series • DG News Fact Check: Viral message nikla farzi • Weather Alert: North India mein sardi ka naya record
              </p>
              <p className="inline-block text-black font-black text-sm md:text-xl mx-8 uppercase tracking-tighter">
                • PM Modi Visit: Shehar ko mili nayi saugat • Cricket: Team India ne jeeta series • DG News Fact Check: Viral message nikla farzi • Weather Alert: North India mein sardi ka naya record
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Global CSS for Section */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}