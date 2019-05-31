import React from 'react';
import './styles.scss'
import PropTypes from 'prop-types'

const GameCell = ({handleClick, activatedCellId, idx, status}) => {
    let classNames = ['game-field__cell'];

    if (activatedCellId === idx) {
        classNames.push('active-cell');
    } else {
        status && classNames.push(status === 'player' ? 'player-cell' : 'computer-cell');
    }

    return (
        <div className={classNames.join(' ')} onClick={handleClick}/>
    );
};

GameCell.propTypes = {
    handleClick: PropTypes.func.isRequired,
    activatedCellId: PropTypes.any,
    idx: PropTypes.number.isRequired,
    status: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.bool.isRequired,
    ]),
};

export default GameCell;
