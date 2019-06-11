import {fetchGameSettingsQuery} from "../../_api/game.api";
import {mapKeys} from "lodash";

export default {
    state: {
        modes: [],
        pending: false,
        fetched: false,
    },
    effects: {
        async fetchGameModes(payload, rootState){
            this.request();

            try {
                const response = await fetchGameSettingsQuery();
                const {data} = response;

                if (data) {
                    let processedData = responseProcessingCallback(data);

                    this.success(processedData);
                } else {
                    throw new Error('No data in reponse');
                }
            }   catch (error) {
                console.log(error);
                this.error(error.message)
            }
        }
    },
    reducers: {
        request(state, payload){
            return {
                ...state,
                pending: true,
            }
        },
        success(state, payload){
            return {
                ...state,
                modes: payload,
                fetched: true,
                pending: true,
            }
        },
        error(state, payload){
            return {
                ...state,
                pending: false,
            }
        },
    }
}

function responseProcessingCallback(data) {
    let newData = [];

    mapKeys(data, (value, key)=>{
        value.name = key;
        newData.push(value)
    });

    return newData;
}