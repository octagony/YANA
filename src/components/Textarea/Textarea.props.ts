import { ChangeEvent, KeyboardEvent, ReactNode } from "react";

export interface ITextarea {
  value: string;
  changeFunc: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  keyDownFunc: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  editMode: boolean;
  markdownMode: boolean;
}
