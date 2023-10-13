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

    render (){
        return (
            <div className="tc">
                <div className="tc_sub">
                    <div className="month">
                        <div className="block dymo dymoRed monthDymo">
                            MONTH
                        </div>
                        <div className={"block timeCircuitReadout " + this.state.colour}>
                            {this.state.time.month}
                        </div>
                    </div>
                    <div className="day">
                        <div className="block dymo dymoRed dayDymo">
                            DAY
                        </div>
                        <div className={"block timeCircuitReadout " + this.state.colour}>
                            {this.state.time.day}
                        </div>
                    </div>
                    <div className="year">
                        <div className="block dymo dymoRed yearDymo">
                            YEAR
                        </div>
                        <div className={"block timeCircuitReadout " + this.state.colour}>
                            {this.state.time.year}
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
                    <div className="minute">
                        <div className="block dymo dymoRed minDymo">
                            MIN
                        </div>
                        <div className={"block timeCircuitReadout " + this.state.colour}>
                            {this.state.time.minute}
                        </div>
                    </div>
                </div>
                <div className="tc_sub">
                    <div className="dymo dymoBlack">
                        {this.state.name}
                    </div>
                </div>
            </div>
          );
    }
}

export default TimeCircuitLayer;
