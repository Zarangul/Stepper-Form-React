import React from "react";

export const NextButton = ({
    onNext,
    nextTitle='Next',
    nextType='button'
}) => {
  return (
 
      <button type={nextType} onClick={onNext}>{nextTitle}</button>

  );
};