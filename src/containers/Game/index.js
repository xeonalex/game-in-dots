import React, {Component} from 'react';

import GameField from "../../components/GameField";
import GameSettings from "../../components/GameSettings";
import WinnerBlock from "../../components/WinnerBlock";
import GameRules from "../../components/GameRules";

import './styles.scss'

class GameContainer extends Component {
    render() {
        return (
            <div className={'app__left-side'}>
                <GameSettings/>
                <GameRules/>
                <WinnerBlock/>
                <GameField/>
            </div>
        );
    }
}

export default GameContainer;