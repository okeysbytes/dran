import React from 'react';
import useAlert from './useAlert';
const Alert = () => {
    const {alert} = useAlert();
    if (!alert) return null;
    return (
        <div
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'white',
                padding: '20px',
                border: '1px solid black',
            }}          
        >
        <p>{alert.message}</p>
        </div>
    );
};
export default Alert;