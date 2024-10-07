"use client";

import { IoStar } from "react-icons/io5";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      ratings: 5,
      review:
        "The cakes from Bake N Treat are simply divine! Every bite is a perfect balance of flavor and texture. Their attention to detail and use of high-quality ingredients really shines through. I've ordered multiple times and have never been disappointed.",
      writter: "Emily Chen",
    },
    {
      id: 2,
      ratings: 3,
      review:
        "While the taste of the pastries was good, I found the service to be a bit slow. The staff was friendly, but it took longer than expected to get my order. The ambiance of the bakery is nice, though, and I might give it another try.",
      writter: "Michael Rodriguez",
    },
    {
      id: 3,
      ratings: 4,
      review:
        "I'm impressed with the variety of gluten-free options at Bake N Treat. As someone with dietary restrictions, it's refreshing to find a bakery that caters to different needs without compromising on taste. The carrot cake is especially delicious!",
      writter: "Sarah Thompson",
    },
  ];

  return (
    <div className="py-16 px-5 lg:w-1/2 mx-auto">
      <Swiper
        spaceBetween={30}
        pagination={true}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center gap-y-6">
              <p className="text-[#FF6F00] text-xl capitalize tracking-[.4em] flex items-center gap-x-3">
                {Array(item.ratings)
                  .fill(<IoStar />)
                  .map((icon, index) => (
                    <span key={index}>{icon}</span>
                  ))}
              </p>
              <h1 className="text-2xl text-center italic">{item.review}</h1>
              <p className="text-gray-500 text-lg">{item.writter}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
