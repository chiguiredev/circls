import { NextResponse } from "next/server";

export async function POST (req: Request) {

  // TODO: improve email and password validation with a library like zod
  try {
    const { email, password } = await req.json();

    console.log("email: ", email);
    console.log("password: ", password);
  } catch (error) {
    console.error(error);
  }

  const response = NextResponse.json({ message: "success, user registered!"})
  return response;
}
