import { sql } from "@vercel/postgres";

export async function createUserPoints (email: string, points: number) {
  await sql`
    INSERT INTO user_karma (user_id, karma_points)
    SELECT id, ${points}
    FROM users
    WHERE username = ${email}
    AND NOT EXISTS (
        SELECT 1 FROM user_karma WHERE user_id = users.id
    )
  `;
};
