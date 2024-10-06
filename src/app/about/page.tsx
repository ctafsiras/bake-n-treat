import ChooseUs from "@/components/About/ChooseUs";
import FAQ from "@/components/About/FAQ";
import OurStory from "@/components/About/OurStory";
import PageHeader from "@/components/PageHeader/PageHeader";
import AboutUs from "@/components/Shared/AboutUs";
import CompanyStats from "@/components/Shared/CompanyStats";
import FeaturedFoods from "@/components/Shared/FeaturedFoods";
import OurTeam from "@/components/Shared/OurTeam";
import Testimonial from "@/components/Shared/Testimonial";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

export default function About() {
	return (
		<main className="">
			<PageHeader title="About Us" />
			<OurStory />
			<AboutUs />
			<ChooseUs />
			<Testimonial />
			<FAQ />
			<FeaturedFoods />
			<OurTeam />
			<CompanyStats />
		</main>
	);
}
