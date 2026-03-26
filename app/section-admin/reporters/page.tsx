"use client";

import { useState } from 'react';
import { FaChartLine, FaCheckCircle, FaUsers, FaRegFileAlt, FaMapMarkerAlt, FaFileSignature, FaPlus, FaTimes, FaSave, FaEdit, FaTrash } from 'react-icons/fa';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

export default function SectionAdminReportersPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingReporter, setEditingReporter] = useState<any>(null);

    const [reporters, setReporters] = useState([
        { id: 1, name: 'Anikesh Sharma', location: 'Delhi', articles: 45, status: 'Active', rating: 4.8 },
        { id: 2, name: 'Suman Tiwari', location: 'Mumbai', articles: 12, status: 'Active', rating: 4.2 },
        { id: 3, name: 'Ritesh Pandey', location: 'Lucknow', articles: 89, status: 'On Leave', rating: 4.9 },
        { id: 4, name: 'Neha Singh', location: 'Patna', articles: 34, status: 'Active', rating: 4.5 },
    ]);

    const menuItems = [
        { name: 'Category Overview', href: '/section-admin', icon: <FaChartLine /> },
        { name: 'Pending Approvals', href: '/section-admin/approvals', icon: <FaCheckCircle /> },
        { name: 'Manage Reporters', href: '/section-admin/reporters', icon: <FaUsers /> },
        { name: 'Published Articles', href: '/section-admin/published', icon: <FaRegFileAlt /> },
    ];

    const handleOpenModal = (reporter: any = null) => {
        setEditingReporter(reporter || { name: '', location: '', articles: 0, status: 'Active', rating: 0 });
        setIsModalOpen(true);
    };

    const handleSave = () => {
        if (editingReporter.id) {
            setReporters(reporters.map(r => r.id === editingReporter.id ? editingReporter : r));
        } else {
            setReporters([...reporters, { ...editingReporter, id: Date.now(), rating: 5.0, articles: 0 }]); // Default values for new
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id: number) => {
        if (window.confirm("Are you sure you want to remove this reporter?")) {
            setReporters(reporters.filter(r => r.id !== id));
        }
    };

    return (
        <DashboardLayout title="Reporter Management" roleTitle="Section Admin" menuItems={menuItems}>
            <div className="flex justify-end mb-8">
                <button
                    onClick={() => handleOpenModal()}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm transition-colors w-full sm:w-auto justify-center"
                >
                    <FaPlus /> Add New Reporter
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reporters.map((reporter) => (
                    <div key={reporter.id} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-800 flex flex-col items-center text-center hover:shadow-lg transition-shadow relative">
                        <div className="absolute top-4 right-4 flex gap-2">
                            <button
                                onClick={() => handleOpenModal(reporter)}
                                className="text-blue-500 hover:bg-blue-50 p-1.5 rounded-md transition-colors"
                            >
                                <FaEdit />
                            </button>
                            <button
                                onClick={() => handleDelete(reporter.id)}
                                className="text-red-500 hover:bg-red-50 p-1.5 rounded-md transition-colors"
                            >
                                <FaTrash />
                            </button>
                        </div>

                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-2xl font-bold text-white mb-4 shadow-md mt-4">
                            {reporter.name.charAt(0)}
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{reporter.name}</h3>
                        <p className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-widest flex items-center justify-center gap-1 mb-4">
                            <FaMapMarkerAlt className="text-red-500" /> {reporter.location}
                        </p>

                        <div className="w-full bg-gray-50 dark:bg-slate-800 rounded-xl p-4 flex justify-between items-center border border-gray-100 dark:border-slate-800 mb-4">
                            <div className="flex flex-col items-center">
                                <span className="text-gray-400 dark:text-slate-500 text-xs font-bold mb-1">Articles</span>
                                <span className="text-gray-800 dark:text-slate-100 font-bold flex items-center gap-1"><FaFileSignature className="text-blue-500" /> {reporter.articles}</span>
                            </div>
                            <div className="h-8 w-px bg-gray-200"></div>
                            <div className="flex flex-col items-center">
                                <span className="text-gray-400 dark:text-slate-500 text-xs font-bold mb-1">Rating</span>
                                <span className="text-gray-800 dark:text-slate-100 font-bold text-sm">⭐ {reporter.rating}</span>
                            </div>
                        </div>

                        <span className={`w-full py-2 rounded-lg text-xs font-bold transition-colors ${reporter.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'
                            }`}>
                            Status: {reporter.status}
                        </span>
                    </div>
                ))}
            </div>

            {/* Edit/Create Modal Overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center bg-gray-50/50">
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white flex items-center gap-2">
                                <FaUsers className="text-red-500" />
                                {editingReporter?.id ? 'Edit Reporter Details' : 'Add New Reporter'}
                            </h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300 dark:text-slate-300 transition-colors p-2 bg-white dark:bg-slate-900 rounded-full shadow-sm"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-slate-200 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    value={editingReporter?.name || ''}
                                    onChange={(e) => setEditingReporter({ ...editingReporter, name: e.target.value })}
                                    className="w-full border-2 border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-gray-50 dark:bg-slate-800 focus:bg-white dark:bg-slate-900"
                                    placeholder="e.g. Ramesh Joshi"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-slate-200 mb-2">Location/City</label>
                                <input
                                    type="text"
                                    value={editingReporter?.location || ''}
                                    onChange={(e) => setEditingReporter({ ...editingReporter, location: e.target.value })}
                                    className="w-full border-2 border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-gray-50 dark:bg-slate-800 focus:bg-white dark:bg-slate-900"
                                    placeholder="e.g. Pune"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-slate-200 mb-2">Current Status</label>
                                <select
                                    value={editingReporter?.status || 'Active'}
                                    onChange={(e) => setEditingReporter({ ...editingReporter, status: e.target.value })}
                                    className="w-full border-2 border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors cursor-pointer bg-gray-50 dark:bg-slate-800 focus:bg-white dark:bg-slate-900 font-medium"
                                >
                                    <option value="Active">🟢 Active</option>
                                    <option value="On Leave">🟡 On Leave</option>
                                    <option value="Inactive">🔴 Inactive</option>
                                </select>
                            </div>
                        </div>

                        <div className="p-6 border-t border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800 flex justify-end gap-3">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-6 py-2.5 rounded-xl font-bold text-sm text-gray-600 dark:text-slate-300 bg-white dark:bg-slate-900 border border-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800/50 dark:bg-slate-800 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={!editingReporter?.name || !editingReporter?.location}
                                className="px-6 py-2.5 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-red-200 flex items-center gap-2 active:scale-95"
                            >
                                <FaSave /> Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </DashboardLayout>
    );
}
