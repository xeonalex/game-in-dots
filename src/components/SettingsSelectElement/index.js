import React from 'react';
import PropTypes from "prop-types";
import Select from "react-select";
import {ErrorMessage} from "formik";

const SettingsSelectElement = ({options, handleChange}) => {
    return (
        <div className="settings-form__element">
            <Select
                placeholder={'Pick game mode'}
                className="game-settings__mode"
                classNamePrefix="select"
                options={options}
                getOptionLabel={(option)=>option.name}
                getOptionValue={(option)=>option.name}
                defaultOptions
                onChange={handleChange}
            />
            <ErrorMessage className='field__error-massage' name="mode.name" component="div" />
        </div>
    );
};

SettingsSelectElement.propTypes = {
    options: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
};

SettingsSelectElement.defaultProps = {
    options: [],
};

export default SettingsSelectElement;