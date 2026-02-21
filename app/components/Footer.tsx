"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaApple,
  FaGooglePlay,
  FaEnvelope,
} from "react-icons/fa";
import { translations } from "../utils/translations";

export default function Footer() {
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
    <footer className="bg-white text-black pt-16 pb-8 px-4 font-sans border-t border-gray-200">
      <div className="max-w-7xl mx-auto">

        {/* Upper Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12 pb-12 border-b border-gray-200">
          
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black text-black italic tracking-tight">
              DG<span className="text-red-600 not-italic">NEWS</span>
            </h2>
            <p className="mt-4 text-sm text-gray-600 max-w-sm leading-relaxed">
              {t.footerTagline}
            </p>

            <div className="flex gap-3 mt-6">
              {[FaFacebookF, FaTwitter, FaYoutube, FaInstagram].map(
                (Icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="w-9 h-9 flex items-center justify-center bg-white border border-gray-200 rounded-full text-black hover:bg-red-600 hover:text-white hover:border-red-600 transition-all"
                  >
                    <Icon size={14} />
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
              
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-xl text-red-600">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-black">
                    {t.newsletterTitle}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {t.newsletterDesc}
                  </p>
                </div>
              </div>

              <div className="flex w-full md:w-auto gap-2">
                <input
                  type="email"
                  placeholder={t.inputPlaceholder}
                  className="bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-red-500 w-full md:w-64"
                />
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-black transition-all whitespace-nowrap">
                  {t.joinBtn}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {t.footerLinks.map((section: any, idx: number) => (
            <div key={idx}>
              <h4 className="text-black font-bold mb-6 text-sm uppercase tracking-widest">
                {section.title}
              </h4>
              <ul className="space-y-3 text-sm">
                {section.links.map((link: string) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="hover:text-red-600 transition-colors text-gray-600 font-medium"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Download App */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-black font-bold mb-6 text-sm uppercase tracking-widest">
              {t.getApp}
            </h4>

            <div className="space-y-3">
              <button className="flex items-center w-full bg-black text-white px-4 py-2.5 rounded-xl hover:bg-red-600 transition-all">
                <FaGooglePlay className="text-xl mr-3" />
                <div className="text-left leading-tight">
                  <p className="text-[9px] uppercase opacity-70">
                    Get it on
                  </p>
                  <p className="text-sm font-bold">Google Play</p>
                </div>
              </button>

              <button className="flex items-center w-full bg-black text-white px-4 py-2.5 rounded-xl hover:bg-red-600 transition-all">
                <FaApple className="text-xl mr-3" />
                <div className="text-left leading-tight">
                  <p className="text-[9px] uppercase opacity-70">
                    Download on
                  </p>
                  <p className="text-sm font-bold">App Store</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-gray-500 font-medium">
            {t.rights}
          </p>

          <div className="flex gap-8 text-[11px] font-bold text-gray-500 uppercase tracking-tight">
            {["Privacy", "Terms", "Sitemap", "Ad Choice"].map((item) => (
              <Link
                key={item}
                href="#"
                className="hover:text-black transition"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}