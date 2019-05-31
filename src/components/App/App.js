import React from 'react';
import './App.scss';
import LeaderBoardContainer from "../../containers/LeaderBoard";
import GameContainer from "../../containers/Game";


function App() {
    return (
        <div className={'app__wrapper'}>
            <GameContainer/>
            <LeaderBoardContainer/>
        </div>
    );
}


export default App;
