import Users from "@/components/Dashboard/Admin/Users";

const page = () => {
	return (
		<section className="py-10 px-20 h-screen overflow-auto font-sans">
			<h1 className="text-4xl uppercase text-center">Users</h1>
			<Users />
		</section>
	);
};

export default page;
