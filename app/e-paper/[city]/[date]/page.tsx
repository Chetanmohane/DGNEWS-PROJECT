import Link from 'next/link';
import { FaArrowLeft, FaDownload, FaShareAlt, FaSearchPlus, FaSearchMinus } from 'react-icons/fa';

export default function EPaperPage({ params }: { params: { city: string, date: string } }) {
    const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1);
    const formattedDate = new Date(params.date).toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col">
            {/* Top Controls Bar */}
            <header className="bg-slate-950 text-white p-4 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-6">
                    <Link href={`/city/${params.city}`} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                        <FaArrowLeft /> Back
                    </Link>
                    <div>
                        <h1 className="font-bold text-lg md:text-xl text-red-500 uppercase tracking-widest">{cityName} Edition</h1>
                        <p className="text-xs text-slate-400">{formattedDate}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 md:gap-6">
                    {/* Zoom Controls (Mock UI) */}
                    <div className="hidden md:flex items-center gap-2 bg-slate-900 rounded-lg p-1">
                        <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"><FaSearchMinus /></button>
                        <span className="text-xs font-bold w-12 text-center text-slate-300">100%</span>
                        <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"><FaSearchPlus /></button>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors" title="Share">
                            <FaShareAlt />
                        </button>
                        <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                            <FaDownload /> <span className="hidden sm:inline">Download PDF</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main E-Paper Viewer Area */}
            <main className="flex-1 overflow-auto p-4 md:p-8 flex justify-center items-start">
                {/* Mock PDF Viewer Container */}
                <div className="w-full max-w-5xl bg-white shadow-2xl relative min-h-[80vh] flex flex-col items-center justify-center border-4 border-white">
                    <div className="absolute top-8 left-8 right-8 bottom-8 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-8 text-center text-slate-400">
                        <span className="text-6xl mb-4 opacity-20 block">📰</span>
                        <h2 className="text-2xl font-black text-slate-800 uppercase tracking-widest mb-2">DG News {cityName}</h2>
                        <p className="text-sm font-semibold mb-6">{formattedDate} Edition</p>
                        <p className="bg-slate-100 text-slate-500 px-6 py-3 rounded-xl border border-slate-200 max-w-md">
                            Print-ready PDF layout for {cityName} will be rendered here. This requires a dedicated PDF viewer component.
                        </p>
                    </div>
                    {/* Mock Page Navigation */}
                    <div className="absolute -bottom-16 flex items-center gap-4 text-white">
                        <button className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg text-sm font-bold transition-colors">Previous</button>
                        <span className="text-sm font-semibold">Page 1 of 16</span>
                        <button className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg text-sm font-bold transition-colors">Next</button>
                    </div>
                </div>
            </main>
        </div>
    );
}
