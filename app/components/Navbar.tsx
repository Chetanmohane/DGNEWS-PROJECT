"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Search, Sun, Moon, Globe } from "lucide-react";
import { translations } from "../utils/translations"; // Path check karein
import ThemeToggle from "./ThemeToggle";


const Navbar: React.FC = () => {
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const [date, setDate] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("en");

  // 1. Theme Logic
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    setDarkMode(isDark);
    if (isDark) document.documentElement.classList.add("dark");

    // Language Load
    const savedLang = localStorage.getItem("lang") || "en";
    setLang(savedLang);
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  // 2. Language Change Logic (Important)
  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    // Poori website ko signal bhejne ke liye
    window.dispatchEvent(new CustomEvent("langChange", { detail: newLang }));
  };

  useEffect(() => {
    const today = new Date();
    setDate(today.toLocaleDateString(lang === "en" ? "en-IN" : "hi-IN", {
      weekday: "long", year: "numeric", month: "long", day: "numeric",
    }));
  }, [lang]);

  const t = translations[lang as 'en' | 'hi'];

  return (
    <header className="w-full shadow-md border-b bg-black text-black dark:text-white transition-colors duration-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-500">DG News</div>

        <div className="hidden md:block text-sm text-black dark:text-gray-300">
          {date} | {lang === "en" ? "India Edition" : "इंडिया एडिशन"}
        </div>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-yellow-400">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Language Selector */}
          <div className="flex items-center gap-1 border border-gray-300 dark:border-gray-600 rounded px-2 py-1">
            <Globe size={14} className="text-red-500" />
            <select 
              value={lang} 
              onChange={handleLangChange} 
              className="text-sm bg-transparent outline-none cursor-pointer"
            >
              <option value="en" className="text-black">English</option>
              <option value="hi" className="text-black">Hindi</option>
            </select>
          </div>

          <div className="hidden md:flex items-center border border-gray-300 dark:border-gray-600 rounded px-2 py-1">
            <Search size={16} className="text-gray-400 mr-2" />
            <input type="text" placeholder={t.search} className="bg-transparent outline-none text-sm" />
          </div>

          <button className="text-sm font-medium hover:text-red-500">{t.login}</button>
          <button className="bg-red-600 text-white text-sm px-4 py-1.5 rounded-full hover:bg-red-700">{t.subscribe}</button>

          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className="bg-red-600 text-white text-[11px] font-bold py-2 overflow-hidden flex items-center">
        <div className="bg-red-800 px-4 py-1 z-10 shadow-lg italic">{t.breaking}</div>
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-4 uppercase tracking-wider">• Major political update from Delhi</span>
          <span className="mx-4 uppercase tracking-wider">• Sensex rises 500 points</span>
        </div>
      </div>

      <nav className="bg-gray-100 dark:bg-zinc-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="hidden md:flex justify-between text-[11px] font-black uppercase tracking-widest py-4">
            {t.nav.map((item) => (
              <li key={item} className="hover:text-red-500 cursor-pointer transition relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
          {mobileOpen && (
            <ul className="md:hidden flex flex-col gap-4 py-6 font-bold text-sm uppercase">
              {t.nav.map((item) => (
                <li key={item} className="hover:text-red-500 cursor-pointer border-b dark:border-zinc-800 pb-2">{item}</li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: inline-block; animation: marquee 30s linear infinite; }
      `}</style>
    </header>
  );
};

export default Navbar;