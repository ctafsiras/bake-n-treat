"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";

const PageHeader = ({ title }: { title: string }) => {
	const pathname = usePathname();
	return (
		<section className="bg-gray-50 py-20 md:py-24 lg:py-32">
			<h1 className="text-5xl text-center">{title}</h1>
			<div className="flex items-center gap-x-4 justify-center text-center font-sans">
				<Link
					href="/"
					className="uppercase text-gray-500 hover:text-black"
				>
					Home
				</Link>
				<FaChevronRight className="text-[#FF6F00]" />
				<h4 className="uppercase text-gray-500 hover:text-black">
					{pathname.slice(1)}
				</h4>
			</div>
		</section>
	);
};

export default PageHeader;
