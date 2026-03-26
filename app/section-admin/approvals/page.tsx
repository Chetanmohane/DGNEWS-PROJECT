"use client";

import { FaChartLine, FaCheckCircle, FaUsers, FaRegFileAlt, FaEye, FaTimes } from 'react-icons/fa';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

export default function SectionAdminApprovalsPage() {
    const menuItems = [
        { name: 'Category Overview', href: '/section-admin', icon: <FaChartLine /> },
        { name: 'Pending Approvals', href: '/section-admin/approvals', icon: <FaCheckCircle /> },
        { name: 'Manage Reporters', href: '/section-admin/reporters', icon: <FaUsers /> },
        { name: 'Published Articles', href: '/section-admin/published', icon: <FaRegFileAlt /> },
    ];

    const pendingArticles = [
        { id: 1, title: 'Local elections date announced for next month', reporter: 'Ravi Kumar', date: '2 hours ago', category: 'Politics' },
        { id: 2, title: 'New sports complex inaugurated in the heart of city', reporter: 'Anjali Desai', date: '5 hours ago', category: 'Sports' },
        { id: 3, title: 'Stock market hits all time high amidst global cues', reporter: 'Vikram Singh', date: '1 day ago', category: 'Business' },
    ];

    return (
        <DashboardLayout title="Pending Approvals" roleTitle="Section Admin" menuItems={menuItems}>

            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center bg-orange-50/30">
                    <h2 className="text-lg font-bold text-gray-800 dark:text-slate-100 flex items-center gap-2">
                        <FaCheckCircle className="text-orange-500" /> Action Required ({pendingArticles.length})
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-slate-800 border-b border-gray-100 dark:border-slate-800">
                                <th className="py-4 px-6 font-bold text-gray-500 dark:text-slate-400 uppercase text-xs w-1/2">Article Details</th>
                                <th className="py-4 px-6 font-bold text-gray-500 dark:text-slate-400 uppercase text-xs">Reporter</th>
                                <th className="py-4 px-6 font-bold text-gray-500 dark:text-slate-400 uppercase text-xs">Submitted</th>
                                <th className="py-4 px-6 font-bold text-gray-500 dark:text-slate-400 uppercase text-xs text-right">Review Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingArticles.map((article) => (
                                <tr key={article.id} className="border-b border-gray-50 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 dark:bg-slate-800 transition-colors">
                                    <td className="py-4 px-6">
                                        <p className="font-bold text-gray-900 dark:text-white mb-1 leading-snug">{article.title}</p>
                                        <span className="text-[10px] font-black uppercase tracking-wider text-orange-600 bg-orange-100 px-2.5 py-1 rounded-md">{article.category}</span>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">{article.reporter.charAt(0)}</div>
                                            <span className="font-semibold text-gray-700 dark:text-slate-200 text-sm">{article.reporter}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 dark:text-slate-400">{article.date}</td>
                                    <td className="py-4 px-6 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white p-2.5 rounded-xl transition-all shadow-sm" title="Preview Article">
                                                <FaEye />
                                            </button>
                                            <button className="text-green-600 bg-green-50 hover:bg-green-600 hover:text-white p-2.5 rounded-xl transition-all shadow-sm" title="Approve & Publish">
                                                <FaCheckCircle />
                                            </button>
                                            <button className="text-red-600 bg-red-50 hover:bg-red-600 hover:text-white p-2.5 rounded-xl transition-all shadow-sm" title="Reject / Sent Back">
                                                <FaTimes />
                                            </button>
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
