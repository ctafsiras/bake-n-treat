import FeaturedFood1 from "@/../public/assets/images/featuredFood1.jpg";
import FeaturedFood2 from "@/../public/assets/images/featuredFood2.jpg";
import FeaturedFood3 from "@/../public/assets/images/featuredFood3.jpg";
import FeaturedFood4 from "@/../public/assets/images/featuredFood4.jpg";
import Image from "next/image";

const FeaturedFoods = () => {
	return (
		<section className="py-16 px-5">
			<div className=" grid gap-5 grid-cols-2 md:grid-cols-4">
				<Image
					src={FeaturedFood1}
					alt=""
					className="featuredFood hover:-translate-y-2 transition duration-500 mt-12 md:odd:mt-12"
				/>
				<Image
					src={FeaturedFood2}
					alt=""
					className="featuredFood hover:-translate-y-2 transition duration-500"
				/>
				<Image
					src={FeaturedFood3}
					alt=""
					className="featuredFood hover:-translate-y-2 transition duration-500 md:odd:mt-12"
				/>
				<Image
					src={FeaturedFood4}
					alt=""
					className="featuredFood hover:-translate-y-2 transition duration-500 -mt-12 md:mt-0"
				/>
			</div>
		</section>
	);
};

export default FeaturedFoods;
