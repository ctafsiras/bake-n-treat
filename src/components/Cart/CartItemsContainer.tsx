"use client";

import useCart from "@/hooks/useCart";
import { Skeleton } from "@nextui-org/react";
import { Product } from "@prisma/client";
import CartItem from "./CartItem";

type NewCartType = {
  id: string;
  userId: string;
  productId: string;
  product: Product;
  quantity: number;
  dateAdded: Date;
};

const CartItemsContainer = () => {
  const { cart, isLoading, refetch } = useCart();

  return (
    <div className="max-h-screen flex flex-col gap-y-2 overflow-scroll lg:w-2/3 px-3 lg:px-20 py-5">
      {/* Cart Items */}
      {cart.map((cartItem: NewCartType) => (
        <CartItem key={cartItem.id} cartItem={cartItem} refetch={refetch} />
      ))}
      {/* Empty Cart */}
      {cart.length === 0 && !isLoading && (
        <p className="text-xl text-center font-sans">Your cart is empty</p>
      )}
      {/* Loader */}
      {cart.length === 0 && isLoading && (
        <>
          <div className="flex flex-col lg:flex-row items-center justify-between shadow-xl pb-2 lg:p-2 lg:pr-4 rounded-xl font-sans">
            <div className="flex items-center gap-2 w-full lg:w-7/12">
              <Skeleton className="flex rounded-lg w-2/5 lg:w-3/5 h-24" />
              <div className="w-3/5 lg:w-full flex flex-col gap-1.5">
                <Skeleton className="h-6 w-full rounded-lg" />
                <Skeleton className="h-16 w-full rounded-lg" />
              </div>
            </div>
            <div className="flex items-center justify-between w-4/5 lg:w-4/12">
              <Skeleton className="h-7 w-[72px] rounded-lg" />
              <Skeleton className="h-6 w-8 rounded-lg" />
              <Skeleton className="h-10 w-10 rounded-lg" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between shadow-xl pb-2 lg:p-2 lg:pr-4 rounded-xl font-sans">
            <div className="flex items-center gap-2 w-full lg:w-7/12">
              <Skeleton className="flex rounded-lg w-2/5 lg:w-3/5 h-24" />
              <div className="w-3/5 lg:w-full flex flex-col gap-1.5">
                <Skeleton className="h-6 w-full rounded-lg" />
                <Skeleton className="h-16 w-full rounded-lg" />
              </div>
            </div>
            <div className="flex items-center justify-between w-4/5 lg:w-4/12">
              <Skeleton className="h-7 w-[72px] rounded-lg" />
              <Skeleton className="h-6 w-8 rounded-lg" />
              <Skeleton className="h-10 w-10 rounded-lg" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between shadow-xl pb-2 lg:p-2 lg:pr-4 rounded-xl font-sans">
            <div className="flex items-center gap-2 w-full lg:w-7/12">
              <Skeleton className="flex rounded-lg w-2/5 lg:w-3/5 h-24" />
              <div className="w-3/5 lg:w-full flex flex-col gap-1.5">
                <Skeleton className="h-6 w-full rounded-lg" />
                <Skeleton className="h-16 w-full rounded-lg" />
              </div>
            </div>
            <div className="flex items-center justify-between w-4/5 lg:w-4/12">
              <Skeleton className="h-7 w-[72px] rounded-lg" />
              <Skeleton className="h-6 w-8 rounded-lg" />
              <Skeleton className="h-10 w-10 rounded-lg" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItemsContainer;
