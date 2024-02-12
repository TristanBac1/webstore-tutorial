import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, validDate, code, isActive } = await request.json();

    const newCoupon = await db.coupon.create({
      data: {
        title,
        code,
        validDate,
        isActive,
      },
    });

    console.log(newCoupon);
    return NextResponse.json(newCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Error occured while creating Coupon",
        error,
      },
      { status: 500 }
    );
  }
}
