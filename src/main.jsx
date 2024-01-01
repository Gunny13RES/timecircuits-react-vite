import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css';
import './style/tc.css';
import TimeCircuitLayer from './timecircuitLayer.jsx';
import ComicPanelBox from './comicPanelBox.jsx';
import CarPedal from './carPedal.jsx';
import Speedometer from './speedometer';
import FluxCapacitor from './fluxCapacitor';

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
      day: this.day.toString().padStart(2,'0').replaceAll("1"," 1"),
      year: this.year.toString().padStart(4,'0').replaceAll("1"," 1"),
      hour: (this.hour <= 12 ? this.hour : this.hour - 12).toString().padStart(2,'0').replaceAll("1"," 1"),
      minute: this.minute.toString().padStart(2,'0').replaceAll("1"," 1")
    });
  }

  isAm(){
    if (this.hour < 12){
      return true;
    }
    return false;
  }

  isPm(){
    return !this.isAm();
  }

  isLeapYear(){
    if (this.year % 4 == 0){
      if (this.year % 100 == 0){
        if (this.year % 400 == 0){
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  incrementMinute(){
    this.minute ++;
    if (this.minute >= 60){
      this.minute = 0;
      this.incrementHour();
    }
  }

  incrementHour(){
    this.hour ++;
    if (this.hour >= 24){
      this.hour = 0;
      this.incrementDay();
    }
  }

  incrementDay(){
    this.day++;
    let maxDay = 31;

    switch (this.month){
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        maxDay = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        maxDay = 30;
        break;
      default:
      if (this.isLeapYear()){
        maxDay = 29;
      } else {
        maxDay = 28;
      }
    }

    if (this.day > maxDay){
        this.day = 1;
        this.incrementMonth();
      }
  }

  incrementMonth(){
    this.month++;
    if (this.month >= 12){
      this.month = 1;
      this.year++;
    }
  } 
}

let destinationTime = new Time(10,26,1985,1,35);
let realDate = new Date();
let presentTime = new Time(realDate.getMonth()+1,
                           realDate.getDate(),
                           realDate.getFullYear(),
                           realDate.getHours(),
                           realDate.getMinutes());
let presentTimeSeconds = realDate.getSeconds();
let lastTimeDeparted = new Time(11,12,1955,22,4);


function getDestinationTime(){
  return destinationTime.format();
}

function getPresentTime(){
  return presentTime.format();
}

function getLastTimeDeparted(){
  return lastTimeDeparted.format();
}

function secondPasses(){
  presentTimeSeconds += 1;
  if (presentTimeSeconds >= 60){
    presentTimeSeconds = 0;
    presentTime.incrementMinute();
  }
}

let secondsLastCheckedAt = 0;

function App() {
  const [frameTime, setFrameTime] = React.useState(performance.now());

  useEffect(() => {
    let frameId;
    const frame = time => {
      setFrameTime(time);
      frameId = requestAnimationFrame(frame);
      if (time >= secondsLastCheckedAt + 1000){
        secondsLastCheckedAt = time;
        secondPasses();
      }
    }
    requestAnimationFrame(frame);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (<main>
    <div className="thirdWidth">
      <div className="comic-panels-flex-container" id="firstColumn">
        <ComicPanelBox className="halfHeight" id="topLeftBox">
        Plutonium etc here
        </ComicPanelBox>
        <ComicPanelBox className="halfHeight" id="topLeftBox">
        Instruction notebook here?
        </ComicPanelBox>
      </div>
    </div>
    <div className="thirdWidth">
      <div className="comic-panels-flex-container" id="secondColumn">
        <ComicPanelBox className="thirdHeight" id="topCentreBox">
          Profile view of car here with parallax background
        </ComicPanelBox>
        <ComicPanelBox className="thirdHeight">
          <div className="tc_full">
              <TimeCircuitLayer time = {destinationTime} colour="red" name="DESTINATION TIME"/>
              <TimeCircuitLayer time = {presentTime} colour = "green" name="PRESENT TIME"/>
              <TimeCircuitLayer time = {lastTimeDeparted} colour = "yellow" name="LAST TIME DEPARTED"/>
          </div>
        </ComicPanelBox>
        <ComicPanelBox className="thirdHeight almost-black" id="topCentreBox">
          <div className="inline-block">
            <Speedometer/>
            <br/>
            <div className="inline-block">
              Movable key like the
              <br/>
              Papers Please key
            </div>
            <div id="ignition">
              <div id="keyhole"/>
            </div>            
          </div>
          <div className="inline-block">
            time circuits switch
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
          <div className="inline-block float-right">
            <CarPedal id="accelerator"/>
            <CarPedal id="brake"/>            
          </div>
        </ComicPanelBox>
      </div>
    </div>
    <div className="thirdWidth vAlignTop">
      <div className="comic-panels-flex-container" id="firstColumn">
      <ComicPanelBox className="halfHeight" id="topLeftBox">
      <div className="flex-container">
          <div className="halfWidth fullHeight">
          Digital terminal screen (for telling you what your current next steps are/giving an introduction to the project at the beginning)
          </div>
          <div className="halfWidth fullHeight">
          Doc's notebook explaining the fictional logic behind the car
          </div>
        </div>
        </ComicPanelBox>
      <ComicPanelBox className="halfHeight" id="topLeftBox">
        <div className="flex-container">
          <div className="halfWidth fullHeight">
          Digital terminal screen (for telling you what your current next steps are/giving an introduction to the project at the beginning)
          </div>
          <div className="halfWidth fullHeight">
            <FluxCapacitor/>          
          </div>
        </div>
        </ComicPanelBox>
      </div>
    </div>
  </main>);
}

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);