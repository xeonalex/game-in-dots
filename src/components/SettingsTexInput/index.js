import React from 'react';
import {ErrorMessage, Field, Form} from "formik";

const SettingsTextInput = ({name, placeholder, ...props}) => {
    return (
        <div className="settings-form__element ">
            <Field type="text" name={name} className="game-settings__input" placeholder={placeholder} {...props}/>
            <ErrorMessage className='field__error-massage' name={name} component="div" />
        </div>
    );
};

export default SettingsTextInput;
