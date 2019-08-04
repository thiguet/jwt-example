import React from 'react';
import './PasswordInput.css';
import InputContainer from '../InputContainer/InputContainer';

let PasswordInput = props => {
    const { label, onChange, value, name } = props;
    return (
        <InputContainer label={ label } >
            <input  type="password" 
                    className="text-input"
                    name={ name }
                    onChange={ onChange }
                    value={ value } />
        </InputContainer>        
    );
}
export default PasswordInput;
