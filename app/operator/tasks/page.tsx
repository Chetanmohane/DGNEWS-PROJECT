"use client";

import { useState } from 'react';
import { FaDesktop, FaLayerGroup, FaTasks, FaDownload, FaCheck } from 'react-icons/fa';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

export default function OperatorTasksPage() {
    const menuItems = [
        { name: 'Console Overview', href: '/operator', icon: <FaDesktop /> },
        { name: 'Grid Layouts', href: '/operator/layouts', icon: <FaLayerGroup /> },
        { name: 'Daily Sequence', href: '/operator/tasks', icon: <FaTasks /> },
        { name: 'Print Ready files', href: '/operator/downloads', icon: <FaDownload /> },
    ];

    const [tasks, setTasks] = useState([
        { id: 1, name: 'Compile Front Page (National)', status: 'completed', time: '02:00 AM' },
        { id: 2, name: 'Compile City Pages (Delhi)', status: 'completed', time: '02:30 AM' },
        { id: 3, name: 'Insert Approved Advertisements', status: 'completed', time: '03:00 AM' },
        { id: 4, name: 'Final PDF Export Generation', status: 'pending', time: '03:30 AM' },
        { id: 5, name: 'Upload to Distribution Network', status: 'pending', time: '04:00 AM' },
    ]);

    const toggleTask = (id: number) => {
        setTasks(tasks.map(t =>
            t.id === id ? { ...t, status: t.status === 'completed' ? 'pending' : 'completed' } : t
        ));
    };

    return (
        <DashboardLayout title="Nightly Print Sequence" roleTitle="Operator" menuItems={menuItems}>
            <div className="max-w-3xl mx-auto">

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                    <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-4">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-1">Today's Checklist</h2>
                            <p className="text-sm text-gray-500 font-medium">October 25, 2023 - Delhi Edition Release</p>
                        </div>
                        <div className="text-right">
                            <span className="text-3xl font-black text-blue-600">{tasks.filter(t => t.status === 'completed').length}</span>
                            <span className="text-gray-400 font-bold">/{tasks.length}</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {tasks.map((task) => (
                            <div
                                key={task.id}
                                onClick={() => toggleTask(task.id)}
                                className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer ${task.status === 'completed'
                                        ? 'bg-blue-50 border-blue-200 opacity-70'
                                        : 'bg-white border-gray-200 hover:border-blue-400 shadow-sm'
                                    }`}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${task.status === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400 border border-gray-300'
                                    }`}>
                                    {task.status === 'completed' && <FaCheck className="text-sm" />}
                                </div>
                                <div className="flex-1">
                                    <h3 className={`font-bold transition-colors ${task.status === 'completed' ? 'text-blue-900 line-through' : 'text-gray-900'}`}>
                                        {task.name}
                                    </h3>
                                </div>
                                <div className="text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wider">
                                    {task.time}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <button
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-200 transition-colors flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={tasks.filter(t => t.status === 'completed').length !== tasks.length}
                        >
                            <FaCheckDouble /> Mark Sequence Complete
                        </button>
                    </div>

                </div>
            </div>
        </DashboardLayout>
    );
}

// Ensure the icon import exists since I added it inline
import { FaCheckDouble } from 'react-icons/fa';
