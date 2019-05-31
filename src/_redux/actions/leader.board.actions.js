import { sendWinnerInfoQuery } from "../../_api/game.api";
import { leaderBoardConstants } from "../constants/leader.board.constants";

export const sendWinnerData = ({winner, date} ) => (dispatch) => {
    let dateUTC = date.toUTCString();

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