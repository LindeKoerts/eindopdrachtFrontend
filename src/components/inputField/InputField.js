import React from 'react';

const InputField = ({ labelText, inputType = 'text', inputId, inputName, placeholder, register, errors, validationRules }) => {
    return (
        <>
            <label htmlFor={inputId}>
                {labelText}
            </label>

            <input
                className="error"
                type={inputType}
                id={inputId}
                {...register(inputName, validationRules)}
                placeholder={errors[inputName] ? errors[inputName].message : placeholder}
            />
        </>
    );
};

export default InputField;