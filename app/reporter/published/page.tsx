"use client";

import { FaPencilAlt, FaPaperPlane, FaClock, FaCheckDouble, FaGlobe, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

export default function ReporterPublishedPage() {
    const menuItems = [
        { name: 'My Dashboard', href: '/reporter', icon: <FaPencilAlt /> },
        { name: 'Write Article', href: '/reporter/compose', icon: <FaPaperPlane /> },
        { name: 'Drafts', href: '/reporter/drafts', icon: <FaClock /> },
        { name: 'Published', href: '/reporter/published', icon: <FaCheckDouble /> },
    ];

    const published = [
        { id: 1, title: 'Local elections date announced for next month', date: 'Oct 24, 2023', views: '12.4K', category: 'Politics', shares: 342, comments: 45 },
        { id: 2, title: 'City park renovation complete, opens to public', date: 'Oct 20, 2023', views: '8.2K', category: 'Local News', shares: 120, comments: 12 },
        { id: 3, title: 'School board votes on new curriculum changes', date: 'Oct 15, 2023', views: '5.1K', category: 'Education', shares: 89, comments: 28 },
        { id: 4, title: 'Annual marathon sees record participation this year', date: 'Oct 10, 2023', views: '15.8K', category: 'Sports', shares: 512, comments: 76 },
    ];

    return (
        <DashboardLayout title="My Published Portfolio" roleTitle="Reporter" menuItems={menuItems}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Total Reach Summary */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-lg">
                        <h3 className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-2">Total Article Views</h3>
                        <p className="text-4xl font-black mb-1">41.5K</p>
                        <p className="text-sm text-green-400 font-bold">↑ 12% from last month</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4">
                        <h3 className="text-gray-800 font-bold flex items-center gap-2 border-b border-gray-100 pb-3">Performance Metrics</h3>

                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-gray-500">Articles Written</span>
                            <span className="font-bold text-gray-800">128</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-gray-500">Total Shares</span>
                            <span className="font-bold text-blue-600">1.2K</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-gray-500">Total Comments</span>
                            <span className="font-bold text-orange-600">450</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-gray-500">Average Read Time</span>
                            <span className="font-bold text-gray-800">2.5 mins</span>
                        </div>
                    </div>
                </div>

                {/* Published Articles List */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="text-lg font-bold text-gray-800">Detailed Performance</h2>
                            <select className="border border-gray-200 rounded-lg py-1 px-3 text-sm font-semibold text-gray-600 outline-none">
                                <option>Last 30 Days</option>
                                <option>Last 3 Months</option>
                                <option>All Time</option>
                            </select>
                        </div>

                        <div className="divide-y divide-gray-100">
                            {published.map((article) => (
                                <div key={article.id} className="p-6 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-md text-[10px] uppercase font-black tracking-wider shadow-sm">
                                            Published {article.category}
                                        </span>
                                        <span className="text-xs font-semibold text-gray-500">{article.date}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug cursor-pointer hover:text-red-600 transition-colors">
                                        {article.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-6 items-center">
                                        <div className="flex items-center gap-2 text-blue-600">
                                            <FaGlobe className="opacity-70" />
                                            <span className="font-bold text-sm">{article.views} Views</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <FaCheckDouble className="text-green-500" />
                                            <span className="font-semibold text-sm text-gray-500">{article.comments} Comments</span>
                                        </div>

                                        <div className="ml-auto flex items-center gap-2 text-xl text-gray-400">
                                            <FaFacebook className="hover:text-blue-600 cursor-pointer transition-colors" />
                                            <FaTwitter className="hover:text-blue-400 cursor-pointer transition-colors" />
                                            <FaWhatsapp className="hover:text-green-500 cursor-pointer transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
}
