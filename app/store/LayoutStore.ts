import create from 'zustand';

export type NavItem =
  | 'posts'
  | 'hero'
  | 'about'
  | 'work'
  | 'projects'
  | 'posts';

export type Route = {
  show?: boolean;
  id: NavItem;
  title: string;
  href?: string;
};

// STATE TYPE
type LayoutState = {
  // Route
  routes: Route[];
  links: Route[];
};

export const navLinks: Route[] = [
  {
    id: 'hero',
    title: 'Home',
    show: false,
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'posts',
    title: 'Posts',
    href: '/posts',
  },
];

// INITIAL STATE
export const useLayoutStore = create<LayoutState>((set, get) => ({
  // Route
  routes: navLinks,
  links: navLinks.filter((route) => route.show !== false),
}));
