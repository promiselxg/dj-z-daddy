import { removeUploadedImage } from "@/utils/cloudinary";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  let query;
  let slug = request?.url?.split("?")[1]?.split("=")[1];
  console.log(slug);
  if (!slug) {
    query = {};
  } else {
    query = {
      where: {
        mediaType: slug,
      },
    };
  }
  try {
    const response = await prisma.mediaFile.findMany(query);
    return new NextResponse(JSON.stringify(response, { status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const DELETE = async (request) => {
  try {
    const body = await request.json();
    const { pid, id } = body;
    removeUploadedImage(pid);

    const dataExist = await prisma.mediaFile.findUnique({
      where: {
        id,
      },
    });
    if (dataExist) {
      await prisma.mediaFile.delete({
        where: {
          id,
        },
      });
      return Response.json({ message: "ok" }, { status: 200 });
    }
    //removeUploadedImage()
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
