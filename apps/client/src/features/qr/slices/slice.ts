import { StoreStateT } from "@/core/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostQrFormT } from "@shared/first/schemas/qr.post.js";

export type qrStateT = {
  urlCode: string;
  inputUser: PostQrFormT | null;
};

export const initState: qrStateT = {
  urlCode: "",
  inputUser: null,
};

export const qrSlice = createSlice({
  initialState: initState,
  name: "qr",
  reducers: {
    setQr: (state, action: PayloadAction<string>) => {
      state.urlCode = action.payload;
    },
    setInput: (state, action: PayloadAction<PostQrFormT>) => {
      state.inputUser = action.payload;
    },
  },
});

export const getQrState = (state: StoreStateT) => state.qr;
