import { StepsContainer } from "@/components/pages/NewAppointment/StepsContainer";
import React from "react";
import { StepsProvider } from "react-step-builder";

export default function NewAppointments() {
  return (
    <div className="container py-8 md:py-16 w-full overflow-x-hidden">
      <h2 className="text-3xl md:text-text-5xl font-bold text-secondary mx-auto mt-4 mb-16 text-center">
        Make a new appointment
      </h2>
      <StepsProvider>
        <StepsContainer />
      </StepsProvider>
    </div>
  );
}
