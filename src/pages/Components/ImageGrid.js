// Rendering individual images
const Image = ({ image }) => {
  return (
    <div className="col-md-3 col-sm-6">
      <img
        alt={`img - ${image.id}`}
        src={image.src}
        className="w-100 p-4"
        style={{'height': '200px' }}
      />
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
    <div className="row imagePreviewDiv">{images.map(renderImage)}</div>
  );
};
export default ImageGride;