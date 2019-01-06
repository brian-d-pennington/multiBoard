import React from 'react';
import Cell from './Cell'

class CellGrid extends React.Component {
    state = {
        isCellActive: false
    }
    onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id", id);
    }
    
    render() {
        return (
            <div className="ui three column grid" style={{
                    backgroundColor: '#ffedcc',
                    paddingLeft: '210px',
                    paddingTop: '10px'}}>
                <div className="row">
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell active={this.state.isCellActive}/></div>
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell active={this.state.isCellActive}/></div>
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell active={this.state.isCellActive}/></div>
                </div>
                <div className="row">
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell active={this.state.isCellActive}/></div>
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell active={this.state.isCellActive}/></div>
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell active={this.state.isCellActive}/></div>
                </div>
                <div className="row">
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell active={this.state.isCellActive}/></div>
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell active={this.state.isCellActive}/></div>
                    <div className="column" draggable
                    onDragStart={(e) => this.onDragStart(e)}>
                        <Cell active={this.state.isCellActive}/></div>
                </div>
            </div>
        );
    }
}

export default CellGrid;