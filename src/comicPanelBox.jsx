import './index.css';
import React from 'react';

class ComicPanelBox extends React.Component {
    constructor(props){ 
        super(props) 
        this.state = {} 
    }

    render (){
        return (
            <div className={"comic-panel " + this.props.className}>
                {React.Children.map(this.props['children'], child => <>{child}</>)}
            </div>
          );
    }
}

export default ComicPanelBox;
