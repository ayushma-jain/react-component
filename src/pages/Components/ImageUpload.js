import React, { useCallback, useState } from "react";
import cuid from "cuid";
import Dropzone from "./Dropzone";
import ImageGrid from "./ImageGrid";

function ImageUpload() {
  const [images, setImages] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);
  return (
    <>
        <h1>Drag and drop Image Uploader</h1>
        <div className="imageUploadDiv" >
          <Dropzone onDrop={onDrop} accept={"image/*"} />
          
        </div>
        <hr/>
        <ImageGrid images={images} />
        
        
        
        
    </>
    
  );
}


export default ImageUpload;