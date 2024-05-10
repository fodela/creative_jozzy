import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ServicesSection />
      <Gallery />
      <Testimonials />
      <FAQ />
    </main>
  );
}
