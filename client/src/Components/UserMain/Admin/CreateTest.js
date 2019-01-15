import React, { Fragment } from "react";
import Step1 from "./CreateTestStepper/Step1";
import Step2 from "./CreateTestStepper/Step2";
import Step3 from "./CreateTestStepper/Step3";
import { Stepper, Step, StepLabel } from "@material-ui/core";
export default props => {
  const { state, updateSelection, getQuestion } = props;
  let step = "";

  switch (state.step) {
    case 0:
      step = (
        <Step1
          updateSelection={updateSelection}
          getQuestion={getQuestion}
          state={state}
        />
      );
      break;
    case 1:
      step = (
        <Step2
          updateSelection={updateSelection}
          getQuestion={getQuestion}
          state={state}
        />
      );
     
      break;
      case 2:
      step=(
<Step3
          updateSelection={updateSelection}
          getQuestion={getQuestion}
          state={state}
        />

      )
      break;
    default:
      step = (
        <Step3
          updateSelection={updateSelection}
          getQuestion={getQuestion}
          state={state}
        />
      );
      break;
  }
  return (
    <Fragment>
      <Stepper
        style={{ background: "transparent" }}
        activeStep={state.step}
        alternativeLabel
      >
        <Step key={1}>
          <StepLabel>Select Questions</StepLabel>
        </Step>
        <Step key={2}>
          <StepLabel>Test Details</StepLabel>
        </Step>
        <Step key={3}>
          <StepLabel>Preview</StepLabel>
        </Step>
        <Step key={4}>
          <StepLabel>Finish</StepLabel>
        </Step>
      </Stepper>
      {step}
    </Fragment>
  );
};
