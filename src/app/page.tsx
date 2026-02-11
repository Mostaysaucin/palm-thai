import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedDishes from "@/components/FeaturedDishes";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import OrderingCTA from "@/components/OrderingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedDishes />
        <Menu />
        <Reviews />
        <Gallery />
        <Location />
        <OrderingCTA />
      </main>
      <Footer />
    </>
  );
}
