import { StepsContainer } from "@/components/pages/new-appointment/StepsContainer";
import CheckingBoxes from "@root/public/svgs/checking_boxes.svg";
import BasicLayout from "@/layouts/basic-layout";
import React from "react";
import { StepsProvider } from "react-step-builder";

export default function NewAppointments() {
  return (
    <BasicLayout>
      <div className="container py-8 md:py-16 w-full overflow-x-hidden  flex flex-col justify-center">
        <h2 className="text-3xl md:text-text-5xl font-bold text-secondary mx-auto mt-4 mb-16 text-center">
          Make a new appointment
        </h2>
        <div className="md:grid md:grid-cols-2 md:gap-16 container max-w-screen-lg items-center">
          <CheckingBoxes className="w-full h-auto" />
          <div className=" flex flex-col rounded-xl p-8 border shadow-xl w-full">
            <StepsProvider>
              <StepsContainer />
            </StepsProvider>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}
