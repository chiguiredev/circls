import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { sql } from "@vercel/postgres";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if(!credentials?.email || !credentials?.password) return null;

        const dbResponse = await sql`SELECT * FROM users WHERE username = ${credentials?.email}`;
        const user = dbResponse.rows[0];

        const passwordValid = await compare(credentials.password, user.password);

        if (user && passwordValid) {
          const returnUser = {
            id: user.id,
            name: user.role,
            email: user.username,
          };

          return returnUser;
        }

        return null;
      }
    })
  ],
});

export { handler as GET, handler as POST }
