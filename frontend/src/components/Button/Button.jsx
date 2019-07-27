import React from 'react';
import './Button.css';

const Button =  props => {    
    const { onClick, children } = props;
    return (
        <div className="button-container">
            <button 
                className="button"
                onClick={ onClick }>{ children }</button>
        </div>
    );
}

export default Button;
