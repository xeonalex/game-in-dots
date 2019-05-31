import {createAsyncConstant} from "../../_helpers/create.constant.helper";

export const gameSettingsConstants = {
    GET: createAsyncConstant('GET_GAME_SETTINGS'),
    SET: 'SET_GAME_SETTINGS',
    SET_WINNER: 'SET_WINNER_GAME_SETTINGS'
};

