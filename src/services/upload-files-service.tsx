import http from "./http-common";

class UploadFilesService {
  upload(files:any, text:string, onUploadProgress:any) {
    let formData = new FormData();

    for (let i = 0 ; i < files.length ; i++) {
        formData.append("files", files[i]);
    }

    formData.append('text', text)

    return http.post("http://127.0.0.1:5000/api/image-upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }


}

export default new UploadFilesService();