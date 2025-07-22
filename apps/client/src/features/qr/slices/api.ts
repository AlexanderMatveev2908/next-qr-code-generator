import { apiSlice } from "@/core/store/api";
import { UnwrapPromise } from "next/dist/lib/coalesced-function";

const BASE_URL = "/qr";

export const qrSliceAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postQr: builder.mutation<UnwrapPromise<{ blob: Blob }>, string>({
      query: (data) => ({
        url: BASE_URL + `?${data}`,
        method: "POST",
        responseType: "blob",
      }),
    }),
  }),
});
