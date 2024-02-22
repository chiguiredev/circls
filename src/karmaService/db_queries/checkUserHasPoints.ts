import { sql } from "@vercel/postgres";

export async function checkUserHasPoints (email: string) {

  const { rows } = await sql`
    SELECT 
        u.username,
        CASE 
            WHEN uk.user_id IS NOT NULL THEN 'Yes'
            ELSE 'No'
        END AS has_karma_points
    FROM users u
    LEFT JOIN user_karma uk ON u.id = uk.user_id
    WHERE u.username = ${email};
  `;

  return rows[0].has_karma_points === 'Yes';
};
