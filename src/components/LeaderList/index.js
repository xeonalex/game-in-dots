import React from 'react';
import {connect} from "react-redux";
import LeaderRecord from "../LeaderRecord";
import PropTypes from "prop-types";

const LeaderList = ({winners}) => {
    return (
        <div>
            {
                winners.map((winner, idx)=>
                    <LeaderRecord key={idx} winnerData={winner}/>
                )
            }
            { winners.length === 0 && <div>There is no winner at this session</div> }
        </div>
    );
};

LeaderList.propTypes = {
    winners: PropTypes.array.isRequired,
};

LeaderList.defaultProps = {
    winners: []
};

function mapStateToProps(state) {
    let { winners} = state.leadersBoard;

    return {
        winners,
    };
}

export default connect(mapStateToProps,)(LeaderList);
