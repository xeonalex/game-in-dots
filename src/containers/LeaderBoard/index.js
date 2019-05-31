import React, {Component} from 'react';
import './style.scss'
import LeaderList from "../../components/LeaderList";

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