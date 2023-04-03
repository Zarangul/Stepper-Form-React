import React from "react";

export const PrevButton = ({
    onPrev,
    prevTitle='Prev',
    prevType='button',
}) => {
  return (
  
      <button type={prevType} onClick={onPrev}>{prevTitle}</button>

  );
};