import { create } from 'zustand';

export type AboutStoreType = {
  overview: string;
  services: {
    title: string;
    icon: any;
  }[];
};

export const useAboutStore = create<AboutStoreType>((set, get) => {
  return {
    overview: '',
    services: [],

    setOverview: (overview: string) => set({ overview }),
    setServices: (services: { title: string; icon: any }[]) =>
      set({ services }),
  };
});
