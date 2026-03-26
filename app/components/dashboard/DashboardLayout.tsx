"use client";

import React, { ReactNode, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { FaSignOutAlt, FaBars, FaTimes, FaSun, FaMoon, FaHome, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
import LanguageSelector from '../LanguageSelector';

interface DashboardLayoutProps {
    children: ReactNode;
    title: string;
    roleTitle: string;
    userName?: string;
    cityName?: string;
    menuItems: { name: string; href: string; icon: ReactNode }[];
}

export default function DashboardLayout({
    children,
    title,
    roleTitle,
    userName = 'Admin',
    cityName = 'Delhi',
    menuItems,
}: DashboardLayoutProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [selectedCity, setSelectedCity] = useState(cityName);
    const [isCityOpen, setIsCityOpen] = useState(false);
    const cityRef = useRef<HTMLDivElement>(null);

    const cities = ['Delhi', 'Mumbai', 'Lucknow', 'Patna', 'Bhopal', 'Indore', 'Jaipur', 'Kolkata', 'Chennai', 'Hyderabad'];


    useEffect(() => {
        setMounted(true);
        const token = localStorage.getItem('mock_auth_token');
        if (!token) {
            router.push('/login');
        }
    }, [router]);

    // Close city dropdown on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (cityRef.current && !cityRef.current.contains(e.target as Node)) {
                setIsCityOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('mock_auth_token');
        router.push('/login');
    };

    const initial = userName.charAt(0).toUpperCase();

    const SidebarContent = () => (
        <div className="flex flex-col h-full">

            {/* Logo area */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 shrink-0">
                <Link href="/" className="flex items-center gap-1 text-xl font-black tracking-tight">
                    <span className="text-red-500 italic">DG</span>
                    <span className="text-white uppercase">NEWS</span>
                </Link>
                <button
                    className="md:hidden text-slate-400 hover:text-white p-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <FaTimes />
                </button>
            </div>

            {/* User Profile */}
            <div className="px-5 py-5 border-b border-slate-800 shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-black text-lg shrink-0">
                        {initial}
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-white font-bold text-sm truncate">{userName}</p>
                        <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 uppercase tracking-wider">
                            {roleTitle}
                        </span>
                    </div>
                </div>
                <div className="mt-3 relative" ref={cityRef}>
                    <button
                        onClick={() => setIsCityOpen(!isCityOpen)}
                        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors w-full"
                    >
                        <span>📍</span>
                        <span className="font-medium">{selectedCity}</span>
                        <FaChevronDown className={`ml-auto text-[10px] transition-transform ${isCityOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isCityOpen && (
                        <div className="absolute top-full left-0 mt-2 w-full bg-slate-800 border border-slate-700 rounded-lg shadow-xl overflow-hidden z-10">
                            <div className="max-h-48 overflow-y-auto py-1">
                                {cities.map(city => (
                                    <button
                                        key={city}
                                        onClick={() => {
                                            setSelectedCity(city);
                                            setIsCityOpen(false);
                                        }}
                                        className={`w-full text-left px-3 py-2 text-xs transition-colors ${selectedCity === city
                                            ? 'bg-red-600/20 text-red-400 font-bold'
                                            : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                                            }`}
                                    >
                                        {city}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                {menuItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={index}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all ${isActive
                                ? 'bg-red-600 text-white'
                                : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                }`}
                        >
                            <span className={`text-base ${isActive ? 'text-white' : 'text-slate-500'}`}>
                                {item.icon}
                            </span>
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            {/* Logout */}
            <div className="px-3 pb-4 border-t border-slate-800 pt-3 shrink-0">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                >
                    <FaSignOutAlt className="text-base" />
                    Logout
                </button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors flex overflow-hidden">

            {/* Desktop Sidebar */}
            <aside className="w-56 bg-[#0f172a] flex-shrink-0 hidden md:flex flex-col h-screen sticky top-0">
                <SidebarContent />
            </aside>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Sidebar Drawer */}
            <aside className={`fixed top-0 bottom-0 left-0 w-64 bg-[#0f172a] z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <SidebarContent />
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen overflow-hidden">

                {/* Top Header Bar */}
                <header className="h-14 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 sm:px-6 shrink-0 transition-colors">
                    <div className="flex items-center gap-3">
                        <button
                            className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <FaBars />
                        </button>
                        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 hidden sm:block">{title}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="scale-75 md:scale-95 origin-right">
                            <LanguageSelector />
                        </div>
                        {mounted && (
                            <button
                                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                                className="p-2 rounded-full text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                aria-label="Toggle theme"
                            >
                                {resolvedTheme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon />}
                            </button>
                        )}
                        <Link
                            href="/"
                            className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 border border-transparent hover:border-red-100 dark:hover:border-red-900/30"
                        >
                            <FaHome />
                            <span className="hidden sm:inline">Back</span>
                        </Link>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 sm:p-6 lg:p-8">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
