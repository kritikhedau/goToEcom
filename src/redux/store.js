import { configureStore } from "@reduxjs/toolkit";
import shortlistReducer from "./shortlistSlice";

export const store = configureStore({
  reducer: {
    shortlist: shortlistReducer,
  },
});
