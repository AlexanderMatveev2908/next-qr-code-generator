import { FormFieldT, InputT } from "@/common/types/uiFactory";
import { capt } from "@shared/first/lib/formatters.js";
import { FieldValues, Path } from "react-hook-form";
import { v4 } from "uuid";

export class FormFieldsGen<T extends FieldValues, K extends Path<T>> {
  public genFieldTxt(
    name: K,
    opt: {
      label?: string;
      type?: InputT;
      place?: string;
    }
  ): FormFieldT<T, K> {
    return {
      id: v4(),
      name,
      label: capt(opt.label ?? name),
      type: opt.type ?? "text",
      place: capt(opt.place ?? opt.label ?? name) + "...",
    };
  }
}
