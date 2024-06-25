import { Dispatch } from "react";
import RadioButton from "./RadioButton";

type RadioButtonProps = {
  timeInterval: string;
  setTimeInterval: Dispatch<React.SetStateAction<string>>;
};

const RadioButtons = ({ timeInterval, setTimeInterval }: RadioButtonProps) => {
  const options = {
    morning: { value: "06h00 às 12h00", label: "Manhã" },
    afternoon: { value: "12h01 às 18h00", label: "Tarde" },
    night: { value: "18h01 às 23h00", label: "Noite" },
  };

  return (
    <>
      {Object.values(options).map((option) => (
        <RadioButton
          key={option.label}
          label={option.label}
          valueKey={option.value}
          name="schedule"
          selectedOption={timeInterval}
          onChange={() => {
            setTimeInterval(option.value);
          }}
        >
          <span>{option.value.replace("h", ":")}</span>
        </RadioButton>
      ))}
    </>
  );
};

export default RadioButtons;
