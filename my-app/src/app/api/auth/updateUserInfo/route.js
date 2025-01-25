import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import db from "@/utils/db";
import User from "@/app/models/User";
import UserInfo from "@/app/models/UserInfo";

export async function POST(request) {
  try {
    // Get session
    const session = await getServerSession();
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Get request body
    const body = await request.json();
    
    // Connect to database
    await db();

    // Find or create UserInfo document
    let userInfo = await UserInfo.findOneAndUpdate(
      { user: session.user.id },
      {
        phoneNumber: body.phoneNumber,
        dateOfBirth: body.dateOfBirth,
        gender: body.gender,
        address: body.address,
        alternateAddresses: body.alternateAddresses
      },
      { new: true, upsert: true }
    );

    // Update User document with UserInfo reference
    await User.findByIdAndUpdate(
      session.user.id,
      { userInfo: userInfo._id },
      { new: true }
    );

    return NextResponse.json(userInfo, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

