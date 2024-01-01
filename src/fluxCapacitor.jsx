import './style/index.css';
import './style/flux-capacitor.css';
import React from 'react';

class FluxCapacitor extends React.Component {
    constructor(props){ 
        super(props) 
        this.state = {} 
    }

    render (){
        let d = new Date().getTime()+"";
        let fluxOffset = ((d.slice(-3)/999)*6.6) + "em";
        
        let capacitor_is_on = true;

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
                        <div className="flux-capacitor-round left"></div>
                        <div className="flux-capacitor-round right"></div>
                        <div className="flux-capacitor-round lower"></div>
                        <div className={"capacitor-arm capacitor-arm-left "+ (capacitor_is_on ? "capacitor-on" : "")} style={{"backgroundPositionX":capacitor_is_on ? fluxOffset : 0}}></div>
                        <div className={"capacitor-arm capacitor-arm-right "+ (capacitor_is_on ? "capacitor-on" : "")} style={{"backgroundPositionX":capacitor_is_on ? fluxOffset : 0}}></div>
                        <div className={"capacitor-arm capacitor-arm-lower "+ (capacitor_is_on ? "capacitor-on" : "")} style={{"backgroundPositionX":capacitor_is_on ? fluxOffset : 0}}></div>
                        <div className="flux-capacitor-inner border"></div>   
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
