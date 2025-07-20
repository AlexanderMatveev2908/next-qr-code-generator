import { testSlice } from "@/features/test/slices/slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiAppSlice } from "./api";

const rootReducer = combineReducers({
  test: testSlice.reducer,
  apiApp: apiAppSlice.reducer,
});

export const genStoreSSR = (
  preloadedState: Partial<ReturnType<typeof rootReducer>>
) =>
  configureStore({
    reducer: rootReducer,

    middleware: (getDefMdw) => getDefMdw().concat(apiAppSlice.middleware),
    preloadedState,
  });

export type StoreT = ReturnType<typeof genStoreSSR>;
export type StoreStateT = ReturnType<StoreT["getState"]>;
export type DispatchT = StoreT["dispatch"];
