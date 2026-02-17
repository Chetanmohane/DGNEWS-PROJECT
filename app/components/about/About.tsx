// components/About.tsx
export default function About() {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full z-0"></div>
            <h2 className="relative z-10 text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Desh Ka Sabse <br /> <span className="text-red-600">Bharosemand</span> News Platform
            </h2>
          </div>
          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            DGNews 2026 se digital patrakarita mein naye ayaam sthapit kar raha hai. 
            Hamara lakshya har nagrik tak satya aur nishpaksh khabrein pahunchana hai.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 text-center">
            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="text-3xl font-bold text-red-600">50M+</h4>
              <p className="text-xs text-gray-500 font-bold uppercase">Monthly Readers</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="text-3xl font-bold text-red-600">200+</h4>
              <p className="text-xs text-gray-500 font-bold uppercase">City Reporters</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?auto=format&fit=crop&w=800" 
            className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" 
            alt="About Us" 
          />
        </div>
      </div>
    </section>
  );
}