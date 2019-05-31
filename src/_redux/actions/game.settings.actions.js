import {generateAsyncQueryAction} from "../../_helpers/fabrics/actions.fabric";
import {fetchGameSettingsQuery} from "../../_api/game.api";
import {gameSettingsConstants} from "../../_redux/constants/game.constants";
import { mapKeys } from 'lodash';


export const fetchGameSettings = generateAsyncQueryAction({
    query: fetchGameSettingsQuery,
    queryConstants: gameSettingsConstants.GET,
    responseProcessingCallback: (data) =>{
        let newData = [];

        mapKeys(data, (value, key)=>{
            value.name = key;
            newData.push(value)
        });

        return newData;
    }
});

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