import React from 'react';
import Timestamp from 'react-timestamp';

class Comment extends React.Component {
    render() {
        return (
          <div className="comment">
            <h4 className="author" style={{marginTop: '7px', marginBottom: '-2px'}}>{this.props.author}</h4>
            "{this.props.text}"
            <br />
            <Timestamp style={{fontSize: '8px' }} format='full' />
          </div>
        );
      }
}

export default Comment;