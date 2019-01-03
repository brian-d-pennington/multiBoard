import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const CommentBox = React.createClass({
    getInitialState = () => {
      return {
        commentData: [],
        data: commentData
      }
    },
    handleCommentSubmit = comment => {
      this.props.data.push(comment);
      var comments = this.state.data;
      var newComments = comments.concat([comment]);
      this.setState({data: newComments});
    },
    render: function() {
      return (
        <div className="comment-box">
          <CommentForm data={this.props.data} onCommentSubmit={this.handleCommentSubmit} />
          <CommentList data={this.props.data} />
        </div>
      );
    }
  }); 

  export default CommentBox;