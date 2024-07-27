import { useState } from "react";
import { useNewAppointment } from "@/stores";
import { useSteps } from "react-step-builder";

import { Button } from "@/components/common/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/constants/queryKeys";
import { getAvailabilityByDate } from "@/queries/availability.query";
import { cn } from "@/utils";

export function Step2() {
  const { prev, next } = useSteps();
  const { time, setTime, date } = useNewAppointment();
  const [unreservedHours, setUnreservedHours] = useState([]);

  const { data, error, isLoading } = useQuery({
    queryKey: [queryKeys.availability(date)],
    queryFn: () => getAvailabilityByDate(date),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return (
    <div className="my-auto">
      <h2 className="font-semibold text-xl mb-6">Select a time slot:</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 flex-wrap">
        {data?.slots?.map((hour) => (
          <button
            key={hour}
            className={cn(
              "p-4 px-6 rounded-lg border font-semibold text-center text-gray-600",
              "hover:bg-primary hover:text-white hover:shadow-xl hover:border-primary",
              time === hour && "bg-primary text-white shadow-xl border-primary"
            )}
            onClick={() => setTime(hour)}
          >
            {hour}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-end gap-4 mt-8 ">
        <Button variant="outline" onClick={prev}>
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span>Back</span>
        </Button>

        <Button onClick={next} disabled={!time}>
          <span>Next</span>
          <ArrowRight className="w-6 h-6 ml-2" />
        </Button>
      </div>
    </div>
  );
}
