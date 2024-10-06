import Image from "next/image";

const PromoSection = () => {
	const promos = [
		{
			title: "Come discover our new menus and get special a discount!",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Vivamus consectetur ligula lacinia.",
			imgSrc: "/assets/images/promo1.jpg",
		},
		{
			title: "Our 10 special types of bread that you must try this month",
			description:
				"Quisque porta massa vel tellus facilisis tempor. Etiam ultricies blandit accumsan. Suspendisse sed elit nulla. Sed pulvinar, ante a dignissim pretium arcu purus.",
			imgSrc: "/assets/images/promo2.jpg",
		},
	];

	return (
		<section className="px-6 my-16 bg-gray-100 lg:min-h-screen space-y-14">
			<div className="flex flex-col md:flex-row items-center gap-x-20 gap-y-10">
				<div className="relative w-full h-60 md:w-1/2 md:h-96">
					<Image
						src={promos[0].imgSrc}
						alt={promos[0].title}
						fill
						className="object-cover"
					/>
				</div>
				<div className="md:w-1/2 space-y-5 md:space-y-10 px-5">
					<h3 className="text-2xl lg:text-4xl">{promos[0].title}</h3>
					<p className="text-gray-500">{promos[0].description}</p>
					<button className="bg-[#FF6F00] hover:bg-black transition duration-500 text-white py-2 px-4">
						READ MORE
					</button>
				</div>
			</div>
			<div className="flex flex-col-reverse md:flex-row items-center gap-x-20 gap-y-10">
				<div className="md:w-1/2 space-y-5 md:space-y-10 px-5">
					<h3 className="text-2xl lg:text-4xl">{promos[1].title}</h3>
					<p className="text-gray-500">{promos[1].description}</p>
					<button className="bg-[#FF6F00] hover:bg-black transition duration-500 text-white py-2 px-4">
						READ MORE
					</button>
				</div>
				<div className="relative w-full h-60 md:w-1/2 md:h-96">
					<Image
						src={promos[1].imgSrc}
						alt={promos[1].title}
						fill
						className="object-cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default PromoSection;
