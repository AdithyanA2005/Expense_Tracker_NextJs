import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { EModifierKey } from "@/lib/enums";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function checkIsMobile(): boolean {
  try {
    // @ts-ignore
    return navigator?.userAgentData?.mobile || false;
  } catch (e: any) {
    return false;
  }
}

export function getModifierKey(): EModifierKey {
  // @ts-ignore
  if (navigator?.userAgentData?.platform || navigator?.platform) {
    if (
      // @ts-ignore
      navigator.userAgentData.platform.indexOf("Mac") === 0 ||
      navigator.platform === "iPhone"
    ) {
      return EModifierKey.Mac;
    } else if (
      // @ts-ignore
      navigator.userAgentData.platform.indexOf("Win") === 0 ||
      navigator.platform === "Win32"
    ) {
      return EModifierKey.Windows;
    }
  }
  return EModifierKey.Other;
}

export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
