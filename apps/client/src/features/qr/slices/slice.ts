import { StoreStateT } from "@/core/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initState = {
  urlCode: "",
};

export const qrSlice = createSlice({
  initialState: initState,
  name: "qr",
  reducers: {
    setQr: (state, action: PayloadAction<string>) => {
      state.urlCode = action.payload;
    },
  },
});

export const getQrState = (state: StoreStateT) => state.qr;
