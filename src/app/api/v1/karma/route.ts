import type { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/userService/auth/authOptions';
import { getAllUsersKarmaPoints } from '@/karmaService/db_queries/getAllUsersKarmaPoints';
import { getUserKarmaPointsByEmail } from '@/karmaService/db_queries/getUserKarmaPointsByEmail';
 
export async function GET (req: NextApiRequest) {
  try {
    const requestURL = new URL(req.url!);

    const email = requestURL.searchParams.get('email');

    if (email) {
      const userPoints = await getUserKarmaPointsByEmail(email);
      return NextResponse.json({ ...userPoints }, { status: 200 });
    }

    const rows = await getAllUsersKarmaPoints();
    return NextResponse.json({ karma_points_rows: rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}

export async function POST (req: Request) {

  const session = await getServerSession(
    authOptions
  );

  console.log(session);

  let body;

  try {
    body = await req.json();
  } catch (error) {
    return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 });
  }

  const { email } = body;

  if (!email) {
    return NextResponse.json({ message: 'Missing email' }, { status: 400 });
  }

  return NextResponse.json({ message: 'POST method not allowed' }, { status: 405 });
}
