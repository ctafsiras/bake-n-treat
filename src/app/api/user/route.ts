import db from "@/app/libs/prismadb";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const email = searchParams.get("email");

	if (!email) {
		return Response.json({ message: "Email required", status: 400 });
	}

	try {
		const user = await db.user.findUnique({
			where: {
				email,
			},
			include: {
				cart: true,
				shippingAddresses: true,
			},
		});

		return Response.json({ ...user });
	} catch (err) {
		console.error(err);
		return new Response("Internal Server Error", { status: 500 });
	}
}
export async function PUT(request: NextRequest) {
	const data = await request.json();
	const { id, ...updatedData } = data;

	const updatedUser = await db.user.update({
		where: {
			id: id,
		},
		data: {
			...updatedData,
		},
	});

	return Response.json({ ...updatedUser });
}
