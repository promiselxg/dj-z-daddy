import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();

  let data;
  if (body.bio) {
    data = {
      bioInfo: body?.bio,
      bioType: "bio",
    };
  } else {
    if (body.mediaType) {
      data = {
        mediaUrl: body?.mediaUrl,
        bioType: body?.mediaType,
      };
    }
  }

  try {
    if (body.bio === "") {
      return new NextResponse(
        JSON.stringify({ message: "Please fill the form." }, { status: 500 })
      );
    }
    const response = await prisma.bio.create({ data });
    return new NextResponse(JSON.stringify(response, { status: 200 }));
  } catch (err) {
    console.log("error", err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const GET = async (request) => {
  let query;
  let slug = request?.url?.split("?")[1]?.split("=")[1];
  if (!slug) {
    query = {};
  } else {
    query = {
      where: {
        bioType: slug,
      },
      take: 1,
    };
  }
  try {
    const response = await prisma.bio.findMany(query);
    return new NextResponse(JSON.stringify(response, { status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const DELETE = async (request) => {
  const data = await request.json();
  try {
    const dataExist = await prisma.bio.findUnique({
      where: {
        id: data?.id,
      },
    });
    if (dataExist) {
      await prisma.bio.delete({
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
