import Link from 'next/link';
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

export default function CityPage({ params }: { params: { name: string } }) {
    const cityName = params.name.charAt(0).toUpperCase() + params.name.slice(1);
    const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD

    return (
        <div className="min-h-screen bg-gray-50">
            {/* City Header */}
            <header className="bg-gradient-to-r from-slate-900 to-slate-800 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4 text-white">
                        <Link href="/" className="hover:text-red-500 transition-colors bg-slate-800 p-3 rounded-full">
                            <FaArrowLeft className="text-xl" />
                        </Link>
                        <div>
                            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wider flex items-center gap-3 text-white">
                                <FaMapMarkerAlt className="text-red-500" /> {cityName} Edition
                            </h1>
                            <p className="text-slate-400 mt-2 font-medium">Local news, updates, and daily e-paper.</p>
                        </div>
                    </div>

                    {/* E-Paper Link Button */}
                    <Link
                        href={`/e-paper/${cityName.toLowerCase()}/${today}`}
                        className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transform hover:-translate-y-1"
                    >
                        <FaCalendarAlt className="text-xl" />
                        <span className="flex flex-col text-left">
                            <span className="text-[10px] uppercase tracking-widest opacity-80">Read Today's</span>
                            <span className="text-lg">Digital E-Paper</span>
                        </span>
                    </Link>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Top Stories Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-4 mb-8">
                        Top Stories in {cityName}
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Featured Main Story */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group relative">
                            <div className="h-72 bg-gray-200 w-full relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent z-10"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">Breaking</span>
                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-red-400 transition-colors">
                                    Bade pul ka udghatan, shehar walo ko mili traffic jam se rahat.
                                </h3>
                                <p className="text-gray-300 text-sm opacity-90">2 hours ago</p>
                            </div>
                        </div>

                        {/* Sidebar Stories */}
                        <div className="flex flex-col gap-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="bg-white rounded-xl p-4 flex gap-4 shadow-sm hover:shadow-md transition-all border border-gray-100 group">
                                    <div className="w-32 h-24 bg-gray-100 rounded-lg shrink-0 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-slate-200"></div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h4 className="font-bold text-gray-800 leading-tight group-hover:text-red-600 transition-colors mb-2 line-clamp-2">
                                            Nagar nigam ka naya faisla, safai abhiyan me tezi aayegi...
                                        </h4>
                                        <span className="text-xs text-gray-400 font-semibold text-red-500">View Article</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
