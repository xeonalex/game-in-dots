import React from 'react';
import {ErrorMessage, Field} from "formik";
import PropTypes from "prop-types";

const SettingsTextInput = ({name, placeholder, ...props}) => {
    return (
        <div className="settings-form__element ">
            <Field type="text" name={name} className="game-settings__input" placeholder={placeholder} {...props}/>
            <ErrorMessage className='field__error-massage' name={name} component="div" />
        </div>
    );
};

SettingsTextInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

SettingsTextInput.defaultProps = {
    name: 'example',
    placeholder: 'Enter field value'
};

export default SettingsTextInput;
