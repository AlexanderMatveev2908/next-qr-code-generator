import { UnwrappedResApiT } from "@/common/types/api";
import { __cg } from "@shared/first/lib/logger.js";
import { isStr } from "@shared/first/lib/validators.js";
import { useRef } from "react";
import { useDispatch } from "react-redux";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Params<T extends Record<string, any> | void> = {
  hideErr?: boolean;
  showToast?: boolean;
  throwErr?: boolean;

  isSuccess?: boolean;
  isError?: boolean;
  error?: any;
  data?: UnwrappedResApiT<T>;
};

export const useWrapQuery = <T extends Record<string, any> | void>({
  showToast = false,
  hideErr,
  throwErr,
  isSuccess,
  isError,
  error,
  data,
}: Params<T>) => {
  const dispatch = useDispatch();
  const { handleErr } = useHandleErrAPI();
  const hasRun = useRef(false);

  const { isHydrated } = useListenHydration();

  const handleQuery = useCallback(() => {
    if (hasRun.current) return;

    if (isSuccess || isError) hasRun.current = true;

    if (isSuccess) {
      __cg("wrapper query", data);

      if (showToast && !(data?.blob instanceof Blob)) {
        dispatch(
          toastSlice.actions.open({
            msg: isStr(data?.msg) ? data!.msg : "Things went good ✅",
            type: ApiEventType.SUCCESS,
          })
        );
      }
    } else if (isError) {
      handleErr({ err: error, hideErr, throwErr });
    }
  }, [
    handleErr,
    dispatch,
    showToast,
    hideErr,
    isSuccess,
    isError,
    error,
    data,
    throwErr,
  ]);

  useEffect(() => {
    if (!isHydrated) return;
    handleQuery();
  }, [handleQuery, isHydrated]);

  const triggerRef = useCallback(() => (hasRun.current = false), []);

  return {
    triggerRef,
  };
};
