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
        if (localFile === '.application/pdf') {
          this.setState({FileTypeToConvert: 'pdf'})
        }
        else if (localFile === '.image/jpg') {
          this.setState({FileTypeToConvert: 'jpg'})
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
                 <FileViewer 
                  fileType={this.state.FileTypeToConvert}
                  filePath='https://res.cloudinary.com/demo/image/upload/c_fit,w_280,q_80/sheep.jpg'
                 />
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
                 <FileViewer 
                  fileType={this.state.FileTypeToConvert}
                  filePath='http://www.africau.edu/images/default/sample.pdf'
                 />
                 <CommentBox />
              </div>
            </Modal>
          </div>
        )
      } 
    }
  }
   
  export default ModalView;