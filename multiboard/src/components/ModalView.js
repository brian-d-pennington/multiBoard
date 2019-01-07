import React from 'react';
import Modal from 'react-responsive-modal';
import ReactAudioPlayer from 'react-audio-player';
//import FileViewer from 'react-file-viewer';
import CommentBox from './comments/CommentBox';
import firebase from 'firebase';

class ModalView extends React.Component {
    state = {
      open: false,
      FileTypeToConvert: null,
      fileReference: null
    };
   
    onOpenModal = () => {
      this.setState({ open: true });
      var storage = firebase.storage();
      var pathReference = storage.ref(this.props.file.name);
      var test = pathReference.getDownloadURL().then(function(url) {
      // Or inserted into an <img> element:
        var img = document.getElementById('myimg');
        img.src = url;
        this.setState({fileReference: img.src});
      }).catch(function(error) {
        // Handle any errors
      });
      
      // if (this.props.type !== 'audio') {
      //   if (localFile === '.application/pdf') {
      //     this.setState({FileTypeToConvert: 'pdf'})
      //   }
      //   else if (localFile === '.image/jpg') {
      //     this.setState({FileTypeToConvert: 'jpg'})
      //   }
      //   else {
      //     this.setState({FileTypeToConvert: 'docx'})
      //   }
      // }

    };
   
    onCloseModal = () => {
      this.setState({ open: false });
      this.setState({FileTypeToConvert: null});
      this.setState({fileReference: null}); //
    };
    // src={this.props.file.name}
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
              <div className="image modal">
                 <img src={this.state.fileReference}/>
                 <CommentBox />
              </div>
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
                 
                 <CommentBox />
              </div>
            </Modal>
          </div>
        )
      } 
    }
  }
   
  export default ModalView;