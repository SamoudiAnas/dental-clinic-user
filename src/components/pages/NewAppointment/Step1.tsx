import { Calendar } from "@/components/common/Calendar";
import { Button } from "@/components/common/Button";
import { useSteps } from "react-step-builder";
import { useNewAppointment } from "@/stores";
import { ArrowRight } from "lucide-react";
import { format } from "date-fns";

export const Step1 = () => {
  const { next } = useSteps();
  const { date, setDate } = useNewAppointment();

  return (
    <div className="md:grid md:grid-cols-2 md:gap-16">
      <div className="mx-auto">
        <Calendar
          mode="single"
          selected={date ?? undefined}
          onSelect={(date) => {
            if (!date) return;
            setDate(date);
          }}
        />
      </div>
      <div className="my-auto">
        <h2 className="font-bold font-3xl mb-8">
          Please select a day from the calendar
        </h2>
        {date && (
          <div className="italic text-xl mb-8">
            You selected :{" "}
            <span className="font-semibold">{format(date, "LL dd yyyy")}</span>
          </div>
        )}
        {date ? (
          <Button onClick={next}>
            <span>Next</span>
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
        ) : null}
      </div>
    </div>
  );
};
