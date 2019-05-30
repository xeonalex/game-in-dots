import React from 'react';
import './styles.scss'
import moment from 'moment';

const LeaderRecord = ({winnerData: {winner, date}}) => {
    let dateString = moment(date).format('DD.MM.YYYY HH:mm:ss');

    return (
        <div className={'leader-record'}>
            <span className={'record__winner-name'}>{winner}</span>
            <span className={'record__winner-date'}>{ dateString }</span>
        </div>
    );
};

export default LeaderRecord;
