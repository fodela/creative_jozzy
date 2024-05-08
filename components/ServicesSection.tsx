import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function ServicesSection() {
  return (
    <section className="max-w-5xl mx-auto p-8">
      <h2 className="text-4xl font-bold capitalize text-center py-8">
        Our Services
      </h2>
      <HoverEffect items={services} />
    </section>
  );
}
export const services = [
  {
    title: "Logo Design",
    description:
      "Create a strong first impression with a unique logo that symbolizes your brand's values and mission. Our designs are crafted to be memorable and stand out in the competitive market.",
    link: "#",
  },
  {
    title: "Flyer Design",
    description:
      "Whether you're promoting an event or a special offer, our flyers are designed to catch the eye and deliver your message effectively. We focus on compelling visuals and clear, impactful text to ensure your flyers make a mark.",
    link: "#",
  },
  {
    title: "Branding",
    description:
      "Build a cohesive and powerful brand identity with our branding services. From selecting the perfect color palette to designing a consistent theme across all your marketing materials, we help you resonate with your audience at every touchpoint.",
    link: "#",
  },
  {
    title: "Product Design",
    description:
      "Enhance the appeal and functionality of your products with our innovative design solutions. We focus on aesthetic and usability to ensure your products not only look great but are also intuitive and user-friendly.",
    link: "#",
  },
  {
    title: "Packaging Design",
    description:
      "Transform your product's first impression with our custom packaging design services. We focus on creating visually appealing, functional packaging that not only protects your product but also enhances brand recognition and appeals to consumers.",
    link: "#",
  },
  {
    title: "Print Design",
    description:
      "From business cards to annual reports, our print designs ensure that every piece of your marketing collateral reflects the high standards of your brand. We handle all aspects of design, ensuring that the final product is perfectly aligned with your vision.",
    link: "#",
  },
];
