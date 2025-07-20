/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { __cg } from "@shared/first/lib/logger";
import {
  MutationActionCreatorResult,
  MutationDefinition,
} from "@reduxjs/toolkit/query";

export const useWrapMutation = () => {
  const dispatch = useDispatch();

  const { handleErr } = useHandleErrAPI();

  const wrapMutation = useCallback(
    async <T extends MutationDefinition<any, any, any, any>>({
      cbAPI,
      showToast = true,
      hideErr = false,
    }: {
      cbAPI: () => MutationActionCreatorResult<T>;
      showToast?: boolean;
      hideErr?: boolean;
    }) => {
      try {
        const data = await cbAPI().unwrap();

        __cg("wrapper mutation", data);

        if (showToast)
          dispatch(
            toastSlice.actions.open({
              msg: isStr(data?.msg) ? data.msg : "Things went good ✅",
              type: ApiEventType.SUCCESS,
            })
          );

        return data;
      } catch (err) {
        handleErr({ err: err as ErrAPI<T>, hideErr });
      }
    },
    [handleErr, dispatch]
  );

  return { wrapMutation };
};
