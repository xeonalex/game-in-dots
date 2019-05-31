import {gameSettingsConstants} from "../../_redux/constants/game.constants";

const initialState = {
    playerName: '',
    mode: null,
    isActive: false,
    isGameStarted: false,
    needGameInit: false,
};

export function gameSettings (state = initialState, {payload, type}) {
    switch (type) {
        case gameSettingsConstants.SET:
            return {
                ...state,
                ...payload,
                needGameInit: true,
            };
        case gameSettingsConstants.SET_WINNER:
            return {
                ...state,
                winner: payload,
                isActive: false
            };
        case gameSettingsConstants.OFF_INIT_FLAG:
            return {
                ...state,
                isGameStarted: true,
                isActive: true,
                needGameInit: false,
            };
        default:
            return state;
    }
}
