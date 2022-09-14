import { VacationModel } from "../interfaces/vacation.interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: any[] = [];

export const followSlice = createSlice({
  name: "follow",
  initialState: initialState,
  reducers: {
      follow: (state, action) => {
          if (Array.isArray(action.payload)) {
              return action.payload
          }
      return [...state, action.payload];
    },
    unFollow: (state, action) => {
      return [...state.filter(v => v.vId !== action.payload.vId)];
    },
  },
});

export const selectFollow = (state: { follow: [] }) => state.follow;

export const { follow, unFollow } = followSlice.actions;
export default followSlice.reducer;
