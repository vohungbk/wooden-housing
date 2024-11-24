"use client";

import { FC } from "react";

interface ToggleSwitchProps {
  check?: boolean;
  toggleChecked?: (value: boolean) => void;
}

export const ToggleSwitch: FC<ToggleSwitchProps> = ({
  check,
  toggleChecked,
}) => {
  const handleToggle = () => {
    toggleChecked?.(!check);
  };

  return (
    <button
      type='button'
      role='switch'
      aria-checked={check}
      data-state={check ? "checked" : "unchecked"}
      value='on'
      onClick={handleToggle}
      className={`focus-visible:ring-ring focus-visible:ring-offset-background peer inline-flex h-4 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
        check ? "bg-[#E35C3F]" : "bg-[#E5E5E5]"
      }`}
    >
      <span
        data-state={check ? "checked" : "unchecked"}
        className={`pointer-events-none block h-3 w-3 rounded-full bg-white shadow-lg ring-0 transition-transform ${
          check ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
};
