import {configureStore} from '@reduxjs/toolkit';
import dataSlice from './reducers/dayReducer';
import calendarMonthReducer from "./reducers/calendarMonthReducer";

export default configureStore({
  reducer: {
    date: dataSlice,
    month: calendarMonthReducer,
  },
})