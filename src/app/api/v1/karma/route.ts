import type { Session } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/userService/auth/authOptions';
import {
  getAllUsersKarmaPoints,
  checkUserHasPoints,
  createUserPoints,
  updateUserPoints,
  getUserKarmaPointsByEmail,
} from '@/karmaService/db_queries';
 
export async function GET (req: NextRequest) {
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

  const session: Session | null = await getServerSession(authOptions);

  if (!session || session?.user?.name !== 'admin') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  let body;

  try {
    body = await req.json();
  } catch (error) {
    return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 });
  }

  const { email, karma_points } = body;

  if (!email || !karma_points) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
  }

  let hasPoints;
  try {
    hasPoints = await checkUserHasPoints(email);
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred checking if user has points' },
      { status: 500 },
    );
  }

  if (!hasPoints) {
    try {
      await createUserPoints(email, karma_points);
    } catch (error) {
      return NextResponse.json(
        { message: 'An error occurred creating user points' },
        { status: 500 },
      );
    }
  } else {
    try {
      await updateUserPoints(email, karma_points);
    } catch (error) {
      return NextResponse.json(
        { message: 'An error occurred updating user points' },
        { status: 500 },
      );
    }
  };

  return NextResponse.json(
    { message: `Success the user ${email} karma points are ${karma_points}`, ok: true },
    { status: 200 },
  );
}
