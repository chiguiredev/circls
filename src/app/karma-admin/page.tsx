import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { KarmaTable } from "@/karmaService/components/KarmaTable";
import type { Session } from "next-auth";

export default async function KarmaAdmin() {

  const session: Session | null = await getServerSession();

  if (!session || session?.user?.name !== "admin") {
    redirect("/");
  }

  let karmaPoints;

  try {
    const response = await fetch("http://localhost:3000/api/v1/karma/");
    karmaPoints = await response.json();
  } catch (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>
          An error occurred
        </h1>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <KarmaTable rows={karmaPoints.karma_points_rows} />
    </main>
  );
}
