import React from 'react';
import Calender from './component/Calender';
import './TimetablePage.css';

const TimetablePage = () => {

  return (
    <React.Fragment>
      <div className="timatablePage">
        <h1 className="h1_title">Timetable</h1> 
        <Calender />  
      </div>
    </React.Fragment>
  );
};

export default TimetablePage;