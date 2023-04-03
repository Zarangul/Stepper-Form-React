import React from "react";

export const Buttons = ({
    onPrev,
    onNext,
    prevTitle='Prev',
    nextTitle='Next',
    prevType='button',
    nextType='button'
}) => {
  return (
    <div className="buttons">
      <button type={prevType} onClick={onPrev}>{prevTitle}</button>
      <button type={nextType} onClick={onNext}>{nextTitle}</button>
    </div>
  );
};
