import React from 'react';
import {connect} from "react-redux";
import './styles.scss'

const WinnerBlock = ({winner, isActive}) => {
    if (winner && !isActive) {
        return (
            <div className={'winner__block'}>
                {winner+' wins! Congrats!!!'}
            </div>
        );
    } else {
        return ''
    }

};

function mapStateToProps(state) {
    let { winner, isActive} = state.gameSettings.status;

    return {
        winner,
        isActive
    };
}

export default connect(mapStateToProps,)(WinnerBlock);
