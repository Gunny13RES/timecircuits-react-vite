import './style/index.css';
import React from 'react';

class CarPedal extends React.Component {
    constructor(props){ 
        super(props) 
        this.state = {} 
    }

    render (){
        return (
            <div className="carPedal" id={this.props.id}>
                {this.props.id == "accelerator"
                    ? 
                    <>
                    <div className="carPedalSubElement"/>
                    <div className="carPedalSubElement"/>
                    <div className="carPedalSubElement"/>
                    <div className="carPedalSubElement"/>
                    <div className="carPedalSubElement"/>
                    <div className="carPedalSubElement"/>
                    <div className="carPedalSubElement big"/>
                    </>
                    :
                    <>
                    <div className="carPedalSubElement medium"/>
                    <div className="carPedalSubElement medium"/>
                    <div className="carPedalSubElement medium"/>
                    <div className="carPedalSubElement medium"/>
                    <div className="carPedalSubElement big"/>
                    </>
                    }
              
            </div>
          );
    }
}

export default CarPedal;
