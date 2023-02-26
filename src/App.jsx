import React from 'react';
import style from './App.module.css';
import Cities from './components/cities/Cities';
import Day from './components/Day/Day';



export const App = () => {




  return (
    <div className={style.fondo}>

      <Day />
      <Cities />

    </div>
  );
}
export default App


