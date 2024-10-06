import AddItemForm from "@/components/Dashboard/Admin/AddItemForm";

const page = () => {
	return (
		<section className="py-10">
			<h1 className="text-4xl font-sans uppercase text-center">
				Add an Item
			</h1>
			<AddItemForm />
		</section>
	);
};

export default page;
