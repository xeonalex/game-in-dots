import {generateAsyncQueryAction} from "../../_helpers/fabrics/actions.fabric";
import {fetchGameSettingsQuery} from "../../_api/game.api";
import {gameModesConstants} from "../constants/game.constants";
import {mapKeys} from "lodash";

export const fetchGameModes = generateAsyncQueryAction({
    query: fetchGameSettingsQuery,
    queryConstants: gameModesConstants.GET,
    responseProcessingCallback: (data) =>{
        let newData = [];

        mapKeys(data, (value, key)=>{
            value.name = key;
            newData.push(value)
        });

        return newData;
    }
});