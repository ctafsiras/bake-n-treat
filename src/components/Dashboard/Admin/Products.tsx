"use client";

import { Product } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		axios.get("/api/products").then((res) => {
			setProducts(res.data);
		});
	}, []);

	return (
		<section className="gap-x-2 gap-y-5 grid grid-cols-2 sm:grid-cols-3 mt-5 font-sans">
			{products.map((product, index) => (
				<ProductCard
					key={index}
					product={product}
				/>
			))}
		</section>
	);
};

export default Products;
