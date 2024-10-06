import Products from "@/components/Dashboard/Admin/Products";

const page = () => {
	return (
		<section className="py-10 px-20 h-screen overflow-auto">
			<h1 className="text-4xl font-sans uppercase text-center">
				All Products
			</h1>
			<Products />
		</section>
	);
};

export default page;
