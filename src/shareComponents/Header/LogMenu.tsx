import Link from 'next/link'
import type { Session } from "next-auth";

type LogMenuProps = {
  session: Session | null | undefined;
};

export const LogMenu = (props: LogMenuProps) => {
    if (props.session === undefined) {
      return null;
    }

    if (props.session === null) {
      return (
        <li>
          <Link href="/login">Login</Link>
        </li>
      );
    }

    return (
      <li>
        <Link href="/api/auth/signout/">Logout</Link>
      </li>
    );
  };
