import { VariantProps, cva } from "class-variance-authority";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineExclamationCircle,
} from "react-icons/ai";

export type AlertProps = VariantProps<typeof AlertBoxStyle>;

export const AlertBoxStyle = cva(
  "flex items-center justify-center bg-white shadow-lg rounded-lg py-2 w-fit px-3",
  {
    variants: {
      varient: {
        success: "bg-green-600 border-2 border-green-600 text-white",
        error: "bg-red-500 border-2 border-red-500 text-white",
        warning: "bg-yellow-600 border-2 border-yellow-600 text-white",
      },
    },
    defaultVariants: {
      varient: "success",
    },
  }
);

interface ButtonExtendedProps extends AlertProps {
  children: string;
}

export default function Alert({
  children,
  varient,
  ...props
}: ButtonExtendedProps) {
  return (
    <div className={AlertBoxStyle({ varient })} {...props}>
      <div className="px-2 text-lg">
        {varient == "success" && <AiOutlineCheckCircle />}
        {varient == "warning" && <AiOutlineExclamationCircle />}
        {varient == "error" && <AiOutlineCloseCircle />}
      </div>
      {children}
    </div>
  );
}
