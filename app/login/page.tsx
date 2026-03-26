"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaUserCircle, FaLock, FaSignInAlt, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function LoginPage() {
    const [role, setRole] = useState('SUPER_ADMIN');
    const router = useRouter();

    const roles = [
        { id: 'SUPER_ADMIN', name: 'Super Admin', path: '/super-admin' },
        { id: 'SECTION_ADMIN', name: 'Section Admin', path: '/section-admin' },
        { id: 'CITY_ADMIN', name: 'City Admin', path: '/city-admin' },
        { id: 'REPORTER', name: 'Reporter', path: '/reporter' },
        { id: 'OPERATOR', name: 'Operator', path: '/operator' }
    ];

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem('mock_auth_token', role);
        const path = roles.find(r => r.id === role)?.path || '/';
        router.push(path);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-center items-center p-4 relative overflow-hidden transition-colors duration-300">

            {/* Background Decoration */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-0 left-0 w-full h-96 bg-slate-900 rounded-b-[100px] md:rounded-b-[200px] shadow-xl"
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

            <div className="relative z-20 w-full max-w-md mt-16 mb-8 flex flex-col items-center">
                <Link href="/" className="flex items-center gap-2 mb-6 text-slate-400 hover:text-white transition-colors self-start md:self-center group">
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> <span className="text-sm font-bold">Back to Site</span>
                </Link>

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
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-sm">Staff Portal Area</p>
                </div>
            </div>

            {/* Login Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "backOut" }}
                className="w-full max-w-md bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.1)] p-8 md:p-10 relative z-10 border border-slate-100 dark:border-slate-800 transition-colors"
            >
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 }}
                        className="w-20 h-20 bg-red-50 dark:bg-red-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border-4 border-white dark:border-slate-800 shadow-lg"
                    >
                        <FaUserCircle className="text-4xl text-red-500" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Welcome Back</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Please sign in to your authorized panel</p>
                </div>

                <form className="space-y-6" onSubmit={handleLogin}>

                    {/* Role Selection Dropdown */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="space-y-2"
                    >
                        <div className="flex justify-between items-end">
                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Select Role Profile</label>
                            <p className="text-[10px] text-red-500 font-bold italic">
                                * DEMO: Selection determines view
                            </p>
                        </div>
                        <div className="relative">
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full appearance-none bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-800 rounded-xl py-4 flex flex-col justify-center px-5 text-sm font-bold text-slate-700 dark:text-white focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-50 dark:focus:ring-red-900/20 transition-all cursor-pointer"
                            >
                                {roles.map((r) => (
                                    <option key={r.id} value={r.id} className="dark:bg-slate-900">{r.name}</option>
                                ))}
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                ▼
                            </div>
                        </div>
                    </motion.div>

                    {/* Credential Inputs */}
                    <div className="space-y-4 pt-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="relative group"
                        >
                            <FaUserCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-500 transition-colors text-lg" />
                            <input
                                type="text"
                                placeholder="Employee ID or Email"
                                className="w-full bg-white dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-800 rounded-xl py-4 pl-12 pr-4 text-sm font-semibold text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-all"
                                defaultValue="demo_user"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 }}
                            className="relative group"
                        >
                            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-500 transition-colors text-lg" />
                            <input
                                type="password"
                                placeholder="Secret Password"
                                className="w-full bg-white dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-800 rounded-xl py-4 pl-12 pr-4 text-sm font-semibold text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-all"
                                defaultValue="password123"
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex items-center justify-between pt-2"
                    >
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-red-600 focus:ring-red-500" />
                            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 transition-colors">Remember me</span>
                        </label>
                        <button type="button" className="text-xs font-bold text-red-600 hover:text-red-700 hover:underline">Forgot password?</button>
                    </motion.div>

                    {/* Submit Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <button
                            type="submit"
                            className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl py-4 flex items-center justify-center gap-3 font-bold shadow-[0_10px_20px_rgba(220,38,38,0.2)] hover:shadow-[0_15px_30px_rgba(220,38,38,0.3)] transition-all group"
                        >
                            <span>Secure Login</span>
                            <FaSignInAlt className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-center pt-4"
                    >
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                            Don&apos;t have an account?{' '}
                            <Link href="/register" className="text-red-600 font-bold hover:underline transition-all">
                                Create Account
                            </Link>
                        </p>
                    </motion.div>
                </form>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="mt-12 text-center text-xs text-slate-500 dark:text-slate-400 font-semibold z-10 relative"
            >
                <p>Warning: Restricted Access System</p>
                <p className="mt-1">For authorized personnel of DG News Platform only.</p>
            </motion.div>

        </div>
    );
}

