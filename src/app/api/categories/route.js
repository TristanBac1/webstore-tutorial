import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
  try {
    const { title, slug, imageUrl, description, isActive } =
      await request.json();
    const newCategory = await db.category.create({
      data: {
        title,
        slug,
        imageUrl,
        description,
        isActive,
      },
    });

    console.log(newCategory);
    return NextResponse.json(newCategory);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Error occured while creating Category",
        error,
      },
      { status: 500 }
    );
  }
}
