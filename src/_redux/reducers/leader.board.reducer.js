import {leaderBoardConstants} from "../../_redux/constants/leader.board.constants";

const initialState = {
    winners: [{winner: 'asdas', date: new Date()}],
};

export function leadersBoard (state = initialState, {payload, type}) {
    switch (type) {
        case leaderBoardConstants.ADD:
            let newWinnersList = [...state.winners];
            newWinnersList.push(payload);
            return {
                winners: newWinnersList
            };
        default:
            return state;
    }
}
