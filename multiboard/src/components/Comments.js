import React from 'react';
import CommentBox from './comments/CommentBox';

class Comments extends React.Component {
    render() {
    return (
        <div className="comment-box">
            <CommentBox />
        </div>
        );
    }
}
    
export default Comments;
