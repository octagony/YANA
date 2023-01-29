import { ReactNode } from "react";

export interface IButton {
  children: ReactNode;
  noteAction: () => void;
  className?: string;
}
