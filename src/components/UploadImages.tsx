
import { IonCard, IonLabel, IonCardHeader, IonButton, IonInput, IonCardTitle } from '@ionic/react';
import axios from 'axios';
import './main.css';
import React, {useCallback, useState}from "react"
import { useDropzone } from "react-dropzone"
import UploadFilesService from "../services/upload-files-service";
import Button from '@material-ui/core/Button';




function UploadImages() {

    const [text, setText] = useState("");
    const [files, setFiles] = useState([]);
    const [message, setMessage] = useState("");
    const [progres, setprogress] = useState(0);

    const onDrop = useCallback((acceptedFiles:any) => {
      // Do something with the files
      setMessage("")
      setprogress(0);
      setFiles(
        acceptedFiles.map((file:any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    const handleSubmit = (evt:any) => {
        evt.preventDefault();
        UploadFilesService.upload(files,text, (event:any) => {
            setprogress(Math.round((100 * event.loaded) / event.total))
          }).then(res => {
            setMessage(res.data.message)
            setFiles([])
            setText("")
          })
    }

    const images = files.map((file:any) => (
        <div key={file.name}>
          <div>
            <img src={file.preview} style={{ width: "200px" }} alt="preview" />
          </div>
        </div>
      ))

 
    return (
      <div className="container">
      <div className="form-card">
        <IonCard className='ion-card'>
            <IonCardHeader>
                <IonCardTitle>Upload photos</IonCardTitle>
            </IonCardHeader>
        <form action="" onSubmit={handleSubmit}>
      <div {...getRootProps()} className='images-upload-box'>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p className='upload-promt'>Click here to select files from device</p>
        }
      </div> 
      <div className="form-control">
      <IonLabel>Enter Text</IonLabel>
        <IonInput placeholder="Enter Text" value={text} onIonChange={(e:any) => setText(e.target.value)}></IonInput>
      </div> 
      <Button variant="contained" type='submit' color="primary">
      Upload
     </Button>

      </form>
      {progres >0 &&
       <div className="progress" >{progres} %</div>
      }
     
      <div className="message">{message}</div>
      </IonCard>
      </div>
      <div className="uploaded-images">
      {images}
        </div>
      </div>
      
      
    )
}


export default UploadImages;