"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaUserPlus, FaEnvelope, FaLock, FaUser, FaArrowLeft, FaIdCard } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function RegisterPage() {
    const [role, setRole] = useState('REPORTER');
    const router = useRouter();

    const roles = [
        { id: 'SUPER_ADMIN', name: 'Super Admin' },
        { id: 'SECTION_ADMIN', name: 'Section Admin' },
        { id: 'CITY_ADMIN', name: 'City Admin' },
        { id: 'REPORTER', name: 'Reporter' },
        { id: 'OPERATOR', name: 'Operator' }
    ];

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();

        // Mock Registration Logic
        // In a real app, you'd send this to an API
        alert('Account created successfully! You can now login.');
        router.push('/login');
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-center items-center p-4 md:p-8 relative overflow-hidden transition-colors duration-300">
            {/* Background Decoration */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-0 left-0 w-full h-80 bg-slate-900 rounded-b-[60px] md:rounded-b-[120px] shadow-xl z-0"
            ></motion.div>

            {/* Floating Glows */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                    y: [0, -30, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"
            ></motion.div>
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -40, 0],
                    y: [0, 40, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
            ></motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative z-20 w-full max-w-lg mb-8 flex flex-col items-center"
            >
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-2 text-white">
                        <span className="text-red-500 italic">DG</span>
                        <span>NEWS</span>
                    </h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="h-1 w-12 bg-red-600 rounded-full mb-3"
                    ></motion.div>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">Staff Portal Registration</p>
                </div>
            </motion.div>

            {/* Register Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "backOut" }}
                className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.1)] p-8 md:p-12 relative z-10 border border-slate-100 dark:border-slate-800 transition-colors duration-300"
            >
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 }}
                        className="w-16 h-16 bg-red-50 dark:bg-red-900/20 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-red-100 dark:border-red-800/50 shadow-sm"
                    >
                        <FaUserPlus className="text-3xl text-red-600" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Create Account</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Join our network of reporters & administrators</p>
                </div>

                <form className="space-y-6" onSubmit={handleRegister}>
                    {/* Responsive Grid for Name/Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                            className="space-y-2"
                        >
                            <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                            <div className="relative group">
                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-500 transition-colors text-sm" />
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter full name"
                                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/5 transition-all outline-none"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="space-y-2"
                        >
                            <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                            <div className="relative group">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-500 transition-colors text-sm" />
                                <input
                                    type="email"
                                    required
                                    placeholder="work@dgnews.com"
                                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/5 transition-all outline-none"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Responsive Grid for Role/Password */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 }}
                            className="space-y-2"
                        >
                            <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Designated Role</label>
                            <div className="relative group">
                                <FaIdCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-500 transition-colors text-sm z-10" />
                                <select
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="w-full appearance-none bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-2xl py-3.5 pl-11 pr-10 text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/5 transition-all cursor-pointer relative z-0 outline-none"
                                >
                                    {roles.map((r) => (
                                        <option key={r.id} value={r.id} className="dark:bg-slate-900">{r.name}</option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-[10px]">
                                    ▼
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                            className="space-y-2"
                        >
                            <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Password</label>
                            <div className="relative group">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-500 transition-colors text-sm" />
                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/5 transition-all outline-none"
                                />
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="flex items-start gap-3 py-2"
                    >
                        <input id="terms" type="checkbox" required className="mt-1 w-5 h-5 rounded-lg border-slate-200 dark:border-slate-700 text-red-600 focus:ring-red-500 transition-all cursor-pointer" />
                        <label htmlFor="terms" className="text-xs font-medium text-slate-500 dark:text-slate-400 leading-relaxed cursor-pointer select-none">
                            I agree to the <span className="text-red-600 font-bold hover:underline">Terms for Staff Personnel</span> and acknowledge all security protocols.
                        </label>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <button
                            type="submit"
                            className="w-full bg-red-600 hover:bg-red-700 text-white rounded-[1.25rem] py-4.5 flex items-center justify-center gap-3 font-bold shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:shadow-[0_15px_40px_rgba(220,38,38,0.4)] transition-all active:scale-95 group mt-4 overflow-hidden relative"
                        >
                            <span className="relative z-10 py-1">Complete Registration</span>
                            <FaUserPlus className="relative z-10 group-hover:scale-110 transition-transform text-lg" />
                        </button>
                    </motion.div>
                </form>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="text-center mt-10 pt-8 border-t border-slate-100 dark:border-slate-800"
                >
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                        Already have a staff account?{' '}
                        <Link href="/login" className="text-red-600 font-black hover:underline ml-1">
                            Sign In
                        </Link>
                    </p>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-10 flex flex-col items-center gap-6 z-10 relative px-4"
            >
                <Link href="/login" className="flex items-center gap-2 text-slate-400 hover:text-red-500 transition-colors group">
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> <span className="text-sm font-bold">Back to Login</span>
                </Link>

                <div className="text-center text-[10px] md:text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">
                    <p className="leading-loose">© 2026 DG NEWS PLATFORM • SECURE ACCESS PORTAL • INTERNAL USE ONLY</p>
                </div>
            </motion.div>
        </div>
    );
}
