import React from 'react';

class ArchiveList extends React.Component {
    state = {
        archivedItems: []
    }

    render() {
        return (
            <div className="item">Drag Items to Archive <br />
                <br />
                                    [  H  E  R  E  ]
                {this.state.archivedItems.map((item, index) => {
                    return (
                    <div key={this.state.archivedItems[index]}>{item}</div>);})}
            </div>
            );
    }
}

export default ArchiveList;

