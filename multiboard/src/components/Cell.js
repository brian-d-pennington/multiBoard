import React from 'react';
import ModalView from './ModalView';
import firebase from 'firebase';

class Cell extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            selectedFile: null,
            uploadSuccessful: false,
            typeOfMediaFile: null,
            fileAddress: null,
            toClearCell: this.props.clearCell
        }
      }

    clearCellOnArchive = () => {  //to be triggered if toClearCell = true
         this.setState({
            selectedFile: null,
            uploadSuccessful: false,
            typeOfMediaFile: null,
            toClearCell: false
        });
        console.log("File ref moved to Archives");
        
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    getRandomIdNumber = max => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    FileUploadHandler = () => {
        let thisFile = this.state.selectedFile.name;
        let fileId = this.getRandomIdNumber(9999);
        firebase.database().ref('files/'+fileId).set({
            file: thisFile
          });
        let storageRef = firebase.storage().ref(thisFile);
        let file = this.state.selectedFile;
        storageRef.put(file).then((snapshot) => {
        console.log("File uploaded! "+snapshot);});
        this.setState({
            uploadSuccessful: true,
            typeOfMediaFile: this.state.selectedFile.type,
            //fileAddress: thisFile,
            fileAddress: file
        });
        
    }
    
    fileDelete = () => {
        let dbRef = firebase.storage().ref();
        let fileToDelete = dbRef.child(this.state.selectedFile.name);
        fileToDelete.delete().then(() => {
            console.log("file removed");
          }).catch((error) => {
            console.log("file NOT removed");
          });
        this.setState({
            selectedFile: null,
            uploadSuccessful: false,
            typeOfMediaFile: null,
            activeCell: false
        })
    }

    render() {
        if (this.props.clearCell === true && this.state.selectedFile != null) {
            this.clearCellOnArchive();
        }
        
        if (!this.state.uploadSuccessful) {
            return (
                <div className="cell ui segment" 
                    style={{width: '240px', height: '240px', backgroundColor: '#F9D79A' }}>
                    <div className="field" style={{ marginTop: '150px', paddingLeft: '1px' }}>
                            <input 
                            style={{display: 'none' }} 
                            type="file" 
                            onChange={this.fileSelectedHandler} 
                            ref={fileInput => this.fileInput = fileInput} />
                            <button className="ui button" style={{border: '1px solid white', marginLeft: '-2px'}} onClick={() => this.fileInput.click()}>Choose File</button>
                            <button className="ui button" style={{border: '1px solid white', marginLeft: '-2px'}} onClick={this.FileUploadHandler}>Upload</button>
                        </div>
                   </div>
                );
        }
        else {
            if (this.state.typeOfMediaFile === "audio/mp3") {
                return (
                    <div className="cell ui segment"
                    style={{width: '240px', height: '240px', backgroundColor: '#F9D79A' }}>
                        <button className="ui button" style={{float: 'right', height: '5px', width: '5px',
                        backgroundColor: '#F9D79A', color: 'white' }} onClick={this.fileDelete}>X</button>
                        <div className="pic container" >
                            <img src={ require('./images/cassette.jpg') } alt={this.state.fileAddress.name}
                                style={{
                                width: '170px', height: '155px', paddingLeft: '32px', paddingTop: '-25px'}} />
                        </div>
                        <div style={{paddingLeft: '55px'}}>
                            <ModalView file={this.state.fileAddress} type={'audio'}/>
                        </div>
                        
                    </div>
                )
            }
            else if (this.state.typeOfMediaFile === "image/jpeg") {
                return (
                    <div className="cell ui segment"
                    style={{width: '240px', height: '240px', backgroundColor: '#F9D79A' }}>
                        <button className="ui button" style={{float: 'right', height: '5px', width: '5px',
                        backgroundColor: '#F9D79A', color: 'white' }} onClick={this.fileDelete}>X</button>
                        <div className="pic container" >
                            <img src={ require('./images/image.jpg') } alt={this.state.fileAddress.name}
                             style={{width: '170px', height: '155px', paddingLeft: '32px', paddingTop: '-25px'}} />
                        </div>
                        <div style={{paddingLeft: '55px'}}>
                            <ModalView file={this.state.fileAddress} type={'image'}/>
                        </div>
                        
                    </div>
                )
            }
            else {
                return (
                    <div className="cell ui segment"
                    style={{width: '240px', height: '240px', backgroundColor: '#F9D79A' }}>
                        <button className="ui button" style={{float: 'right', height: '5px', width: '5px',
                        backgroundColor: '#F9D79A', color: 'white' }} onClick={this.fileDelete}>X</button>
                        <div className="pic container" >
                            <img src={ require('./images/document.jpg') } alt={this.state.fileAddress.name} style={{
                                width: '170px', height: '155px', paddingLeft: '32px', paddingTop: '-25px'}} />
                        </div>
                        <div style={{paddingLeft: '55px'}}>
                        <ModalView file={this.state.fileAddress} address={this.state.fileAddress} type={this.state.typeOfMediaFile}/>
                        </div>
                        
                    </div>
                )
            }
        }
        
    }
}

export default Cell;