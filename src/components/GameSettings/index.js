import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchGameSettings, setGameSettings} from "../../_redux/actions/game.settings.actions";
import Select from 'react-select';
import './styles.scss'

class GameSettings extends Component {
    state = {
        playerName: '',
        mode: ''
    };

    componentDidMount() {
        this.props.fetchGameSettings();
    }

    handlePlayerChange = (e) => {
        let { value } = e.target;

        this.setState({
          playerName: value
        })
    };

    handleModeSelected = (option) =>{
        this.setState({mode: option});
    };

    handlePlayPressed = () => {
        const {playerName, mode} = this.state;
        const settings = {
            mode,
            playerName
        };

        this.props.setGameSettings(settings);
    };

    render() {
        let {
            handlePlayerChange,
            handleModeSelected,
            handlePlayPressed,
            props: {
                gameSettings: {
                    modes,
                    status: {
                        winner,
                    }
                }
            },
            state: { playerName }
        } = this;

        const playButtonText = winner ? 'play again' : 'play';

        return (
            <div className={'game-settings__wrapper'}>
                <Select
                    placeholder={'Pick game mode'}
                    className="game-settings__mode"
                    classNamePrefix="select"
                    options={modes}
                    getOptionLabel={(option)=>option.name}
                    getOptionValue={(option)=>option.name}
                    defaultOptions
                    onChange={handleModeSelected}
                />
                <input className="game-settings__input" type="text" value={playerName} onChange={handlePlayerChange}/>
                <button className="game-settings__start" onClick={handlePlayPressed}> {playButtonText} </button>
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchGameSettings,
    setGameSettings
};


function mapStateToProps(state) {
    let { gameSettings } = state;
    return {
        gameSettings
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameSettings);
