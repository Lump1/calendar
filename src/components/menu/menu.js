import React from 'react';
import './menu.module.css';

export default function Menu(props) {

    
  return (
    <div className='menu-container'>
        <h2 className='date-menu'>Date: </h2>
        <hr className='menu-hr' />
        <p className='day'>Day: {props.date.getDay()}</p>
        <p className='month'>Month: {props.date.toLocaleString('en', { month: 'long' })}</p>
        <p className='year'>Year: {props.date.getFullYear()}</p>

        <hr className='menu-hr' />
        
        <h2 className='options-text'>Month</h2>
        <div className='button-div'>
            <button className='btn-arrow'>←</button>
            <button className='btn-arrow'>→</button>
        </div>

        <h2 className='options-text'>Year</h2>
        <div className='button-div'>
            <button className='btn-arrow'>←</button>
            <button className='btn-arrow'>→</button>
        </div>
        
    </div>
  )
}
