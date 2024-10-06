import Image from "next/image";
import { FaPhone } from "react-icons/fa";

const Banner = () => {
	return (
		<section className="space-y-6">
			<p className="text-[#FF6F00] text-xl capitalize tracking-[.4em]">
				BAKERY & PASTRY
			</p>
			<h1 className="text-5xl">Freshly Baked All Day and Every Day</h1>
			<p className="text-gray-500 text-lg">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
				incidunt sapiente nostrum iste dicta tenetur?
			</p>
			<div className="flex gap-x-3 mb-5">
				<button className="bg-[#FF6F00] text-white px-5 py-2 hover:bg-black transition duration-300">
					DISCOVER MORE
				</button>
				<button className="text-[#FF6F00] px-3 py-2 hover:text-black transition duration-300 flex items-center gap-x-2">
					CONTACT US <FaPhone />
				</button>
			</div>
			<div>
				{/* TODO: Add an image slider */}
				<Image
					src="/assets/images/banner1.jpg"
					alt=""
					width={500}
					height={500}
				/>
			</div>
			<div>
				{/* TODO: Add an image slider */}
				<Image
					src="/assets/images/banner2.jpg"
					alt=""
					width={500}
					height={500}
				/>
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
