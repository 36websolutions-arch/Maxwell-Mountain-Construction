import React from "react";
import Image from "next/image";
export default function about() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 justify-between items-center">
          <div>
            <Image
              src="/images/about.png"
              alt="hero"
              width={605}
              height={485}
              className="lg:w-[605px] lg:h-[485px] md:w-full md:h-auto object-cover"
            />
          </div>
          <div>
            <p className="text-[16px] font-sans font-normal text-heading">
              Who we are
            </p>
            <h2 className="lg:text-[48px] md:text-3xl sm:text-2xl text-[22px] font-mono font-semibold ">
              About{" "}
              <span className="text-primary">
                Maxwell Mountain Construction
              </span>
            </h2>
            <div className="space-y-10 mt-5">
              <p className="text-[16px] font-sans font-normal text-heading">
                At Maxwell Mountain Construction LLC, we’re dedicated to
                providing reliable, high-quality construction services for
                homeowners and businesses in our community. Led by Todd Maxwell,
                our team specializes in roofing, siding, gutters, window
                replacements, remodels, and general repairs.
              </p>
              <p className="text-[16px] font-sans font-normal text-heading">
                We focus on craftsmanship, honest communication, and making
                every project simple and stress-free for our clients. Whether
                it’s a small repair or a full renovation, we’re here to help
                bring your vision to life with quality you can trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
