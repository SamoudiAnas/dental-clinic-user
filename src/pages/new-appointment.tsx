import { StepsContainer } from "@/components/pages/new-appointment/StepsContainer";
import BasicLayout from "@/layouts/basic-layout";
import React from "react";
import { StepsProvider } from "react-step-builder";

export default function NewAppointments() {
  return (
    <BasicLayout>
      <div className="container py-8 md:py-16 w-full overflow-x-hidden pt-32 md:pt-32">
        <h2 className="text-3xl md:text-text-5xl font-bold text-secondary mx-auto mt-4 mb-16 text-center">
          Make a new appointment
        </h2>
        <StepsProvider>
          <StepsContainer />
        </StepsProvider>
      </div>
    </BasicLayout>
  );
}
