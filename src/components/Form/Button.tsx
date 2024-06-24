import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Variants = {
  filled: ButtonHTMLAttributes<HTMLButtonElement>["className"];
  outlined: ButtonHTMLAttributes<HTMLButtonElement>["className"];
};

const variantClasses: Variants = {
  filled: "bg-yellow",
  outlined: "bg-inherit border-light-grey border-2",
};

type Variant = keyof Variants;

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  variant: Variant;
}
const Button = ({ variant, children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`rounded-md font-bold text-black py-3 w-full max-w-xs uppercase ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
