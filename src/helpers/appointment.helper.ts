import axios from "axios";
import { API_URL } from "@/constants/api";

export const getUserAppointments = async () => {
  const response = await axios.get(
    API_URL + "/appointments/user",

    { withCredentials: true }
  );
  return response.data?.appointments;
};
