import {gameSettingsConstants} from "../../_redux/constants/game.constants";

const initialState = {
    modes: [],
    status: {
        mode: false,
        isActive: false,
        playerName: '',
        isGameStarted: false
    },
    pending: false,
    fetched: false,
};

export function gameSettings (state = initialState, {payload, type}) {
    switch (type) {
        case gameSettingsConstants.GET.REQUEST:
            return {
                ...state,
                pending: true,
            };
        case gameSettingsConstants.GET.SUCCESS:
            return {
                ...state,
                modes: payload,
                fetched: true,
                pending: true,
            };
        case gameSettingsConstants.GET.ERROR:
            return {
                ...state,
                pending: false,
            };
        case gameSettingsConstants.SET:
            return {
                ...state,
                status: {
                    ...state.status,
                    ...payload,
                    isActive: true,
                    isGameStarted: true,
                }
            };
        case gameSettingsConstants.SET_WINNER:
            return {
                ...state,
                status: {
                    ...state.status,
                    winner: payload,
                    isActive: false
                }
            };
        default:
            return state;
    }
}
