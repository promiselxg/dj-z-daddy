import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { generateCookieResponse } from "@/utils/authUtils";

export const POST = async (req) => {
  const { username, password } = await req.json();

  //  check user credentials
  if (!username || !password) {
    return new NextResponse(
      JSON.stringify(
        { message: "Please enter your username or password." },
        { status: 400 }
      )
    );
  }
  const user = await await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  if (user && (await bcrypt.compare(password, user.password))) {
    const roles = Object.values(user.role);
    const token = await generateCookieResponse(
      user.id,
      roles,
      user.admin,
      username
    );
    return new NextResponse(
      JSON.stringify(
        {
          message: "Login Successfull",
          userInfo: { token, id: user.id, isAdmin: user.admin, username },
        },
        { status: 400 }
      )
    );
  } else {
    return new NextResponse(
      JSON.stringify(
        { message: "Incorrect username or password." },
        { status: 400 }
      )
    );
  }
};
