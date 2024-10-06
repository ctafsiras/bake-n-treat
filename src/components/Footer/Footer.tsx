"use client";

import { navbarHiddenUrl } from "@/app/utils/data";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
	const pathname = usePathname();
	return (
		<footer
			className={`bg-[#29292A] text-white px-5 py-6 pt-20 ${
				navbarHiddenUrl.includes(pathname) ? "hidden" : ""
			}`}
		>
			<section className="grid gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between items-start">
				<div className="flex flex-col space-y-3 text-center sm:text-left relative">
					<div className="mx-auto sm:mx-0">
						<Image
							src="/assets/images/logo-footer.png"
							alt=""
							width={200}
							height={50}
						/>
					</div>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit.
					</p>
					<div className="space-x-4 text-[#FF6F00]">
						<a
							href="https://www.facebook.com"
							className="hover:text-white"
						>
							FB
						</a>
						<a
							href="https://www.twitter.com"
							className="hover:text-white"
						>
							TW
						</a>
						<a
							href="https://www.linkedin.com"
							className="hover:text-white"
						>
							LN
						</a>
						<a
							href="https://www.instagram.com"
							className="hover:text-white"
						>
							IG
						</a>
					</div>
				</div>
				<nav className="space-y-2">
					<h1 className="text-3xl">Get In Touch</h1>
					<h5 className="text-sm font-light">
						457 Morningview Lane, NY
					</h5>
					<h5 className="text-sm font-light">example@mail.com</h5>
					<h5 className="text-sm font-light">+1 (234) 567 890</h5>
					<h5 className="text-sm font-light">
						Mon - Fri: 09.00 - 16.00
					</h5>
				</nav>
				<nav className="space-y-2">
					<h1 className="text-3xl">About Us</h1>
					<h5 className="text-sm font-light cursor-pointer hover:text-[#FF6F00]">
						Our Story
					</h5>
					<h5 className="text-sm font-light cursor-pointer hover:text-[#FF6F00]">
						Visit Us
					</h5>
					<h5 className="text-sm font-light cursor-pointer hover:text-[#FF6F00]">
						FAQs Page
					</h5>
					<h5 className="text-sm font-light cursor-pointer hover:text-[#FF6F00]">
						Blog Post
					</h5>
					<h5 className="text-sm font-light cursor-pointer hover:text-[#FF6F00]">
						Contact
					</h5>
				</nav>
				<nav className="space-y-3">
					<h1 className="text-3xl">Latest News</h1>
					<h5 className="hover:text-[#FF6F00] cursor-pointer duration-300">
						<span className="text-[#FF6F00]">26 MAY 2022</span>{" "}
						<br />
						Sugar reduction is key for a healthy future
					</h5>
					<h5 className="hover:text-[#FF6F00] cursor-pointer duration-300">
						<span className="text-[#FF6F00]">26 MAY 2022</span>{" "}
						<br /> Trends food and beverage industry today
					</h5>
					<h5 className="hover:text-[#FF6F00] cursor-pointer duration-300">
						<span className="text-[#FF6F00]">26 MAY 2022</span>{" "}
						<br /> Going banana (bread) over bread baking
					</h5>
				</nav>
			</section>
			<div className="my-10 h-px w-full border-t border-gray-600" />
			<p className="text-center">
				Copyright © {new Date().getFullYear()}. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
