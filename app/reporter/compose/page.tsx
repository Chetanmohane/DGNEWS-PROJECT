"use client";

import { useState } from 'react';
import { FaPencilAlt, FaPaperPlane, FaClock, FaCheckDouble, FaImage, FaTags } from 'react-icons/fa';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

export default function ReporterComposePage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('Politics');

    const menuItems = [
        { name: 'My Dashboard', href: '/reporter', icon: <FaPencilAlt /> },
        { name: 'Write Article', href: '/reporter/compose', icon: <FaPaperPlane /> },
        { name: 'Drafts', href: '/reporter/drafts', icon: <FaClock /> },
        { name: 'Published', href: '/reporter/published', icon: <FaCheckDouble /> },
    ];

    return (
        <DashboardLayout title="Write New Article" roleTitle="Reporter" menuItems={menuItems}>
            <div className="max-w-5xl mx-auto">

                {/* Editor Container */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                    {/* Top Action Bar */}
                    <div className="p-4 sm:p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gray-50">
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="bg-white border border-gray-200 rounded-lg py-2 px-4 text-sm font-bold text-gray-700 focus:outline-none focus:border-red-500 w-full sm:w-auto"
                            >
                                <option>Politics</option>
                                <option>Sports</option>
                                <option>Entertainment</option>
                                <option>Local News</option>
                                <option>Business</option>
                            </select>
                            <button className="text-gray-500 hover:text-red-600 bg-white border border-gray-200 p-2.5 rounded-lg transition-colors" title="Add Image">
                                <FaImage />
                            </button>
                            <button className="text-gray-500 hover:text-red-600 bg-white border border-gray-200 p-2.5 rounded-lg transition-colors" title="Add Tags">
                                <FaTags />
                            </button>
                        </div>
                        <div className="flex gap-3 w-full sm:w-auto">
                            <button className="flex-1 sm:flex-none border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 px-6 py-2.5 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2">
                                <FaClock /> Save Draft
                            </button>
                            <button className="flex-1 sm:flex-none bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-red-200 transition-colors flex items-center justify-center gap-2">
                                <FaPaperPlane /> Submit Review
                            </button>
                        </div>
                    </div>

                    {/* Editor Content Area */}
                    <div className="p-4 sm:p-8">
                        <input
                            type="text"
                            placeholder="Enter Article Headline Here..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full text-2xl sm:text-4xl font-black text-gray-900 border-none focus:outline-none focus:ring-0 placeholder-gray-300 mb-6 bg-transparent"
                        />

                        <div className="h-px bg-gray-100 w-full mb-6"></div>

                        <textarea
                            placeholder="Start writing your story here..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full min-h-[400px] text-gray-700 leading-relaxed text-lg border-none focus:outline-none focus:ring-0 resize-none bg-transparent placeholder-gray-300"
                        ></textarea>
                    </div>

                </div>

                {/* Guidelines Sidebar or Footer */}
                <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6">
                    <h3 className="text-blue-900 font-bold mb-2">Editorial Guidelines</h3>
                    <ul className="text-sm text-blue-800 space-y-2 list-disc pl-4">
                        <li>Headlines must be catchy yet accurate. Maximum 80 characters.</li>
                        <li>Include at least one high-quality featured image (16:9 ratio).</li>
                        <li>Double verify facts, especially for sensitive 'Politics' or 'Crime' categories.</li>
                    </ul>
                </div>

            </div>
        </DashboardLayout>
    );
}
