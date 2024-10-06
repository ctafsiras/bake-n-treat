"use client";

import { navbarHiddenUrl } from "@/utils/data";
import { usePathname } from "next/navigation";

const NewsLetter = () => {
  const pathname = usePathname();
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/images/news-letter-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
      }}
      className={`text-center py-20 lg:py-28 px-6 ${
        navbarHiddenUrl.includes(pathname) ? "hidden" : ""
      }`}
    >
      <div className="md:w-3/4 lg:w-1/2 mx-auto text-white">
        <h3 className="text-lg tracking-[.2em] mb-6">NEWSLETTER</h3>
        <h1 className="text-4xl lg:text-5xl mb-6">
          Subscribe to Our Newsletter
        </h1>
        <p className="lg:px-16 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
        </p>
        <div className="flex flex-col md:flex-row gap-y-5 mt-20">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 border bg-transparent w-full mr-5 focus:outline-0"
          />
          <button className="bg-[#FF6F00] hover:bg-white hover:text-[#FF6F00] text-center font-semibold transition duration-500 py-3 px-8 max-w-40 mx-auto">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
