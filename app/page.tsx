import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import { HeroParallax } from "@/components/ui/hero-parallax";

import honeyone from "@/public/assets/images/work/honeyflyer.jpeg";
import honeytwo from "@/public/assets/images/work/honeypackaging.jpeg";
import honeythree from "@/public/assets/images/work/honeyflyerlight.jpeg";
import doughone from "@/public/assets/images/work/doughpackagingwhite.jpeg";
import doughtwo from "@/public/assets/images/work/doughlogo.jpeg";
import doughthree from "@/public/assets/images/work/doughflyer.jpeg";
import printone from "@/public/assets/images/work/shirtyellow.jpeg";
import printtwo from "@/public/assets/images/work/shirtlist.jpeg";
import printthree from "@/public/assets/images/work/shirtblack.jpeg";
import citationone from "@/public/assets/images/work/citation.jpeg";
import brandtwo from "@/public/assets/images/work/creativejozzybrand.jpeg";
import citationthree from "@/public/assets/images/work/delaliprint.jpeg";
import citationtwo from "@/public/assets/images/work/creativejozzycard.jpeg";
import brandthree from "@/public/assets/images/work/footwearbrand.jpeg";
import brandone from "@/public/assets/images/work/delalibrand.jpeg";
import delalitwo from "@/public/assets/images/work/delalilogo.jpeg";
import delalithree from "@/public/assets/images/work/delalithree.jpeg";
import delalione from "@/public/assets/images/work/delalilogoconcept.jpeg";
import pin from "@/public/assets/images/work/pin.jpeg";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="">
      <HeroParallax products={products} />
      <ServicesSection />
      <Gallery />
      <Testimonials />
      <FAQ />
    </main>
  );
}

const products = [
  { title: "", thumbnail: honeyone, link: "" },
  { title: "", thumbnail: doughone, link: "" },
  { title: "", thumbnail: printone, link: "" },
  { title: "", thumbnail: brandone, link: "" },
  { title: "", thumbnail: citationone, link: "" },
  { title: "", thumbnail: delalione, link: "" },
  { title: "", thumbnail: pin, link: "" },
  { title: "", thumbnail: honeytwo, link: "" },
  { title: "", thumbnail: doughtwo, link: "" },
  { title: "", thumbnail: printtwo, link: "" },
  { title: "", thumbnail: brandtwo, link: "" },
  { title: "", thumbnail: citationtwo, link: "" },
  { title: "", thumbnail: delalitwo, link: "" },
  { title: "", thumbnail: honeythree, link: "" },
  { title: "", thumbnail: doughthree, link: "" },
  { title: "", thumbnail: printthree, link: "" },
  { title: "", thumbnail: brandthree, link: "" },
  { title: "", thumbnail: citationthree, link: "" },
  { title: "", thumbnail: delalithree, link: "" },
];
