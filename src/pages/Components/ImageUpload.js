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
                <div >
                    <div className="col-md-3 col-sm-4">
                        <img src={selectedImage} alt="" value={selectedImage} id="showPreview" className="w-100"/>
                        Upload image
                    </div>
                </div>
                
                
                <input type="file" className="hide" onChange={previewImage}/>
            </div>
        </>
    )
}
export default ImageUpload;