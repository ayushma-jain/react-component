import React, { useState } from "react";
function ImageUpload(){
    const [selectedImage, setSelectedImage] = useState(null);

    const previewImage = (event) => {
        console.log(event.target.files[0]);
        
        var url = URL.createObjectURL(event.target.files[0]);
        setSelectedImage(url);
    }
    return (
        <>
            <div className="imageUploadDiv">
                <img src={selectedImage} alt="" value={selectedImage} id="showPreview" className="w-10"/>
                Upload image
                <input type="file" className="hide" onChange={previewImage}/>
            </div>
        </>
    )
}
export default ImageUpload;