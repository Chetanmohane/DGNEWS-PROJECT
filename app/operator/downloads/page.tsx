"use client";

import { FaDesktop, FaLayerGroup, FaTasks, FaDownload, FaFilePdf, FaPrint } from 'react-icons/fa';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

export default function OperatorDownloadsPage() {
    const menuItems = [
        { name: 'Console Overview', href: '/operator', icon: <FaDesktop /> },
        { name: 'Grid Layouts', href: '/operator/layouts', icon: <FaLayerGroup /> },
        { name: 'Daily Sequence', href: '/operator/tasks', icon: <FaTasks /> },
        { name: 'Print Ready files', href: '/operator/downloads', icon: <FaDownload /> },
    ];

    const printFiles = [
        { id: 1, name: 'Delhi_Edition_Oct25.pdf', size: '14.2 MB', pages: 16, time: '04:15 AM', status: 'Ready' },
        { id: 2, name: 'Mumbai_Edition_Oct25.pdf', size: '15.1 MB', pages: 16, time: '04:20 AM', status: 'Ready' },
        { id: 3, name: 'Lucknow_Edition_Oct25.pdf', size: '13.8 MB', pages: 14, time: '04:25 AM', status: 'Processing' },
    ];

    return (
        <DashboardLayout title="Print Ready Downloads" roleTitle="Operator" menuItems={menuItems}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-blue-50/30">
                    <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <FaPrint className="text-blue-500" /> Exported Final Layouts
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="py-4 px-6 font-bold text-gray-500 uppercase text-xs w-2/5">File Name</th>
                                <th className="py-4 px-6 font-bold text-gray-500 uppercase text-xs">Size & Pages</th>
                                <th className="py-4 px-6 font-bold text-gray-500 uppercase text-xs">Generated At</th>
                                <th className="py-4 px-6 font-bold text-gray-500 uppercase text-xs text-right">Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            {printFiles.map((file) => (
                                <tr key={file.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-6 flex items-center gap-3">
                                        <div className="w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center text-lg shrink-0">
                                            <FaFilePdf />
                                        </div>
                                        <p className="font-bold text-gray-900">{file.name}</p>
                                    </td>
                                    <td className="py-4 px-6">
                                        <p className="font-semibold text-gray-800 text-sm">{file.size}</p>
                                        <p className="text-xs text-gray-500">{file.pages} Pages</p>
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-500">
                                        {file.time}
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        {file.status === 'Ready' ? (
                                            <button className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-xl font-bold transition-all shadow-md shadow-blue-200">
                                                Download CMYK
                                            </button>
                                        ) : (
                                            <button disabled className="text-gray-400 bg-gray-100 px-6 py-2.5 rounded-xl font-bold cursor-not-allowed">
                                                Processing...
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
}
