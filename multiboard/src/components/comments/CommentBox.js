import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import firebase from 'firebase';

class CommentBox extends React.Component {
    state = {
      data: [{ 
        author:"Shawn Spencer", 
        text:"I've heard it both ways"
      },
      { 
        author:"Burton Guster", 
        text:"You hear about Pluto? That's messed up" 
      }]
    };
    
    handleCommentSubmit = comment => {
      this.state.data.push(comment);
      let comments = this.state.data;
      const dbRef = firebase.database().ref(`/comments`);
      dbRef.push(comments);
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