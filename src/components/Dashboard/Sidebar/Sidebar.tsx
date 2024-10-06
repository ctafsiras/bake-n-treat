import Logo from "@/../public/assets/images/logo-footer.png";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
	return (
		<section className="w-64 h-dvh sticky top-0 px-10 py-5 bg-orange-400 text-white">
			<Image
				src={Logo}
				alt="Logo"
				width={130}
			/>
			<ul className="mt-10 text-xl font-sans uppercase list-inside list-disc">
				<li>
					<Link
						href="/dashboard"
						className="bg-gradient-to-r from-white to-white bg-[length:0%_2px] hover:bg-[length:100%_2px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300 ease-in-out"
					>
						Dashboard
					</Link>
				</li>
				<li>
					<Link
						href="/dashboard/additem"
						className="bg-gradient-to-r from-white to-white bg-[length:0%_2px] hover:bg-[length:100%_2px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300 ease-in-out"
					>
						Add Item
					</Link>
				</li>
				<li>
					<Link
						href="/dashboard/items"
						className="bg-gradient-to-r from-white to-white bg-[length:0%_2px] hover:bg-[length:100%_2px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300 ease-in-out"
					>
						All Items
					</Link>
				</li>
				<li>
					<Link
						href="/dashboard/users"
						className="bg-gradient-to-r from-white to-white bg-[length:0%_2px] hover:bg-[length:100%_2px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300 ease-in-out"
					>
						Users
					</Link>
				</li>
			</ul>

			<div className="my-5 border-y" />

			<ul className="text-xl font-sans uppercase">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/menu">Menu</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</section>
	);
};

export default Sidebar;
