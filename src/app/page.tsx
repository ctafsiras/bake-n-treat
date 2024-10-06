import Banner from "@/components/Home/Banner";
import BlogSection from "@/components/Home/BlogPosts";
import BreadSelection from "@/components/Home/BreadSelection";
import BreadSelectionTutorial from "@/components/Home/BreadSelectionTutorial";
import CompanyStats from "@/components/Shared/CompanyStats";
import Menu from "@/components/Home/Menu";
import ProductSummary from "@/components/Home/ProductSummary";
import PromoSection from "@/components/Home/PromoSection";
import WorkSummary from "@/components/Home/WorkSummary";
import AboutUs from "@/components/Shared/AboutUs";
import FeaturedFoods from "@/components/Shared/FeaturedFoods";
import OurTeam from "@/components/Shared/OurTeam";
import Testimonial from "@/components/Shared/Testimonial";

export default function Home() {
	return (
		<main>
			<Banner />
			<Testimonial />
			<AboutUs />
			<ProductSummary />
			<Menu />
			<FeaturedFoods />
			<BreadSelection />
			<WorkSummary />
			<BreadSelectionTutorial />
			<PromoSection />
			<OurTeam />
			<CompanyStats />
			<BlogSection />
		</main>
	);
}
