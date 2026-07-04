import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Menu } from "@/components/sections/Menu";
import { Bar } from "@/components/sections/Bar";
import { Events } from "@/components/sections/Events";
import { Gallery } from "@/components/sections/Gallery";
import { Reservations } from "@/components/sections/Reservations";
import { LocationHours } from "@/components/sections/LocationHours";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Bar />
        <Events />
        <Gallery />
        <Reservations />
        <LocationHours />
      </main>
      <Footer />
    </>
  );
}
