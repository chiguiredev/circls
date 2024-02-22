import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { Session } from "next-auth";

export const useHeader = () => {
  const path = usePathname();
  const [session, setSession] = useState<null | undefined | Session>(undefined);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    }

    fetchSession();
  }, [path]);

  const showHeader = !(["/login", "/register"].includes(path));

  return {
    session,
    showHeader,
  };
};
