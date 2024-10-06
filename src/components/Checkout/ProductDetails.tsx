"use client";

import db from "@/app/libs/prismadb";
import { Image } from "@nextui-org/react";
import { Product } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProductDetails = () => {
	const searchParams = useSearchParams();
	const productId = searchParams.get("productId");
	const [product, setProduct] = useState({} as Product | null);

	useEffect(() => {
		const fetch = async () => {
			if (productId) {
				const product = await db.product.findUnique({
					where: {
						id: productId as string,
					},
				});
				console.log(product);
			}
		};
		fetch();
	}, [productId]);
	return (
		<div className="flex items-center justify-between shadow-lg shadow-gray-400 p-5 rounded-md font-sans  w-fit">
			<div className="flex items-center gap-2 w-fit">
				<Image
					src={product?.image}
					alt={product?.name}
					width={150}
					height={150}
					className="rounded-md"
				/>
				<div>
					<h1 className="uppercase text-md lg:text-lg">
						{product?.name}
					</h1>
				</div>
			</div>
			<div className="flex items-center justify-between w-fit">
				<h1>Quantity: 1</h1>
				<h1>Price: ${product?.price}</h1>
			</div>
		</div>
	);
};

export default ProductDetails;
