"use client";

import { FaRegFilePdf, FaUpload, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import DashboardLayout from '../components/dashboard/DashboardLayout';

export default function CityAdminPage() {
    const menuItems = [
        { name: 'City Overview', href: '/city-admin', icon: <FaMapMarkerAlt /> },
        { name: 'Upload E-Paper', href: '/city-admin/e-paper', icon: <FaUpload /> },
        { name: 'Manage Reporters', href: '/city-admin/reporters', icon: <FaUsers /> },
        { name: 'City Archives', href: '/city-admin/archives', icon: <FaRegFilePdf /> },
    ];

    return (
        <DashboardLayout title="City Admin Dashboard" roleTitle="City Admin" userName="Admin" cityName="Delhi" menuItems={menuItems}>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                    { title: "Today's Uploads", value: "1/1", color: "text-green-600", bg: "bg-green-50" },
                    { title: "City Reporters", value: "14", color: "text-blue-600", bg: "bg-blue-50" },
                    { title: "Local News", value: "32", color: "text-purple-600", bg: "bg-purple-50" },
                    { title: "E-Paper Views", value: "5.2K", color: "text-orange-600", bg: "bg-orange-50" }
                ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-800 flex flex-col">
                        <h3 className="text-gray-500 dark:text-slate-400 text-sm font-semibold mb-2">{stat.title}</h3>
                        <span className={`text-3xl font-bold ${stat.color}`}>{stat.value}</span>
                    </div>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Upload Action */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-slate-100">E-Paper Upload</h2>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Uploaded Today</span>
                    </div>

                    <div className="h-64 rounded-xl border-2 border-dashed border-gray-200 dark:border-slate-700 flex flex-col items-center justify-center text-gray-400 dark:text-slate-500 bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 transition-colors cursor-pointer">
                        <FaUpload className="text-4xl mb-3 text-red-400" />
                        <p className="font-bold text-gray-600 dark:text-slate-300 mb-1">Click to browse or drag PDF here</p>
                        <p className="text-sm">Only PDF formats allowed (Max 50MB)</p>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-8">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-slate-100 mb-6">City Updates</h2>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex gap-3 pb-4 border-b border-gray-100 dark:border-slate-800 last:border-0 last:pb-0">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                                    <FaRegFilePdf />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-800 dark:text-slate-100">New Edition Published</p>
                                    <p className="text-xs text-gray-500 dark:text-slate-400">2 hours ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
