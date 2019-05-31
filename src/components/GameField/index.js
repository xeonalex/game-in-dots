import React from 'react';
import withGameActions from "../../_hocs/withGameActions";
import GameCell from "../GameCell";
import './styles.scss'
import PropTypes from "prop-types";

const GameField = ({activatedCellId, cellsArray, handleGameCellClick}) => {
    return (
        <div className={'game-field__container'}>
            {
                cellsArray.map(( cell, idx )=>
                    <GameCell key={idx} idx={idx} activatedCellId={activatedCellId} status={cell} handleClick={handleGameCellClick(idx)}/>
                )
            }
        </div>
    );
};

GameField.propTypes = {
    handleGameCellClick: PropTypes.func.isRequired,
    cellsArray: PropTypes.array.isRequired,
    activatedCellId: PropTypes.any,
};

export default withGameActions(GameField);