"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Select City");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Scroll detection for styling
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#footer' },
  ];

  const cities = ["Delhi", "Mumbai", "Lucknow", "Patna", "Indore", "Bhopal"];

  return (
    <>
      <nav className={`fixed w-full top-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md py-2 shadow-lg' : 'bg-white dark:bg-slate-950 py-4'
        }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-black tracking-tighter">
              <span className="text-red-600 italic">DG</span>
              <span className="text-slate-900 dark:text-white uppercase">News</span>
            </h1>
          </div>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-500 transition-colors uppercase tracking-wider">
                {link.name}
              </a>
            ))}

            {/* City Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 px-3 py-2 rounded-lg text-[11px] font-bold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800">
                📍 {selectedCity}
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-900 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-slate-100 dark:border-slate-800 p-2">
                {cities.map(city => (
                  <button key={city} onClick={() => setSelectedCity(city)} className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-slate-800 hover:text-red-600 rounded-lg">
                    {city}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 border-l pl-8 border-slate-200 dark:border-slate-800">
              <LanguageSelector />
              {mounted && (
                <button
                  onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Toggle Dark Mode"
                >
                  {resolvedTheme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-slate-700" />}
                </button>
              )}

              <Link href="/login" className="text-xs font-black text-slate-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 uppercase">Login</Link>
              <button className="bg-red-600 text-white px-5 py-2 rounded-full font-bold text-[10px] flex items-center gap-2 shadow-md shadow-red-100 dark:shadow-red-900/20">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                LIVE TV
              </button>
            </div>
          </div>

          {/* Mobile View Toggle (Three Lines) */}
          <div className="lg:hidden flex items-center gap-3">
            <div className="scale-75 origin-right">
              <LanguageSelector />
            </div>
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {resolvedTheme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-slate-700" />}
              </button>
            )}

            <Link href="/login" className="text-[10px] font-black bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-full">LOGIN</Link>

            {/* --- Animated Hamburger Button --- */}
            <button
              onClick={() => setIsOpen(true)}
              className="flex flex-col gap-1.5 p-2 bg-slate-100 dark:bg-slate-900 rounded-lg group"
            >
              <span className="w-6 h-0.5 bg-slate-900 dark:bg-white rounded-full transition-all group-hover:w-4"></span>
              <span className="w-6 h-0.5 bg-red-600 rounded-full"></span>
              <span className="w-6 h-0.5 bg-slate-900 dark:bg-white rounded-full transition-all group-hover:w-4 ml-auto"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* --- Mobile Sidebar / Drawer --- */}
      <div className={`fixed inset-0 z-[1000] lg:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        {/* Dark Backdrop Overlay */}
        <div
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer Content */}
        <div className={`absolute top-0 right-0 h-full w-[75%] bg-white dark:bg-slate-950 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0,0.07,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 flex flex-col h-full">

            {/* Header in Drawer */}
            <div className="flex justify-between items-center mb-10 border-b dark:border-slate-800 pb-4">
              <span className="text-lg font-black text-red-600 italic">DG NEWS</span>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center bg-slate-100 dark:bg-slate-900 rounded-full text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all"
              >
                &times;
              </button>
            </div>

            {/* Nav Links - Standard Size */}
            <div className="space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-bold text-slate-800 dark:text-slate-200 hover:text-red-600 transition-colors uppercase tracking-wide border-b border-slate-50 dark:border-slate-900 pb-2"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* City Selection Grid - Mobile Optimized */}
            <div className="mt-10">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Select Your City</h3>
              <div className="grid grid-cols-2 gap-2">
                {cities.map(city => (
                  <button
                    key={city}
                    onClick={() => { setSelectedCity(city); setIsOpen(false) }}
                    className={`py-2 px-1 rounded-lg text-xs font-bold border transition-all ${selectedCity === city ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-100 dark:shadow-none' : 'bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300'}`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* Big Live TV Button at Bottom */}
            <div className="mt-auto">
              <button className="w-full bg-red-600 text-white py-4 rounded-xl font-black text-sm shadow-xl shadow-red-100 dark:shadow-none flex items-center justify-center gap-3 active:scale-95 transition-all">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]"></span>
                WATCH LIVE TV
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}