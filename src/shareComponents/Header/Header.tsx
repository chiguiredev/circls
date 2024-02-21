"use client";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from 'next/link'
import type { Session } from "next-auth";

export const Header = () => {

  const path = usePathname();
  const [session, setSession] = useState<null | Session>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    }

    fetchSession();
  }, [path, session]);

  if ((["/login", "/register"].includes(path))) {
    return null;
  }

  return (
    <header className="flex flex-row justify-center">
      <div className="container px-10 py-4">
        <nav className="flex flex-row justify-between">
          <Link href="/">Welcome to Circls</Link>
          <ul className="flex flex-row">
            {session?.user ? (
              <li>
                <Link href="/api/auth/signout/">Logout</Link>
              </li>
            ) : (
              <li>
                <Link href="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
