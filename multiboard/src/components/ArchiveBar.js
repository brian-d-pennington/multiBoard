import React from 'react';
import ArchiveList from './ArchiveList';
import Login from './Login';

class ArchiveBar extends React.Component {
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
                <Login /> 
                <div className="item"><ArchiveList /></div>
            </div>
        </div>
        );
    }
}

export default ArchiveBar;