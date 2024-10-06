import BakerWithPastries from "@/../public/assets/images/bakerWithPastries.jpg";
import Image from "next/image";
import Accordion from "../Accordion/Accordion";

export default function FAQ() {
	const faqs = [
		{
			question: "What is the most ordered bread at Delibake?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
		},
		{
			question: "Can I order a birthday cake at your bakery?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
		},
		{
			question: "How much does it cost to make a fancy wedding cake?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
		},
		{
			question: "Can I order bread with a special shape?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
		},
	];

	return (
		<div className="py-16 px-5 xl:px-[70px] md:flex gap-20 items-center space-y-10">
			<div className="w-full lg:w-1/2 text-center md:text-left">
				<p className="text-[#FF6F00] font-sans font-semibold uppercase tracking-[.2em] mb-3">
					FAQs
				</p>
				<h1 className="text-4xl ">Frequently Asked Questions</h1>
				<p className="text-gray-600 text-lg mt-4">
					Pellentesque urna quam, volutpat eget felis ac, malesuada
					blandit quam. Class aptent taciti sociosqu ad litora
					torquent.
				</p>
				<div className="mt-8 text-left">
					<Accordion faqs={faqs} />
				</div>
			</div>
			<div className="w-full lg:w-1/2">
				<Image
					src={BakerWithPastries}
					alt="Bakery"
				/>
			</div>
		</div>
	);
}
