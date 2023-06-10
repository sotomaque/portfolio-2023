'use client';

import { Navbar } from '../(site)/components/Navbar';

export default function WaveLayout({
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
