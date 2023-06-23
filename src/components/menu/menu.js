import React from 'react';
import './menu.module.css';

export default function Menu(props) {

    
  return (
    <div className='menu-container'>
        <h2 className='date-menu'>Date: </h2>
        <p className='day'>Day: {props.date.getDay()}</p>
        <p className='month'>Month: {props.date.toLocaleString('en', { month: 'long' })}</p>
        <p className='year'>Year: {props.date.getFullYear()}</p>
        
        <h2 className='m-10'>Month</h2>
        <div className='button-div'>
            <button className=''>←</button>
            <button>→</button>
        </div>
        
    </div>
  )
}
