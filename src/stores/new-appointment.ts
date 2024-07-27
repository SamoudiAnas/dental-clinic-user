import { create } from "zustand";

type NewAppointment = {
  date: Date | string;
  time: string;
  phone: string;
  name: string;
  email: string;
  setDate: (date: Date) => void;
  setTime: (time: string) => void;
  setPhone: (phone: string) => void;
  setName: (reservedFor: string) => void;
  setEmail: (email: string) => void;
};

export const useNewAppointment = create<NewAppointment>((set) => ({
  date: "",
  time: "",
  phone: "",
  name: "",
  email: "",
  setDate: (date: Date) => set({ date }),
  setTime: (time: string) => set({ time }),
  setPhone: (phone: string) => set({ phone }),
  setName: (reservedFor: string) => set({ name: reservedFor }),
  setEmail: (email: string) => set({ email }),
}));
