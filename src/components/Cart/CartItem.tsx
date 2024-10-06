import { Button } from "@nextui-org/react";
import { Product } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import QuantityController from "./QuantityController";

type CartItemProps = {
	cartItem: {
		id: string;
		product: Product;
		productId: string;
		userId: string;
		quantity: number;
		dateAdded: Date;
	};
	refetch: () => void;
};

const CartItem: React.FC<CartItemProps> = ({ cartItem, refetch }) => {
	const { image, name, description, price } = cartItem.product;
	const [isLoading, setIsLoading] = useState(false);

	const handleDeleteCart = () => {
		setIsLoading(true);

		axios
			.delete(`/api/cart?cartId=${cartItem.id}`)
			.then((res) => {
				if (res.data.status === 200) {
					refetch();
					toast.success(res.data.message);
				}
				if (res.data.status === 404) {
					toast.error(res.data.message);
				}
			})
			.finally(() => {
				setIsLoading(false);
			});
	};
	return (
		<div className="flex flex-col lg:flex-row items-center justify-between shadow-xl pb-2 lg:p-2 lg:pr-4 rounded-xl font-sans">
			<div className="flex items-center gap-2 lg:w-7/12">
				<Image
					src={image}
					alt={name}
					width={150}
					height={150}
					className="rounded-lg"
				/>
				<div>
					<h1 className="uppercase text-md lg:text-xl font-bold line-clamp-1 overflow-hidden">
						{name}
					</h1>
					<span className="text-sm line-clamp-4 leading-[18px]">
						{description}
					</span>
				</div>
			</div>
			<div className="flex items-center justify-between w-4/5 lg:w-4/12">
				<QuantityController
					cartItem={cartItem}
					foodPrice={price}
				/>
				<Button
					isIconOnly
					color="danger"
					aria-label="Delete"
					onPress={handleDeleteCart}
					isLoading={isLoading}
				>
					<FaTrash />
				</Button>
			</div>
		</div>
	);
};

export default CartItem;
