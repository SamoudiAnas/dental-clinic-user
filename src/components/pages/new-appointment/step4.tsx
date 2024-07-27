import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { useNewAppointment } from "@/stores";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useSteps } from "react-step-builder";

export const Step4 = () => {
  const { prev } = useSteps();
  const [isSet, setisSet] = useState(true);
  const [status, setStatus] = useState("");
  const {
    time,
    date,
    phone,
    setPhone,
    name: reservedFor,
    setName: setReservedFor,
  } = useNewAppointment();

  const addAppointmentHandler = () => {};

  return (
    <div className="my-auto min-h-96 flex flex-col">
      <div className="grow">
        <div className="m-auto">
          <h2 className="font-semibold text-xl mb-6">Appointment Summary</h2>

          <h5 className="block font-medium text-base text-gray-400 mb-2 uppercase">
            Full Name
          </h5>
          <p className="">{reservedFor}</p>
        </div>
        <div className="mt-4">
          <h5 className="block font-medium text-base text-gray-400 mb-2 uppercase">
            Email
          </h5>
          <p className="">{phone}</p>
        </div>
        <div className="mt-4">
          <h5 className="block font-medium text-base text-gray-400 mb-2 uppercase">
            Phone Number
          </h5>
          <p className="">{phone}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-4">
          <div className="">
            <h5 className="block font-medium text-base text-gray-400 mb-2 uppercase">
              Date
            </h5>
            <p className="">{format(date, "MMM dd yyyy")}</p>
          </div>
          <div className="">
            <h5 className="block font-medium text-base text-gray-400 mb-2 uppercase">
              Time
            </h5>
            <p className="">{time}</p>
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
          disabled={!isSet}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
