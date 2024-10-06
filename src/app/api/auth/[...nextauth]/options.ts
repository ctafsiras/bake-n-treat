import db from "@/app/libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
	adapter: PrismaAdapter(db),
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: {
					label: "Email:",
					type: "text",
					placeholder: "example@gmail.com",
				},
				password: {
					label: "Password:",
					type: "password",
					placeholder: "********",
				},
			},
			async authorize(credentials) {
				if (!credentials?.email && !credentials?.password) {
					throw new Error("Email & Password is required");
				}

				const user = await db.user.findUnique({
					where: {
						email: credentials.email,
					},
					include: {
						shippingAddresses: true,
						cart: true,
					},
				});
				if (!user || !user?.hashedPassword) {
					throw new Error("No user found. Please register");
				}
				const isCorrectPassword = await bcrypt.compare(
					credentials.password,
					user.hashedPassword
				);
				if (!isCorrectPassword) {
					throw new Error("Incorrect password");
				}

				return user;
			},
		}),
	],
	callbacks: {
		async jwt({ token, user, session }) {
			if (user) {
				return {
					...token,
					id: user.id,
					emailVerified: user.emailVerified,
					hashedPassword: user.hashedPassword,
					image: user.image,
					role: user.role,
					createdAt: user.createdAt,
					updatedAt: user.updatedAt,
					shippingAddresses: user.shippingAddresses,
					cart: user.cart,
				};
			}

			return token;
		},
		async session({ session, token, user }) {
			return {
				...session,
				user: {
					id: token.id,
					name: token.name,
					email: token.email,
					image: token.picture,
					emailVerified: token.emailVerified,
					hashedPassword: token.hashedPassword,
					role: token.role,
					createdAt: token.createdAt,
					updatedAt: token.updatedAt,
					shippingAddresses: token.shippingAddresses,
					cart: token.cart,
				},
			};
		},
	},
	debug: process.env.NODE_ENV === "development",
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,
};
