import { apiSlice } from "@/core/store/api";
import { PostQrFormT } from "@shared/first/schemas/qr.post.js";
import { UnwrapPromise } from "next/dist/lib/coalesced-function";

const BASE_URL = "/qr";

export const qrSliceAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postQr: builder.mutation<UnwrapPromise<{ data: unknown }>, PostQrFormT>({
      query: (data) => ({
        url: BASE_URL,
        method: "POST",
        data,
      }),
    }),
  }),
});
