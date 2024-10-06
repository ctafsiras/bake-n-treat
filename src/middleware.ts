import { withAuth } from "next-auth/middleware";

export default withAuth({
	pages: {
		signIn: "/authentication",
	},
});

export const config = {
	matcher: ["/cart", "/profile/:path*", "/checkout", "/dashboard/:path*"],
};
