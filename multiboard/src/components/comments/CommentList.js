import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
    render() {
        return (
        <div className="comment-list">
            {this.props.data.map(function(c){
                return (
                <Comment author={c.author} text={c.text} />
            );
            })}
        </div>
        );
        
    }
};

export default CommentList;