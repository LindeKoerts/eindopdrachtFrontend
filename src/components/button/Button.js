import React from 'react';
import styles from './Button.css';

const Button = ({ buttonType, buttonClass, children, onClickHandler, disabled }) => {
    return (
        <button
            className={styles[buttonClass]}
            type={buttonType}
            onClick={onClickHandler}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;