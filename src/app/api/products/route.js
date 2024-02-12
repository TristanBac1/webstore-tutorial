import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const productData = await request.json();
    const newProduct = await db.product.create({ data: productData });

    console.log(newProduct);
    return NextResponse.json(newProduct);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Error occured while creating Product",
        error,
      },
      { status: 500 }
    );
  }
}
