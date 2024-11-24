import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const getOrdinalSuffix = (num: number) => {
  const j = num % 10;
  const k = num % 100;
  if (j === 1 && k !== 11) {
    return `${num}st`;
  }
  if (j === 2 && k !== 12) {
    return `${num}nd`;
  }
  if (j === 3 && k !== 13) {
    return `${num}rd`;
  }
  return `${num}th`;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
