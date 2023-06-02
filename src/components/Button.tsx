import { VariantProps, cva } from "class-variance-authority";

export const buttonStyles = cva(
  "flex items-center justify-center shadow-lg rounded-lg font-semibold text-center",
  {
    variants: {
      intent: {
        primary: "bg-blue-700 text-white hover:bg-blue-600",
        secondary: "bg-gray-300 text-black hover:bg-blue-700 hover:text-white",
      },
      variant: {
        outline_primary: "",
        outline_secondary: "",
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
        variant: "outline_primary",
        className:
          "bg-transparent text-primary border-blue-700 border-2 hover:bg-primary hover:text-white hover:border-0",
      },
      {
        intent: "secondary",
        variant: "outline_secondary",
        className:
          "bg-transparent text-secondary border-secondary border-2 hover:bg-blue-700 hover:border-0",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "sm",
    },
  }
);

export type ButtonProps = VariantProps<typeof buttonStyles>;

export interface ButtonExtendedProps extends ButtonProps {
  children: string;
  leftIcon?: React.ReactNode;
}

export default function Button({
  intent = "primary",
  size = "sm",
  variant,
  children,
  leftIcon,
  ...props
}: ButtonExtendedProps) {
  const className = buttonStyles({ intent, size, variant });

  return (
    <button className={className} {...props}>
      {leftIcon && <div className="pr-2">{leftIcon}</div>}
      {children}
    </button>
  );
}
