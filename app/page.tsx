import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Philosophy from "./components/Philosophy";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div style={{ background: "var(--paper)", width: "100%" }}>
      <Nav />
      <Hero />
      <Menu />
      <Philosophy />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
