import clsx from "clsx";
import React, { HTMLInputTypeAttribute } from "react";

interface TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: HTMLInputTypeAttribute;
  name?: string;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder = "first name",
  value,
  onChange,
  error = '',
  type = "text",
  name,
  className = "",
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="text-xs font-bold text-gray-300 dark:text-white block leading-[1.25]">
          {label}
        </label>
      )}

      <div
        className={clsx(
          "h-[40px] relative mt-2 flex items-center border rounded px-4 py-2 transition-colors text-sm",
          error
            ? "border-destructive text-destructive"
            : "border-gray-200 dark:border-[#414552] text-base-dark dark:text-white",
          "bg-white dark:bg-gray-500",
          //"focus-within:border-primary focus-within:ring-1 focus-within:ring-primary",
          className
        )}
      >
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={clsx(
            "leading-[23px] text-base-dark dark:text-white w-full bg-transparent focus:outline-none placeholder-base-dark/25 dark:placeholder-white/25",
            error && "text-destructive placeholder-destructive"
          )}
        />
        {error && (
          <span className="absolute text-[13px] font-medium leading-[23px] right-4 text-destructive">{error}</span>
        )}
      </div>
    </div>
  );
};

export default TextInput;
