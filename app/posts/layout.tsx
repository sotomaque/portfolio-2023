'use client';

import { Navbar } from '@/app/components/Navbar';

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="mt-20 min-h-screen w-full px-4 py-2 mx-auto flex flex-col items-center">
        {children}
      </main>
    </>
  );
}
