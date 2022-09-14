import { VacationModel } from "../interfaces/vacation.interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: VacationModel[] = [];

export const vacationSlice = createSlice({
  name: "vacation",
  initialState: initialState,
  reducers: {
    getVacations: (state, action) => {
      return [...action.payload];
    },
    addVacation: (state, action) => {
      return [...state, action.payload];
    },
    deleteVacation: (state, action) => {
      return [...state.filter((v) => v.id !== action.payload)];
    },
  },
});

export const selectVacation = (state: { vacation: VacationModel[] }) =>
  state.vacation;

export const { getVacations, addVacation, deleteVacation } = vacationSlice.actions;
export default vacationSlice.reducer;
