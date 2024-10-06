import Image from "next/image";

const AboutUs = () => {
	return (
		<section className="py-16 px-5 lg:px-6 xl:px-[70px] flex flex-col-reverse gap-y-10 md:flex-row items-center gap-x-20">
			<div className="relative w-full h-[250px] md:w-1/2 md:h-screen lg:h-[75vh]">
				<Image
					src="/assets/images/about.jpg"
					alt="Section Image"
					fill
					className="lg:object-contain sm:object-none"
				/>
			</div>
			<div className="xl:space-y-5 md:space-y-7 space-y-5 text-center md:text-left md:w-1/2">
				<p className="text-[#FF6F00] font-medium font-sans uppercase tracking-[.2em]">
					About Wholly Desserts
				</p>
				<h1 className="text-4xl md:text-5xl">
					So Sweet, So Good, Sure to Bring Smiles
				</h1>
				<p className="text-gray-500 text-base">
					Nulla at ligula nibh. Mauris gravida lobortis viverra.
					Pellentesque urna quam, volutpat eget felis ac, malesuada
					blandit quam. Class aptent taciti sociosqu ad litora
					torquent per conubia nostra, per inceptos himenaeos. Morbi
					lacinia odio massa, at mollis urna rhoncus ac.
				</p>
				<p className="text-gray-600 italic font-light">
					“Integer pretium risus augue, non maximus nibh pretium non.”
				</p>
				<button className="bg-[#FF6F00] text-white px-5 py-2 hover:bg-black transition duration-300">
					DISCOVER MORE
				</button>
			</div>
		</section>
	);
};

export default AboutUs;
