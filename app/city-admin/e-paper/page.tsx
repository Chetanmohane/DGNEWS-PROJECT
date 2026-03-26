"use client";

import { useState } from 'react';
import { FaRegFilePdf, FaUpload, FaMapMarkerAlt, FaUsers, FaArrowRight, FaCheckCircle, FaTrash } from 'react-icons/fa';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

export default function CityAdminEPaperPage() {
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);

    const menuItems = [
        { name: 'City Overview', href: '/city-admin', icon: <FaMapMarkerAlt /> },
        { name: 'Upload E-Paper', href: '/city-admin/e-paper', icon: <FaUpload /> },
        { name: 'Manage Reporters', href: '/city-admin/reporters', icon: <FaUsers /> },
        { name: 'City Archives', href: '/city-admin/archives', icon: <FaRegFilePdf /> },
    ];

    const handleUpload = () => {
        setIsUploading(true);
        setTimeout(() => {
            setIsUploading(false);
            setUploadSuccess(true);
        }, 2000);
    };

    return (
        <DashboardLayout title="Upload Daily E-Paper" roleTitle="City Admin" menuItems={menuItems}>
            <div className="max-w-4xl mx-auto mt-4">

                {/* Information Callout */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl mb-8 flex gap-4 text-blue-800">
                    <p className="font-medium text-sm">
                        Please ensure the PDF file is thoroughly reviewed. Once uploaded, it will be immediately available to the public for your respective city edition. Max file size: 50MB.
                    </p>
                </div>

                {/* Upload Form Area */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-8 sm:p-12 relative overflow-hidden">

                    {!uploadSuccess ? (
                        <>
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wide mb-2">Publish Today's Edition</h2>
                                <p className="text-gray-500 dark:text-slate-400 font-semibold text-sm">Select the finalized print directory PDF</p>
                            </div>

                            <div
                                className={`border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-12 transition-all cursor-pointer ${file ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 hover:border-red-300'
                                    }`}
                            >
                                {!file ? (
                                    <>
                                        <div className="w-16 h-16 bg-white dark:bg-slate-900 shadow-sm rounded-full flex items-center justify-center text-red-500 text-3xl mb-4 group-hover:scale-110 transition-transform">
                                            <FaRegFilePdf />
                                        </div>
                                        <p className="font-bold text-gray-800 dark:text-slate-100 mb-1">Drag & Drop PDF here</p>
                                        <p className="text-xs text-gray-500 dark:text-slate-400">or click to browse from computer</p>
                                        <input
                                            type="file"
                                            accept=".pdf"
                                            className="hidden"
                                            id="pdf-upload"
                                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                                        />
                                        <label htmlFor="pdf-upload" className="mt-6 border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-2 rounded-full text-xs font-bold text-gray-700 dark:text-slate-200 cursor-pointer shadow-sm hover:shadow active:scale-95 transition-all">
                                            Browse Files
                                        </label>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center text-center">
                                        <FaRegFilePdf className="text-6xl text-red-600 mb-4" />
                                        <p className="font-bold text-gray-900 dark:text-white text-lg">{file.name || 'dg_news_delhi_edition_24oct.pdf'}</p>
                                        <p className="text-gray-500 dark:text-slate-400 text-sm mt-1 mb-6">{(file.size || 14200000) / 1000000} MB • Requires Print Validation</p>

                                        <div className="flex gap-4">
                                            <button onClick={() => setFile(null)} disabled={isUploading} className="px-6 py-2 rounded-xl border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-300 font-bold text-sm bg-white dark:bg-slate-900 hover:bg-gray-50 dark:hover:bg-slate-800/50 dark:bg-slate-800 transition-colors flex items-center gap-2">
                                                <FaTrash /> Remove
                                            </button>
                                            <button onClick={handleUpload} disabled={isUploading} className="px-8 py-2 rounded-xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 shadow flex items-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed">
                                                {isUploading ? (
                                                    <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Uploading...</>
                                                ) : (
                                                    <><FaUpload /> Publish Now</>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 shadow-sm border border-green-100">
                                <FaCheckCircle />
                            </div>
                            <h2 className="text-3xl font-black text-slate-800 mb-3">Successfully Published!</h2>
                            <p className="text-gray-500 dark:text-slate-400 font-medium max-w-sm mx-auto mb-8">
                                The e-paper has been uploaded and processed. Users can now view it on the public city portal.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button onClick={() => { setUploadSuccess(false); setFile(null); }} className="px-6 py-3 rounded-xl border border-gray-200 dark:border-slate-700 font-bold text-gray-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-800/50 dark:bg-slate-800 transition-colors">
                                    Upload Another
                                </button>
                                <button className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shadow-lg flex items-center justify-center gap-2">
                                    View on Public Site <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
}
