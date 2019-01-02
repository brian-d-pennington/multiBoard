import React from 'react';

class ArchiveList extends React.Component {
    state = {
        archivedItems: []
    }

    // set current list state
    /* 
    addToArchiveList = event => {
        this.setState({
            // archivedItems: archivedItems.push(event.target.files[0]) **add functionality later
            archivedItems: [null]
        })
    }

    ArchiveListHandler = () => {
        if (archivedItems.length != null) {
            listItems = archivedItems.map((archivedItem) =>
            <li>{archivedItem}</li>
        )}
        else {
            return 
        }
    }
*/

    render() {
        return <p>(none currently)</p>;
    }
}

export default ArchiveList;