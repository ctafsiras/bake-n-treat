"use client";

import { Spinner } from "@nextui-org/react";
import { Product } from "@prisma/client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
	const [products, setProducts] = useState([] as Product[]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/api/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setLoading(false);
			});
	}, []);

	return (
		<section className="py-8 mx-3 md:mx-14">
			<h1 className="text-3xl text-center font-sans uppercase">
				Menu Items
			</h1>
			{loading ? (
				<div className="text-center my-5">
					<Spinner
						color="warning"
						size="lg"
					/>
				</div>
			) : products.length === 0 ? (
				<div className="text-center my-5 text-lg text-red-500">
					No Products Found!
				</div>
			) : (
				<div className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center mt-4">
					{products.map((product: Product) => (
						<ProductCard
							key={product.id}
							product={product}
						/>
					))}
				</div>
			)}
		</section>
	);
};

export default Products;
