import React from 'react';
import ArchiveBar from './ArchiveBar';
import CellGrid from './CellGrid';

class App extends React.Component {
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