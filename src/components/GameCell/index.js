import React from 'react';
import PropTypes from 'prop-types'
import {isEqualCellCoords} from "../../_helpers/game.helpers";

import './styles.scss'

const GameCell = ({handleClick, activatedCell, coords: { x, y }, status}) => {
    let classNames = ['game-field__cell'];
    let condition = isEqualCellCoords(activatedCell.coords, { x, y });

    if ( condition ) {
        classNames.push('active-cell');
    } else {
        status && classNames.push(status === 'player' ? 'player-cell' : 'computer-cell');
    }

    return (
        <div className={classNames.join(' ')} onClick={handleClick(condition)}/>
    );
};

GameCell.propTypes = {
    handleClick: PropTypes.func.isRequired,
    activatedCell: PropTypes.any,
    coords: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }).isRequired,
    status: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.bool.isRequired,
    ]),
};

export default GameCell;
