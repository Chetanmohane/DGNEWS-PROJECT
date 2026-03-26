import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaApple, FaGooglePlay, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const footerLinks = [
    { title: "Top Categories", links: ["National", "International", "Business", "Sports", "Technology", "Entertainment"] },
    { title: "States", links: ["Madhya Pradesh", "Rajasthan", "Gujarat", "Haryana", "Punjab", "Maharashtra"] },
    { title: "Company", links: ["About Us", "Contact Us", "Careers", "Privacy Policy", "Terms & Conditions", "E-Paper"] },
  ];

  return (
    /* Background: Halka Slate-50 (Near white) jo ki bohot clean dikhta hai */
    <footer className="bg-[#f8fafc] text-slate-600 dark:text-slate-300 pt-16 pb-8 px-4 font-sans border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto">
        
        {/* Upper Section: Brand and Subscription */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12 pb-12 border-b border-slate-200 dark:border-slate-700">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white italic tracking-tighter">
              DG<span className="text-red-600 not-italic">NEWS</span>
            </h2>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Desh ki sabse badi news community se judiye. Sacchai, tezi aur nishpakshta ka bharosa. 
              DG News har pal aapke saath.
            </p>
            <div className="flex gap-3 mt-6">
              <Link href="#" className="w-9 h-9 flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm"><FaFacebookF size={14}/></Link>
              <Link href="#" className="w-9 h-9 flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm"><FaTwitter size={14}/></Link>
              <Link href="#" className="w-9 h-9 flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm"><FaYoutube size={14}/></Link>
              <Link href="#" className="w-9 h-9 flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm"><FaInstagram size={14}/></Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-50 p-3 rounded-xl text-red-600">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Subscribe Newsletter</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Rozana badi khabrein seedhe apne inbox mein payein.</p>
                </div>
              </div>
              <div className="flex w-full md:w-auto gap-2">
                <input type="email" placeholder="Email Address" className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 w-full md:w-64 transition-all" />
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-slate-900 transition-all whitespace-nowrap">Join Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-slate-900 dark:text-white font-bold mb-6 text-sm uppercase tracking-widest">{section.title}</h4>
              <ul className="space-y-3 text-sm">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-red-600 transition-colors text-slate-500 dark:text-slate-400 font-medium">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Download App Section */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 text-sm uppercase tracking-widest">Get the App</h4>
            <div className="space-y-3">
              <button className="flex items-center w-full bg-slate-900 text-white px-4 py-2.5 rounded-xl hover:bg-red-600 transition-all group">
                <FaGooglePlay className="text-xl mr-3" />
                <div className="text-left leading-tight">
                  <p className="text-[9px] uppercase opacity-70">Get it on</p>
                  <p className="text-sm font-bold">Google Play</p>
                </div>
              </button>
              <button className="flex items-center w-full bg-slate-900 text-white px-4 py-2.5 rounded-xl hover:bg-red-600 transition-all group">
                <FaApple className="text-xl mr-3" />
                <div className="text-left leading-tight">
                  <p className="text-[9px] uppercase opacity-70">Download on</p>
                  <p className="text-sm font-bold">App Store</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 dark:border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-slate-400 font-medium">© 2026 DGNews Network Limited. Sabhi adhikaar surakshit hain.</p>
          <div className="flex gap-8 text-[11px] font-bold text-slate-400 uppercase tracking-tighter">
            <Link href="#" className="hover:text-slate-900 dark:text-white transition">Privacy</Link>
            <Link href="#" className="hover:text-slate-900 dark:text-white transition">Terms</Link>
            <Link href="#" className="hover:text-slate-900 dark:text-white transition">Sitemap</Link>
            <Link href="#" className="hover:text-slate-900 dark:text-white transition">Ad Choice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}