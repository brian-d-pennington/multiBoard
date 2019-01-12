import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import firebase from 'firebase';

class CommentBox extends React.Component {
    state = {
      data: [],
      realtimeDatabase: this.props.rtDB
    };
    
    handleCommentSubmit = comment => {
      let realtimeDB = this.state.realtimeDatabase;
      // if `comments` not null, set data to saved objects
      realtimeDB.set(`comments`); //works!
      let commentsFolder = realtimeDB.child(`comments`);
      commentsFolder.push(comment); //also works!
      //realtimeDB.push(comment);
      this.state.data.push(comment);
      let comments = this.state.data;
      //const dbRef = firebase.database().ref(`/comments`);
      //dbRef.push(comments);
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