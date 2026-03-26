"use client";

import { useEffect, useState } from 'react';
import { FaLanguage } from 'react-icons/fa';

export default function LanguageSelector() {
    const [currentLanguage, setCurrentLanguage] = useState('en');

    useEffect(() => {
        const checkLanguage = () => {
            const googTrans = document.cookie.split('; ').find(row => row.startsWith('googtrans='));
            if (googTrans) {
                const lang = googTrans.split('/')[2];
                if (lang === 'hi') setCurrentLanguage('hi');
                else setCurrentLanguage('en');
            } else {
                const stored = localStorage.getItem('preferred_language');
                if (stored) setCurrentLanguage(stored);
            }
        };

        checkLanguage();
        const interval = setInterval(checkLanguage, 500);
        return () => clearInterval(interval);
    }, []);

    const toggleLanguage = () => {
        const newLang = currentLanguage === 'en' ? 'hi' : 'en';
        const cookieValue = `/en/${newLang}`;

        // Set the google translate cookie in the most robust way
        document.cookie = `googtrans=${cookieValue}; path=/;`;
        document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname}`;

        // Save for our UI state persistence
        localStorage.setItem('preferred_language', newLang);
        setCurrentLanguage(newLang);

        // Force a page reload - Google Translate script reads 'googtrans' 
        // on initial load and translates everything automatically.
        window.location.reload();
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded-xl text-[11px] font-black text-slate-800 dark:text-white border-2 border-slate-100 dark:border-slate-800 hover:border-red-500 hover:text-red-600 transition-all group"
        >
            <FaLanguage className="text-lg text-red-600 group-hover:rotate-12 transition-transform" />
            <span className="uppercase tracking-widest">
                {currentLanguage === 'en' ? 'हिन्दी' : 'English'}
            </span>
        </button>
    );
}
