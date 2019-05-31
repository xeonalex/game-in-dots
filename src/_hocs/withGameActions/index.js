import React from "react";
import {constant, shuffle, times, chunk} from "lodash";
import {addRecordToLeaderBoard} from "../../_redux/actions/leader.board.actions";
import {offGameInitFlag, setGameWinner} from "../../_redux/actions/game.settings.actions";
import {connect} from "react-redux";
import {compose} from 'redux';
import {createCordsObjFromString, rebaseMatrixCellsArray} from "../../_helpers/game.helpers";

const withGameActions = (WrappedComponent) => {
    class HOC extends React.Component {
        state = {
            arr: [],
            arrShuffle: [],
            score: {
                player: 0,
                computer: 0
            }
        };

        componentDidUpdate(prevProps, prevState, snapshot) {
            const { needGameInit } = this.props;

            if ( needGameInit ) this.startGame();
        }

        startGame(){
            this.props.offGameInitFlag();

            let {
                field,
            } = this.props.mode;


            let arr = times(field * field, constant(false));
                arr = chunk(arr, field);
            let arrShuffle = rebaseMatrixCellsArray(arr);
                arrShuffle = shuffle(arrShuffle);

            this.setState({
                arr: arr,
                arrShuffle: arrShuffle,
                idx: -1,
                score: {
                    player: 0,
                    computer: 0
                },
                result: {}
            }, this.activateRandomCell);
        }

        gameEnded({winner, date}){
            this.setState({
                result:  {
                    winner,
                    date
                }
            });

            this.props.setGameWinner(winner);
            this.props.addRecordToLeaderBoard({winner, date});
            clearTimeout(this.timer);
        }

        activateRandomCell() {
            if (this.checkForWinner()) return ;

            const { delay } = this.props.mode;

            if (this.timer) clearTimeout(this.timer);
            this.setNewRandomCell();
            this.timer = setTimeout(()=>{
                this.increaseScore('computer');
                this.activateRandomCell();
            }, delay);
        }

        setNewRandomCell(){
            this.setState((state)=>{
                const newCellId = state.idx+1;

                const randomCell = state.arrShuffle[newCellId];
                const activatedCell = createCordsObjFromString(randomCell);

                return {
                    idx: newCellId,
                    activatedCell
                }
            });
        }

        checkForWinner() {
            const { score } = this.state;
            const { field } = this.props.mode;
            const middle = field*field/2;

            let leader, leaderScore;

            if (score.player > score.computer) {
                let { playerName } = this.props;

                leaderScore = score.player;
                leader = playerName;
            } else {
                leaderScore = score.computer;
                leader = 'Computer AI';
            }

            if (leaderScore > middle) {
                this.gameEnded({winner: leader, date: new Date()});
                return true;
            }

            return false
        }

        increaseScore = (unit) => {
            this.setState((state)=>{
                let { arr, score, activatedCell } = state;
                let { x,y } = activatedCell.coords;

                arr[x][y] = unit;
                score[unit]+=1;

                return { arr, score };
            });
        };

        onGameCellClick = (isActiveCell) => () => {
            const { result } = this.state;

            if (isActiveCell && !result.winner) {
                this.increaseScore('player');

                this.activateRandomCell();
            }
        };

        render() {
            let {
                state: {arr, activatedCell},
                onGameCellClick
            } = this;

            if (!arr.length) return '';

            return (
                <WrappedComponent
                    cellsArray={arr}
                    activatedCell={activatedCell}
                    handleGameCellClick={onGameCellClick}
                    {...this.props}/>);
        }
    }

    return HOC
};

const mapDispatchToProps = {
    addRecordToLeaderBoard,
    setGameWinner,
    offGameInitFlag
};

function mapStateToProps(state) {
    let {
        gameSettings: {
            mode,
            isActive,
            playerName,
            needGameInit
        }
    } = state;

    return {
        mode,
        isActive,
        playerName,
        needGameInit
    };
}

const composedWithGameActions = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withGameActions
);

export default composedWithGameActions;
