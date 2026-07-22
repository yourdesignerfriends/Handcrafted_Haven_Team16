import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      {/* Keyboard users can skip navigation and jump to the content */}
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
      </main>

      <Footer />
    </>
  );
}
