import React, {Component} from 'react';
import GameField from "../../components/GameField";
import GameSettings from "../../components/GameSettings";
import './styles.scss'
import WinnerBlock from "../../components/WinnerBlock";

class GameContainer extends Component {
    render() {
        return (
            <div className={'app__left-side'}>
                <GameSettings/>
                <WinnerBlock/>
                <GameField/>
            </div>
        );
    }
}

export default GameContainer;