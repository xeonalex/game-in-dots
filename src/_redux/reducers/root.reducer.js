import {combineReducers} from 'redux';
import {gameSettings} from "../../_redux/reducers/game.settings.reducer";
import {leadersBoard} from "./leader.board.reducer";
import {gameModes} from "./game.modes.reducer";

export default combineReducers({
    gameModes,
    gameSettings,
    leadersBoard
});
