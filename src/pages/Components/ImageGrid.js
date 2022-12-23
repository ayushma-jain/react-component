import React,{useState} from 'react';
import {FaSave} from 'react-icons/fa';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// Rendering individual images
const Image = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <div className="col-md-2 col-sm-6">
    <Popup trigger={<img
        alt={`img - ${image.id}`}
        src={image.src}
        className="w-100 imagePreview p-1"
        style={{'height': '200px', 'cursor':'pointer'}}
      />} 
      open={isOpen}
      onOpen={() => setIsOpen(!isOpen)}
      modal>
    <button className="close" >
    &times;
  </button>
    <img
        alt={`img - ${image.id}`}
        src={image.src}
        className="w-100 imagePreview p-1"
        style={{'height': '500px'}}
      />
    </Popup>
    </div>
  );
};
// ImageList Component//
const ImageGride = ({ images }) => {
  // render each image by calling Image component
  const renderImage = (image, index) => {
    return <Image image={image} key={`${image.id}-image`} />;
  };
  // Return the list of files//
  return (
    <div className="imagePreviewDiv"><div className="row">{images.map(renderImage)}</div></div>
  );
};
export default ImageGride;