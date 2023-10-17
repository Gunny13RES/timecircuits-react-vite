import './index.css';
import React from 'react';

class FluxCapacitor extends React.Component {
    constructor(props){ 
        super(props) 
        this.state = {} 
    }

    render (){
        return (
            <div className="flux-capacitor-sizing">
                <div className="flux-capacitor">
                    <div className="flux-capacitor-dymo">
                        DISCONNECT CAPACITOR DRIVE
                    </div>
                    <div className="flux-capacitor-dymo">
                        BEFORE OPENING
                    </div>
                    <div className="flux-capacitor-inner">
                        <div className="flux-capacitor-dymo shield-eyes-label">
                            SHIELD EYES FROM LIGHT
                        </div>
                    </div>
                </div>
            </div>
            
          );
    }
}

export default FluxCapacitor;
