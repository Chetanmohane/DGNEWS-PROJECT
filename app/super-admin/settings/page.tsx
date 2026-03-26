"use client";

import { FaGlobeAmericas, FaCity, FaTag, FaUsers, FaCog, FaSave, FaShieldAlt, FaBell } from 'react-icons/fa';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

export default function SuperAdminSettingsPage() {
    const menuItems = [
        { name: 'Dashboard Overview', href: '/super-admin', icon: <FaGlobeAmericas /> },
        { name: 'Manage Categories', href: '/super-admin/categories', icon: <FaTag /> },
        { name: 'Manage Cities', href: '/super-admin/cities', icon: <FaCity /> },
        { name: 'User Access', href: '/super-admin/users', icon: <FaUsers /> },
        { name: 'Platform Settings', href: '/super-admin/settings', icon: <FaCog /> },
    ];

    return (
        <DashboardLayout title="Platform Settings" roleTitle="Super Admin" menuItems={menuItems}>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Main Settings Form */}
                <div className="lg:col-span-2 space-y-6">
                    {/* General Settings */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-6 md:p-8">
                        <div className="flex items-center justify-between mb-6 border-b border-gray-100 dark:border-slate-800 pb-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-slate-100 flex items-center gap-2">
                                <FaCog className="text-gray-400 dark:text-slate-500" /> General Info
                            </h2>
                        </div>
                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-slate-200 mb-2">Platform Name</label>
                                <input type="text" className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm font-medium focus:outline-none focus:border-red-500 transition-colors" defaultValue="DG News Network" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-slate-200 mb-2">Support Email</label>
                                <input type="email" className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm font-medium focus:outline-none focus:border-red-500 transition-colors" defaultValue="support@dgnews.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-slate-200 mb-2">Maximum Upload Size (E-Paper)</label>
                                <select className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm font-medium focus:outline-none focus:border-red-500 transition-colors">
                                    <option>20 MB</option>
                                    <option selected>50 MB</option>
                                    <option>100 MB</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Security Settings */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-6 md:p-8">
                        <div className="flex items-center justify-between mb-6 border-b border-gray-100 dark:border-slate-800 pb-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-slate-100 flex items-center gap-2">
                                <FaShieldAlt className="text-gray-400 dark:text-slate-500" /> Security
                            </h2>
                        </div>
                        <div className="space-y-4">
                            <label className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-800 cursor-pointer hover:bg-gray-100 transition-colors">
                                <div>
                                    <p className="font-bold text-sm text-gray-800 dark:text-slate-100">Require 2FA for Admins</p>
                                    <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">Force two-factor authentication for higher level access.</p>
                                </div>
                                <input type="checkbox" className="w-5 h-5 accent-red-600 cursor-pointer" defaultChecked />
                            </label>

                            <label className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-800 cursor-pointer hover:bg-gray-100 transition-colors">
                                <div>
                                    <p className="font-bold text-sm text-gray-800 dark:text-slate-100">Auto-logout After Inactivity</p>
                                    <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">Logout users after 30 minutes of idle time.</p>
                                </div>
                                <input type="checkbox" className="w-5 h-5 accent-red-600 cursor-pointer" defaultChecked />
                            </label>
                        </div>
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-end">
                        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-red-200 transition-all active:scale-95">
                            <FaSave /> Save Changes
                        </button>
                    </div>
                </div>

                {/* Sidebar Info/Notifications */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-6">
                        <h2 className="text-lg font-bold text-gray-800 dark:text-slate-100 flex items-center gap-2 mb-6 border-b border-gray-100 dark:border-slate-800 pb-3">
                            <FaBell className="text-gray-400 dark:text-slate-500" /> System Alerts
                        </h2>
                        <div className="space-y-4">
                            <div className="bg-red-50 border border-red-100 p-4 rounded-xl">
                                <span className="px-2 py-0.5 bg-red-600 text-white text-[10px] uppercase font-black tracking-wider rounded">Critical</span>
                                <p className="text-sm font-semibold text-red-900 mt-2">Server storage is reaching 85% capacity in Mumbai Node.</p>
                            </div>
                            <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl">
                                <span className="px-2 py-0.5 bg-blue-600 text-white text-[10px] uppercase font-black tracking-wider rounded">Info</span>
                                <p className="text-sm font-semibold text-blue-900 mt-2">New platform update (v2.1.0) is available for deploy.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-2xl shadow-lg p-6 text-white text-center">
                        <FaCog className="text-4xl text-slate-700 mx-auto mb-4 animate-spin-slow" />
                        <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                        <p className="text-sm text-slate-400 font-medium mb-6">Contact the technical support team for advanced configurations.</p>
                        <button className="w-full bg-slate-800 hover:bg-slate-700 py-3 rounded-xl text-sm font-bold transition-colors">Contact Tech Support</button>
                    </div>
                </div>

            </div>

        </DashboardLayout>
    );
}
