import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function CategoryPage({ params }: { params: { name: string } }) {
    const categoryName = params.name.charAt(0).toUpperCase() + params.name.slice(1);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-slate-900 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
                    <Link href="/" className="text-white hover:text-red-500 transition-colors">
                        <FaArrowLeft className="text-xl" />
                    </Link>
                    <h1 className="text-2xl md:text-4xl font-black text-white uppercase tracking-wider">
                        {categoryName} <span className="text-red-600">News</span>
                    </h1>
                </div>
            </header>

            {/* Content Area */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-red-600 inline-block pb-2 mb-6">Latest Updates</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="h-48 bg-gray-200 w-full relative overflow-hidden">
                                {/* Placeholder Image Space */}
                                <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-300">
                                    <span className="font-bold text-lg uppercase tracking-widest">{categoryName} Image</span>
                                </div>
                                <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full z-10">
                                    {categoryName}
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-xs text-gray-500 mb-2 font-semibold">2 hours ago</p>
                                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                                    Sarkar ne kiya naya ailan, aam janta ko mili badi rahat in {categoryName.toLowerCase()} sector.
                                </h3>
                                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                                    Pardhan mantri ne aaj ek badi ghoshna karte hue kaha ki is nayi yojana se dher saari suvidhayein milengi...
                                </p>
                                <button className="text-red-600 font-bold text-sm hover:underline">Read Full Story</button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
