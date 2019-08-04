
import React from 'react';
import './Login.css';

import { loginAction } from '../../actions/index.js';
import { connect } from 'react-redux';

import TextInput from '../../components/TextInput/TextInput';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import Button from '../../components/Button/Button';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			login: '',
			pass: ''
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleClick() {
		const { login, pass } = this.state;
		const { loginAction } = this.props;
		const loginData = {
			user: login,
			pass: pass
		};

		fetch('http://localhost:3004/login', {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(loginData)
		}).then(resp => resp.json()).then((resp) => {
			alert(resp.message);
			const { token } = resp;
			if (token) {
				loginAction({
					tk: token,
					userName: 'Teste'
				});
			}
		});
	}

	handleInputChange(e) {
		const target = e.target;
		const value =
			(target.type === 'checkbox')
				? target.checked
				: target.value;

		const name = target.name;
		this.setState(
			{
				[name]: value
			}
		);
	}

	render() {
		const { login, pass } = this.state;
		return (
			<article className='main-article'>
				<TextInput
					label='Login'
					name='login'
					value={login}
					onChange={this.handleInputChange} >
				</TextInput>
				<PasswordInput
					label='Password'
					name='pass'
					value={pass}
					onChange={this.handleInputChange} >
				</PasswordInput>
				<Button onClick={this.handleClick}>Acess</Button>
			</article>
		);
	}
}

const mapStateToProps = state => ({
	loginInfo: state.loginInfo
});

const mapDispatchToProps = dispatch => ({
	loginAction: loginInfo => dispatch(loginAction(loginInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);