import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { useNewAppointment } from "@/stores";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useSteps } from "react-step-builder";

export const Step3 = () => {
  const { prev, next } = useSteps();
  const [isSet, setisSet] = useState(true);
  const [status, setStatus] = useState("");
  const { time, setTime, email, setEmail, phone, setPhone, name, setName } =
    useNewAppointment();

  return (
    <div className="my-auto min-h-96 flex flex-col">
      <div className="grow">
        <div className="m-auto">
          <h2 className="font-semibold text-xl mb-6">Appointment Details</h2>

          <label
            htmlFor="full-name"
            className="block font-medium text-base text-gray-700 mb-2"
          >
            Full Name *
          </label>
          <Input
            type="text"
            placeholder="John Doe"
            name="full-name"
            id="full-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="email"
            className="block font-medium text-base text-gray-700 mb-2"
          >
            Email *
          </label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="+1 123 456 7890"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="phone-number"
            className="block font-medium text-base text-gray-700 mb-2"
          >
            Phone Number *
          </label>
          <Input
            type="text"
            name="phone-number"
            id="phone-number"
            placeholder="+1 123 456 7890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center justify-end gap-4 mt-8 ">
        <Button variant="outline" onClick={prev}>
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span>Back</span>
        </Button>

        <Button className="next" onClick={next} disabled={!isSet}>
          Next
        </Button>
      </div>
    </div>
  );
};
