"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const OurStory = () => {
  return (
    <section className="py-16 px-5 lg:px-0 xl:px-[70px] space-y-10">
      <div className="text-center md:text-left flex flex-col md:flex-row gap-y-5 gap-x-24 justify-between">
        <div className="flex-1 space-y-5">
          <p className="text-[#FF6F00] font-semibold uppercase tracking-[.2em] font-sans">
            Our Story
          </p>
          <h1 className="text-4xl md:text-5xl xl:text-6xl">
            We Create Delicious Memories
          </h1>
        </div>
        <div className="flex-1 space-y-5">
          <p className="text-gray-500 font-sans">
            Since 1985, our family-owned bakery has been crafting delicious
            memories for our community. We blend time-honored recipes with
            innovative techniques to create breads, pastries, and cakes that
            delight the senses. Our commitment to quality ingredients and
            exceptional taste has made us a beloved local institution, where
            every bite tells a story of passion and tradition.
          </p>
          <button className="bg-[#FF6F00] text-white text-xs px-7 py-3 hover:bg-black transition duration-300 font-sans font-medium">
            DISCOVER MORE
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <Image
              src="/assets/images/pastries_slide.jpg"
              alt=""
              width={400}
              height={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/images/pie_slide.jpg"
              alt=""
              width={400}
              height={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/images/baklava_slide.jpg"
              alt=""
              width={400}
              height={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/images/donuts_slide.jpg"
              alt=""
              width={400}
              height={400}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OurStory;
