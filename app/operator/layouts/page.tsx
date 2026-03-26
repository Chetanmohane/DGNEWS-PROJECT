"use client";

import { FaDesktop, FaLayerGroup, FaTasks, FaDownload, FaEye } from 'react-icons/fa';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

export default function OperatorLayoutsPage() {
    const menuItems = [
        { name: 'Console Overview', href: '/operator', icon: <FaDesktop /> },
        { name: 'Grid Layouts', href: '/operator/layouts', icon: <FaLayerGroup /> },
        { name: 'Daily Sequence', href: '/operator/tasks', icon: <FaTasks /> },
        { name: 'Print Ready files', href: '/operator/downloads', icon: <FaDownload /> },
    ];

    const layouts = [
        { id: 1, name: 'Standard Daily', pages: 16, adSlots: 6, status: 'Active' },
        { id: 2, name: 'Sunday Special', pages: 20, adSlots: 8, status: 'Active' },
        { id: 3, name: 'Election Coverage', pages: 18, adSlots: 4, status: 'Inactive' },
        { id: 4, name: 'Festive Edition', pages: 24, adSlots: 10, status: 'Drafting' },
    ];

    return (
        <DashboardLayout title="E-Paper Grid Layouts" roleTitle="Operator" menuItems={menuItems}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {layouts.map((layout) => (
                    <div key={layout.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col group hover:shadow-lg transition-all hover:border-blue-200">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                                <FaLayerGroup />
                            </div>
                            <span className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-md border ${layout.status === 'Active' ? 'bg-green-50 text-green-700 border-green-200' :
                                    layout.status === 'Drafting' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                                        'bg-gray-50 text-gray-600 border-gray-200'
                                }`}>
                                {layout.status}
                            </span>
                        </div>

                        <h3 className="font-black text-gray-900 text-lg mb-2">{layout.name}</h3>

                        <div className="space-y-2 mt-auto">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500 font-medium">Total Pages</span>
                                <span className="font-bold text-gray-800 bg-gray-100 px-2 rounded">{layout.pages}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500 font-medium">Ad Slots</span>
                                <span className="font-bold text-gray-800 bg-gray-100 px-2 rounded">{layout.adSlots}</span>
                            </div>
                        </div>

                        <button className="w-full mt-6 bg-slate-50 hover:bg-slate-900 hover:text-white text-slate-700 py-3 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-900 group-hover:shadow-md">
                            <FaEye /> Preview Layout
                        </button>
                    </div>
                ))}
            </div>
        </DashboardLayout>
    );
}
