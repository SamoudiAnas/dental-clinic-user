import { create } from "zustand";

type NewAppointment = {
  date: Date | null;
  time: string;
  phone: string;
  reservedFor: string;
  setDate: (date: Date) => void;
  setTime: (time: string) => void;
  setPhone: (phone: string) => void;
  setReservedFor: (reservedFor: string) => void;
};

export const useNewAppointment = create<NewAppointment>((set) => ({
  date: null,
  time: "",
  phone: "",
  reservedFor: "",
  setDate: (date: Date) => set({ date }),
  setTime: (time: string) => set({ time }),
  setPhone: (phone: string) => set({ phone }),
  setReservedFor: (reservedFor: string) => set({ reservedFor }),
}));
