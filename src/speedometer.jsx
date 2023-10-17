import './index.css';
import React from 'react';

class Speedometer extends React.Component {
    constructor(props){ 
        super(props) 
        this.state = {} 
    }

    render (){
        return (
            <div className="speedometer">
                <div className="speedometer-black">
                    <div className="speedometer-text">
                        0
                    </div>
                    <div className="speedometer-text">
                        0.
                    </div>
                    <div className="speedometer-text">
                    </div>
                </div>
            </div>
          );
    }
}

export default Speedometer;
