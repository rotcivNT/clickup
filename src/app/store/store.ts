import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface BearState {
  isOpenSidebar: boolean;
  setIsOpenSidebar: () => void;
}

export const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        isOpenSidebar: true,
        setIsOpenSidebar: () =>
          set((prevState) => ({
            ...prevState,
            isOpenSidebar: !prevState.isOpenSidebar,
          })),
      }),
      {
        name: "bear-storage",
      }
    )
  )
);
