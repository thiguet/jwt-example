import React from 'react';
import './App.css';

import TextInput from './components/TextInput/TextInput';
import PasswordInput from './components/PasswordInput/PasswordInput';
import Button from './components/Button/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        value: ''
      },
      pass: {
        value: ''
      }
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const login = this.state.login.value;
    const pass  = this.state.pass.value;
    alert( 'Login :' + 
            login + 
           'Senha (Length) :' + 
            pass.length);
    fetch('http://localhost:3004/login', {
      method: 'POST',
      body: {
        login: login,
        pass: pass
      }
    })  
  }

  render() {
    const { login, pass } = this.state;
    return (
      <div className="App">
        <header>
          <h1>Simple Auth</h1>
        </header>
        <main>
          <article className="main-article">
            <TextInput 
              label="Login"
              inputData={login}>
            </TextInput>
            <PasswordInput
              label="Password"
              inputData={pass}>
            </PasswordInput>
            <Button onClick={this.handleClick}>Acess</Button>
          </article>
        </main>
      </div>
    );
  }
}

export default App;
