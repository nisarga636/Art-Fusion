import { VariantProps, cva } from "class-variance-authority";

export type ButtonProps = VariantProps<typeof buttonStyles>;

export const buttonStyles = cva(
  "flex items-center justify-center shadow-lg rounded-lg font-semibold text-center",
  {
    variants: {
      intent: {
        primary: "bg-blue-700 text-black hover:text-white",
        secondary: "bg-gray-300 text-black hover:bg-blue-700 hover:text-white",
      },
      variant: {
        solid: "text-white",
        outline: "",
      },
      size: {
        lg: "px-8 py-2 text-lg",
        md: "px-5 py-2 text-md",
        sm: "px-3 py-2 text-sm",
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        variant: "outline",
        className:
          "bg-transparent text-blue-700 border-blue-700 border-2 hover:bg-primary hover:text-white hover:border-0",
      },
      {
        intent: "secondary",
        variant: "outline",
        className:
          "bg-transparent text-secondary border-secondary border-2 hover:bg-yellow-100",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "sm",
    },
  }
);

export interface ButtonExtendedProps extends ButtonProps {
  children: string;
  leftIcon?: React.ReactNode;
}

export default function Button({
  intent,
  size,
  variant,
  children,
  leftIcon,
  ...props
}: ButtonExtendedProps) {
  return (
    <button className={buttonStyles({ intent, size, variant })} {...props}>
      <div className="pr-2">{leftIcon}</div>
      {children}
    </button>
  );
}
