import {createSlice} from "@reduxjs/toolkit";
import calendar from "calendar-month-array";

//TODO Check if month in range 0-11

const calendarMonthReducer = createSlice({
  name: "calendar-month",
  initialState: {
    month: new Date().getMonth(),
    monthName: new Date().toLocaleString('en', {month: 'long'}),
    monthArray: ["January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"],
    daysOfMonth: calendar(new Date(new Date().getFullYear(), new Date().getMonth()), {
      weekStartDay: 1,
      formatDate: (date) => date.getDate(),
      formatSiblingMonthDate: (date) => "",
    }),
  },
  reducers: {
    incrementMonth: (state) => {
      state.month += 1;
      state.daysOfMonth = calendar(new Date(new Date().getFullYear(), state.month), {
        weekStartDay: 1,
        formatDate: (date) => date.getDate(),
        formatSiblingMonthDate: (date) => "",
      });
      state.monthName = state.monthArray[state.month];
    },
    decrementMonth: (state) => {
      state.month -= 1;
      state.daysOfMonth = calendar(new Date(new Date().getFullYear(), state.month), {
        weekStartDay: 1,
        formatDate: (date) => date.getDate(),
        formatSiblingMonthDate: (date) => "",
      });
      state.monthName = state.monthArray[state.month];
    },
  },
});

export const {incrementMonth, decrementMonth} = calendarMonthReducer.actions;
export default calendarMonthReducer.reducer;
