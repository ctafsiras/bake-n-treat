const Menu = () => {
	const menuItems = [
		{
			id: 1,
			name: "Sourdough",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			price: 9,
		},
		{
			id: 2,
			name: "Banana Bread",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			price: 11,
		},
		{
			id: 3,
			name: "Cornbread",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			price: 12,
		},
		{
			id: 4,
			name: "Challah Bread",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			price: 8,
		},
		{
			id: 5,
			name: "Brioche Bread",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			price: 12,
		},
		{
			id: 6,
			name: "American Rye Bread",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			price: 14,
		},
		{
			id: 7,
			name: "Pumpernickle Bread",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			price: 21,
		},
		{
			id: 8,
			name: "Multigrain Bread",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			price: 15,
		},
	];
	return (
		<section className="lg:h-screen py-20 lg:px-6">
			<div className="text-center">
				<p className="text-[#FF6F00] text-medium font-medium capitalize tracking-[.4em]">
					OUR MENU
				</p>
				<h1 className="text-5xl">Feel the Butter, All Time</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-x-12 justify-evenly mt-20">
				{menuItems.map((item) => (
					<div
						key={item.id}
						className="border-b border-dashed"
					>
						<div className="flex justify-between items-center">
							<h3 className="text-xl">{item.name}</h3>
							<h3 className="text-xl text-[#FF6F00]">
								${item.price}
							</h3>
						</div>
						<p className="text-gray-500 text-sm my-3">
							{item.desc}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Menu;
