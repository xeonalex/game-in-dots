import {gameSettingsConstants} from "../../_redux/constants/game.constants";

export const setGameSettings = (payload) => (dispatch) => {
    dispatch({
        type: gameSettingsConstants.SET,
        payload : payload
    });
};

export const setGameWinner = (payload) => (dispatch) => {
    dispatch({
        type: gameSettingsConstants.SET_WINNER,
        payload : payload
    });
};

export const offGameInitFlag = () => (dispatch) => {
    dispatch({
        type: gameSettingsConstants.OFF_INIT_FLAG,
    });
};