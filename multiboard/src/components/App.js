import React from 'react';
import TopBar from './TopBar'
;import CellGrid from './CellGrid';

class App extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: '#ffedcc'}}>
                <TopBar />
                <CellGrid />
            </div>
        );
    }
}

export default App;