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
        <li className="hover:bg-gray-700 rounded-md">
          <Link href="/login" className="text-white py-2 px-4 block hover:text-gray-200">
            Login
          </Link>
        </li>
      );
    }

    return (
      <li className="hover:bg-gray-700 rounded-md">
        <Link href="/api/auth/signout/" className="text-white py-2 px-4 block hover:text-gray-200">
          Logout
        </Link>
      </li>
    );
  };
