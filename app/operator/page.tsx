"use client";

import { FaPrint, FaFileContract, FaTasks, FaDownload } from 'react-icons/fa';
import DashboardLayout from '../components/dashboard/DashboardLayout';

export default function OperatorPage() {
    const menuItems = [
        { name: 'Print Queue', href: '/operator', icon: <FaPrint /> },
        { name: 'Layout Management', href: '/operator/layouts', icon: <FaFileContract /> },
        { name: 'Daily Tasks', href: '/operator/tasks', icon: <FaTasks /> },
        { name: 'Downloads', href: '/operator/downloads', icon: <FaDownload /> },
    ];

    return (
        <DashboardLayout title="Operator Dashboard" roleTitle="Operator" menuItems={menuItems}>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                    { title: "Print Jobs Pending", value: "3", color: "text-orange-600", bg: "bg-orange-50" },
                    { title: "Completed Today", value: "14", color: "text-green-600", bg: "bg-green-50" },
                    { title: "Active Layouts", value: "5", color: "text-blue-600", bg: "bg-blue-50" },
                    { title: "System Status", value: "Ready", color: "text-emerald-600", bg: "bg-emerald-50" }
                ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                        <h3 className="text-gray-500 text-sm font-semibold mb-2">{stat.title}</h3>
                        <span className={`text-3xl font-bold ${stat.color}`}>{stat.value}</span>
                    </div>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Current Print Queue</h2>

                <div className="space-y-4">
                    {[
                        { city: 'Delhi Edition', status: 'Processing Layout', time: '10 mins ago', icon: <FaFileContract className="text-orange-500" /> },
                        { city: 'Mumbai Edition', status: 'Ready for Print', time: '1 hour ago', icon: <FaPrint className="text-green-500" /> },
                        { city: 'Lucknow Edition', status: 'Waiting for Approval', time: '2 hours ago', icon: <FaTasks className="text-blue-500" /> }
                    ].map((job, i) => (
                        <div key={i} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-xl">
                                    {job.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">{job.city}</h4>
                                    <p className="text-sm text-gray-500">{job.time}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{job.status}</span>
                                <button className="text-red-600 hover:text-red-700 font-bold text-sm underline">Manage</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
