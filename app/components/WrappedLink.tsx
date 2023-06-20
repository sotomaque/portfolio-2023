import { Link as SmoothLink } from 'react-scroll';
import Link from 'next/link';

export const LinkWrapper = ({
  children,
  isHome,
  href,
  to = 'hero',
}: {
  children: React.ReactNode;
  isHome: boolean;
  href?: string;
  to?: string;
}) => {
  // use smoothlink if were on home and dont have a provided href
  const USE_SMOOTH_LINK = isHome && !href;

  return USE_SMOOTH_LINK ? (
    <SmoothLink
      to={to}
      smooth={true}
      duration={800}
      className="flex items-center gap-2"
    >
      {children}
    </SmoothLink>
  ) : (
    <Link href={href ?? '/'} className="flex items-center gap-2">
      {children}
    </Link>
  );
};
