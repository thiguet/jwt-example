import React from 'react';

import { connect } from 'react-redux';

import Login from './views/Login/Login.jsx';
import Users from './views/Users/Users.jsx';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
class App extends React.Component {
	render() {
		const { loginInfo } = this.props;
		return (
			<div className="App">
				<Header />
				<h2> { this.props.userName } </h2>
				<main>
					{
						!!loginInfo.tk 
							? <Route exact path="/users" component={ Users } />
							: <Route exact path="/" component={ Login } />						
					}
				</main>
			</div>
		);
	}
}

const mapStateToProps = store => ({
	loginInfo: store.loginState.loginInfo
});

export default connect(mapStateToProps)(App);
