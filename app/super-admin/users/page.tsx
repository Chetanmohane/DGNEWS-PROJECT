"use client";

import { useState } from 'react';
import { FaUsers, FaPlus, FaSearch, FaGlobeAmericas, FaCity, FaTag, FaCog, FaEdit, FaTrash, FaTimes, FaSave } from 'react-icons/fa';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

export default function SuperAdminUsersPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<any>(null);

    const [users, setUsers] = useState([
        { id: 1, name: 'Amit Sharma', role: 'CITY_ADMIN', city: 'Delhi', email: 'amit@dgnews.com', status: 'Active', category: '' },
        { id: 2, name: 'Priya Verma', role: 'SECTION_ADMIN', category: 'Politics', email: 'priya@dgnews.com', status: 'Active', city: '' },
        { id: 3, name: 'Rahul Singh', role: 'REPORTER', city: 'Mumbai', email: 'rahul@dgnews.com', status: 'Inactive', category: '' },
        { id: 4, name: 'Neha Gupta', role: 'OPERATOR', email: 'neha@dgnews.com', status: 'Active', city: '', category: '' },
        { id: 5, name: 'Vikram Das', role: 'SUPER_ADMIN', email: 'vikram@dgnews.com', status: 'Active', city: '', category: '' },
    ]);

    const menuItems = [
        { name: 'Dashboard Overview', href: '/super-admin', icon: <FaGlobeAmericas /> },
        { name: 'Manage Categories', href: '/super-admin/categories', icon: <FaTag /> },
        { name: 'Manage Cities', href: '/super-admin/cities', icon: <FaCity /> },
        { name: 'User Access', href: '/super-admin/users', icon: <FaUsers /> },
        { name: 'Platform Settings', href: '/super-admin/settings', icon: <FaCog /> },
    ];

    const getRoleColor = (role: string) => {
        switch (role) {
            case 'SUPER_ADMIN': return 'bg-red-100 text-red-700 border-red-200';
            case 'CITY_ADMIN': return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'SECTION_ADMIN': return 'bg-orange-100 text-orange-700 border-orange-200';
            case 'REPORTER': return 'bg-green-100 text-green-700 border-green-200';
            case 'OPERATOR': return 'bg-gray-100 text-gray-700 dark:text-slate-200 border-gray-200 dark:border-slate-700';
            default: return 'bg-gray-100 text-gray-700 dark:text-slate-200 border-gray-200 dark:border-slate-700';
        }
    };

    const handleOpenModal = (user: any = null) => {
        setEditingUser(user || { name: '', email: '', role: 'REPORTER', city: '', category: '', status: 'Active' });
        setIsModalOpen(true);
    };

    const handleSave = () => {
        if (editingUser.id) {
            setUsers(users.map(u => u.id === editingUser.id ? editingUser : u));
        } else {
            setUsers([...users, { ...editingUser, id: Date.now() }]);
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id: number) => {
        if (window.confirm("Are you sure you want to disable and remove this user?")) {
            setUsers(users.filter(u => u.id !== id));
        }
    };

    return (
        <DashboardLayout title="User Access Management" roleTitle="Super Admin" menuItems={menuItems}>

            {/* Top Bar Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div className="relative w-full sm:w-96">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search users by name, email or role..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-shadow"
                    />
                </div>
                <button
                    onClick={() => handleOpenModal()}
                    className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                    <FaPlus /> Create New User
                </button>
            </div>

            {/* Users Table */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden text-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-slate-800 border-b border-gray-100 dark:border-slate-800">
                                <th className="py-4 px-6 font-bold text-gray-500 dark:text-slate-400 uppercase text-xs">User Profile</th>
                                <th className="py-4 px-6 font-bold text-gray-500 dark:text-slate-400 uppercase text-xs">Platform Role</th>
                                <th className="py-4 px-6 font-bold text-gray-500 dark:text-slate-400 uppercase text-xs">Assignment</th>
                                <th className="py-4 px-6 font-bold text-gray-500 dark:text-slate-400 uppercase text-xs">Status</th>
                                <th className="py-4 px-6 font-bold text-gray-500 dark:text-slate-400 uppercase text-xs text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.filter(u =>
                                u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                u.role.toLowerCase().includes(searchTerm.toLowerCase())
                            ).map((user) => (
                                <tr key={user.id} className="border-b border-gray-50 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 dark:bg-slate-800 transition-colors">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 shrink-0">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900 dark:text-white">{user.name}</p>
                                                <p className="text-xs text-gray-500 dark:text-slate-400">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-black tracking-wider border ${getRoleColor(user.role)}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-gray-600 dark:text-slate-300 font-medium">
                                        {user.city ? `City: ${user.city}` : (user.category ? `Category: ${user.category}` : 'Global Access')}
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                                            <span className="font-medium text-gray-700 dark:text-slate-200">{user.status}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <div className="flex items-center justify-end gap-3">
                                            <button
                                                onClick={() => handleOpenModal(user)}
                                                className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-colors"
                                                title="Edit User"
                                            >
                                                <FaEdit />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(user.id)}
                                                className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                                                title="Delete User"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Edit/Create Modal Overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center bg-gray-50/50">
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white flex items-center gap-2">
                                <FaUsers className="text-red-500" />
                                {editingUser?.id ? 'Edit User Access Profile' : 'Provision New User'}
                            </h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300 dark:text-slate-300 transition-colors p-2 bg-white dark:bg-slate-900 rounded-full shadow-sm"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">

                            {/* Personal Details Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 dark:text-slate-200 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        value={editingUser?.name || ''}
                                        onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                                        className="w-full border-2 border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-gray-50 dark:bg-slate-800 focus:bg-white dark:bg-slate-900"
                                        placeholder="e.g. Rahul Singh"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 dark:text-slate-200 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        value={editingUser?.email || ''}
                                        onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                                        className="w-full border-2 border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-gray-50 dark:bg-slate-800 focus:bg-white dark:bg-slate-900"
                                        placeholder="e.g. rahul@dgnews.com"
                                    />
                                </div>
                            </div>

                            {/* Role and Access Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 dark:text-slate-200 mb-2">System Role</label>
                                    <select
                                        value={editingUser?.role || 'REPORTER'}
                                        onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
                                        className="w-full border-2 border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors cursor-pointer bg-white dark:bg-slate-900 font-medium"
                                    >
                                        <option value="SUPER_ADMIN">System Administrator</option>
                                        <option value="CITY_ADMIN">City Administrator</option>
                                        <option value="SECTION_ADMIN">Section Administrator</option>
                                        <option value="REPORTER">Reporter/Journalist</option>
                                        <option value="OPERATOR">Press Operator</option>
                                    </select>
                                </div>

                                {['CITY_ADMIN', 'REPORTER'].includes(editingUser?.role) && (
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-slate-200 mb-2">Assigned City</label>
                                        <input
                                            type="text"
                                            value={editingUser?.city || ''}
                                            onChange={(e) => setEditingUser({ ...editingUser, city: e.target.value })}
                                            className="w-full border-2 border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-white dark:bg-slate-900"
                                            placeholder="e.g. Delhi"
                                        />
                                    </div>
                                )}

                                {['SECTION_ADMIN'].includes(editingUser?.role) && (
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 dark:text-slate-200 mb-2">Assigned Category</label>
                                        <input
                                            type="text"
                                            value={editingUser?.category || ''}
                                            onChange={(e) => setEditingUser({ ...editingUser, category: e.target.value })}
                                            className="w-full border-2 border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-white dark:bg-slate-900"
                                            placeholder="e.g. Politics"
                                        />
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-slate-200 mb-2">Account Status</label>
                                <select
                                    value={editingUser?.status || 'Active'}
                                    onChange={(e) => setEditingUser({ ...editingUser, status: e.target.value })}
                                    className="w-full border-2 border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors cursor-pointer bg-gray-50 dark:bg-slate-800 focus:bg-white dark:bg-slate-900 font-medium"
                                >
                                    <option value="Active">🟢 Active & Enabled</option>
                                    <option value="Inactive">🔴 Inactive/Suspended</option>
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
                                disabled={!editingUser?.name || !editingUser?.email}
                                className="px-6 py-2.5 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-red-200 flex items-center gap-2 active:scale-95"
                            >
                                <FaSave /> Save Profile Update
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </DashboardLayout>
    );
}
