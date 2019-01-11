import React from 'react';
import ArchiveBar from './ArchiveBar';
import firebase from 'firebase';
import Cell from './Cell';

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

    state = {
        clearCellData: false,
        archiveList: []
    }
    onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev) => {
            this.setState({clearCellData: true});
            this.addToArchive();
            setTimeout(() => {
                this.setState({clearCellData: false})
            }, 2000);
        }

    addToArchive = () => {
        const localArray = this.state.archiveList;
        localArray.push("https://firebasestorage.googleapis.com/v0/b/capstone-multiboard.appspot.com/o/finale.mp3?alt=media&token=62b3df91-d09f-4924-b4a7-3e97ecd1d63d");
        this.setState({archiveList: localArray});
    }

    render() {
        return (
            <div>
                <div onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e)}>   
                    <ArchiveBar toArchive={this.state.archiveList}/>
                </div> 
                <div className="ui three column grid" style={{
                    backgroundColor: '#fcf5eb',
                    paddingLeft: '210px',
                    paddingTop: '10px'}}>
                <div className="row">
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell clearCell={this.state.clearCellData}/></div>
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell clearCell={this.state.clearCellData}/></div>
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell clearCell={this.state.clearCellData}/></div>
                </div>
                <div className="row">
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell clearCell={this.state.clearCellData}/></div>
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell clearCell={this.state.clearCellData}/></div>
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell clearCell={this.state.clearCellData}/></div>
                </div>
                <div className="row">
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell clearCell={this.state.clearCellData}/></div>
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell clearCell={this.state.clearCellData}/></div>
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell clearCell={this.state.clearCellData}/></div>
                </div>
            </div>
             </div>
        );
    }
}

export default App;