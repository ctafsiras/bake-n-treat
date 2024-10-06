import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Bake N Treat",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex overflow-clip">
      <Sidebar />

      <section className="w-full">{children}</section>
    </main>
  );
}
