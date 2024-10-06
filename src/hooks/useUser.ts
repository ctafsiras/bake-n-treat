"use client";

import { Cart, ShippingAddress } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";

type User = {
	id: string;
	name: string;
	email: string;
	emailVerified: boolean;
	hashedPassword: string | null;
	image: string;
	role: string;
	createdAt: Date;
	updatedAt: Date;
	cart: Cart[];
	shippingAddresses: ShippingAddress[];
};

export const useUser = () => {
	const { data: session } = useSession();

	const result = useQuery<User>({
		queryKey: ["user", session?.user?.email],
		enabled: !!session?.user?.email,
		queryFn: async () => {
			const res = await axios(`/api/user?email=${session?.user?.email}`);
			return res.data;
		},
	});

	return { ...result };
};
