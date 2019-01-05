import React from 'react';
import ArchiveList from './ArchiveList';
import firebase from 'firebase';

class ArchiveBar extends React.Component {
    state = {
        loggedIn: false
    }

    loginHandler = () => {
        const email = "publicimage66@yahoo.com";
        const pass = "TestPass123!";
        const auth = firebase.auth()
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
        this.setState({loggedIn: true });
    }

    render() {
        return (
        <div className="ui vertical inverted sidebar menu left overlay visible" style={{width: '200px' }}>
            <div className="ui container">
                <i className="calendar alternate icon" 
                    style={{
                        color: '#ff4500', 
                        margin: '20px 0px 20px 15px'}}></i>
                <div className="header item">
                multiBOARD
                </div> 
                <div className="ui container" style={{paddingLeft: '5px'}}>
                    <div className="ui input" style={{marginBottom: '3px'}}>
                        <input id="txtEmail" type="email" placeholder="Email"></input>
                    </div>
                    <div className="ui input" style={{marginBottom: '3px'}}>
                        <input id="txtPassword" type="password" placeholder="Password"></input>
                    </div>
                    <button id="btnLogin" className="ui button btn-action" onClick={this.loginHandler}>
                    Log in
                    </button>
                    <button id="btnLogout" className="ui button btn-action hide">
                    Log Out
                    </button>
                </div> 
                <div className="item">Archived Items</div>
                <div className="item"><ArchiveList /></div>
            </div>
        </div>
        );
    }
}

export default ArchiveBar;