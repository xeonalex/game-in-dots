import {gameSettingsConstants} from "../../_redux/constants/game.constants";

const initialState = {
    mode: false,
    isActive: false,
    playerName: '',
    isGameStarted: false
};

export function gameSettings (state = initialState, {payload, type}) {
    switch (type) {
        case gameSettingsConstants.SET:
            return {
                ...state,
                ...payload,
                isActive: true,
                isGameStarted: true,
            };
        case gameSettingsConstants.SET_WINNER:
            return {
                ...state,
                winner: payload,
                isActive: false
            };
        default:
            return state;
    }
}
