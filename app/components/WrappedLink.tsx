import { Link as SmoothLink } from 'react-scroll';
import Link from 'next/link';

type LinkWrapperProps = {
  children: React.ReactNode;
  isHome: boolean;
  href?: string;
  to?: string;
  onClick?: () => void;
};

export const LinkWrapper = ({
  children,
  isHome,
  href,
  to = 'hero',
  onClick,
}: LinkWrapperProps) => {
  // use smoothlink if were on home and dont have a provided href
  const USE_SMOOTH_LINK = isHome && !href;

  return USE_SMOOTH_LINK ? (
    <SmoothLink
      to={to}
      smooth={true}
      duration={800}
      className="flex items-center gap-2"
      onClick={onClick}
    >
      {children}
    </SmoothLink>
  ) : (
    <Link
      href={href ?? '/'}
      className="flex items-center gap-2"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
