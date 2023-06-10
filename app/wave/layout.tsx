'use client';

import { Navbar } from '../components/Navbar';

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
