import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
    render() {
        return (
        <div className="comment-list">
            {this.props.data.map((c, i) => {
                return (
                <Comment key={this.props.data[i].text} author={c.author} text={c.text} />
            );
            })}
        </div>
        );
        
    }
};

export default CommentList;