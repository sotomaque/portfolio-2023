import { Link as SmoothLink } from 'react-scroll';
import Link from 'next/link';

export const LinkWrapper = ({
  children,
  isHome,
}: {
  children: React.ReactNode;
  isHome: boolean;
}) => {
  return isHome ? (
    <SmoothLink
      to={'hero'}
      smooth={true}
      duration={800}
      className="flex items-center gap-2"
    >
      {children}
    </SmoothLink>
  ) : (
    <Link href="/" className="flex items-center gap-2">
      {children}
    </Link>
  );
};
