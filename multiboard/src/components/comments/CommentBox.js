import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

class CommentBox extends React.Component {
      state = {
        data: []
      }
    
    handleCommentSubmit = comment => {
      this.state.data.push(comment);
      let comments = this.state.data;
      console.log("let comments: " +comments);
      //let newComments = comments.concat([comment]);
      //console.log("newComments" +newComments);
      this.setState({data: comments});
    }
    render() {
      return (
        <div className="comment-box">
          <CommentForm data={this.state.data} onCommentSubmit={this.handleCommentSubmit} />
          <CommentList data={this.state.data} />
        </div>
      );
    }
  }; 

  export default CommentBox;