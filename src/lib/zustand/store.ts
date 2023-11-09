import { Session } from "next-auth";
import { create } from "zustand";

interface typeAuth {
  userProfile: Session | null;
  setUserProfile: (profile: Session) => void;
}

export const useAuth = create<typeAuth>()((set) => ({
  userProfile: null,
  setUserProfile: (profile: Session) => set(() => ({ userProfile: profile })),
}));
