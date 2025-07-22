import type { FieldValues, Path } from "react-hook-form";

export type InputT = "text" | "number";

export type FormFieldT<T extends FieldValues, K extends Path<T>> = {
  id: string;
  name: K;
  label: string;
  type: InputT;
  required: boolean;
  place: string;
};
