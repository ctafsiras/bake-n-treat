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
					backgroundImage:
						"url(/assets/images/breadSelectionTutorial.jpg)",
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
			<Modal
				isOpen={isOpen}
				placement="center"
				onOpenChange={onOpenChange}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="text-white">
								Simple Modal
							</ModalHeader>
							<ModalBody>
								<p className="text-white">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Nullam pulvinar risus non
									risus hendrerit venenatis. Pellentesque sit
									amet hendrerit risus, sed porttitor quam.
									<br />
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Nullam pulvinar risus non
									risus hendrerit venenatis. Pellentesque sit
									amet hendrerit risus, sed porttitor quam.
								</p>
							</ModalBody>
							<ModalFooter>
								<Button
									color="danger"
									variant="light"
									onPress={onClose}
								>
									Close
								</Button>
								<Button
									color="primary"
									onPress={onClose}
								>
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
