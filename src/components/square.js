import React from 'react';
import '../styles/square.css'

class Square extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
       
        this.image = [];
        
      
    }
    initialize() {
        
        let width = "50px";
        let height = "50px";

        

        if(this.props.piece!=null){
        const logo = require('../pieces/'+this.props.piece.type+'.png');
        this.image.push(<img src = {logo} width = {width} height = {height} className="piece" alt = "image"/>)
        

    }
        
    }
    render()
    {
        this.image = [];
        this.initialize();
        const classname = "square " + this.props.square_color;
        const red = require('../pieces/red.png'); 
        return (
            <div className={classname} onClick = {this.props.onClick}>
                {this.props.valid?<img src={red} alt="red" className = "valid_dot"  />:''}
                {this.image}</div>
        );
        
        

    }

}
export default Square;