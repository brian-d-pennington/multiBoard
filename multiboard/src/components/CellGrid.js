import React from 'react';
import Cell from './Cell'

class CellGrid extends React.Component {
    render() {
        return (
            <div className="ui three column grid" style={{backgroundColor: '#ffedcc',
                                                          paddingLeft: '220px',
                                                          paddingTop: '10px'}}>
                <div className="row">
                    <div className="column"><Cell /></div>
                    <div className="column"><Cell /></div>
                    <div className="column"><Cell /></div>
                </div>
                <div className="row">
                    <div className="column"><Cell /></div>
                    <div className="column"><Cell /></div>
                    <div className="column"><Cell /></div>
                </div>
                <div className="row">
                    <div className="column"><Cell /></div>
                    <div className="column"><Cell /></div>
                    <div className="column"><Cell /></div>
                </div>
            </div>
        );
    }
}

export default CellGrid;