import React from "react";
import "./ErrorText.css";

const ErrorText = () => {
    return (
        <p className={styles['error-text']}>
            Er ging iets mis, probeer later opnieuw...
        </p>
    );
}

export default ErrorText;