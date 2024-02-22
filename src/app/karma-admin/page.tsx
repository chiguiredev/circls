import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import type { Session } from "next-auth";

export default async function KarmaAdmin() {

  const session: Session | null = await getServerSession(authOptions);

  console.log(session);

  if (!session || session?.user?.name !== "admin") {
    redirect("/");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Welcome to the karma page
      </h1>
    </main>
  );
}
