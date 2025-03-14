"use client";
import { ParallaxScroll } from "./ui/parallax-scroll";
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
import doughflyerred from "@/public/assets/images/work/doughflyerred.jpeg";
import delalitwo from "@/public/assets/images/work/delalilogo.jpeg";
import delalithree from "@/public/assets/images/work/delalithree.jpeg";
import delalione from "@/public/assets/images/work/delalilogoconcept.jpeg";
import pin from "@/public/assets/images/work/pin.jpeg";

export default function Gallery() {
  return (
    <section className="min-h-screen snap-start">
      <h2 className="text-4xl font-bold capitalize text-center py-8">
        Our Works
      </h2>
      <ParallaxScroll
        firstPart={firstPart}
        secondPart={secondPart}
        thirdPart={thirdPart}
      />
    </section>
  );
}

export const firstPart = [
  honeyone,
  doughone,
  brandone,
  delalione,
  printone,
  citationone,
  doughflyerred,
];

const secondPart = [
  honeytwo,
  doughtwo,
  brandtwo,
  delalitwo,
  printtwo,
  citationtwo,
];

const thirdPart = [
  honeythree,
  doughthree,
  brandthree,
  delalithree,
  printthree,
  citationthree,
  pin,
];
