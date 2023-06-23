import { useState } from 'react';
import './App.css';
import Data from './components/data/data';
import Menu from './components/menu/menu';
import calendar from 'calendar-month-array';



function App() {

  const [dateTime, setDateTime] = useState(new Date());
  const [daysArray, setDaysArray] = useState(calendar(new Date(dateTime.getFullYear(), dateTime.getMonth()), {
    weekStartDay: 1,
    formatDate: date => date.getDate(),
    formatSiblingMonthDate: date => ""
  }));

  console.log(daysArray);

  return (
    <div className="App">
      <main>
        <div className='menu'>
          <Menu date={dateTime}></Menu>
        </div>

        <div className='calendar'>
          <h1>{new Date().toLocaleString('en', { month: 'long' })}</h1>
          <div className='calendar-contents'>
            {
              daysArray.map(
                x => x.map(
                  y => y != "" ? <Data day={y} month={dateTime.getMonth()} year={dateTime.getFullYear()} /> : <div className='container-empty'></div>
                ))
            }
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
