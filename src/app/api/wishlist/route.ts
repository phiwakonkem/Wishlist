import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  const body = await request.json();
  const { productId } = body;

  if (!productId || typeof productId !== "string") {
    return NextResponse.json(
      { error: "productId is required" },
      { status: 400 }
    );
  }

  const existing = await prisma.wishlist.findUnique({
    where: { productId },
  });

  if (existing) {
    await prisma.wishlist.delete({
      where: { productId },
    });

    revalidatePath("/");
    revalidatePath("/wishlist");

    return NextResponse.json({ wishlisted: false });
  } else {
    await prisma.wishlist.create({
      data: { productId },
    });

    revalidatePath("/");
    revalidatePath("/wishlist");
    
    return NextResponse.json({ wishlisted: true });
  }
}