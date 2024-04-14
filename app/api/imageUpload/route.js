import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    if (body.mediaUrl === "") {
      return new NextResponse(
        JSON.stringify({ message: "Please select an Image" }, { status: 500 })
      );
    }
    const response = await prisma.mediaFile.create({
      data: { ...body },
    });
    return new NextResponse(JSON.stringify(response, { status: 200 }));
  } catch (err) {
    console.log("error", err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
