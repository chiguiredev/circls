import { sql } from "@vercel/postgres";

export async function updateUserPoints (email: string, points: number) {
  await sql`
    UPDATE user_karma
    SET karma_points = ${points}
    FROM users
    WHERE user_karma.user_id = users.id
    AND users.username = ${email}
  `;
};
