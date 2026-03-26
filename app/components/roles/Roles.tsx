import Link from 'next/link';
import { FaUserShield, FaUserTie, FaCity, FaUserEdit, FaPencilAlt, FaPrint } from 'react-icons/fa';

const roles = [
    {
        title: "SUPER_ADMIN",
        desc: "Controls categories, cities, global policies and platform governance.",
        icon: <FaUserShield />,
        color: "from-red-500 to-red-700",
        path: "/super-admin"
    },
    {
        title: "SECTION_ADMIN",
        desc: "Manages category-level approvals and reporter assignments.",
        icon: <FaUserTie />,
        color: "from-orange-500 to-red-500",
        path: "/section-admin"
    },
    {
        title: "CITY_ADMIN",
        desc: "Manages city-level approvals and uploads daily e-newspaper PDF.",
        icon: <FaCity />,
        color: "from-blue-500 to-indigo-600",
        path: "/city-admin"
    },
    {
        title: "SENIOR_REPORTER",
        desc: "Edits junior drafts and forwards for approval.",
        icon: <FaUserEdit />,
        color: "from-purple-500 to-pink-500",
        path: "/reporter"
    },
    {
        title: "JUNIOR_REPORTER",
        desc: "Creates draft articles and submits for review.",
        icon: <FaPencilAlt />,
        color: "from-green-500 to-emerald-600",
        path: "/reporter"
    },
    {
        title: "NEWSPAPER_OPERATOR",
        desc: "Handles print-ready PDF coordination and layout.",
        icon: <FaPrint />,
        color: "from-gray-600 to-gray-800",
        path: "/operator"
    }
];

export default function Roles() {
    return (
        <section id="roles" className="py-16 md:py-24 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-red-600 font-bold tracking-[2px] md:tracking-[3px] uppercase text-xs md:text-sm mb-3">
                        Team Structure
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        Platform <span className="text-red-600">Roles</span>
                    </h3>
                    <div className="w-16 md:w-24 h-1.5 bg-red-600 mx-auto mt-4 rounded-full"></div>
                    <p className="mt-6 text-gray-500 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
                        Detailed breakdown of access levels and responsibilities across the platform.
                    </p>
                </div>

                {/* Roles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {roles.map((role, index) => (
                        <Link
                            href={role.path}
                            key={index}
                            className="group relative bg-white dark:bg-slate-900 p-1 rounded-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-transparent block"
                        >
                            {/* Highlight Gradient on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${role.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px] -z-10`}></div>

                            <div className="relative bg-white dark:bg-slate-900 p-6 md:p-8 rounded-[14px] h-full flex flex-col items-center text-center z-10">
                                {/* Icon Container */}
                                <div className={`mb-5 p-4 rounded-2xl bg-gradient-to-br ${role.color} text-white text-3xl shadow-md transform group-hover:scale-110 transition-transform duration-500`}>
                                    {role.icon}
                                </div>

                                {/* Role Title */}
                                <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide group-hover:text-red-600 transition-colors">
                                    {role.title.replace('_', ' ')}
                                </h4>

                                {/* Role Description */}
                                <p className="text-gray-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                                    {role.desc}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
