import React from "react";
import Image from "next/image";

const data = [
  "Maxwell Mountain Construction LLC",
  "Serving Waterbury and surrounding areas.",
  "We offer dependable winter services including:",
  "* Driveway snow plowing",
  "* Walkway and sidewalk shoveling",
  "* Salting services (advance notice required)",
  "Professional service you can count on.",
  "Call or Text: 802-233-4841",
  "Duxbury,Waterbury, Middlesex, and more",
];
export default function Storm() {
  return (
    <section id="damage" className="py-16 bg-[#F0F8FF]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-16 xl:gap-16 md:gap-10 gap-5 justify-between">
          <div>
            <Image
              src="/images/Storm.png"
              alt="hero"
              width={605}
              height={485}
              className="lg:w-[638px] lg:h-[533px] md:w-full md:h-auto object-cover"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h5 className="text-mono lg:text-[40px] md:text-4xl sm:text-2xl text-2xl text-heading font-semibold ">
              Reliable Local Snow Plowing for Your Driveway
            </h5>
            <div>
              <p className="text-[16px] font-sans font-bold text-heading mt-5">
                Offer flat one time fee at your conveincence or discounted
                contract that covers 25 plows for the cost of 18 to 20
              </p>
              <ul className="mt-5">
                {data.map((item, index) => (
                  <li
                    key={index}
                    className="text-[16px]  font-sans font-normal text-heading ">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
