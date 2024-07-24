import { Steps } from "react-step-builder";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";

export const StepsContainer = () => {
  return (
    <Steps>
      <Step1 />
      <Step2 />
      <Step3 />
    </Steps>
  );
};
