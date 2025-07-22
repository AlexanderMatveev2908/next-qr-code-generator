import type { FieldValues, Path } from "react-hook-form";

export type InputT = "text" | "number";

export type FormFieldT<T extends FieldValues, K extends Path<T>> = {
  name: K;
  label: string;
  id: string;
  type?: InputT;
  place?: string;
};
