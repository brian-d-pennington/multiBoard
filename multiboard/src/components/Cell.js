import React from 'react';
//import axios from 'axios';
import ModalView from './ModalView';
import firebase from 'firebase';

class Cell extends React.Component {
    state = {
        selectedFile: null,
        uploadSuccessful: false
    }

    fileSelectedHandler = event => {
        console.log("file", event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    FileUploadHandler = () => {
        let realtimeRef= firebase.database().ref(`/filerefs`).set({
            name: this.state.selectedFile.name,
            type: this.state.selectedFile.type});
        let thisFile = this.state.selectedFile.name;
        let storageRef = firebase.storage().ref(thisFile);
        let file = this.state.selectedFile;
        storageRef.put(file).then((snapshot) => {
        console.log('Upload successful!');});
        this.setState({
            uploadSuccessful: true
        })
    }
    
    fileDelete = () => {
        let fileToDelete = storageRef.child('images/desert.jpg');
        
        fileToDelete.delete().then(function() {
            console.log("file NOT removed");
          }).catch(function(error) {
            console.log("file NOT removed");
          });
        this.setState({
            selectedFile: null,
            uploadSuccessful: false
        })
    }

    render() {
        if (!this.state.uploadSuccessful) {
            return (
                <div className="cell ui segment" 
                    style={{width: '240px', height: '240px', backgroundColor: '#fff97d' }}>
                    <div className="field" style={{ marginTop: '150px', paddingLeft: '1px' }}>
                            <input 
                            style={{display: 'none' }} 
                            type="file" 
                            onChange={this.fileSelectedHandler} 
                            ref={fileInput => this.fileInput = fileInput} />
                            <button className="ui button" onClick={() => this.fileInput.click()}>Choose File</button>
                            <button className="ui button" onClick={this.FileUploadHandler}>Upload</button>
                        </div>
                   </div>
                );
        }
        else {
            return (
                <div className="cell ui segment"
                style={{width: '240px', height: '240px', backgroundColor: '#fff97d' }}>
                    <button className="ui button" style={{float: 'right', height: '5px', width: '5px',
                    backgroundColor: '#fff97d', color: 'white' }}>X</button>
                    <div className="pic container" >
                        <img src={ require('./images/cassette.jpg') } style={{
                            width: '170px', height: '155px', paddingLeft: '32px', paddingTop: '-25px'}} />
                    </div>
                    <div style={{paddingLeft: '55px'}}>
                        <ModalView />
                    </div>
                    
                </div>
            )
        }
        
    }
}

export default Cell;