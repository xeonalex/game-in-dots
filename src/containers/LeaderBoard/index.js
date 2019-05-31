import React, {Component} from 'react';
import LeaderList from "../../components/LeaderList";

import './style.scss'

class LeaderBoardContainer extends Component {
    render() {
        return (
            <div className={'app__right-side'}>
                <div className={'leader-board__wrapper'}>
                    <div className="caption">
                        Leader Board
                    </div>
                    <LeaderList/>
                </div>
            </div>
        );
    }
}

export default LeaderBoardContainer;