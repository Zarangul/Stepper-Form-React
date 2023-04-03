import React from "react";
import { useSelector } from "react-redux";

import { Step1 } from "../Form/Step1";
import { Step2 } from "../Form/Step2";
import { Step3 } from "../Form/Step3";
import SubmitData from "../Form/SubmitData";

export const Control = () => {
  const currentStep = useSelector((state) => state.np.step);
  switch (currentStep) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <SubmitData />;

    default:
      return <Step1 />;
  }
};
