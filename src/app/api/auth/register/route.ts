import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST (req: Request) {

  // TODO: improve email and password validation with a library like zod
  // Throw schema validation errors if email or password are invalid
  // validate on runtime and return a 400 status code if invalid
  try {
    const { email, password } = await req.json();

    const hashedPassword = await hash(password, 10);

    await sql`
      INSERT INTO users (username, password, role)
      VALUES (${email}, ${hashedPassword}, 'user');`;

    return NextResponse.redirect(new URL('/login', req.url))
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
  }
}
