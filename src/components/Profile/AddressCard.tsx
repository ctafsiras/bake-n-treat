import { ShippingAddress } from "@prisma/client";

const AddressCard = ({ address }: { address: ShippingAddress }) => {
	const { name, mobile, division, city, area } = address;
	return (
		<div className="border border-gray-600 rounded-md p-5 font-sans">
			<h3 className="text-xl">
				Name:
				{name}
			</h3>
			<h3 className="text-xl">Mobile: {mobile}</h3>
			<h3 className="text-xl">
				Location: {address.address}, {area}, {city}, {division}
			</h3>
		</div>
	);
};

export default AddressCard;
