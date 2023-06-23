import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {changeDate} from '../../redux/reducers/dayReducer';

export default function Data(props) {
  const dispatch = useDispatch();

  const changeDateOnClick = (date) => {
    dispatch(changeDate(date));
  }
  return (
    <div className='container-date'>
      <div className='date-wrapper' onClick={() => changeDateOnClick(props.day)}>
        <p className='date-text'>{props.day}</p>
      </div>
    </div>

  )
}
