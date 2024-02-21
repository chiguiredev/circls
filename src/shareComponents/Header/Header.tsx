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
      <div className="container px-6 py-4">
        <nav className="flex flex-row justify-between">
          <Link href="/">Welcome to Circls</Link>
          <ul className="flex flex-row">
            <LogMenu session={session} />
          </ul>
        </nav>
      </div>
    </header>
  );
}
