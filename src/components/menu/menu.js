import React from 'react';
import './menu.module.css';

import {useDispatch, useSelector} from 'react-redux';
import {incrementMonth, decrementMonth, incrementYear, decrementYear} from "../../redux/reducers/dateReducer";

export default function Menu(props) {
  const day = useSelector((state) => state.date.value);
  const month = useSelector((state) => state.month.monthName);
  const year = useSelector((state) => state.month.year);

  const dispatch = useDispatch();

  const prevMonth = () => {
    dispatch(decrementMonth());
  }

  const nextMonth = () => {
    dispatch(incrementMonth());
  }

  const prevYear = () => {
    dispatch(decrementYear());
  }

  const nextYear = () => {
    dispatch(incrementYear());
  }
    
  return (
    <div className='menu-container'>
        <h2 className='date-menu'>Date: </h2>
        <hr className='menu-hr' />
        <p className='day'>Day: {day}</p>
        <p className='month'>Month: {month}</p>
        <p className='year'>Year: {year}</p>

        <hr className='menu-hr' />
        
        <h2 className='options-text'>Month</h2>
        <div className='button-div'>
            <button className='btn-arrow' onClick={prevMonth}>←</button>
            <button className='btn-arrow' onClick={nextMonth}>→</button>
        </div>

        <h2 className='options-text'>Year</h2>
        <div className='button-div'>
            <button className='btn-arrow' onClick={prevYear}>←</button>
            <button className='btn-arrow' onClick={nextYear}>→</button>
        </div>
        
    </div>
  )
}
