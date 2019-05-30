import React from 'react';
import './styles.scss'

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

export default GameCell;
