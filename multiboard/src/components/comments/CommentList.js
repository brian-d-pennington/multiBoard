import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
    render() {
        return (
        <div className="comment-list">
            {this.props.data.map((c, index) => {
                return (
                <Comment key={this.props.data[index]} author={c.author} text={c.text} />
            );
            })}
        </div>
        );
        
    }
};

export default CommentList;