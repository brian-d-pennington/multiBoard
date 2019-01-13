import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import firebase from 'firebase';

class CommentBox extends React.Component {
    state = {
      data: this.props.dataToPass, // this works for now, but will need props from parent state
      realtimeDatabase: this.props.rtDB
    };
    
    

    handleCommentSubmit = comment => {
      let realtimeDB = this.state.realtimeDatabase;
      let commentSection = realtimeDB.child(`comments`);
      commentSection.push(comment);
      this.state.data.push(comment);
      let comments = this.state.data;
      this.setState({data: comments});

      realtimeDB.child(`comments`).once('value').then((snapshot) => {
      const snap = snapshot.val();
      console.log(Object.values(snap));
      })
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