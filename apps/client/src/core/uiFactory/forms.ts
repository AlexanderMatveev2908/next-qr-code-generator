import {
  CheckFieldT,
  CheckT,
  FormFieldT,
  InputT,
} from "@/common/types/uiFactory";
import { capt } from "@shared/first/lib/formatters.js";
import { FieldValues, Path, PathValue } from "react-hook-form";
import { v4 } from "uuid";

export class FormFieldsGen<T extends FieldValues, K extends Path<T>> {
  private preFillGeneric(name: K, opt: { label?: string; required?: boolean }) {
    return {
      id: v4(),
      label: capt(opt.label ?? name),
      required: !!opt.required,
    };
  }

  public genFieldTxt(
    name: K,
    opt: {
      label?: string;
      type?: InputT;
      place?: string;
      required?: boolean;
    }
  ): FormFieldT<T, K> {
    return {
      ...this.preFillGeneric(name, {
        label: opt.label,
        required: opt.required,
      }),
      name,
      type: opt.type ?? "text",
      place: (opt.place ?? opt.label ?? name) + "...",
    };
  }

  public genFieldCheck(opt: {
    val: PathValue<T, K>;
    type?: CheckT;
    label?: string;
  }): CheckFieldT<T, K> {
    return {
      id: v4(),
      label: capt(opt.label ?? opt.val),
      val: opt.val,
      type: opt.type ?? "checkbox",
    };
  }
}
