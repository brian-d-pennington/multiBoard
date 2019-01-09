import React from 'react';
import Modal from 'react-responsive-modal';
import ReactAudioPlayer from 'react-audio-player';
import CommentBox from './comments/CommentBox';
import firebase from 'firebase';
import Timestamp from 'react-timestamp';


class ModalView extends React.Component {
    state = {
      open: false,
      FileTypeToConvert: null,
      fileReference: null,
      fileAddress: this.props.fileAddress
    };
   
    onOpenModal = () => {
        let storageRef = firebase.storage().ref();
        let stringChild = this.props.file.name;
        storageRef.child(stringChild).getDownloadURL().then((url) =>{
           this.setState({ fileReference: url,
            open: true });
          });
        };

    onCloseModal = () => {
      this.setState({ open: false });
      this.setState({FileTypeToConvert: null});
      this.setState({fileReference: null}); //
    };


    render() {
      const { open } = this.state;

      if (this.props.type === 'audio') {
        return (
          <div>
            <button className="ui button" onClick={this.onOpenModal}>Enlarge</button>
            <Modal open={open} onClose={this.onCloseModal} center>
              <div className="audio modal">
                <ReactAudioPlayer 
                  src={this.state.fileReference}
                  autoPlay={false}
                  controls={true}
                />
                <div style={{marginTop: '10px', marginBottom: '10px'}}>{this.props.file.name} 
                <br />uploaded on <Timestamp format='full'/></div>
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
              <img src={this.state.fileReference} alt="image"/>
              <div style={{marginTop: '10px', marginBottom: '10px'}}>{this.props.file.name} 
                <br />uploaded on <Timestamp format='full'/></div>
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
              <div className="pdf modal" style={{width: '600px'}}>
                <Document file={this.state.fileReference}
                          onLoadSuccess={this.onDocumentLoadSuccess}>
                          <Page pageNumber={pageNumber} />
                          </Document>
                          <p>Page {pageNumber} of {numPages}</p>
                <div style={{marginTop: '10px', marginBottom: '10px'}}>{this.props.file.name} 
                <br />uploaded on <Timestamp format='full'/></div>
                <CommentBox />
              </div>
            </Modal>
          </div>
        )
      } 
    }
  }
   
  export default ModalView;