import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST (req: Request) {
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
