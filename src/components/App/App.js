import React from 'react';
import LeaderBoardContainer from "../../containers/LeaderBoard";
import GameContainer from "../../containers/Game";

import './App.scss';

function App() {
    return (
        <div className={'app__wrapper'}>
            <GameContainer/>
            <LeaderBoardContainer/>
        </div>
    );
}


export default App;
