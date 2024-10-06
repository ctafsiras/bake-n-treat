import ProductDetails from "@/components/Checkout/ProductDetails";
import ShippingCard from "@/components/Checkout/ShippingCard";

export default function Checkout() {
	return (
		<main className="px-10 py-5">
			<ShippingCard />
			<ProductDetails />
		</main>
	);
}
