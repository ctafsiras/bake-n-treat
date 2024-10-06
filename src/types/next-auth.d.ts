import { Cart, ShippingAddress } from "@prisma/client";
import "next-auth";

declare module "next-auth" {
	interface User {
		id: string;
		name: string;
		email: string;
		emailVerified: boolean;
		hashedPassword: string | null;
		image: string;
		role: string;
		createdAt: Date;
		updatedAt: Date;
		shippingAddresses: ShippingAddress[];
		cart: Cart[];
	}

	interface Token {
		id: string;
		name: string;
		email: string;
		emailVerified: boolean;
		hashedPassword: string | null;
		image: string;
		role: string;
		createdAt: Date;
		updatedAt: Date;
		shippingAddresses: ShippingAddress[];
		cart: Cart[];
	}

	interface Session {
		id: string;
		name: string;
		email: string;
		emailVerified: boolean;
		hashedPassword: string | null;
		image: string;
		role: string;
		createdAt: Date;
		updatedAt: Date;
		shippingAddresses: ShippingAddress[];
		cart: Cart[];
	}
}
