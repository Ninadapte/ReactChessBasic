import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board';
class Game extends React.Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Board front="white"/>
        )
    }
}
export default Game;