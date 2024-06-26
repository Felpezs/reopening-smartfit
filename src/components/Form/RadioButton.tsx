import { InputHTMLAttributes, PropsWithChildren, useId } from "react";

interface RadioButtonProps
  extends InputHTMLAttributes<HTMLInputElement>,
    PropsWithChildren {
  label: string;
  selectedOption: string
  valueKey: string;
}

const RadioButton = ({
  label,
  valueKey,
  selectedOption,
  children,
  ...props
}: RadioButtonProps) => {
  const id = useId();

  return (
    <div className="border-b-2 border-light-grey border-opacity-25 py-2 flex items-center justify-between">
      <div>
        <input
          {...props}
          type="radio"
          id={id}
          value={valueKey}
          className="scale-150 mr-2"
          checked={selectedOption == valueKey}
        />
        <label htmlFor={id}>{label}</label>
      </div>
      {children}
    </div>
  );
};

export default RadioButton;
