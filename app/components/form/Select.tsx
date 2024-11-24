import { cn } from "@/app/shared/utils";
import React, { FC } from "react";
import ReactSelect, { Props, StylesConfig } from "react-select";

type OptionType = {
  label: string;
  value: string | number;
};

const customStyles: StylesConfig<OptionType> = {
  control: (base, state) => ({
    ...base,
    borderColor: state.isFocused ? "rgba(215, 83, 55, 1)" : base.borderColor,
    boxShadow: "none",
    minHeight: "33px",
    height: "100%",
    "&:hover": {
      borderColor: "rgba(215, 83, 55, 1)",
    },
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  indicatorsContainer: (base) => ({
    ...base,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: "6px 0",
  }),
};

interface SelectProps extends Props<OptionType> {
  className?: string;
}

export const Select: FC<SelectProps> = ({
  options,
  value,
  onChange,
  className,
  ...props
}) => {
  return (
    <ReactSelect
      styles={customStyles}
      options={options}
      value={value}
      onChange={onChange}
      {...props}
      className={cn(className)}
    />
  );
};
