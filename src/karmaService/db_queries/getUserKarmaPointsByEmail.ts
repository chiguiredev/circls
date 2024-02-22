import { sql } from "@vercel/postgres";

export async function getUserKarmaPointsByEmail (email: string) {

  const { rows } = await sql`
    SELECT u.username, COALESCE(uk.karma_points, 0) AS karma_points
    FROM users u
    LEFT JOIN user_karma uk ON u.id = uk.user_id
    WHERE u.username = ${email};
  `;

  return rows[0];
};
