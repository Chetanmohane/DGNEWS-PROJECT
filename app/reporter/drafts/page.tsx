"use client";

import { FaPencilAlt, FaPaperPlane, FaClock, FaCheckDouble, FaTrash, FaEdit } from 'react-icons/fa';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

export default function ReporterDraftsPage() {
    const menuItems = [
        { name: 'My Dashboard', href: '/reporter', icon: <FaPencilAlt /> },
        { name: 'Write Article', href: '/reporter/compose', icon: <FaPaperPlane /> },
        { name: 'Drafts', href: '/reporter/drafts', icon: <FaClock /> },
        { name: 'Published', href: '/reporter/published', icon: <FaCheckDouble /> },
    ];

    const drafts = [
        { id: 1, title: 'Upcoming city infrastructure projects facing delays', lastEdited: '2 hours ago', wordCount: 450, category: 'Development' },
        { id: 2, title: 'Local sports team wins state championship', lastEdited: '1 day ago', wordCount: 820, category: 'Sports' },
        { id: 3, title: 'New education policy reactions from local teachers', lastEdited: '3 days ago', wordCount: 310, category: 'Education' },
    ];

    return (
        <DashboardLayout title="My Drafts" roleTitle="Reporter" menuItems={menuItems}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <p className="text-gray-500 text-sm">You have {drafts.length} saved drafts. Drafts inactive for more than 30 days are automatically deleted.</p>
                </div>

                <div className="divide-y divide-gray-100">
                    {drafts.map((draft) => (
                        <div key={draft.id} className="p-6 hover:bg-gray-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-[10px] uppercase font-black tracking-wider">
                                        {draft.category}
                                    </span>
                                    <span className="text-xs text-gray-500 flex items-center gap-1">
                                        <FaClock className="text-gray-400" />
                                        Last edited {draft.lastEdited}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">{draft.title}</h3>
                                <p className="text-xs text-gray-500">{draft.wordCount} words • Estimated reading time: 2 min</p>
                            </div>

                            <div className="flex items-center gap-3 self-start sm:self-center">
                                <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                                    <FaEdit /> Continue Editing
                                </button>
                                <button className="p-2.5 rounded-xl text-red-500 bg-red-50 hover:bg-red-600 hover:text-white transition-all shadow-sm" title="Delete Draft">
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
