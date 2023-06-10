'use client';

import { Providers } from '../libs/Providers';

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center h-screen">
        {children}
      </div>
    </Providers>
  );
}
