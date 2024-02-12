import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
  try {
    const { isActive, name, email, password, phone, address, dob, notes } =
      await request.json();
    const newStaff = await db.staff.create({
      data: {
        isActive,
        name,
        email,
        password,
        phone,
        address,
        dob,
        notes,
      },
    });

    console.log(newStaff);
    return NextResponse.json(newStaff);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Error occured while creating Staff",
        error,
      },
      { status: 500 }
    );
  }
}
