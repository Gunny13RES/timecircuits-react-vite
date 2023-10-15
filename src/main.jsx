import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import './tc.css';
import TimeCircuitLayer from './timecircuitLayer.jsx';
import ComicPanelBox from './comicPanelBox.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

class Time {
  constructor(month,day,year,hour,minute){
    this.month = month;
    this.day = day;
    this.year = year;
    this.hour = hour;
    this.minute = minute;
  }

  format(){
    return ({
      month: months[this.month-1],
      day: this.day.toString().padStart(2,'0').replace("1"," 1"),
      year: this.year.toString().padStart(4,'0').replace("1","1"),
      hour: this.hour.toString().padStart(2,'0').replace("1"," 1"),
      minute: this.minute.toString().padStart(2,'0').replace("1"," 1")
    });
  }
}

let destinationTime = new Time(10,27,1985,11,0);
let presentTime = new Time(9,7,1885,8,15);
let lastTimeDeparted = new Time(11,16,1955,8,0);

function getDestinationTime(){
  return destinationTime.format();
}

function getPresentTime(){
  return presentTime.format();
}

function getLastTimeDeparted(){
  return lastTimeDeparted.format();
}

root.render(
  <React.StrictMode>
    <div className="thirdWidth vAlignTop">
      <div className="comic-panels-flex-container" id="firstColumn">
      <ComicPanelBox className="halfHeight" id="topLeftBox">
        </ComicPanelBox>
      <ComicPanelBox className="halfHeight" id="topLeftBox">
        </ComicPanelBox>
      </div>
    </div>
    <div className="thirdWidth  vAlignTop">
      <div className="comic-panels-flex-container" id="secondColumn">
        <ComicPanelBox className="thirdHeight" id="topCentreBox">
        </ComicPanelBox>
        <ComicPanelBox>
          <div className="tc_full">
            <TimeCircuitLayer time = {getDestinationTime} colour="red" name="DESTINATION TIME"/>
            <TimeCircuitLayer time = {getPresentTime} colour = "green" name="PRESENT TIME"/>
            <TimeCircuitLayer time = {getLastTimeDeparted} colour = "yellow" name="LAST TIME DEPARTED"/>
          </div>
        </ComicPanelBox>
        <ComicPanelBox className="thirdHeight" id="topCentreBox">
        </ComicPanelBox>
      </div>
    </div>
    <div className="thirdWidth vAlignTop">
      <div className="comic-panels-flex-container" id="firstColumn">
      <ComicPanelBox className="halfHeight" id="topLeftBox">
        </ComicPanelBox>
      <ComicPanelBox className="halfHeight" id="topLeftBox">
        </ComicPanelBox>
      </div>
    </div>
    
    
    
  </React.StrictMode>
);