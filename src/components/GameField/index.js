import React from 'react';
import PropTypes from "prop-types";

import GameRow from "../GameRow";
import withGameActions from "../../_hocs/withGameActions";

import './styles.scss'


const GameField = ({isGameActive, activatedCell, cellsArray, handleGameCellClick}) => {
    let newClasses = isGameActive ? '' : 'game-over';

    if (!activatedCell) return '';
    return (
        <div className={`game-field__container ${newClasses}`}>
            {
                cellsArray.map(( cells, x )=>
                    <GameRow
                        key={x}
                        coords={{x}}
                        activatedCell={activatedCell}
                        cells={cells}
                        handleGameCellClick={handleGameCellClick}/>
                )
            }
        </div>
    );
};

GameField.propTypes = {
    handleGameCellClick: PropTypes.func.isRequired,
    cellsArray: PropTypes.array.isRequired,
    activatedCell: PropTypes.any,
    isGameEnded: PropTypes.bool.isRequired
};

export default withGameActions(GameField);