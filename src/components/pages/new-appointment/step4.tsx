import { Button } from "@/components/common/button";
import { API_URL } from "@/constants/api";
import { queryKeys } from "@/constants/queryKeys";
import { toast } from "@/hooks/use-toast";
import { queryClient } from "@/pages/_app";
import { useNewAppointment } from "@/stores";
import axios from "axios";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSteps } from "react-step-builder";

export const Step4 = () => {
  const { prev } = useSteps();
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    time,
    email,
    date,
    phone,
    name: reservedFor,
    reset,
  } = useNewAppointment();

  const addAppointmentHandler = async () => {
    try {
      setIsLoading(true);

      const dateString = new Date(date).toDateString();
      const startTime = new Date(dateString + " " + time);
      const endTime = new Date(startTime.getTime() + 30 * 60000);

      const res = await axios.post(
        API_URL + "/appointments/create",
        { date, startTime, endTime },
        { withCredentials: true }
      );

      if (res.status === 201) {
        toast({
          title: "Success",
          description: "Appointment created successfully",
        });

        push("/my-appointments");

        queryClient.invalidateQueries({
          queryKey: [queryKeys.availability(date)],
        });
        reset();
      }
    } catch (error) {
      console.error("Error creating appointment", error);
      toast({
        title: "Error",
        description: "Error creating appointment",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="my-auto min-h-96 flex flex-col">
      <div className="grow">
        <div className="m-auto">
          <h2 className="font-semibold text-xl mb-6">Appointment Summary</h2>

          <h5 className="block font-medium text-sm text-gray-500 mb-2 capitalize">
            Full Name:
          </h5>
          <p>{reservedFor}</p>
        </div>
        <div className="mt-4">
          <h5 className="block font-medium text-sm text-gray-500 mb-2 capitalize">
            Email:
          </h5>
          <p>{email}</p>
        </div>
        <div className="mt-4">
          <h5 className="block font-medium text-sm text-gray-500 mb-2 capitalize">
            Phone Number:
          </h5>
          <p>{phone}</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-4">
          <div>
            <h5 className="block font-medium text-sm text-gray-500 mb-2 capitalize">
              Date:
            </h5>
            <p>{format(date, "MMM dd yyyy")}</p>
          </div>
          <div>
            <h5 className="block font-medium text-sm text-gray-500 mb-2 capitalize">
              Time:
            </h5>
            <p>
              {format(
                new Date(new Date(date).toDateString() + " " + time),
                "hh:mm a"
              )}
            </p>
          </div>
          <div>
            <h5 className="block font-medium text-sm text-gray-500 mb-2 capitalize">
              Duration:
            </h5>
            <p>30 mins</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-4 mt-8 ">
        <Button variant="outline" onClick={prev}>
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span>Back</span>
        </Button>

        <Button
          className="next"
          onClick={addAppointmentHandler}
          disabled={isLoading}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
