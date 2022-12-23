
import { useDropzone } from "react-dropzone";
import {FaCloudUploadAlt} from "react-icons/fa";
function Dropzone({ onDrop, accept, open }) {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept,
      onDrop,
    });
 
  return (
    <div>
      <div {...getRootProps({ className: "dropzone" })}>
        <input className="input-zone" {...getInputProps()} />
        <div className="text-center">
          
          <p className="dropzone-content">
            Darg & Drop files and Click to select
            
          </p>
          <button type="button" onClick={open} className="btn">
            <FaCloudUploadAlt style={{'height': '100px','width': '50px'}} />
          </button>
        </div>
      </div>
      
    </div>
  );
}
export default Dropzone;