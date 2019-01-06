import React from 'react';
import firebase from 'firebase';

class Login extends React.Component {
    state = {
        loggedIn: false
    }

    loginHandler = () => {
        const email = "publicimage66@yahoo.com";
        const password = "Testpass123!"
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
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
                        <input id="txtEmail" type="email" placeholder="Email"></input>
                    </div>
                    <div className="ui input" style={{marginBottom: '3px'}}>
                        <input  type="password" placeholder="Password"></input>
                    </div>
                    <button className="ui button" style={{marginBottom: '3px'}} onClick={this.loginHandler}>
                    Login
                    </button>
                </div>
            );
        }
        else {
            return (
                <div className="ui container" style={{paddingLeft: '5px'}}>
                    <div className="item">publicimage66@yahoo.com</div>
                    <button className="ui button" style={{marginBottom: '3px'}} onClick={this.logOutHandler}>
                    Log Out
                    </button>
                </div>
            )
        }
        
    }
}

export default Login;