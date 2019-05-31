import React from 'react';
import {connect} from "react-redux";
import './styles.scss'
import PropTypes from "prop-types";

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
    let { winner, isActive} = state.gameSettings.status;

    return {
        winner,
        isActive
    };
}

export default connect(mapStateToProps,)(WinnerBlock);
