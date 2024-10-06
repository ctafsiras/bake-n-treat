import Image from "next/image";
import { FaPhone } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center mt-4">
        <div className="sm:w-1/2 px-8 space-y-5">
          <p className="text-[#FF6F00] text-xl capitalize tracking-[.4em]">
            BAKERY & PASTRY
          </p>
          <h1 className="text-5xl">Freshly Baked All Day and Every Day</h1>
          <p className="text-gray-500 text-lg">
            Indulge in our artisanal breads and pastries, crafted with passion
            and the finest ingredients. Experience the warmth and aroma of
            freshly baked goods that will delight your senses.
          </p>
          <div className="flex gap-x-3 mb-5">
            <button className="bg-[#FF6F00] text-white px-5 py-2 hover:bg-black transition duration-300">
              DISCOVER MORE
            </button>
            <button className="text-[#FF6F00] px-3 py-2 hover:text-black transition duration-300 flex items-center gap-x-2">
              CONTACT US <FaPhone />
            </button>
          </div>
        </div>
        <div className="sm:w-1/2">
          {/* <Slider> */}
          <div>
            <Image
              src="/assets/images/banner1.jpg"
              alt="Banner 1"
              width={500}
              height={500}
            />
          </div>
          {/* <div>
            <Image
              src="/assets/images/banner2.jpg"
              alt="Banner 2"
              width={500}
              height={500}
            />
          </div> */}
          {/* </Slider> */}
        </div>
      </div>
      <p className="text-center italic text-lg text-gray-500 my-3">
        Been Baking Since <span className="font-extrabold">1992</span>
      </p>
      <ul className="flex gap-x-5 justify-center text-xl italic	">
        <li className="text-[#FF6F00] hover:text-black cursor-pointer transition duration-300">
          Fb
        </li>
        <li className="text-[#FF6F00] hover:text-black cursor-pointer transition duration-300">
          Tw
        </li>
        <li className="text-[#FF6F00] hover:text-black cursor-pointer transition duration-300">
          Li
        </li>
        <li className="text-[#FF6F00] hover:text-black cursor-pointer transition duration-300">
          Ig
        </li>
      </ul>
    </section>
  );
};

export default Banner;
