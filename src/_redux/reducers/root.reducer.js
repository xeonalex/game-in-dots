import {combineReducers} from 'redux';
import {gameSettings} from "../../_redux/reducers/game.settings.reducer";
import {leadersBoard} from "./leader.board.reducer";

export default combineReducers({
    gameSettings,
    leadersBoard
});
