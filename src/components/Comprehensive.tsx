import React from "react";
import ServicesCard from "../common/ServicesCard";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  kicker: string;
  phone: string;
  imageSrc: string;
}

const servicesData: Service[] = [
  {
    title: "General Repairs, Upgrades & Improvements",
    description:
      "We provide full-scale siding solutions designed for long-term performance. Our team evaluates moisture barriers, flashing, and structural framing before installing high-grade siding engineered for severe weather. Every install includes precision fastening, proper ventilation, and detailed trim work so your exterior stays strong, sealed, and visually consistent.",
    kicker: "WHAT WE DO",
    phone: "(614) 397-4368",
    imageSrc: "/images/roof1.png",
  },
  {
    title: "Roofing & siding",
    description:
      "We provide full-scale siding solutions designed for long-term performance. Our team evaluates moisture barriers, flashing, and structural framing before installing high-grade siding engineered for severe weather. Every install includes precision fastening, proper ventilation, and detailed trim work so your exterior stays strong, sealed, and visually consistent.",
    kicker: "WHAT WE DO",
    phone: "(614) 397-4368",
    imageSrc: "/images/roof2.png",
  },
  {
    title: "Kitchen, Bathroom & Basement Remodels",
    description:
      "We handle functional, well-planned remodels that improve how your home looks, feels, and works day to day. From kitchens and bathrooms to finished basements, we focus on smart layouts, clean installations, and materials built to last. Our team coordinates demolition, framing, finish work, and final details with a clear plan and realistic timelines. The result is a finished space that adds comfort, usability, and long-term value to your home.",
    kicker: "WHAT WE DO",
    phone: "(614) 397-4368",
    imageSrc: "/images/roof3.png",
  },
  {
    title: "Gutters & window replacements",
    description:
      "We install and replace gutters and windows designed to protect your home from water intrusion, drafts, and long-term structural damage. Proper fit, alignment, and sealing are critical—and that’s where experience matters.Every installation is measured carefully and completed with secure fastening, clean trim work, and attention to drainage and insulation so your home stays dry, efficient, and protected in all seasons.",
    kicker: "WHAT WE DO",
    phone: "(614) 397-4368",
    imageSrc: "/images/roof4.png",
  },
  {
    title: "Residential & Vacation Rental Cleaning",
    description:
      "We provide reliable cleaning services for homes and vacation rentals that need consistent, detail-focused care. Whether it’s a turnover clean between guests or routine residential service, our team follows a structured checklist to ensure every space is thoroughly cleaned and ready for use. We focus on efficiency, attention to detail, and dependable scheduling so homeowners and property managers can trust that their property is maintained to a high standard every time.",
    kicker: "WHAT WE DO",
    phone: "(614) 397-4368",
    imageSrc: "/images/roof5.png",
  },
  {
    title: "Construction Consulting",
    description:
      "We offer practical construction consulting to help homeowners and property owners make informed decisions before and during a project. From scope planning and material selection to contractor coordination and project oversight, we provide clear guidance rooted in real-world experience. Our goal is to prevent costly mistakes, reduce delays, and ensure projects are planned correctly from the start—saving time, money, and unnecessary stress.",
    kicker: "WHAT WE DO",
    phone: "(614) 397-4368",
    imageSrc: "/images/roof6.png",
  },
];

export default function Comprehensive() {
  return (
    <section id="services" className="py-16 relative bg-white">
      {/* Dark Background (450px height only) */}
      <div className="absolute top-0 left-0 w-full h-[458px]  z-10">
        <Image
          src="/images/Comprehensive.png"
          alt="hero"
          width={1920}
          height={458}
          className="w-full h-fit object-cover brightness-60"
        />
      </div>

      <div className="relative z-20">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="max-w-4xl">
            <p className="text-[16px] uppercase font-sans font-normal text-white">
              What We Do Best
            </p>

            <h1 className="text-white text-[28px] md:text-[40px] lg:text-[48px] font-mono font-bold leading-tight">
              Comprehensive Services
            </h1>

            <p className="text-[16px] font-sans font-normal text-white mt-5">
              Maxwell Mountain Construction delivers a wide range of services
              designed to meet the specific needs of homeowners, property
              managers, and commercial developers. We don&apos;t believe in
              cookie-cutter solutions. Each roof is unique, and so is every
              roofing project we take on.
            </p>
          </div>

          {/* Services Cards Grid */}
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-16 xl:gap-16 md:gap-10 gap-5 mt-14 z-10 justify-between">
            {servicesData.map((item, index) => (
              <ServicesCard
                key={index}
                kicker={item.kicker}
                title={item.title}
                description={item.description}
                phone={item.phone}
                imageSrc={item.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
