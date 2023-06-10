import create from 'zustand';

export type Route = {
  show?: boolean;
  id: string;
  title: string;
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
];

// INITIAL STATE
export const useLayoutStore = create<LayoutState>((set, get) => ({
  // Route
  routes: navLinks,
  links: navLinks.filter((route) => route.show !== false),
}));
