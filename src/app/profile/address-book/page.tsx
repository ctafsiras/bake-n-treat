"use client";

import { useUser } from "@/hooks/useUser";
import AddressCard from "@/components/Profile/AddressCard";
import { Button } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa";

export default function AddressBook() {
  const { data: user } = useUser();
  return (
    <main className="mx-2">
      <h1 className="text-2xl text-center font-bold font-sans uppercase">
        Address Book
      </h1>
      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        {user?.shippingAddresses.map((address) => (
          <AddressCard key={address.id} address={address} />
        ))}
        <div className="border border-gray-600 rounded-md p-5 text-center font-sans text-lg font-bold cursor-pointer hover:bg-yellow-100 transition-background duration-200">
          <Button
            isIconOnly
            color="warning"
            variant="light"
            aria-label="Take a photo"
            radius="full"
          >
            <FaPlus />
          </Button>
          <p>Add new address</p>
        </div>
      </section>
    </main>
  );
}
