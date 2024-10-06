import useCart from "@/hooks/useCart";
import { useUser } from "@/hooks/useUser";
import { Button, Image, useDisclosure } from "@nextui-org/react";
import { Product } from "@prisma/client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import LoginModal from "./LoginModal";

const ProductCard = ({ product }: { product: Product }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const { data: user, isFetched } = useUser();
  const { refetch } = useCart();

  const handleAddToCart = async (productId: string) => {
    setIsLoading(true);

    if (isFetched && !user?.id) {
      onOpen();
      setIsLoading(false);
      return;
    }

    axios
      .post("/api/cart", { productId, id: user?.id })
      .then((res) => {
        if (res.data.id) {
          refetch();
          toast.success("Product added to cart");
          setIsLoading(false);
        }
      })
      .catch((err) => {
        toast.error("Failed to add product to cart");
        setIsLoading(false);
      });
  };
  return (
    <>
      {!user?.id && <LoginModal isOpen={isOpen} onOpenChange={onOpenChange} />}
      <div
        key={product.id}
        className="rounded-xl bg-white text-gray-700 shadow-xl "
      >
        <div className="relative h-48 overflow-hidden rounded-t-xl">
          <Image src={product.image} alt={product.name} width={"100%"} />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {product.name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              ${product.price}
            </p>
          </div>
          <p className="font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75 line-clamp-4">
            {product.description}
          </p>
        </div>
        <div className="p-6 pt-0 flex justify-between">
          <Button
            className="font-sans font-semibold uppercase"
            type="button"
            color="warning"
            variant="ghost"
            onClick={() => handleAddToCart(product.id)}
            isLoading={isLoading}
            disabled={isLoading}
            radius="sm"
          >
            Add to Cart
          </Button>
          <Button
            as={Link}
            type="button"
            href={`/checkout?productId=${product.id}`}
            className="font-sans font-semibold uppercase"
            color="success"
            variant="faded"
            radius="sm"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
