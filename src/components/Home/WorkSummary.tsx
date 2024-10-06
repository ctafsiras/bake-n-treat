import Image from "next/image";

const WorkSummary = () => {
	const steps = [
		{
			title: "Fresh Ingredients",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
			imgSrc: "/assets/images/freshIngredients.jpg",
		},
		{
			title: "Old Recipes",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
			imgSrc: "/assets/images/oldRecipes.jpg",
		},
		{
			title: "Quality Check",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
			imgSrc: "/assets/images/qualityCheck.jpg",
		},
		{
			title: "Sweet Result",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
			imgSrc: "/assets/images/sweetResult.jpg",
		},
	];

	return (
		<section className="py-16 px-6 bg-white">
			<h2 className="text-[#FF6F00] text-lg capitalize tracking-[.4em] text-center">
				HOW WE WORK
			</h2>
			<h3 className="text-center text-5xl">Making Sweet Things Happen</h3>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12 mt-32">
				{steps.map((step, i) => (
					<div
						key={i}
						className={`text-center ${i % 2 === 0 && "md:-mt-12"}`}
					>
						<div className="relative w-80 h-80 md:w-60 md:h-60 mx-auto hover:scale-110 transition duration-300">
							<Image
								src={step.imgSrc}
								alt={step.title}
								fill
							/>
						</div>
						<h4 className="mt-4 mb-2 text-xl">{step.title}</h4>
						<p className="text-gray-500">{step.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default WorkSummary;
