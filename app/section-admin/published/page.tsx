"use client";

import { FaChartLine, FaCheckCircle, FaUsers, FaRegFileAlt, FaGlobe, FaCalendarAlt } from 'react-icons/fa';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

export default function SectionAdminPublishedPage() {
    const menuItems = [
        { name: 'Category Overview', href: '/section-admin', icon: <FaChartLine /> },
        { name: 'Pending Approvals', href: '/section-admin/approvals', icon: <FaCheckCircle /> },
        { name: 'Manage Reporters', href: '/section-admin/reporters', icon: <FaUsers /> },
        { name: 'Published Articles', href: '/section-admin/published', icon: <FaRegFileAlt /> },
    ];

    const published = [
        { title: 'Local elections date announced for next month', reporter: 'Ravi Kumar', date: 'October 24, 2023', views: '12.4K', shares: 342 },
        { title: 'New sports complex inaugurated in the heart of city', reporter: 'Anjali Desai', date: 'October 23, 2023', views: '8.2K', shares: 120 },
        { title: 'Stock market hits all time high amidst global cues', reporter: 'Vikram Singh', date: 'October 21, 2023', views: '45.1K', shares: 1200 },
        { title: 'Weather alert: Heavy rain expected over the weekend', reporter: 'Neha Singh', date: 'October 20, 2023', views: '22.8K', shares: 890 },
    ];

    return (
        <DashboardLayout title="Published Archive" roleTitle="Section Admin" menuItems={menuItems}>
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-slate-800 border-b border-gray-100 dark:border-slate-800">
                                <th className="py-4 px-6 font-bold text-gray-500 dark:text-slate-400 uppercase text-xs w-2/5">Headline</th>
                                <th className="py-4 px-6 font-bold text-gray-500 dark:text-slate-400 uppercase text-xs">Reporter</th>
                                <th className="py-4 px-6 font-bold text-gray-500 dark:text-slate-400 uppercase text-xs">Publish Date</th>
                                <th className="py-4 px-6 font-bold text-gray-500 dark:text-slate-400 uppercase text-xs">Performance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {published.map((article, i) => (
                                <tr key={i} className="border-b border-gray-50 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 dark:bg-slate-800 transition-colors cursor-pointer group">
                                    <td className="py-4 px-6 font-bold text-gray-900 dark:text-white leading-snug group-hover:text-red-600 transition-colors">
                                        {article.title}
                                    </td>
                                    <td className="py-4 px-6 text-sm font-semibold text-gray-700 dark:text-slate-200">
                                        {article.reporter}
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 dark:text-slate-400 flex items-center gap-2">
                                        <FaCalendarAlt className="text-gray-400 dark:text-slate-500" /> {article.date}
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex gap-4">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-gray-400 dark:text-slate-500 uppercase font-black tracking-widest">Views</span>
                                                <span className="font-bold text-blue-600 flex items-center gap-1"><FaGlobe /> {article.views}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-gray-400 dark:text-slate-500 uppercase font-black tracking-widest">Shares</span>
                                                <span className="font-bold text-green-600 flex items-center gap-1">⚡ {article.shares}</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
}
