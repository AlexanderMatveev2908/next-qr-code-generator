import type { FieldValues, Path, PathValue } from "react-hook-form";

export type InputT = "text" | "number";

export type FormFieldT<T extends FieldValues, K extends Path<T>> = {
  id: string;
  name: K;
  label: string;
  type: InputT;
  required: boolean;
  place: string;
};

export type CheckT = "radio" | "checkbox";

export type CheckFieldT<T extends FieldValues, K extends Path<T>> = {
  id: string;
  val: PathValue<T, K>;
  label: string;
  type: CheckT;
};
