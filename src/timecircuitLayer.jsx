import './tc.css';
import React from 'react';

class TimeCircuitLayer extends React.Component {
    constructor(props, time){ 
        super(props) 
            
        // Set initial state 
        this.state = {time: props.time(),
                      colour: props.colour,
                      name: props.name} 
        }

    askDestinationTime(){
        alert("Here we will set the destination time")
        }

    render (){
        return (
            <div className={"tc "+this.props.colour+"-tc-clickable-region"} onClick={this.props.colour == "red" ? (() => this.askDestinationTime()) : null}>
                <div className="tc_sub">
                    <div className="preMonthGap"/>
                    <div className="month">
                        <div className="block dymo dymoRed monthDymo">
                            MONTH
                        </div>
                        <div className={"block timeCircuitReadout " + this.state.colour}>
                            {this.state.time.month}
                        </div>
                    </div>
                    <div className="preDayGap"/>
                    <div className="day">
                        <div className="block dymo dymoRed dayDymo">
                            DAY
                        </div>
                        <div className={"block timeCircuitReadout " + this.state.colour}>
                            {this.state.time.day}
                        </div>
                    </div>
                    <div className="preYearGap"/>
                    <div className="year">
                        <div className="block dymo dymoRed yearDymo">
                            YEAR
                        </div>
                        <div className={"block timeCircuitReadout " + this.state.colour}>
                            {this.state.time.year}
                        </div>
                    </div>
                    <div className="amPmGap">
                        <div className="block dymo dymoRed amLabel">
                            AM
                        </div>
                        <div className={this.state.colour + " amPmIndicator"}>
                        .
                        </div>
                        <div className="block dymo dymoRed pmLabel">
                            PM
                        </div>
                        <div className={this.state.colour + " amPmIndicator"}>
                        .
                        </div>
                    </div>
                    <div className="hour">
                        <div className="block dymo dymoRed hourDymo">
                            HOUR
                        </div>
                        <div className={"block timeCircuitReadout " + this.state.colour}>
                            {this.state.time.hour}
                        </div>
                    </div>
                    <div className={this.state.colour + " secondsIndicatorGap"}>
                        :
                    </div>
                    <div className="minute">
                        <div className="block dymo dymoRed minDymo">
                            MIN
                        </div>
                        <div className={"block timeCircuitReadout " + this.state.colour}>
                            {this.state.time.minute}
                        </div>
                    </div>
                </div>
                <div className="tc_sub dymoBlackContainer">
                    <div className="dymo dymoBlack">
                        {this.state.name}
                    </div>
                </div>
            </div>
          );
    }
}

export default TimeCircuitLayer;
