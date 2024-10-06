"use client";

import { useUser } from "@/hooks/useUser";
import { useState } from "react";

const ShippingCard = () => {
  const { data: user } = useUser();
  const [address, setAddresss] = useState(0);
  const shippingAddress = user?.shippingAddresses[address];
  return (
    <div className="w-fit shadow-lg text-md shadow-gray-400 rounded-md p-5 font-sans">
      <h3>Deliver to: {shippingAddress?.name}</h3>
      <h3>Mobile: {shippingAddress?.mobile}</h3>
      <h3>
        Location: {shippingAddress?.address}, {shippingAddress?.area},{" "}
        {shippingAddress?.city}, {shippingAddress?.division}
      </h3>
      <h3>Billing Method: Cash on Delivery</h3>
    </div>
  );
};

export default ShippingCard;
