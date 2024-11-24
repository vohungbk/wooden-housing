import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className, ...props }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className='mb-1 text-sm font-medium text-gray-700'>
          {label}
        </label>
      )}
      <input
        className={`rounded-lg border bg-[#F8F8F8] p-[15px] text-[18px] leading-[23px] text-[#929292] ${error ? "border-red-500" : "border-[#F8F8F8]"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        {...props}
      />
      {error && <span className='mt-1 text-sm text-red-500'>{error}</span>}
    </div>
  );
};

export default Input;
