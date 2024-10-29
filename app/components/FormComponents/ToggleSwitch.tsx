"use client";

import React, { FC, useState } from "react";

interface ToggleSwitchProps {
  check?: boolean;
}

export const ToggleSwitch: FC<ToggleSwitchProps> = ({}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <button
      type='button'
      role='switch'
      aria-checked={isChecked}
      data-state={isChecked ? "checked" : "unchecked"}
      value='on'
      onClick={handleToggle}
      className={`focus-visible:ring-ring focus-visible:ring-offset-background peer inline-flex h-4 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
        isChecked ? "bg-[#E35C3F]" : "bg-[#E5E5E5]"
      }`}
    >
      <span
        data-state={isChecked ? "checked" : "unchecked"}
        className={`pointer-events-none block h-3 w-3 rounded-full bg-white shadow-lg ring-0 transition-transform ${
          isChecked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
};
