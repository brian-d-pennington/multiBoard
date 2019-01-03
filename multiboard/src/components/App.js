import React from 'react';
import ArchiveBar from './ArchiveBar';
import CellGrid from './CellGrid';
import firebase from 'firebase';

class App extends React.Component {
    componentWillMount(){
        const config = {
            apiKey: "AIzaSyBlVY1e6PzCSK6cZzLx0vYyf4qdPtHLjGA",
            authDomain: "capstone-multiboard.firebaseapp.com",
            databaseURL: "https://capstone-multiboard.firebaseio.com",
            projectId: "capstone-multiboard",
            storageBucket: "capstone-multiboard.appspot.com",
            messagingSenderId: "1097721666773"
          };
          firebase.initializeApp(config);
    }
    render() {
        return (
            <div>
                <ArchiveBar />
                <CellGrid /> 
             </div>
        );
    }
}

export default App;