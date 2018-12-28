import React from 'react';

class TopBar extends React.Component {
    render() {
        return (
            <div class="ui fixed inverted menu">
                <div class="ui container">
                    <i class="calendar alternate icon" 
                        style={{color: '#ff4500', paddingTop: '10px'}}></i>
                    <a class="header item">
                    multiBOARD
                    </a>
                    <a class="item">
                    logged in user: 
                    </a>
                </div>
            </div>
        );
    }
}

export default TopBar;