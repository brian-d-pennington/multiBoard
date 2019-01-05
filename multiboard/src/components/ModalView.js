import React from 'react';
import Modal from 'react-responsive-modal';
import ReactAudioPlayer from 'react-audio-player';
import FileViewer from 'react-file-viewer';
import CommentBox from './comments/CommentBox';

class ModalView extends React.Component {
    state = {
      open: false,
      FileTypeToConvert: null,
      fileReference: null
    };
   
    onOpenModal = () => {
      this.setState({ open: true });
      this.setState({fileReference: this.props.file});
      const localFile = this.props.type;
      if (this.props.type !== 'audio') {
        if (localFile === '.image/jpeg') {
          this.setState({FileTypeToConvert: 'jpg'})
        }
        else if (localFile === '.application/pdf') {
          this.setState({FileTypeToConvert: 'pdf'})
        }
        else {
          this.setState({FileTypeToConvert: 'docx'})
        }
      }

    };
   
    onCloseModal = () => {
      this.setState({ open: false });
      this.setState({FileTypeToConvert: null});
      this.setState({fileReference: null}); //
    };
   
    render() {
      const { open } = this.state;
      console.log("props", this.props.file);
      if (this.props.type === 'audio') {
        return (
          <div>
            <button className="ui button" onClick={this.onOpenModal}>Enlarge</button>
            <Modal open={open} onClose={this.onCloseModal} center>
              <div className="audio modal">
                <ReactAudioPlayer 
                  src={this.props.file.name}
                  autoPlay={false}
                  controls={true}
                />
                <CommentBox />
              </div>
            </Modal>
          </div>
        );
      } 
      else if (this.props.type === '.image/jpeg') {
        return (
          <div>
            <button className="ui button" onClick={this.onOpenModal}>Enlarge</button>
            <Modal open={open} onClose={this.onCloseModal} center>
              <div className="image modal">
                 <FileViewer 
                  fileType={this.state.FileTypeToConvert}
                  filePath='https://firebasestorage.googleapis.com/v0/b/capstone-multiboard.appspot.com/o/nicooooo.jpg?alt=media&token=b3215d10-2790-48b9-a6c0-6c19378da149'
                 />
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
              <div className="pdf modal">
                 <FileViewer 
                  fileType={this.state.FileTypeToConvert}
                  filePath='https://firebasestorage.googleapis.com/v0/b/capstone-multiboard.appspot.com/o/sampleAcrobatFile.pdf?alt=media&token=fa21d60d-2e4c-4101-a4ad-72fc1da05f5a'
                 />
              </div>
            </Modal>
          </div>
        )
      } 
    }
  }
   
  export default ModalView;