import { API_URL } from "@/constants/api";
import axios from "axios";

export type Availability = {
  date: string;
  slots: string[];
};

export const getAvailabilityByDate = async (date: Date | string) => {
  const response = await axios.get(`${API_URL}/availability/${date}`);
  return response.data.availability as Availability;
};
