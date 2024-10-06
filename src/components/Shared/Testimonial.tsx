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
			review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident odit voluptatum animi explicabo inventore nobis. Recusandae placeat minus amet perferendis.",
			writter: "John Doe",
		},
		{
			id: 2,
			ratings: 3,
			review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eum voluptas pariatur, tenetur, commodi, modi incidunt vero et officiis non provident eveniet sit?",
			writter: "Jacob Smith",
		},
		{
			id: 3,
			ratings: 4,
			review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et alias sint eligendi hic, adipisci temporibus ea fugit mollitia reiciendis, eius repellendus dignissimos deserunt!",
			writter: "Hailee Stanford",
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
							<h1 className="text-2xl text-center italic">
								{item.review}
							</h1>
							<p className="text-gray-500 text-lg">
								{item.writter}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Testimonial;
