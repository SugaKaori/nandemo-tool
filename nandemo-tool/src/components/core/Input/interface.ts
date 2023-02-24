import { ChangeEventHandler } from "react";
import { CommonProps } from "../interface";

export interface InputProps extends CommonProps {
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  hasError?: boolean;
  disabled?: boolean;
  label?: string;
  unit?: string;
}
