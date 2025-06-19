import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import ArrowDown from "@/components/icons/ArrowDownIcon";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { Check, ChevronDown } from "lucide-react";
import React from "react";

type Option = {
  label: string;
  value: string;
};

interface SelectInputProps {
  label?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  onChange,
  value,
}) => {
  const selected = options.find((opt) => opt.value === value);

  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="text-sm font-medium text-gray-500 dark:text-gray-300">
          {label}
        </label>
      )}

      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <ListboxButton
            className={clsx(
              "relative w-full cursor-pointer rounded border px-4 py-2 text-start text-sm focus:outline-none",
              "text-base-dark dark:text-gray-300",
              "bg-white dark:bg-gray-500",
              "border-gray-300 dark:border-gray-500",
              "hover:border-primary focus-visible:ring-2 focus-visible:ring-primary",
              value && "border-primary"
            )}
          >
            <span className="block truncate text-[13px] text-base-dark dark:text-white leading-[23px] font-medium">{selected?.label}</span>
            <span className="absolute inset-y-0 flex items-center pointer-events-none right-3">
              {/* <ChevronDown size={16} /> */}
              <ArrowDownIcon  />
            </span>
          </ListboxButton>

          <ListboxOptions className="absolute z-20 w-full py-1 mt-[7px] overflow-auto bg-white rounded-md shadow-lg max-h-60 dark:bg-gray-900 ring-1 ring-black/10 focus:outline-none">
            {options.map((option) => (
              <ListboxOption
                key={option.value}
                value={option.value}
                className={({ active }) =>
                  clsx(
                    "relative cursor-pointer select-none py-2 pl-10 pr-4",
                    active
                      ? "bg-primary text-white"
                      : "text-base-dark dark:text-gray-300"
                  )
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={clsx(
                        "block truncate",
                        selected ? "font-semibold" : "font-normal"
                      )}
                    >
                      {option.label}
                    </span>
                    {selected && (
                      <span className="absolute left-3 top-2.5">
                        <Check size={16} className="text-primary" />
                      </span>
                    )}
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
};

export default SelectInput;
