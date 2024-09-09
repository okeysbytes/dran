import React from 'react';
import useAlert from '../hooks/useAlert';
const AnyComponent = () => {
    const { showAlert, hideAlert } = useAlert();
    const handleClick = () => {
        showAlert('Hello, world');
        setTimeout(hideAlert, 3000);
    };
    return (
        <div>
            <button onClick={handleClick}>Show Alert</button>
        </div>
    );
}
export default AnyComponent;