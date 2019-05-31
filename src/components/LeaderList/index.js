import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import LeaderRecord from "../LeaderRecord";

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
