"use client";

import { useForm } from "react-hook-form";

type FormData = {
	firstName: string;
	lastName: string;
	email: string;
	message: string;
};

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = (data: FormData) => {
		console.log(data);
	};

	return (
		<section>
			<h1 className="text-[#FF6F00] font-medium font-sans uppercase tracking-[.2em] text-center mb-5">
				Our Contact
			</h1>
			<p className="text-4xl md:text-5xl text-center">Send a Message</p>
			<form
				className="max-w-3xl mx-auto py-16 px-5 font-sans"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="mt-4 sm:flex gap-5">
					<div className="w-full">
						<label
							htmlFor="firstName"
							className="block font-medium text-gray-700"
						>
							First Name
						</label>
						<input
							type="text"
							id="firstName"
							{...register("firstName", { required: true })}
							className="mt-1 block w-full border border-gray-300 py-3 px-5 focus:outline-none focus:border-black sm:text-sm"
							placeholder="First Name"
						/>
					</div>
					<div className="w-full mt-4 sm:mt-0">
						<label
							htmlFor="lastName"
							className="block font-medium text-gray-700"
						>
							Last Name
						</label>
						<input
							type="text"
							id="lastName"
							{...register("lastName", { required: true })}
							className="mt-1 block w-full border border-gray-300 py-3 px-5 focus:outline-none focus:border-black sm:text-sm"
							placeholder="Last Name"
						/>
					</div>
				</div>
				<div className="mt-4">
					<label
						htmlFor="email"
						className="block font-medium text-gray-700"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						{...register("email", { required: true })}
						className="mt-1 block w-full border border-gray-300 py-3 px-5 focus:outline-none focus:border-black sm:text-sm"
						placeholder="Enter your email address"
					/>
				</div>
				<div className="mt-4">
					<label
						htmlFor="message"
						className="block font-medium text-gray-700"
					>
						Message
					</label>
					<textarea
						id="message"
						{...register("message", { required: true })}
						className="mt-1 block w-full border border-gray-300 py-3 px-5 focus:outline-none focus:border-black sm:text-sm"
						placeholder="Enter your message"
						rows={4}
					></textarea>
				</div>
				<div className="mt-4 text-center">
					<button
						type="submit"
						className="bg-orange-600 hover:bg-white text-white hover:text-orange-600 font-medium text-xs tracking-wide transition duration-500 py-3 px-7"
					>
						SEND MESSAGE
					</button>
				</div>
			</form>
		</section>
	);
};

export default ContactForm;
