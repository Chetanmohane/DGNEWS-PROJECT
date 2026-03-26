"use client";

import { FaRegFileAlt, FaCheckCircle, FaUsers, FaChartLine } from 'react-icons/fa';
import DashboardLayout from '../components/dashboard/DashboardLayout';

export default function SectionAdminPage() {
    const menuItems = [
        { name: 'Category Overview', href: '/section-admin', icon: <FaChartLine /> },
        { name: 'Pending Approvals', href: '/section-admin/approvals', icon: <FaCheckCircle /> },
        { name: 'Manage Reporters', href: '/section-admin/reporters', icon: <FaUsers /> },
        { name: 'Published Articles', href: '/section-admin/published', icon: <FaRegFileAlt /> },
    ];

    return (
        <DashboardLayout title="Section Admin Dashboard" roleTitle="Section Admin" userName="Admin" cityName="Delhi" menuItems={menuItems}>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                    { title: "Pending Approvals", value: "12", color: "text-orange-600", bg: "bg-orange-50" },
                    { title: "Published Today", value: "48", color: "text-green-600", bg: "bg-green-50" },
                    { title: "Active Reporters", value: "8", color: "text-blue-600", bg: "bg-blue-50" },
                    { title: "Total Views", value: "12.4K", color: "text-purple-600", bg: "bg-purple-50" }
                ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-800 flex flex-col">
                        <h3 className="text-gray-500 dark:text-slate-400 text-sm font-semibold mb-2">{stat.title}</h3>
                        <span className={`text-3xl font-bold ${stat.color}`}>{stat.value}</span>
                    </div>
                ))}
            </div>

            {/* Main Content Area Placeholder */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-slate-100">Recent Submissions</h2>
                    <button className="text-sm font-semibold text-orange-600 hover:text-orange-700 bg-orange-50 px-4 py-2 rounded-lg">View All Pending</button>
                </div>

                <div className="h-64 rounded-xl border-2 border-dashed border-gray-200 dark:border-slate-700 flex flex-col items-center justify-center text-gray-400 dark:text-slate-500">
                    <FaRegFileAlt className="text-4xl mb-3 text-gray-300" />
                    <p className="font-medium">Articles pending your approval will appear here.</p>
                </div>
            </div>
        </DashboardLayout>
    );
}
