import {configureStore} from '@reduxjs/toolkit';
import dataSlice from './reducers/dayReducer';
import calendarMonthReducer from "./reducers/dateReducer";

export default configureStore({
  reducer: {
    date: dataSlice,
    month: calendarMonthReducer,
  },
})