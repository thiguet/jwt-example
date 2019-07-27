import React from 'react';
import './PasswordInput.css';

class PasswordInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.inputData = props.inputData || {};
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(evt) {
        // Gambiarra que garante a atualização do value do componente pai.
        this.props.inputData.value = evt.target.value; 
        this.setState({
            inputData: {
                value: evt.target.value
            }
        });
    }

    render() {
        const { label } = this.props;
        const { value } = this.state.inputData;
        return (
            <div className="text-input-container">
                <label>
                    <span>{ label }</span>
                    <input type="password" 
                        value={ value }
                        className="text-input"
                        onChange={ this.handleChange } />
                </label>
            </div>
        );
    }
}
export default PasswordInput;
