import { sendWinnerInfoQuery } from "../../_api/game.api";
import moment from "moment";

export default {
    state: {
        winners: [],
    },
    effects: {
        async addRecordToLeaderBoard({winner, date}, rootState){
            let dateUTC = moment(date).utc().format('HH:mm; DD MMMM YYYY');

            try {
                const response = await sendWinnerInfoQuery( {winner, date: dateUTC} );
                const {data} = response;

                if (data) {
                    this.add({ winner, date });
                } else {
                    throw new Error('Problem while sending info about winner');
                }
            } catch (error) {
                console.error(error);
            }
        }
    },
    reducers: {
        add(state, payload){
            let newWinnersList = [...state.winners];
            newWinnersList.push(payload);

            return {
                winners: newWinnersList
            }
        }
    }
}