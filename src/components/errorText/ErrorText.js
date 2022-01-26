import React from 'react';
import styles from './ErrorText.module.scss';

const ErrorText = () => {
    return (
        <p className={styles['error-text']}>
            Something went wrong, please try again later...
        </p>
    );
}

export default ErrorText;