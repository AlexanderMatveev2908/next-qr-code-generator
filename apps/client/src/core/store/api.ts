import { createApi } from "@reduxjs/toolkit/query";
import { baseQueryAxs } from "./conf/baseQuery";
import { TagsAPI } from "@/common/types/api";

export const apiAppSlice = createApi({
  baseQuery: baseQueryAxs,
  tagTypes: Object.values(TagsAPI),
  reducerPath: "apiApp",
  endpoints: () => ({}),
});
