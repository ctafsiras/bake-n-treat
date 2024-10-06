import { Card, CardBody, CardFooter, Image, Tooltip } from "@nextui-org/react";
import { Product } from "@prisma/client";

interface ProductCardProps {
	product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	return (
		<Card
			shadow="sm"
			isPressable
			onPress={() => console.log("item pressed")}
		>
			<CardBody className="overflow-visible p-0">
				<Image
					shadow="sm"
					radius="lg"
					width="100%"
					alt={product.name}
					src={product.image}
				/>
				<Tooltip
					className="font-sans"
					content={product.description}
					delay={0}
					closeDelay={0}
					placement="bottom"
					color="secondary"
					motionProps={{
						variants: {
							exit: {
								opacity: 1,
								transition: {
									duration: 0.2,
									ease: "easeIn",
								},
							},
							enter: {
								opacity: 1,
								transition: {
									duration: 0.15,
									ease: "easeOut",
								},
							},
						},
					}}
				>
					<p className="my-2 text-center line-clamp-3">
						{product.description}
					</p>
				</Tooltip>
			</CardBody>
			<CardFooter className="text-small justify-between">
				<b>{product.name}</b>
				<p className="text-default-500">${product.price}</p>
			</CardFooter>
		</Card>
	);
};

export default ProductCard;
