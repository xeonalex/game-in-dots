import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchGameSettings, setGameSettings} from "../../_redux/actions/game.settings.actions";
import './styles.scss'
import { Formik, Form } from 'formik';
import * as yup from "yup";
import SettingsTextInput from "../SettingsTexInput";
import GameModeSelectElement from "../SettingsSelectElement";

class GameSettings extends Component {
    state = {
        formikValues: {
            playerName: '',
            mode: {
                name: ''
            }
        }
    };

    componentDidMount() {
        this.props.fetchGameSettings();
        this.initValidationSchema();
    }

    initValidationSchema () {
        this.schema = yup.object({
            playerName: yup.string().required('Name is required'),
            mode: yup.object({
                name: yup.string().required('Mode is required')
            })
        });
    }

    handleSubmit = (values) => {
        const {playerName, mode} = values;
        const settings = {
            mode,
            playerName
        };

        this.props.setGameSettings(settings);
    };

    render() {
        let {
            handleSubmit,
            schema,
            props: {
                gameSettings: {
                    modes,
                    status: {
                        winner,
                    }
                }
            },
            state: { formikValues }
        } = this;

        const playButtonText = winner ? 'play again' : 'play';

        return (
            <Formik
                validationSchema={schema}
                onSubmit={handleSubmit}
                initialValues={formikValues}
                validateOnChange = {false}
            >
                {({ setFieldValue }) => (
                    <Form className={'game-settings__wrapper'}>
                        <GameModeSelectElement
                            handleChange={ (option) =>setFieldValue('mode', option) }
                            options={ modes }
                        />
                        <SettingsTextInput name="playerName" placeholder='Enter your name'/>
                        <button type="submit" className="game-settings__start" > { playButtonText } </button>
                    </Form>
                )}
            </Formik>
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
