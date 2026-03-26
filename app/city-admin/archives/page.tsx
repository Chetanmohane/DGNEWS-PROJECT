"use client";

import { FaChartLine, FaCheckCircle, FaUsers, FaRegFileAlt, FaMapMarkerAlt, FaFileSignature, FaDownload } from 'react-icons/fa';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

export default function CityAdminArchivesPage() {
    const menuItems = [
        { name: 'City Overview', href: '/city-admin', icon: <FaMapMarkerAlt /> },
        { name: 'Upload E-Paper', href: '/city-admin/e-paper', icon: <FaRegFileAlt /> },
        { name: 'Manage Reporters', href: '/city-admin/reporters', icon: <FaUsers /> },
        { name: 'City Archives', href: '/city-admin/archives', icon: <FaCheckCircle /> },
    ];

    const archives = [
        { date: 'October 24, 2023', size: '14.2 MB', pages: 16, views: '5.2K' },
        { date: 'October 23, 2023', size: '15.1 MB', pages: 16, views: '4.8K' },
        { date: 'October 22, 2023', size: '13.8 MB', pages: 14, views: '6.1K' },
        { date: 'October 21, 2023', size: '16.5 MB', pages: 20, views: '8.9K (Sunday Special)' },
        { date: 'October 20, 2023', size: '14.0 MB', pages: 16, views: '4.5K' },
    ];

    return (
        <DashboardLayout title="E-Paper Archives" roleTitle="City Admin" menuItems={menuItems}>
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-slate-800 border-b border-gray-100 dark:border-slate-800">
                                <th className="py-4 px-6 font-bold text-gray-500 dark:text-slate-400 uppercase text-xs w-1/3">Edition Date</th>
                                <th className="py-4 px-6 font-bold text-gray-500 dark:text-slate-400 uppercase text-xs">File Specs</th>
                                <th className="py-4 px-6 font-bold text-gray-500 dark:text-slate-400 uppercase text-xs">Total Views</th>
                                <th className="py-4 px-6 font-bold text-gray-500 dark:text-slate-400 uppercase text-xs text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {archives.map((archive, index) => (
                                <tr key={index} className="border-b border-gray-50 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 dark:bg-slate-800 transition-colors">
                                    <td className="py-4 px-6 font-bold text-gray-900 dark:text-white flex items-center gap-3">
                                        <div className="w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center text-lg">
                                            <FaRegFileAlt />
                                        </div>
                                        {archive.date}
                                    </td>
                                    <td className="py-4 px-6">
                                        <p className="font-semibold text-gray-800 dark:text-slate-100 text-sm">{archive.size}</p>
                                        <p className="text-xs text-gray-400 dark:text-slate-500 font-medium">{archive.pages} Pages • Print Ready PDF</p>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className="bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded text-sm">{archive.views}</span>
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="text-gray-600 dark:text-slate-300 hover:text-red-600 font-semibold text-sm bg-gray-100 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                                                <FaDownload /> PDF
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-sm text-gray-500 dark:text-slate-400">
                    <span>Showing 5 latest archives</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 rounded border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800/50 dark:bg-slate-800 disabled:opacity-50">Prev</button>
                        <button className="px-3 py-1 rounded border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800/50 dark:bg-slate-800 disabled:opacity-50">Next</button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
