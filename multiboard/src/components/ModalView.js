import React from 'react';
import Modal from 'react-responsive-modal';

class ModalView extends React.Component {
    state = {
      open: false,
    };
   
    onOpenModal = () => {
      this.setState({ open: true });
    };
   
    onCloseModal = () => {
      this.setState({ open: false });
    };
   
    render() {
      const { open } = this.state;
      return (
        <div>
          <button className="ui button" onClick={this.onOpenModal}>Enlarge</button>
          <Modal open={open} onClose={this.onCloseModal} center>
            <h2>Modal depends on the file type:</h2>
            <h3>Audio: wav player</h3>
            <h3>Image: pic viewer</h3>
            <h3>Text: doc reader</h3>
          </Modal>
        </div>
      );
    }
  }
   
  export default ModalView;