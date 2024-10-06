import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useUser } from "./useUser";

const useCart = () => {
	const { data: user, isFetched } = useUser();
	const [isLoading, setIsLoading] = useState(true);

	const { refetch, data: cart = [] } = useQuery({
		queryKey: ["cart", user?.id],
		enabled: isFetched && !!user?.id,
		queryFn: async () => {
			const res = await axios(`/api/cart?userId=${user?.id}`);
			setIsLoading(false);
			return res.data;
		},
	});

	return { cart, isLoading, refetch };
};

export default useCart;
