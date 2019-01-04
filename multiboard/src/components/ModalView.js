import React from 'react';
import Modal from 'react-responsive-modal';
import ReactAudioPlayer from 'react-audio-player';
import FileViewer from 'react-file-viewer';

class ModalView extends React.Component {
    state = {
      open: false,
      FileTypeToConvert: null
    };
   
    onOpenModal = () => {
      this.setState({ open: true });
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
                  autoPlay
                  controls
                />
              </div>
            </Modal>
          </div>
        );
      } 
      else {
        return (
          <div>
            <button className="ui button" onClick={this.onOpenModal}>Enlarge</button>
            <Modal open={open} onClose={this.onCloseModal} center>
              <div className="image and doc modal">
                 <FileViewer 
                  fileType={this.state.FileTypeToConvert}
                  filePath={this.props.file.name}
                 />
              </div>
            </Modal>
          </div>
        )
      } 
    }
  }
   
  export default ModalView;