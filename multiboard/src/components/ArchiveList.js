import React from 'react';

class ArchiveList extends React.Component {
    state = {
        archivedItems: this.props.renderArchive
    }

    render() {
        return (
            <div className="item">Drag Items to Archive <br />
                <br />
                                    [  H  E  R  E  ]
                {this.state.archivedItems.map((item, index) => {
                    return (
                    <div style={{marginTop: '10px'}} 
                        key={this.state.archivedItems[index]}><a href={item}>DL from Firebase</a></div>);})}
            </div>
            );
    }
}

export default ArchiveList;

