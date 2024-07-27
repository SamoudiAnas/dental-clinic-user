import { Steps } from "react-step-builder";
import { Step1 } from "./step1";
import { Step2 } from "./step2";
import { Step3 } from "./step3";
import { Step4 } from "./step4";

export const StepsContainer = () => {
  return (
    <Steps>
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
    </Steps>
  );
};
