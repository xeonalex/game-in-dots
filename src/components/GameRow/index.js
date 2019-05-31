import React from 'react';
import GameCell from "../GameCell";
import PropTypes from "prop-types";

import './styles.scss'

const GameRow = ({activatedCell, cells, handleGameCellClick, coords}) => {
    return (
        <div className={'game-field__row'}>
            {
                cells.map(( status, y )=>
                    <GameCell
                        key={y}
                        coords={ {x: coords.x, y} }
                        activatedCell={activatedCell}
                        status={status}
                        handleClick={handleGameCellClick}/>
                )
            }
        </div>
    );
};

GameRow.propTypes = {
    handleGameCellClick: PropTypes.func.isRequired,
    cells: PropTypes.array.isRequired,
    activatedCell: PropTypes.any,
    coords: PropTypes.shape({
        x: PropTypes.number.isRequired
    }).isRequired
};

export default GameRow;
