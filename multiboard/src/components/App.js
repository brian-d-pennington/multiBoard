import React from 'react';
import ArchiveBar from './ArchiveBar';
import CellGrid from './CellGrid';

class App extends React.Component {
    render() {
        return (
            <div>
                <ArchiveBar />
                <CellGrid style={{marginLeft: '150px'}}/> 
             </div>
        );
    }
}

export default App;