import {gameModesConstants} from "../../_redux/constants/game.constants";

const initialState = {
    modes: [],
    pending: false,
    fetched: false,
};

export function gameModes (state = initialState, {payload, type}) {
    switch (type) {
        case gameModesConstants.GET.REQUEST:
            return {
                ...state,
                pending: true,
            };
        case gameModesConstants.GET.SUCCESS:
            return {
                ...state,
                modes: payload,
                fetched: true,
                pending: true,
            };
        case gameModesConstants.GET.ERROR:
            return {
                ...state,
                pending: false,
            };
        default:
            return state;
    }
}
