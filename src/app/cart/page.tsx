import CartItemsContainer from "@/components/Cart/CartItemsContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Cart - Wholly Desserts",
};

export default function Cart() {
	return (
		<div className="flex flex-col lg:flex-row">
			{/* PRODUCTS CONTAINER */}
			<CartItemsContainer />
			{/* PAYMENT CONTAINER */}
			<div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:w-1/3 lg:px-20">
				<div className="flex justify-between">
					<span>Subtotal (3 items)</span>
					<span>$81.70</span>
				</div>
				<div className="flex justify-between">
					<span>Service Cost</span>
					<span>$0.00</span>
				</div>
				<div className="flex justify-between">
					<span>Delivery Cost</span>
					<span className="text-green-500">FREE!</span>
				</div>
				<hr className="my-2" />
				<div className="flex justify-between">
					<span>TOTAL (INCL. VAT)</span>
					<span className="font-bold">$81.70</span>
				</div>
				<button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
					CHECKOUT
				</button>
			</div>
		</div>
	);
}
