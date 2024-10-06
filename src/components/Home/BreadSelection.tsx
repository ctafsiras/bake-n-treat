import Image from "next/image";

const BreadSelection = () => {
	return (
		<section className="flex flex-col lg:flex-row items-center justify-center bg-white px-6 py-10">
			<div className="lg:w-1/2 lg:pr-8 text-center">
				<h1 className="text-[#FF6F00] text-medium font-medium capitalize tracking-[.4em] mb-4">
					BREAD SELECTION
				</h1>
				<h2 className="text-4xl sm:text-5xl mb-4">
					For Everlasting Moments and Taste
				</h2>
				<p className="text-gray-500 mb-4">
					Nulla at ligula nibh. Mauris gravida lobortis viverra.
					Pellentesque urna quam, volutpat eget felis ex, malesuada
					blandit quam. Class aptent taciti sociosqu ad litora
					torquent per.
				</p>
				<button className="bg-[#FF6F00] hover:bg-black transition duration-500 text-white py-2 px-4">
					READ MORE
				</button>
			</div>
			<div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<Card
						image="/assets/images/birthdayIcon.png"
						title="Birthday"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing."
					/>
					<Card
						image="/assets/images/presentsIcon.png"
						title="Presents"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing."
					/>
					<Card
						image="/assets/images/weddingsIcon.png"
						title="Weddings"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing."
					/>
					<Card
						image="/assets/images/partiesIcon.png"
						title="Parties"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing."
					/>
				</div>
			</div>
		</section>
	);
};

export default BreadSelection;

type CardProps = {
	image: string;
	title: string;
	text: string;
};

function Card(props: CardProps) {
	return (
		<div className="p-4 text-center space-y-3">
			<div className="relative w-20 h-20 mx-auto">
				<Image
					src={props.image}
					alt=""
					fill
				/>
			</div>
			<h3 className="text-3xl">{props.title}</h3>
			<p className="text-gray-500 text-sm">{props.text}</p>
			<button className="bg-none text-[#FF6F00] border-b border-gray-400 hover:text-black hover:border-[#FF6F00] transition duration-300">
				ORDER NOW
			</button>
		</div>
	);
}
