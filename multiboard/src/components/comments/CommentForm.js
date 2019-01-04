import React from 'react';

class CommentForm extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      let authorVal = e.target[0].value.trim();
      let textVal = e.target[1].value.trim();
      if (!textVal || !authorVal) {
        return;
      }
      this.props.onCommentSubmit({author: authorVal, text: textVal});
      e.target[0].value = '';
      e.target[1].value = '';
      return;
    }
    render() {
      return(
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <span className="input-group-addon">Name</span>
            <input type="text" placeholder="Your name" className="ui input" />
          </div>
          <div className="input-group">
            <span className="input-group-addon">Comment</span>
            <input type="text" placeholder="Say something..." className="ui input" />
          </div>
          <input type="submit" value="Post" className="ui button" style={{marginTop: '5px'}} />
        </form>
      );
    }
  };

  export default CommentForm;