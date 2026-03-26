"use client";

import { FaPencilAlt, FaPaperPlane, FaClock, FaCheckDouble } from 'react-icons/fa';
import DashboardLayout from '../components/dashboard/DashboardLayout';

export default function ReporterPage() {
    const menuItems = [
        { name: 'My Dashboard', href: '/reporter', icon: <FaPencilAlt /> },
        { name: 'Write Article', href: '/reporter/compose', icon: <FaPaperPlane /> },
        { name: 'Drafts', href: '/reporter/drafts', icon: <FaClock /> },
        { name: 'Published', href: '/reporter/published', icon: <FaCheckDouble /> },
    ];

    return (
        <DashboardLayout title="Reporter Dashboard" roleTitle="Reporter" menuItems={menuItems}>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                    { title: "Articles Published", value: "128", color: "text-green-600", bg: "bg-green-50" },
                    { title: "Pending Review", value: "3", color: "text-orange-600", bg: "bg-orange-50" },
                    { title: "Drafts", value: "5", color: "text-gray-600", bg: "bg-gray-50" },
                    { title: "Total Views", value: "45.2K", color: "text-blue-600", bg: "bg-blue-50" }
                ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                        <h3 className="text-gray-500 text-sm font-semibold mb-2">{stat.title}</h3>
                        <span className={`text-3xl font-bold ${stat.color}`}>{stat.value}</span>
                    </div>
                ))}
            </div>

            <div className="flex justify-end mb-6">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-red-200 flex items-center gap-2 transition-transform active:scale-95">
                    <FaPencilAlt /> Create New Article
                </button>
            </div>

            {/* Main Content Area */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Articles</h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b-2 border-gray-100">
                                <th className="py-4 px-4 font-bold text-gray-500 uppercase text-xs">Title</th>
                                <th className="py-4 px-4 font-bold text-gray-500 uppercase text-xs">Category</th>
                                <th className="py-4 px-4 font-bold text-gray-500 uppercase text-xs">Status</th>
                                <th className="py-4 px-4 font-bold text-gray-500 uppercase text-xs">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3].map((item) => (
                                <tr key={item} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-4 font-semibold text-gray-800">
                                        Sthaniyo chunav ki taiyari shuru, netaon ne gaon ka rukh kiya...
                                    </td>
                                    <td className="py-4 px-4 text-sm text-gray-500">Politics</td>
                                    <td className="py-4 px-4">
                                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Published</span>
                                    </td>
                                    <td className="py-4 px-4 text-sm text-gray-500">Oct 24, 2023</td>
                                </tr>
                            ))}
                            <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                <td className="py-4 px-4 font-semibold text-gray-800">
                                    Naye highway project se zile mein aayegi kranti...
                                </td>
                                <td className="py-4 px-4 text-sm text-gray-500">Development</td>
                                <td className="py-4 px-4">
                                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">Pending Review</span>
                                </td>
                                <td className="py-4 px-4 text-sm text-gray-500">Oct 25, 2023</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
}
