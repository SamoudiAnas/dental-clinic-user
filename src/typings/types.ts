export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  appointments: any[];
  birthdate: Date | string;
  country: string;
  isAdmin: boolean;
};

export type Appointment = {
  id: number;
  date: Date | string;
  time: string;
  phone: string;
  userId: number;
};
