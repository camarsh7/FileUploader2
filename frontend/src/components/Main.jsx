import React from 'react';


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
    };

    this.fileHandler = this.fileHandler.bind(this);
  }

  fileHandler(ev) {
    ev.preventDefault();

    const data = new FormData();
      for(var i = 0; i < this.uploadInput.files.length; i++) {
          data.append('file', this.uploadInput.files[i]);
      }
    //data.append('file', this.uploadInput.files[0]);
    //data.append('filename', this.fileName.value);

    fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `http://localhost:8000/${body.file}` });
      });
    });

  }

  render() {
    return (
      <form onSubmit={this.fileHandler} >
        <div>
          <input name="files" ref={(ref) => { this.uploadInput = ref; }} type="file" multiple="multiple" />
        </div>
        
        <br />
        <div>
          <button>Upload</button>
        </div>
        
      </form>
    );
  }
}

export default Main;