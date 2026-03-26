"use client";

import { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaTimes, FaSave } from 'react-icons/fa';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

export default function SuperAdminCategoriesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState<any>(null);

    const [categories, setCategories] = useState([
        { id: 1, name: 'Politics', status: 'Active', count: 124 },
        { id: 2, name: 'Sports', status: 'Active', count: 89 },
        { id: 3, name: 'Entertainment', status: 'Active', count: 210 },
        { id: 4, name: 'Technology', status: 'Inactive', count: 45 },
        { id: 5, name: 'Education', status: 'Active', count: 156 },
    ]);

    const menuItems = [
        { name: 'Dashboard Overview', href: '/super-admin', icon: <FaSearch /> }, // Re-using icons for demo
        { name: 'Manage Categories', href: '/super-admin/categories', icon: <FaSearch /> },
        { name: 'Manage Cities', href: '/super-admin/cities', icon: <FaSearch /> },
        { name: 'User Access', href: '/super-admin/users', icon: <FaSearch /> },
        { name: 'Platform Settings', href: '/super-admin/settings', icon: <FaSearch /> },
    ];

    const handleOpenModal = (category: any = null) => {
        setEditingCategory(category || { name: '', status: 'Active', count: 0 });
        setIsModalOpen(true);
    };

    const handleSave = () => {
        if (editingCategory.id) {
            setCategories(categories.map(c => c.id === editingCategory.id ? editingCategory : c));
        } else {
            setCategories([...categories, { ...editingCategory, id: Date.now() }]);
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id: number) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            setCategories(categories.filter(c => c.id !== id));
        }
    };

    return (
        <DashboardLayout title="Manage Categories" roleTitle="Super Admin" menuItems={menuItems}>
            {/* Top Bar Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div className="relative w-full sm:w-96">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search categories..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-shadow"
                    />
                </div>
                <button
                    onClick={() => handleOpenModal()}
                    className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                    <FaPlus /> Add New Category
                </button>
            </div>

            {/* Content Table */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-slate-800 border-b border-gray-100 dark:border-slate-800">
                                <th className="py-4 px-6 font-bold text-gray-500 dark:text-slate-400 uppercase text-xs">Category Name</th>
                                <th className="py-4 px-6 font-bold text-gray-500 dark:text-slate-400 uppercase text-xs">Articles Count</th>
                                <th className="py-4 px-6 font-bold text-gray-500 dark:text-slate-400 uppercase text-xs">Status</th>
                                <th className="py-4 px-6 font-bold text-gray-500 dark:text-slate-400 uppercase text-xs text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())).map((category) => (
                                <tr key={category.id} className="border-b border-gray-50 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 dark:bg-slate-800 transition-colors">
                                    <td className="py-4 px-6 font-bold text-gray-800 dark:text-slate-100">{category.name}</td>
                                    <td className="py-4 px-6 text-sm text-gray-500 dark:text-slate-400">{category.count} Articles</td>
                                    <td className="py-4 px-6">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${category.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600 dark:text-slate-300'
                                            }`}>
                                            {category.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <div className="flex items-center justify-end gap-3">
                                            <button
                                                onClick={() => handleOpenModal(category)}
                                                className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-colors"
                                                title="Edit"
                                            >
                                                <FaEdit />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(category.id)}
                                                className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                                                title="Delete"
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

                {/* Pagination */}
                <div className="p-4 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-sm text-gray-500 dark:text-slate-400">
                    <span>Showing {categories.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())).length} of {categories.length} entries</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 rounded border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800/50 dark:bg-slate-800 disabled:opacity-50" disabled>Prev</button>
                        <button className="px-3 py-1 rounded border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800/50 dark:bg-slate-800 disabled:opacity-50" disabled>Next</button>
                    </div>
                </div>
            </div>

            {/* Edit/Create Modal Overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center">
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                                {editingCategory?.id ? 'Edit Category' : 'Create New Category'}
                            </h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300 dark:text-slate-300 transition-colors p-2"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <div className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-slate-200 mb-2">Category Name</label>
                                <input
                                    type="text"
                                    value={editingCategory?.name || ''}
                                    onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                                    className="w-full border-2 border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors"
                                    placeholder="e.g. Technology"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-slate-200 mb-2">Status</label>
                                <select
                                    value={editingCategory?.status || 'Active'}
                                    onChange={(e) => setEditingCategory({ ...editingCategory, status: e.target.value })}
                                    className="w-full border-2 border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors cursor-pointer"
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
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
                                disabled={!editingCategory?.name}
                                className="px-6 py-2.5 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md shadow-red-200 flex items-center gap-2"
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
