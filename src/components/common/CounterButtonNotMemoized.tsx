import React from "react";
import MainButton from "./MainButton";

interface CounterButtonProps {
  onIncrement: () => void;
}

const CounterButton: React.FC<CounterButtonProps> = ({ onIncrement }) => {
  console.log("CounterButton with useMemo/useCallback rendered");

  return (
    <MainButton
      action={onIncrement}
      text="Sell Item"
      size="small"
      className="mt-4"
    />
  );
};

export default CounterButton;