import React from 'react';
import './TextInput.css';
import InputContainer from '../InputContainer/InputContainer';

let TextInput = props => {
    const { label, onChange, value, name } = props;
    return (
        <InputContainer label={ label } >
            <input type="text" 
                   className="text-input"
                   name={ name }
                   onChange={ onChange }
                   value={ value } />
        </InputContainer> 
    );
}

export default TextInput;