import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { KarmaTable } from "@/karmaService/components/KarmaTable";
import { getAllUsersKarmaPoints } from "@/karmaService/apiCalls";
import type { Session } from "next-auth";

export default async function KarmaAdmin() {

  const session: Session | null = await getServerSession();

  if (!session || session?.user?.name !== "admin") {
    redirect("/");
  }

  let karmaPoints;

  try {
    karmaPoints = await getAllUsersKarmaPoints();
  } catch (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>
          An error occurred fetching the karma points
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
