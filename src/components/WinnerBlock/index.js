import React from 'react';
import PropTypes from "prop-types";
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

WinnerBlock.propTypes = {
    winner: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
};

WinnerBlock.defaultProps = {
    winner: '',
    isActive: false
};

function mapStateToProps(state) {
    let { winner, isActive} = state.gameSettings;

    return {
        winner,
        isActive
    };
}

export default connect(mapStateToProps,)(WinnerBlock);