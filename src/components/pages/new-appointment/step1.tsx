import { Calendar } from "@/components/common/calendar";
import { Button } from "@/components/common/button";
import { useSteps } from "react-step-builder";
import { useNewAppointment } from "@/stores";
import { ArrowRight } from "lucide-react";
export const Step1 = () => {
  const { next } = useSteps();
  const { date, setDate } = useNewAppointment();

  const handleDisabledDates = (date: Date) => {
    // exclude weekends and past dates
    return date < new Date() || date.getDay() === 0 || date.getDay() === 6;
  };

  return (
    <div className="my-auto">
      <h2 className="font-semibold text-xl mb-6">Select a day:</h2>
      <Calendar
        mode="single"
        disabled={handleDisabledDates}
        selected={new Date(date) ?? undefined}
        onSelect={(date) => {
          if (!date) return;
          setDate(date);
        }}
      />

      <div className="flex justify-end mt-8">
        <Button onClick={next} disabled={!date}>
          <span>Next</span>
          <ArrowRight className="w-6 h-6 ml-2" />
        </Button>
      </div>
    </div>
  );
};
