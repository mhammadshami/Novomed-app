import React from "react";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "destructive";
type Size = "lg" | "sm";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const baseStyles = "rounded-full font-bold transition-colors duration-200";

const variants = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary: "bg-secondary text-primary font-bold hover:opacity-70",
  destructive: "bg-destructive text-white hover:bg-destructive-hover",
};

const sizes = {
  lg: "px-6 py-3 text-sm",
  sm: "px-4 py-2 text-xs",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "lg",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
};

export default Button;
