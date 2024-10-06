import Sidebar from "@/components/Profile/Sidebar/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Profile - Wholly Desserts",
};

export default function ProfileLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex items-start w-full">
			<Sidebar />
			<section className="w-full py-5">{children}</section>
		</main>
	);
}
