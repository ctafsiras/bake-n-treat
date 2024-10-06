"use client";

import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from "@nextui-org/react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdLock, MdMail } from "react-icons/md";

const LoginModal = ({
	isOpen,
	onOpenChange,
}: {
	isOpen: boolean;
	onOpenChange: any;
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		signIn("credentials", {
			...data,
			redirect: false,
		}).then((callback) => {
			if (callback?.error) {
				toast.error(callback.error);
			}
			if (callback?.ok && !callback?.error) {
				toast.success("Logged in!");
				onOpenChange(false);
			}

			setIsLoading(false);
		});
	};
	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			placement="top-center"
		>
			<ModalContent className="font-sans">
				{(onClose) => (
					<form onSubmit={handleSubmit(onSubmit)}>
						<ModalHeader className="flex flex-col gap-1">
							Log in
						</ModalHeader>
						<ModalBody>
							<Input
								autoFocus
								endContent={
									<MdMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
								}
								{...register("email", {
									required: "Email is required",
								})}
								label="Email"
								placeholder="Enter your email"
								variant="bordered"
								disabled={isLoading}
							/>
							<Input
								endContent={
									<MdLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
								}
								{...register("password", {
									required: "Password is required",
								})}
								label="Password"
								placeholder="Enter your password"
								type="password"
								variant="bordered"
								disabled={isLoading}
							/>
							<div className="flex py-2 px-1 justify-between">
								<span>Don&#39;t have an account?</span>
								<Link href="/authentication">Register</Link>
							</div>
						</ModalBody>
						<ModalFooter>
							<Button
								color="danger"
								variant="flat"
								onPress={onClose}
							>
								Close
							</Button>
							<Button
								color="primary"
								type="submit"
								disabled={isLoading}
								isLoading={isLoading}
							>
								Sign in
							</Button>
						</ModalFooter>
					</form>
				)}
			</ModalContent>
		</Modal>
	);
};

export default LoginModal;
