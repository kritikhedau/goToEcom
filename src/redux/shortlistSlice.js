import { createSlice } from "@reduxjs/toolkit";

const shortlistSlice = createSlice({
  name: "shortlist",
  initialState: [],
  reducers: {
    addToShortlist: (state, action) => {
      const movie = action.payload;
      if (!state.find((m) => m.imdbID === movie.imdbID)) {
        state.push(movie);
      }
    },
    removeFromShortlist: (state, action) => {
      return state.filter((m) => m.imdbID !== action.payload);
    },
  },
});

export const { addToShortlist, removeFromShortlist } = shortlistSlice.actions;
export default shortlistSlice.reducer;
