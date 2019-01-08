import React from 'react';
import Modal from 'react-responsive-modal';
import ReactAudioPlayer from 'react-audio-player';
import CommentBox from './comments/CommentBox';
import firebase from 'firebase';


class ModalView extends React.Component {
    state = {
      open: false,
      FileTypeToConvert: null,
      fileReference: null
    };
   
    onOpenModal = () => {
        let storageRef = firebase.storage().ref();
        let getUrl = storageRef.child(this.props.file).getDownloadURL().then((url) =>{
           return url;
          });
        this.setState({ fileReference: getUrl,
                        open: true });
        };

      
   
    onCloseModal = () => {
      this.setState({ open: false });
      this.setState({FileTypeToConvert: null});
      this.setState({fileReference: null}); //
    };
    render() {
      const { open } = this.state;
      console.log("props", this.props.type);
      if (this.props.type === 'audio') {
        return (
          <div>
            <button className="ui button" onClick={this.onOpenModal}>Enlarge</button>
            <Modal open={open} onClose={this.onCloseModal} center>
              <div className="audio modal">
                <ReactAudioPlayer 
                  src='http://nonagon.us/sites/default/files/Nonagon%20-%20Vikings%20%28Music%20Box%20Remix%29.mp3'
                  autoPlay={false}
                  controls={true}
                />
                <CommentBox />
              </div>
            </Modal>
          </div>
        );
      } 
      else if (this.props.type === 'image') {
        return (
          <div>
            <button className="ui button" onClick={this.onOpenModal}>Enlarge</button>
            <Modal open={open} onClose={this.onCloseModal} center>
              <img src={this.state.fileReference} alt="bunnies"/>
              <CommentBox />
            </Modal>
          </div>
        )
      } 
      else {
        return (
          <div>
            <button className="ui button" onClick={this.onOpenModal}>Enlarge</button>
            <Modal open={open} onClose={this.onCloseModal} center>
              <div className="document modal">
                 <div>should NOT be seeing this</div>
                 <CommentBox />
              </div>
            </Modal>
          </div>
        )
      } 
    }
  }
   
  export default ModalView;