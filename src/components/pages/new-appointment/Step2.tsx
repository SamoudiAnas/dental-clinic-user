import { useState } from "react";
import { useNewAppointment } from "@/stores";
import { useSteps } from "react-step-builder";

import { Button } from "@/components/common/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function Step2() {
  const { prev, next } = useSteps();
  const { time, setTime } = useNewAppointment();
  const [unreservedHours, setUnreservedHours] = useState([]);

  return (
    <div className="md:grid md:grid-cols-2 md:gap-16">
      <div className="grid grid-cols-2 gap-8">
        {unreservedHours?.map((hour) => (
          <div key={hour} className="hour" onClick={() => setTime(hour)}>
            {hour}
          </div>
        ))}
      </div>
      <div className="my-auto text-center">
        <h2 className="text-gray-600 mb-8">
          Please select the suitable hour for you
        </h2>
        {time ? (
          <div className="italic text-lg mb-8">
            You selected : <span className="font-semibold">{time}</span>
          </div>
        ) : null}

        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" onClick={prev}>
            <ArrowLeft className="w-6 h-6 mr-2" />
            <span>Back</span>
          </Button>
          {time ? (
            <Button onClick={next}>
              <span>Next</span>
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
