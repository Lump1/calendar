import {createSlice} from "@reduxjs/toolkit";
import calendar from "calendar-month-array";

//TODO Check if month in range 0-11

const dateReducer = createSlice({
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
    year: new Date().getFullYear(),
  },
  reducers: {
    incrementMonth: (state) => {
      if (state.month == 11) {
        state.month = 0;
        state.year += 1;
        console.log('odfsdfsdf');
      } else {
        state.month += 1;
      }
      state.daysOfMonth = calendar(new Date(new Date().getFullYear(), state.month), {
        weekStartDay: 1,
        formatDate: (date) => date.getDate(),
        formatSiblingMonthDate: (date) => "",
      });
      state.monthName = state.monthArray[state.month];
    },
    decrementMonth: (state) => {
      if (state.month == 0) {
        state.month = 11;
        state.year -= 1;
        console.log('odfsdfsdf');
      } else {
        state.month -= 1;
      }
      state.month -= 1;
      state.daysOfMonth = calendar(new Date(new Date().getFullYear(), state.month), {
        weekStartDay: 1,
        formatDate: (date) => date.getDate(),
        formatSiblingMonthDate: (date) => "",
      });
      state.monthName = state.monthArray[state.month];
    },
    incrementYear: (state) => {
      state.year += 1;
      state.daysOfMonth = calendar(new Date(new Date().getFullYear(), state.month), {
        weekStartDay: 1,
        formatDate: (date) => date.getDate(),
        formatSiblingMonthDate: (date) => "",
      });
    },
    decrementYear: (state) => {
      state.year += 1;
      state.daysOfMonth = calendar(new Date(new Date().getFullYear(), state.month), {
        weekStartDay: 1,
        formatDate: (date) => date.getDate(),
        formatSiblingMonthDate: (date) => "",
      });
    },
    setMonth: (state, action) => {
      state.month = action.payload;
      state.monthName = state.monthArray[state.month];
      state.daysOfMonth = calendar(new Date(new Date().getFullYear(), state.month), {
        weekStartDay: 1,
        formatDate: (date) => date.getDate(),
        formatSiblingMonthDate: (date) => "",
      });
    }
  },
});

export const {incrementMonth, decrementMonth, incrementYear, decrementYear, setMonth} = dateReducer.actions;
export default dateReducer.reducer;
