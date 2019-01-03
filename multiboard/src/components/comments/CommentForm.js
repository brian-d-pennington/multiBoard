import React from 'react';

const CommentForm = React.createClass({
    handleSubmit = e => {
      e.preventDefault();
      var authorVal = e.target[0].value.trim();
      var textVal = e.target[1].value.trim();
      if (!textVal || !authorVal) {
        return;
      }
      this.props.onCommentSubmit({author: authorVal, text: textVal});
      e.target[0].value = '';
      e.target[1].value = '';
      return;
    },
    render = () => {
      return(
        <form className="comment-form form-group" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <span className="input-group-addon">Name</span>
            <input type="text" placeholder="Your name" className="form-control" />
          </div>
          <div className="input-group">
            <span className="input-group-addon">Comment</span>
            <input type="text" placeholder="Say something..." className="form-control" />
          </div>
          <input type="submit" value="Post" className="btn btn-primary" />
        </form>
      );
    }
  });

  export default CommentForm;