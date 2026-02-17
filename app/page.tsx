import About from "./components/about/About";
import Footer from "./components/Footer";
import Hero from "./components/hero/Hero";
import LiveNews from "./components/LiveNews";
import Navbar from "./components/Navbar";
import Services from "./components/services/Services";


export default function Home() {
  return (
    <main className="min-h-screen bg-white scroll-smooth">
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about" className="bg-gray-50"><About /></section>
      <section id="services"><Services /></section>
      <LiveNews/>
      <footer id="footer"><Footer /></footer>
    </main>
  );
}