import { ResponseType } from "axios";
import { instanceAxs } from "./axiosInstance";
import { ErrApiT, ResApiT } from "@/common/types/api";
import { __cg } from "@shared/first/lib/logger.js";

/* eslint-disable @typescript-eslint/no-explicit-any */
type ArgType<T> = {
  url: string;
  method: string;
  data?: T;
  params?: string;
  responseType?: ResponseType;
};

type ErrResT<K> = { error: ErrApiT<K> & { config: Record<string, any> } };

export const baseQueryAxs = async <T, K>({
  url,
  method,
  data,
  params,
  responseType,
}: ArgType<T>): Promise<ResApiT<K> | ErrResT<K>> => {
  try {
    const { data: resData, status } = await instanceAxs({
      url,
      method,
      data,
      params,
      responseType,
    });

    return (
      responseType === "blob" && resData instanceof Blob
        ? {
            data: {
              blob: resData,
              status,
            },
          }
        : {
            data: {
              ...resData,
              status,
            },
          }
    ) as ResApiT<K>;
  } catch (err: any) {
    const { response } = err ?? {};
    let errData: any = response?.data ?? {};

    if (errData instanceof Blob && errData.type === "application/json") {
      try {
        const text = await errData.text();
        errData = JSON.parse(text);
      } catch (parseErr: any) {
        __cg("Failed parse blob error", parseErr);
      }
    }

    return {
      error: {
        config: {
          url: instanceAxs.defaults.baseURL + url,
          params,
          responseType,
          data: !(data instanceof FormData) ? data : null,
        },

        data: {
          ...errData,
          msg:
            errData?.msg ??
            errData?.message ??
            "A wild Snorlax is fast asleep blocking the road 💤. Try later",
          status: response?.status ?? 500,
        },
      },
    } as ErrResT<K>;
  }
};

export type BaseQueryT = typeof baseQueryAxs;
