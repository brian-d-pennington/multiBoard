import React from 'react';
import Cell from './Cell'

class CellGrid extends React.Component {
    render() {
        return (
            <div class="ui three column grid">
                <div class="row">
                    <div class="column"><Cell /></div>
                    <div class="column"><Cell /></div>
                    <div class="column"><Cell /></div>
                </div>
                <div class="row">
                    <div class="column"><Cell /></div>
                    <div class="column"><Cell /></div>
                    <div class="column"><Cell /></div>
                </div>
                <div class="row">
                    <div class="column"><Cell /></div>
                    <div class="column"><Cell /></div>
                    <div class="column"><Cell /></div>
                </div>
            </div>
        );
    }
}

export default CellGrid;