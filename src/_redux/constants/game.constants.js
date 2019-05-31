import {createAsyncConstant} from "../../_helpers/create.constant.helper";

export const gameModesConstants = {
    GET: createAsyncConstant('GET_GAME_SETTINGS'),
};

export const gameSettingsConstants = {
    SET: 'SET_GAME_SETTINGS',
    SET_WINNER: 'SET_WINNER_GAME_SETTINGS',
    INIT_GAME: 'INIT_GAME',
    OFF_INIT_FLAG: 'OFF_GAME_INIT_FLAG'
};