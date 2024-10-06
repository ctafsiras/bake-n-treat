import Image from "next/image";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const OurTeam = () => {
	const team = [
		{
			name: "Austin George",
			title: "HEAD CHEF",
			imgSrc: "/assets/images/worker1.jpg",
			socials: { instagram: "#", twitter: "#", linkedin: "#" },
		},
		{
			name: "Wanda Frank",
			title: "BAKER",
			imgSrc: "/assets/images/worker2.jpg",
			socials: { instagram: "#", twitter: "#", linkedin: "#" },
		},
		{
			name: "Stacy Coulden",
			title: "BAKER",
			imgSrc: "/assets/images/worker3.jpg",
			socials: { instagram: "#", twitter: "#", linkedin: "#" },
		},
		{
			name: "Kyle Thomas",
			title: "BAKER",
			imgSrc: "/assets/images/worker4.jpg",
			socials: { instagram: "#", twitter: "#", linkedin: "#" },
		},
	];

	return (
		<section className="py-16 px-5 xl:px-[70px]">
			<p className="text-[#FF6F00] font-sans uppercase tracking-[.2em] text-center mb-3">
				Our Team
			</p>
			<h3 className="text-center text-5xl mb-14">Professional Bakers</h3>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
				{team.map((member, index) => (
					<div
						key={index}
						className="text-center border border-dblack rounded-t-lg pb-4 shadow-xl max-w-[400px] mx-auto sm:w-auto"
					>
						<Image
							src={member.imgSrc}
							alt={member.name}
							width={400}
							height={200}
							className="rounded-t-lg"
						/>
						<h4 className="mt-4 mb-2 text-2xl font-">
							{member.name}
						</h4>
						<p className="mb-4 text-gray-500 font-sans">
							{member.title}
						</p>
						<div className="flex justify-center space-x-7">
							<a
								href={member.socials.instagram}
								target="_blank"
								rel="noreferrer"
								className="text-[#FF6F00] hover:text-black"
							>
								<FaFacebook size={15} />
							</a>
							<a
								href={member.socials.twitter}
								target="_blank"
								rel="noreferrer"
								className="text-[#FF6F00] hover:text-black"
							>
								<FaTwitter size={15} />
							</a>
							<a
								href={member.socials.linkedin}
								target="_blank"
								rel="noreferrer"
								className="text-[#FF6F00] hover:text-black"
							>
								<FaLinkedinIn size={15} />
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
export default OurTeam;
