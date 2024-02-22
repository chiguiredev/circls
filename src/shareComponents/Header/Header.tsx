"use client";

import Link from 'next/link'
import { useHeader } from './hooks/useHeader';
import { LogMenu } from '.';

export const Header = () => {

  const { session, showHeader } = useHeader();

  if (!showHeader) {
    return null;
  }

  return (
    <header className="flex flex-row justify-center bg-gray-500">
      <div className="container max-w-6xl px-6 py-4">
        <nav className="flex flex-row justify-between items-center">
          <Link href="/" className="text-white text-lg font-semibold hover:text-gray-200">
            Welcome to Circls
          </Link>
          <ul className="flex flex-row space-x-4">
            <LogMenu session={session} />
          </ul>
        </nav>
      </div>
    </header>
  );
}
