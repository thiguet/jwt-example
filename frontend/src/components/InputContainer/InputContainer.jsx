import React from 'react';
import './InputContainer.css';

let InputContainer = props => {
    const { label, children } = props;
    return (
        <div className="input-container">
            <label>
                <span>{ label }</span>
                { children }
            </label>
        </div>
    );
}

export default InputContainer;