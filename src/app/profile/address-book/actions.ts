"use server";

import db from "@/libs/prismadb";

export async function addAddress(data: any) {
  const { name, mobile, division, city, area, address, userId } = data;
  if (!name || !mobile || !division || !city || !area || !address || !userId) {
    throw new Error("Missing required fields");
  }
  try {
    await db.shippingAddress.create({
      data: {
        userId: userId,
        name: name,
        mobile: mobile,
        division: division,
        city: city,
        area: area,
        address: address,
      },
    });

    return { success: true, message: "Address added successfully" };
  } catch (error) {
    return { success: false, message: "Failed to add address" };
  }
}
