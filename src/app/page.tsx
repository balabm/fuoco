import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Atmosphere from "@/components/Atmosphere";
import Craft from "@/components/Craft";
import Statement from "@/components/Statement";
import Signatures from "@/components/Signatures";
import Menu from "@/components/Menu";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <Preloader />
      <CursorGlow />
      <Header />
      <Hero />
      <Marquee />
      <Atmosphere />
      <Craft />
      <Statement />
      <Signatures />
      <Menu />
      <Cta />
      <Footer />
    </main>
  );
}
