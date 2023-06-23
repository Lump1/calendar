import React from 'react';
import './menu.module.css';

import {useDispatch, useSelector} from 'react-redux';
import {incrementMonth, decrementMonth} from "../../redux/reducers/calendarMonthReducer";

export default function Menu(props) {
  const day = useSelector((state) => state.date.value);
  const month = useSelector((state) => state.month.monthName);

  const dispatch = useDispatch();

  const prevMonth = () => dispatch(decrementMonth());
  const nextMonth = () => dispatch(incrementMonth());
    
  return (
    <div className='menu-container'>
        <h2 className='date-menu'>Date: </h2>
        <p className='day'>Day: {day}</p>
        <p className='month'>Month: {month}</p>
        <p className='year'>Year: {props.date.getFullYear()}</p>
        
        <h2 className='m-10'>Month</h2>
        <div className='button-div'>
            <button onClick={prevMonth}>←</button>
            <button onClick={nextMonth}>→</button>
        </div>
        
    </div>
  )
}
