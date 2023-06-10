'use client';

import { Navbar } from '../components/Navbar';

export default function HawaiiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
