"use client";

import { useState } from 'react';
import { FaCity, FaPlus, FaMapMarkerAlt, FaGlobeAmericas, FaTag, FaUsers, FaCog, FaTimes, FaSave } from 'react-icons/fa';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

export default function SuperAdminCitiesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCity, setEditingCity] = useState<any>(null);

    const [cities, setCities] = useState([
        { id: 1, name: 'Delhi', state: 'Delhi', activeReporters: 12, ePaper: 'Daily', status: 'Active' },
        { id: 2, name: 'Mumbai', state: 'Maharashtra', activeReporters: 8, ePaper: 'Daily', status: 'Active' },
        { id: 3, name: 'Lucknow', state: 'Uttar Pradesh', activeReporters: 15, ePaper: 'Daily', status: 'Active' },
        { id: 4, name: 'Patna', state: 'Bihar', activeReporters: 10, ePaper: 'Weekly', status: 'Active' },
        { id: 5, name: 'Indore', state: 'Madhya Pradesh', activeReporters: 5, ePaper: 'Daily', status: 'Active' },
    ]);

    const menuItems = [
        { name: 'Dashboard Overview', href: '/super-admin', icon: <FaGlobeAmericas /> },
        { name: 'Manage Categories', href: '/super-admin/categories', icon: <FaTag /> },
        { name: 'Manage Cities', href: '/super-admin/cities', icon: <FaCity /> },
        { name: 'User Access', href: '/super-admin/users', icon: <FaUsers /> },
        { name: 'Platform Settings', href: '/super-admin/settings', icon: <FaCog /> },
    ];

    const handleOpenModal = (city: any = null) => {
        setEditingCity(city || { name: '', state: '', activeReporters: 0, ePaper: 'Daily', status: 'Active' });
        setIsModalOpen(true);
    };

    const handleSave = () => {
        if (editingCity.id) {
            setCities(cities.map(c => c.id === editingCity.id ? editingCity : c));
        } else {
            setCities([...cities, { ...editingCity, id: Date.now() }]);
        }
        setIsModalOpen(false);
    };

    const handleSuspend = (id: number) => {
        if (window.confirm("Are you sure you want to suspend this city?")) {
            setCities(cities.map(c => c.id === id ? { ...c, status: 'Suspended' } : c));
        }
    };

    return (
        <DashboardLayout title="Manage Cities" roleTitle="Super Admin" menuItems={menuItems}>

            <div className="flex justify-end mb-8">
                <button
                    onClick={() => handleOpenModal()}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm transition-colors w-full sm:w-auto justify-center"
                >
                    <FaPlus /> Add New City
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cities.map((city) => (
                    <div key={city.id} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-800 flex flex-col hover:shadow-lg transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center text-xl shrink-0">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">{city.name}</h3>
                                    <p className="text-xs font-semibold text-gray-500 dark:text-slate-400">{city.state}</p>
                                </div>
                            </div>
                            <span className={`px-3 py-1 text-[10px] font-black uppercase rounded-full tracking-wider ${city.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                }`}>
                                {city.status}
                            </span>
                        </div>

                        <div className="mt-auto space-y-3 pt-4 border-t border-gray-50 dark:border-slate-800">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500 dark:text-slate-400">Active Reporters:</span>
                                <span className="font-bold text-gray-800 dark:text-slate-100">{city.activeReporters}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500 dark:text-slate-400">E-Paper Frequency:</span>
                                <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{city.ePaper}</span>
                            </div>
                        </div>

                        <div className="flex gap-2 mt-6 pt-4 border-t border-gray-100 dark:border-slate-800">
                            <button
                                onClick={() => handleOpenModal(city)}
                                className="flex-1 bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 text-gray-700 dark:text-slate-200 py-2 rounded-lg text-sm font-bold transition-colors"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleSuspend(city.id)}
                                disabled={city.status === 'Suspended'}
                                className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 py-2 rounded-lg text-sm font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Suspend
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Edit/Create Modal Overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center bg-gray-50/50">
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white flex items-center gap-2">
                                <FaMapMarkerAlt className="text-red-500" />
                                {editingCity?.id ? 'Edit City Configuration' : 'Onboard New City'}
                            </h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300 dark:text-slate-300 transition-colors p-2 bg-white dark:bg-slate-900 rounded-full shadow-sm"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 dark:text-slate-200 mb-2">City Name</label>
                                    <input
                                        type="text"
                                        value={editingCity?.name || ''}
                                        onChange={(e) => setEditingCity({ ...editingCity, name: e.target.value })}
                                        className="w-full border-2 border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-gray-50 dark:bg-slate-800 focus:bg-white dark:bg-slate-900"
                                        placeholder="e.g. Pune"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 dark:text-slate-200 mb-2">State</label>
                                    <input
                                        type="text"
                                        value={editingCity?.state || ''}
                                        onChange={(e) => setEditingCity({ ...editingCity, state: e.target.value })}
                                        className="w-full border-2 border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-gray-50 dark:bg-slate-800 focus:bg-white dark:bg-slate-900"
                                        placeholder="e.g. MH"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-slate-200 mb-2">E-Paper Frequency</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {['Daily', 'Weekly'].map((freq) => (
                                        <button
                                            key={freq}
                                            onClick={() => setEditingCity({ ...editingCity, ePaper: freq })}
                                            className={`py-3 rounded-xl border-2 text-sm font-bold transition-all ${editingCity?.ePaper === freq
                                                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                                                    : 'border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 text-gray-500 dark:text-slate-400 hover:border-gray-300'
                                                }`}
                                        >
                                            {freq}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-slate-200 mb-2">Initial Status</label>
                                <select
                                    value={editingCity?.status || 'Active'}
                                    onChange={(e) => setEditingCity({ ...editingCity, status: e.target.value })}
                                    className="w-full border-2 border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors cursor-pointer bg-gray-50 dark:bg-slate-800 focus:bg-white dark:bg-slate-900 font-medium"
                                >
                                    <option value="Active">🟢 Active Operations</option>
                                    <option value="Suspended">🔴 Suspended/Hold</option>
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
                                disabled={!editingCity?.name || !editingCity?.state}
                                className="px-6 py-2.5 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-red-200 flex items-center gap-2 active:scale-95"
                            >
                                <FaSave /> Save Location
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </DashboardLayout>
    );
}
