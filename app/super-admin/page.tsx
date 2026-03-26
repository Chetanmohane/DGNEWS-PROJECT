"use client";

import { FaUsers, FaGlobeAmericas, FaCity, FaTag, FaCog, FaNewspaper, FaCheckCircle, FaClock } from 'react-icons/fa';
import DashboardLayout from '../components/dashboard/DashboardLayout';

const recentArticles = [
    { title: 'PM Modi inaugurates new metro line in Delhi', author: 'Rahul Sharma', city: 'Delhi', category: 'National', time: '2 hrs ago', status: 'Published' },
    { title: 'Stock Market hits all-time high, Sensex at 85,000', author: 'Priya Patel', city: 'Mumbai', category: 'Business', time: '3 hrs ago', status: 'In Review' },
    { title: 'UP government announces new education policy', author: 'Amit Kumar', city: 'Lucknow', category: 'Education', time: '5 hrs ago', status: 'Approved' },
    { title: 'Breaking: Heavy rains disrupt traffic in multiple cities', author: 'Neha Singh', city: 'Bhopal', category: 'Weather', time: '6 hrs ago', status: 'Draft' },
];

const statusStyle: Record<string, string> = {
    Published: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400',
    'In Review': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400',
    Approved: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400',
    Draft: 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400',
};

const statusDot: Record<string, string> = {
    Published: 'bg-green-500',
    'In Review': 'bg-yellow-500',
    Approved: 'bg-blue-500',
    Draft: 'bg-slate-400',
};

export default function SuperAdminPage() {
    const menuItems = [
        { name: 'Dashboard', href: '/super-admin', icon: <FaGlobeAmericas /> },
        { name: 'Categories', href: '/super-admin/categories', icon: <FaTag /> },
        { name: 'Cities', href: '/super-admin/cities', icon: <FaCity /> },
        { name: 'Users', href: '/super-admin/users', icon: <FaUsers /> },
        { name: 'Articles', href: '/super-admin/settings', icon: <FaNewspaper /> },
    ];

    const stats = [
        { label: 'Total Articles', value: '1,284', badge: '+12%', badgeColor: 'text-green-600 bg-green-50 dark:bg-green-500/10 dark:text-green-400', icon: <FaNewspaper className="text-blue-500" /> },
        { label: 'Active Cities', value: '24', badge: null, badgeColor: '', icon: <FaGlobeAmericas className="text-teal-500" /> },
        { label: 'Total Users', value: '156', badge: '+3', badgeColor: 'text-blue-600 bg-blue-50 dark:bg-blue-500/10 dark:text-blue-400', icon: <FaUsers className="text-purple-500" /> },
        { label: 'Pending Approvals', value: '34', badge: 'Urgent', badgeColor: 'text-red-600 bg-red-50 dark:bg-red-500/10 dark:text-red-400', icon: <FaClock className="text-orange-500" /> },
    ];

    return (
        <DashboardLayout
            title="Super Admin Dashboard"
            roleTitle="Super Admin"
            userName="Admin"
            cityName="Delhi"
            menuItems={menuItems}
        >
            {/* Welcome Banner */}
            <div className="mb-8">
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">Welcome back,</p>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                    Admin <span className="text-slate-300 dark:text-slate-600">·</span>{' '}
                    <span className="text-red-600">Delhi</span>
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Here&apos;s your platform overview for today.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-lg">
                                {stat.icon}
                            </div>
                            {stat.badge && (
                                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${stat.badgeColor}`}>
                                    {stat.badge}
                                </span>
                            )}
                        </div>
                        <div>
                            <p className="text-2xl font-black text-slate-900 dark:text-white">{stat.value}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-0.5">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Articles */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
                    <h2 className="text-base font-bold text-slate-900 dark:text-white">Recent Articles</h2>
                    <button className="text-sm font-bold text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 transition-colors">
                        View All →
                    </button>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {recentArticles.map((article, i) => (
                        <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <div className="min-w-0 pr-4">
                                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">{article.title}</p>
                                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                                    {article.author} <span className="mx-1">·</span> {article.city} <span className="mx-1">·</span>{' '}
                                    <span className="text-slate-500 dark:text-slate-400">{article.category}</span> <span className="mx-1">·</span> {article.time}
                                </p>
                            </div>
                            <span className={`shrink-0 inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full ${statusStyle[article.status]}`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${statusDot[article.status]}`} />
                                {article.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
