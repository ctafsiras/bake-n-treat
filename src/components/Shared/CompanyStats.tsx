const CompanyStats = () => {
	const stats = [
		{ number: "25+", label: "YEARS EXPERIENCE" },
		{ number: "34+", label: "NEW BRANCHES" },
		{ number: "610+", label: "POSITIVE REVIEWS" },
		{ number: "72+", label: "AVAILABLE MENU" },
	];

	return (
		<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 py-16 px-5 bg-gray-50">
			{stats.map((stat, index) => (
				<div
					key={index}
					className="text-center"
				>
					<p className="text-5xl">{stat.number}</p>
					<p className="text-[#FF6F00] text-medium font-sans capitalize mt-3">
						{stat.label}
					</p>
				</div>
			))}
		</section>
	);
};

export default CompanyStats;
