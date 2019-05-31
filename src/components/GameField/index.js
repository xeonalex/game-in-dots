import React from 'react';
import withGameActions from "../../_hocs/withGameActions";
import './styles.scss'
import PropTypes from "prop-types";
import GameRow from "../GameRow";

const GameField = ({activatedCell, cellsArray, handleGameCellClick}) => {

    if (!activatedCell) return '';
    return (
        <div className={'game-field__container'}>
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
};

export default withGameActions(GameField);