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

export const DELETE = async (request) => {
  const data = await request.json();
  try {
    const dataExist = await prisma.mediaFile.findUnique({
      where: {
        id: data?.id,
      },
    });
    if (dataExist) {
      await prisma.mediaFile.delete({
        where: {
          id: data?.id,
        },
      });
      return Response.json({ message: "ok" }, { status: 200 });
    }
  } catch (err) {
    return NextResponse.json({ message: "DELETE Error", err }, { status: 500 });
  }
};
