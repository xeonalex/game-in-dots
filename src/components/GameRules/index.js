import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";

import './styles.scss'

const GameRules = ({isGameStarted}) => {

    if (isGameStarted) return '';
    return (
        <div className={'game__info'}>
            <h3 className={'info-block__title'}>Game in Dots</h3>
            <p className={'info-block__caption'}>Steps:</p>
            <ol>
                <li>Pick game mode and insert your name</li>
                <li>Press PLAY</li>
            </ol>
            <p className={'info-block__caption'}>Description</p>
            <p className={'info-text'}>
                At a specified time interval (depends on game mode)
                a random square on the field is highlighted in blue.

            </p>
            <p>
                If the user managed to click on the square during this time
                - he turns green, the player gets a point and the field
                changes color to green, if not, the field turns red and
                the point goes to the computer
            </p>
            <p> When a player or computer paints >50% of all possible
                squares in his color - he becomes the winner
            </p>
        </div>
    );
};

GameRules.propTypes = {
    isGameStarted: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    let { isGameStarted } = state.gameSettings;

    return {
        isGameStarted
    };
}

export default connect(mapStateToProps,)(GameRules);
