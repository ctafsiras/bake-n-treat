"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { IoMdPlay } from "react-icons/io";

const BreadSelectionTutorial = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <section
        className="px-6 md:px-10 py-20 space-y-5"
        style={{
          backgroundImage: "url(/assets/images/breadSelectionTutorial.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button
          className="text-white hover:text-[#FF6F00] text-3xl text-center border hover:bg-white rounded-full p-4 transition duration-300"
          onClick={onOpen}
        >
          <IoMdPlay />
        </button>
        <p className="text-white text-lg">BREAD SELECTION</p>
        <h1 className="text-white text-4xl md:text-5xl max-w-lg">
          It’s Always Fresh or You Won’t Find It Here
        </h1>
      </section>

      {/* TODO: Add a meaningful modal. */}
      <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-white">
                Bread Selection Tutorial
              </ModalHeader>
              <ModalBody>
                <p className="text-white">
                  Welcome to our Bread Selection Tutorial! At Bake N Treat, we
                  take pride in our artisanal bread-making process. Our expert
                  bakers use only the finest, locally-sourced ingredients to
                  create a wide variety of fresh, delicious breads daily.
                  <br />
                  In this tutorial, you&apos;ll learn how to choose the perfect
                  loaf for your needs, understand the unique characteristics of
                  different bread types, and discover tips for storing and
                  serving your bread to maintain its freshness and flavor. Join
                  us on this journey to elevate your bread experience!
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default BreadSelectionTutorial;
