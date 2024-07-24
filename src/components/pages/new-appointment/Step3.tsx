import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { useNewAppointment } from "@/stores";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useSteps } from "react-step-builder";

export const Step3 = () => {
  const { prev } = useSteps();
  const [isSet, setisSet] = useState(false);
  const [status, setStatus] = useState("");
  const { time, setTime, phone, setPhone, reservedFor, setReservedFor } =
    useNewAppointment();

  const addAppointmentHandler = () => {};

  return (
    <div>
      {status && (
        <div className="bg-primary text-center font-medium text-lg py-3 px-6 my-2 rounded-sm text-white">
          {status}
        </div>
      )}
      <div className="md:grid md:grid-cols-[4fr_1fr_4fr] md:gap-16">
        <div className="m-auto">
          <h3 className="text-gray-600 mb-8">
            Who is this appointment reserved for?
          </h3>
          <Input
            type="text"
            placeholder="Client Name"
            value={reservedFor}
            onChange={(e) => setReservedFor(e.target.value)}
          />
        </div>
        <h3 className="bg-primary rounded-[50%] py-5 px-4 text-white m-auto">
          And
        </h3>
        <div className="m-auto">
          <h3 className="title">What is his phone number?</h3>
          <Input
            type="text"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8 md:mt-16">
        <Button variant="outline" onClick={prev}>
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span>Back</span>
        </Button>
        {isSet && (
          <Button className="next" onClick={addAppointmentHandler}>
            Create new Appointment
          </Button>
        )}
      </div>
    </div>
  );
};
