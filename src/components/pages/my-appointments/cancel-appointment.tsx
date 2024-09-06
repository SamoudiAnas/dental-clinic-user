import { Button } from "@/components/common/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/common/dialog";
import { API_URL } from "@/constants/api";
import { queryKeys } from "@/constants/queryKeys";
import { toast } from "@/hooks/use-toast";
import { queryClient } from "@/pages/_app";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useState } from "react";

interface CancelAppointmentProps {
  id: number;
}

export const CancelAppointment = ({ id }: CancelAppointmentProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCancel = async () => {
    try {
      setIsLoading(true);

      const res = await axios.delete(API_URL + `/appointments/${id}`, {
        withCredentials: true,
      });

      if (res.status === 200) {
        toast({
          title: "Success",
          description: "Appointment cancelled successfully",
        });
        queryClient.invalidateQueries({
          queryKey: [queryKeys.appointments],
        });
      }
    } catch (error) {
      console.error("Error cancelling appointment", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outlined-destructive">
          Cancel
        </Button>
      </DialogTrigger>
      <DialogContent className=" transform overflow-hidden rounded-lg bg-white text-left transition-all">
        <div className="bg-white ">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg
                className="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3
                className="text-lg font-semibold leading-6 text-gray-900"
                id="modal-title"
              >
                Cancel Appointment
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Are you sure you want to cancel this appointment? This action
                  cannot be undone.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 mt-8 sm:flex sm:flex-row-reverse gap-4">
          <DialogClose asChild>
            <Button
              variant="destructive"
              disabled={isLoading}
              fullWidth
              onClick={handleCancel}
            >
              {isLoading && <Loader2 className="h-5 w-5 animate-spin" />}
              Cancel Appointment
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="outlined" fullWidth>
              Close
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
