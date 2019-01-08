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
        clearCellData: false
    }
    onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev) => {
            ev.setState({clearCellData: true});
            console.log("Cell clear function triggered");
        
    }

    render() {
        return (
            <div>
                <ArchiveBar onDragOver={(e) => this.onDragOver(e)}
                            onDrop={(e) => this.onDrop(e)}/>
                <div className="ui three column grid" style={{
                    backgroundColor: '#ffedcc',
                    paddingLeft: '210px',
                    paddingTop: '10px'}}>
                <div className="row">
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell clearCell={this.state.clearCellData}/></div>
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell clearCel={this.state.clearCellData}/></div>
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell clearCel={this.state.clearCellData}/></div>
                </div>
                <div className="row">
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell clearCel={this.state.clearCellData}/></div>
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell clearCel={this.state.clearCellData}/></div>
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell clearCel={this.state.clearCellData}/></div>
                </div>
                <div className="row">
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell clearCel={this.state.clearCellData}/></div>
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell clearCel={this.state.clearCellData}/></div>
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell clearCel={this.state.clearCellData}/></div>
                </div>
            </div>
             </div>
        );
    }
}

export default App;