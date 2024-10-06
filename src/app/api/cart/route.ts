import db from "@/libs/prismadb";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { id, productId } = await request.json();

    const user = await db.user.findUnique({
      where: { id },
    });

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    const product = await db.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return Response.json({ error: "Product not found" }, { status: 404 });
    }

    const cartItemExist = await db.cart.findFirst({
      where: {
        userId: id,
        productId: productId,
      },
      include: {
        product: true,
        user: true,
      },
    });

    if (cartItemExist) {
      const cartItem = await db.cart.update({
        where: {
          id: cartItemExist.id,
        },
        data: {
          quantity: {
            increment: 1,
          },
        },
        include: {
          product: true,
          user: true,
        },
      });
      return Response.json(cartItem);
    } else {
      const cartItem = await db.cart.create({
        data: {
          userId: id,
          productId: productId,
          quantity: 1,
        },
        include: {
          product: true,
          user: true,
        },
      });

      return Response.json(cartItem);
    }
  } catch (error: any) {
    console.log("ADD_TO_CART_ERROR", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { cartId, newQuantity } = data;

    const updatedCartQuantity = await db.cart.update({
      where: {
        id: cartId,
      },
      data: {
        quantity: newQuantity,
      },
      include: {
        product: true,
        user: true,
      },
    });

    return Response.json(updatedCartQuantity);
  } catch (error: any) {
    console.log("UPDATE_CART_QUANTITY_ERROR", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get("userId");
    if (!userId) {
      return Response.json({
        message: "User not found. User ID required",
        status: 404,
      });
    }

    const cartItems = await db.cart.findMany({
      where: {
        userId,
      },
      include: {
        product: true,
        user: true,
      },
    });

    return Response.json(cartItems);
  } catch (error: any) {
    console.log("ADD_TO_CART_ERROR", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("cartId");

    if (!id) {
      return Response.json({
        message: "Cart Id required",
        status: 404,
        success: false,
      });
    }

    const isCartExists = await db.cart.findUnique({
      where: {
        id,
      },
    });

    if (!isCartExists) {
      return Response.json({
        message: "Cart item not found",
        status: 404,
        success: false,
      });
    }

    await db.cart.delete({
      where: {
        id,
      },
    });

    return Response.json({
      message: "Cart item deleted",
      status: 200,
      success: true,
    });
  } catch (error: any) {
    console.log("DELETE_CART_ITEM_ERROR", error);
    return new Response("DELETE_CART_ITEM_ERROR", { status: 500 });
  }
}
