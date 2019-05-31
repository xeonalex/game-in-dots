import React from 'react';
import './styles.scss'
import moment from 'moment';
import PropTypes from "prop-types";

const LeaderRecord = ({ winnerData }) => {
    const { winner, date } = winnerData;
    const dateString = moment(date).format('DD.MM.YYYY HH:mm:ss');

    return (
        <div className={'leader-record'}>
            <span className={'record__winner-name'}>{winner}</span>
            <span className={'record__winner-date'}>{ dateString }</span>
        </div>
    );
};

LeaderRecord.propTypes = {
    winnerData: PropTypes.shape({
        winner: PropTypes.string,
        date: PropTypes.instanceOf(Date)
    }).isRequired
};

export default LeaderRecord;
