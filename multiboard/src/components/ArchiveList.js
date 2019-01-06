import React from 'react';

class ArchiveList extends React.Component {
    state = {
        archivedItems: ["Archived Items:"]
    }



    render() {
        return (
            <div className="item">
                {this.state.archivedItems.map((item, index) => {
                    return (
                    <div key={this.state.archivedItems[index]}>{item}</div>);})}
            </div>
            );
    }
}

export default ArchiveList;

