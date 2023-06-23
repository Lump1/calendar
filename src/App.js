import {useState} from 'react';
import './App.css';
import Data from './components/data/data';
import Menu from './components/menu/menu';
import {useSelector} from "react-redux";

function App() {
  const [dateTime, setDateTime] = useState(new Date());

  const month = useSelector((state) => state.month.monthName);
  const daysArray = useSelector((state) => state.month.daysOfMonth);

  return (
    <div className="App">
      <main>
        <div className='menu'>
          <Menu date={dateTime}></Menu>
        </div>

        <div className='calendar'>
          <h1>{month}</h1>
          <div className='calendar-contents'>
            {
              daysArray.map(
                x => x.map(
                  y => y != "" ? <Data day={y} month={dateTime.getMonth()} year={dateTime.getFullYear()}/> :
                    <div className='container-empty'></div>
                ))
            }
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
