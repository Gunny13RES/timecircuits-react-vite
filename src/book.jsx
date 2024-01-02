import './style/index.css';
import './style/book.css';
import React from 'react';

class Book extends React.Component {
    constructor(props){ 
        super(props) 
        let br2 = <><br></br><br></br></>;
        let br3 = <><br></br><br></br><br></br></>;
        this.state = {page: 0,
                     pages: [<><em>DeLorean Time Machine instruction manual</em>{br2}
                                Hello Marty! I know it's been a while since you last operated this thing - nearly 35 years since the last film to be precise!
                                {br2}Hopefully the guide in this book will be enough to bring you up to speed.{br2}
                                Your friend in time - Emmett "Doc" Brown.</>,

                             <><em>Setting a destination time</em>{br3}
                                <li>Click the topmost date readout - the red one.</li><br></br>
                                <li>Input your new destination time on the keypad in the following format:</li><br></br>
                                <li>MM DD YYYY hh mm</li><br></br>
                                <li>Confirm to update the display with your new destination time.</li><br></br></>,

                             <><em>Accelerating to 88 miles per hour</em>{br3}
                             </>,
                             
                             <><em>Refueling the reactor</em>{br3}
                             </>,]}
    }

    render (){
        return (
            this.state.page == 0 ?
                <div className="spaceForBook">
                     <div className="quarter">
                     </div>
                    <div className="half">
                        <div className="bookleaf right" onClick={()=>{this.setState({page:this.state.page+1})}}>
                            DOC'S NOTEBOOK
                        </div>
                    </div>
                </div>
            :   <div className="spaceForBook">
                    <div className="bookleaf left">
                        <div className="page">
                            <p>
                            {this.state.pages[(this.state.page*2)-2]}
                            </p>
                            <div className="pageTurningButton" onClick={()=>{this.setState({page:this.state.page-1})}}>
                            </div>
                        </div>
                    </div>
                    <div className="bookleaf right">
                        <div className="page">
                            <p>
                                {this.state.pages[(this.state.page*2)-1]}
                            </p>
                            <div className="pageTurningButton" onClick={()=>{this.setState({page:this.state.page+1})}}>

                            </div>
                        </div>
                    </div>
                </div>
          );
    }
}

export default Book;
