import { BsCart3 } from "react-icons/bs";
import { GiShop, GiStarFormation } from "react-icons/gi";

const ChooseUs = () => {
	const columns = [
		{
			icon: (
				<BsCart3
					size={48}
					className="text-[#FF6F00] mx-auto"
				/>
			),
			title: "Fresh Ingredients",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
		},
		{
			icon: (
				<GiShop
					size={48}
					className="text-[#FF6F00] mx-auto"
				/>
			),
			title: "Years Experience",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
		},
		{
			icon: (
				<GiStarFormation
					size={48}
					className="text-[#FF6F00] mx-auto"
				/>
			),
			title: "Delicious Food",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
		},
	];

	return (
		<section className="bg-gray-100 py-16 px-5">
			<h2 className="text-[#FF6F00] text-center font-medium font-sans uppercase tracking-[.2em]">
				Why Choose Us
			</h2>
			<h1 className="text-5xl text-center my-5">
				Great Taste in Every Bite
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
				{columns.map((column) => (
					<div
						key={column.title}
						className="p-10 text-center hover:shadow-large transition duration-300 bg-white"
					>
						<span>{column.icon}</span>
						<h3 className="text-2xl mt-4">{column.title}</h3>
						<p className="text-gray-500 font-sans mt-2">
							{column.text}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default ChooseUs;
