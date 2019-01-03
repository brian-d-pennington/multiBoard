import React from 'react';

class Comments extends React.Component {
    render() {
        state = {
            commentData: []
        }
        return (
            <div className="comment-box">
              <CommentBox data={commentData}/>
            </div>
          );
    }
}
    
export default Comments;
