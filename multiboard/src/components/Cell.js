import React from 'react';
import axios from 'axios';

class Cell extends React.Component {
    state = {
        selectedFile: null
    }
    
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    FileUploadHandler = () => {
        const fd = new FormData();
        fd.append('file', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('https://us-central1-uploaderapp-25018.cloudfunctions.net/uploadFile', fd)
        .then(res => {
            console.log(res);
        }) }
    
    render() {
        return (
        <div className="cell ui segment" 
            style={{width: '240px', height: '240px', backgroundColor: '#ffffcc' }}>
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
}

export default Cell;