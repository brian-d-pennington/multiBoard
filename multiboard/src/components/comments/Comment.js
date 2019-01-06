import React from 'react';
import Timestamp from 'react-timestamp';

class Comment extends React.Component {
    render() {
        return (
          <div className="comment">
            <h3 className="author">{this.props.author}</h3>
            {this.props.text}
            <br />
            <Timestamp format='full' />
          </div>
        );
      }
}

export default Comment;