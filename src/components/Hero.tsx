"use client";
import Image from "next/image";
import Navbar from "../common/Navbar";

import Button from "../common/Button";

const HERO_IMG = "/images/hero.png";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full min-h-[520px] md:h-[900px] lg:h-[837px] bg-[#1E1E1E6E]">
        <Navbar />
        <div className="absolute inset-0 z-10">
          <Image
            src={HERO_IMG}
            alt="hero"
            width={1920}
            height={1200}
            className="w-full h-full object-cover brightness-60"
            priority
          />
        </div>

        <div id="home" className="relative z-20 pt-20 px-4 sm:px-6 lg:px-6">
          <div className="container mx-auto">
            <div className="max-w-5xl text-center mx-auto">
              <div className="space-y-5">
                <h1 className="text-white text-[25px] md:text-[40px] lg:text-[56px] font-mono font-bold leading-tight text-center">
                  Your Local Construction & Remodeling Experts
                </h1>

                <div className="lg:w-3xl md:w-3xl sm:w-full w-full mx-auto">
                  <p className="md:text-[16px] text-[12px] font-bold font-sans text-white leading-relaxed">
                    My name is Todd Maxwell, and I&apos;m excited to introduce
                    Maxwell Mountain Construction LLC, proudly serving our local
                    community. We provide reliable, high-quality residential and
                    commercial construction services right here in the area.
                  </p>
                </div>

                <div className="mx-auto flex flex-col justify-center items-center space-y-5">
                  <div className="">
                    <Button />
                  </div>
                  <span className="font-sans font-bold text-[16px] text-white">
                    Benjamin Franklin &quot;Well done is <br /> better than well
                    said&quot;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
