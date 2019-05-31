import React, {Component} from 'react';
import {connect} from "react-redux";
import { Formik, Form } from 'formik';
import * as yup from "yup";

import SettingsTextInput from "../SettingsTexInput";
import SettingsSelectElement from "../SettingsSelectElement";

import {setGameSettings} from "../../_redux/actions/game.settings.actions";
import {fetchGameModes} from "../../_redux/actions/game.modes.actions";

import './styles.scss'


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
        this.props.fetchGameModes();
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
                    winner,
                },
                gameModes: {
                    modes,
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
                        <SettingsSelectElement
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
    fetchGameModes,
    setGameSettings
};

function mapStateToProps(state) {
    let {
        gameSettings,
        gameModes
    } = state;

    return {
        gameSettings,
        gameModes
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameSettings);
