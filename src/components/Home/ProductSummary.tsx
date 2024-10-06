import Image from "next/image";
import BreadImg from "../../../public/assets/images/bread.png";
import CakeImg from "../../../public/assets/images/cake.png";
import CupCakeImg from "../../../public/assets/images/cupCake.png";
import PieImg from "../../../public/assets/images/pie.png";

const ProductSummary = () => {
	const items = [
		{
			id: 1,
			img: BreadImg,
			title: "Fresh Ingradients",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, facere?",
		},
		{
			id: 2,
			img: PieImg,
			title: "Expert Bakers",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, facere?",
		},
		{
			id: 3,
			img: CakeImg,
			title: "Years Experience",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, facere?",
		},
		{
			id: 4,
			img: CupCakeImg,
			title: "Delicious Food",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, facere?",
		},
	];
	return (
		<div className="py-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
			{items.map((item) => (
				<div
					key={item.id}
					className="flex flex-col items-center text-center border rounded-md shadow-lg py-5"
				>
					<Image
						src={item.img}
						alt={item.title}
						width={50}
						height={50}
					/>
					<h3 className="text-2xl">{item.title}</h3>
					<p className="text-gray-500">{item.desc}</p>
					<div></div>
				</div>
			))}
		</div>
	);
};

export default ProductSummary;
