import React from 'react';

class TopBar extends React.Component {
    render() {
        return (
            <div class="ui fixed inverted menu">
                <div class="ui container">
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