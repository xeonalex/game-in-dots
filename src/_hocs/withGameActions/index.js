import React from "react";
import {constant, shuffle, times} from "lodash";
import {addRecordToLeaderBoard} from "../../_redux/actions/leader.board.actions";
import {setGameWinner} from "../../_redux/actions/game.settings.actions";
import {connect} from "react-redux";
import {compose} from 'redux';

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
            let { isActive } = this.props;

            if ( prevProps.isActive !== isActive && isActive ) this.startGame();
        }

        startGame(){
            let {
                field,
            } = this.props.mode;

            const arr = times(field * field, constant(false));
            let arrShuffle = times(field * field, (i)=>i);
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

                return {
                    idx: newCellId,
                    activatedCellId: state.arrShuffle[newCellId]
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
                let { arr, score, activatedCellId } = state;

                arr[activatedCellId] = unit;
                score[unit]+=1;

                return { arr, score };
            });
        };

        onGameCellClick = (idx) => {
            return (e) => {
                const { activatedCellId, result } = this.state;

                if (idx === activatedCellId && !result.winner) {
                    this.increaseScore('player');

                    this.activateRandomCell();
                }
            }
        };


        render() {
            let {
                state: {arr, activatedCellId},
                onGameCellClick
            } = this;

            if (!arr.length) return '';

            return (<WrappedComponent cellsArray={arr} activatedCellId={activatedCellId} handleGameCellClick={onGameCellClick} {...this.props}/>);
        }
    }

    return HOC
};

const mapDispatchToProps = {
    addRecordToLeaderBoard,
    setGameWinner
};

function mapStateToProps(state) {
    let {
        gameSettings: {
            status: {
                mode,
                isActive,
                playerName
            }
        }
    } = state;

    return {
        mode,
        isActive,
        playerName
    };
}

const composedWithGameActions = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withGameActions
);

export default composedWithGameActions;
