import { StoreStateT } from "@/core/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initState = {
  isWakeUp: false,
};

export const wakeUpSlice = createSlice({
  name: "wakeUp",
  initialState: initState,
  reducers: {
    setWakeState: (state, action: PayloadAction<boolean>) => {
      state.isWakeUp = action.payload;
    },
  },
});

export const getWakeState = (state: StoreStateT) => state.wakeUp;
