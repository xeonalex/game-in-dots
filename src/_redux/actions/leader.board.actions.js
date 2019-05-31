import moment from 'moment';

import { sendWinnerInfoQuery } from "../../_api/game.api";
import { leaderBoardConstants } from "../constants/leader.board.constants";

export const addRecordToLeaderBoard = ({winner, date} ) => (dispatch) => {
    let dateUTC = moment(date).utc().format('HH:mm; DD MMMM YYYY');

    return sendWinnerInfoQuery( {winner, date: dateUTC} )
        .then(({data}) => {
            if (data) {
                dispatch({
                    type: leaderBoardConstants.ADD,
                    payload: { winner, date }
                });
            } else {
                throw new Error('Problem while sending info about winner')
            }
        })
        .catch(error => {
            console.error(error);
        })
};