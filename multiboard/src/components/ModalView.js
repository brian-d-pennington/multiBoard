import React from 'react';
import Modal from 'react-responsive-modal';
import ReactAudioPlayer from 'react-audio-player';
import CommentBox from './comments/CommentBox';
import firebase from 'firebase';
import Timestamp from 'react-timestamp';
import DisplayIframe from './DisplayIframe';


class ModalView extends React.Component {
    state = {
      open: false,
      FileTypeToConvert: null,
      fileReference: null,
      fileAddress: this.props.fileAddress,
      realtimeDB: this.props.rtDbRef,
      commentData: []
    };
   
    onOpenModal = () => {
        let storageRef = firebase.storage().ref();
        let stringChild = this.props.file.name;
        this.lookForSavedComments();
        storageRef.child(stringChild).getDownloadURL().then((url) =>{
           this.setState({ fileReference: url,
                           open: true });
          });
        };

    onCloseModal = () => {
      this.setState({ open: false,
                      FileTypeToConvert: null,
                      fileReference: null
        });
    };

    lookForSavedComments = () => {
      let realtimeDB = this.state.realtimeDB; 
        realtimeDB.child(`comments`).once('value').then((snapshot) => {
        const snap = snapshot.val();
        if (snap === null) {
          console.log("null");
        }
        else {
          const savedComments = Object.values(snap);
          this.setState({commentData: savedComments});
        }
      });
    }

    render() {
      const { open } = this.state;
      const iframe = '<iframe src='+this.state.fileReference+' width="540" height="450"></iframe>';
      if (this.props.type === 'audio') {
        return (
          <div>
            <button className="ui button" style={{border: '1px solid white'}} onClick={this.onOpenModal}>Enlarge</button>
            <Modal open={open} onClose={this.onCloseModal} center>
              <div className="audio modal">
                <ReactAudioPlayer 
                  src={this.state.fileReference}
                  autoPlay={false}
                  controls={true}
                />
                <div style={{marginTop: '10px', marginBottom: '10px'}}>{this.props.file.name} 
                <br /><div style={{fontSize: '11px'}}>uploaded on <Timestamp format='full'/></div></div>
                <CommentBox rtDB={this.state.realtimeDB} dataToPass={this.state.commentData} />
              </div>
            </Modal>
          </div>
        );
      } 
      else if (this.props.type === 'image') {
        return (
          <div>
            <button className="ui button" style={{border: '1px solid white'}} onClick={this.onOpenModal}>Enlarge</button>
            <Modal open={open} dataToPass={this.state.commentData} onClose={this.onCloseModal} center>
              <img src={this.state.fileReference} style={{width: '350px'}} alt="bunnies"/>
              <div style={{marginTop: '10px', marginBottom: '10px', fontSize: '10px'}}>{this.props.file.name} 
              <br /><div style={{fontSize: '11px'}}>uploaded on <Timestamp format='full'/></div></div>
              <CommentBox rtDB={this.state.realtimeDB} dataToPass={this.state.commentData}/>
            </Modal>
          </div>
        )
      } 
      else {
        return (
          <div>
            <button className="ui button" style={{border: '1px solid white'}} onClick={this.onOpenModal}>Enlarge</button>
            <Modal open={open} dataToPass={this.state.commentData} onClose={this.onCloseModal} center>
              <div className="doc viewer">
                <DisplayIframe iframe={iframe} />
                <div style={{marginTop: '10px', marginBottom: '10px', fontSize: '10px'}}>{this.props.file.name} 
                <br /><div style={{fontSize: '11px'}}>uploaded on <Timestamp format='full'/></div></div>
                <CommentBox rtDB={this.state.realtimeDB} dataToPass={this.state.commentData}/>
              </div>
            </Modal>
          </div>
        )
      } 
    }
  }
   
  export default ModalView;