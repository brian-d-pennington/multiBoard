import React from 'react';
import firebase from 'firebase';

class Login extends React.Component {
    state = {
        loggedIn: false,
        userEmail: '',
        userPass: ''
    }
    
    handleEmailChange = (e) => {
        this.setState({userEmail: e.target.value});
    }

    handlePasswordChange = (e) => {
        this.setState({userPass: e.target.value});
    }

    loginHandler = () => {
        const email = this.state.userEmail; 
        const password = this.state.userPass;
        console.log("Email variable: "+email);
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(
            alert("Not a registered login!"));
        this.setState({loggedIn: true });
    }

    logOutHandler = () => {
        firebase.auth().signOut();
        this.setState({loggedIn: false});
    }
    
    render() {
        if (!this.state.loggedIn) {
            return (
            <div className="ui container" style={{paddingLeft: '5px'}}>
                    <div className="ui input" style={{marginBottom: '3px'}}>
                        <input type="email" placeholder="Email"
                            value={this.state.userEmail} onChange={this.handleEmailChange}></input>
                    </div>
                    <div className="ui input" style={{marginBottom: '3px'}}>
                        <input type="password" placeholder="Password"
                            value={this.state.userPass} onChange={this.handlePasswordChange}></input>
                    </div>
                    <button className="ui button" style={{marginBottom: '3px'}} 
                         onClick={this.loginHandler}>
                    Login
                    </button>
                </div>
            );
        }
        else {
            return (
                <div className="ui container" style={{paddingLeft: '5px'}}>
                    <div className="item">{this.state.userEmail}</div>
                    <button className="ui button" style={{marginBottom: '3px'}} onClick={this.logOutHandler}>
                    Log Out
                    </button>
                </div>
            )
        }
        
    }
}

export default Login;