import React from 'react';
import Modal from 'react-responsive-modal';
import ReactAudioPlayer from 'react-audio-player';

class ModalView extends React.Component {
    state = {
      open: false
    };
   
    onOpenModal = () => {
      this.setState({ open: true });
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
      else if (this.props.type === 'image') {
        return (
          <div>
            <button className="ui button" onClick={this.onOpenModal}>Enlarge</button>
            <Modal open={open} onClose={this.onCloseModal} center>
              <div className="image modal">
                
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
                
              </div>
            </Modal>
          </div>
        )
      }
        
    }
  }
   
  export default ModalView;