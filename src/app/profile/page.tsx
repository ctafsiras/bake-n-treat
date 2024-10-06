import UserDetails from "@/components/Profile/UserDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Profile - Bake N Treat",
	description: "Bake N Treat Official Web Application",
};

export default function Profile() {
	return (
		<main>
			<h1 className="text-2xl font-bold font-sans uppercase">
				Welcome back
			</h1>
			<h1 className="text-2xl text-center font-bold font-sans uppercase">
				My Profile
			</h1>
			<UserDetails />
		</main>
	);
}
