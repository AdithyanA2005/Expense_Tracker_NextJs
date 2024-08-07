import { create } from "zustand";

type NewGoalDialogStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useCreateGoalBucketDialog = create<NewGoalDialogStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
