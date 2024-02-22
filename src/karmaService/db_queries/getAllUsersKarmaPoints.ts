import { sql } from "@vercel/postgres";

export async function getAllUsersKarmaPoints () {

  const { rows } = await sql`
    SELECT u.id, u.username, COALESCE(uk.karma_points, 0) AS karma_points
    FROM users u
    LEFT JOIN user_karma uk ON u.id = uk.user_id;
  `;

  return rows;
};
