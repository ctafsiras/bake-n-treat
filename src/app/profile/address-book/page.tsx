"use client";

import { useUser } from "@/hooks/useUser";
import AddressCard from "@/components/Profile/AddressCard";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { addAddress } from "./actions";
export default function AddressBook() {
  const [isOpen, setIsOpen] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    mobile: "",
    division: "",
    city: "",
    area: "",
    address: "",
    userId: "",
  });
  const { data: user } = useUser();
  const onOpen = () => setIsOpen(true);
  const onOpenChange = () => setIsOpen(false);
  const saveAddress = async () => {
    if (!user) return;
    if (!user.id) return;
    const formData = new FormData();
    Object.entries(newAddress).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("userId", user.id);
    const response = await addAddress(formData);
    if (response.success) {
      console.log(response.message);
    } else {
      console.log(response.message);
    }
  };
  return (
    <main className="mx-2">
      <h1 className="text-2xl text-center font-bold font-sans uppercase">
        Address Book
      </h1>
      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="border border-gray-600 rounded-md p-5 text-center font-sans text-lg font-bold cursor-pointer hover:bg-yellow-100 transition-background duration-200">
          <Button
            isIconOnly
            color="warning"
            variant="light"
            aria-label="Add new address"
            radius="full"
            onClick={onOpen}
          >
            <FaPlus />
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Add New Address
                  </ModalHeader>
                  <ModalBody>
                    <Input
                      label="Full Name"
                      placeholder="Enter full name"
                      value={newAddress.name}
                      onChange={(e) =>
                        setNewAddress({
                          ...newAddress,
                          name: e.target.value,
                        })
                      }
                    />
                    <Input
                      label="Mobile Number"
                      placeholder="Enter mobile number"
                      value={newAddress.mobile}
                      onChange={(e) =>
                        setNewAddress({
                          ...newAddress,
                          mobile: e.target.value,
                        })
                      }
                    />
                    <Input
                      label="Division"
                      placeholder="Enter division"
                      value={newAddress.division}
                      onChange={(e) =>
                        setNewAddress({
                          ...newAddress,
                          division: e.target.value,
                        })
                      }
                    />
                    <Input
                      label="State"
                      placeholder="Enter city"
                      value={newAddress.city}
                      onChange={(e) =>
                        setNewAddress({
                          ...newAddress,
                          city: e.target.value,
                        })
                      }
                    />
                    <Input
                      label="Area"
                      placeholder="Enter area"
                      value={newAddress.area}
                      onChange={(e) =>
                        setNewAddress({
                          ...newAddress,
                          area: e.target.value,
                        })
                      }
                    />
                    <Input
                      label="Street Address"
                      placeholder="Enter street address"
                      value={newAddress.address}
                      onChange={(e) =>
                        setNewAddress({
                          ...newAddress,
                          address: e.target.value,
                        })
                      }
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cancel
                    </Button>
                    <Button color="primary" onPress={saveAddress}>
                      Save Address
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
          <p>Add new address</p>
        </div>
        {user?.shippingAddresses.map((address) => (
          <AddressCard key={address.id} address={address} />
        ))}
      </section>
    </main>
  );
}
