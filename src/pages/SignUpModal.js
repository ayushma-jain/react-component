import Modal from 'react-bootstrap/Modal';

function SignUpModal(props){
    return(
        <>
            <Modal
            show={props.modalStatus}
            onHide={props.handleClose}
            aria-labelledby="ModalHeader"
            className='modal-lg'
            >
                <Modal.Header closeButton onClick={props.handleClose}>
                    <Modal.Title>User Registration</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='row'>
                            <div className='form-group col-lg-6 col-sm-12 pt-3'>
                                <label for="username">Name :</label>
                                <input type="text" className='form-control' id="username" name="username" placeholder='Enter Your Name...'/>
                            </div>
                            <div className='form-group pt-3 col-lg-6 col-sm-12'>
                                <label for="emailID">Email :</label>
                                <input type="text" className='form-control' id="emailID" name="emailID" placeholder='Enter Your Email...'/>
                            </div>
                            <div className='form-group pt-3 col-lg-6 col-sm-12 '>
                                <label for="password">Password :</label>
                                <input type="text" className='form-control' id="password" name="password" placeholder='Enter Your Password...'/>
                            </div>
                            <div className='form-group pt-3 col-lg-6 col-sm-12 '>
                                <label for="ConfPassword">Confirm Password :</label>
                                <input type="text" className='form-control' id="ConfPassword" name="ConfPassword" placeholder='Enter Confirm Password...'/>
                            </div>
                            <div className='form-group pt-3 col-lg-6 col-sm-12 '>
                                <label for="phoneNumber">Contact Number :</label>
                                <input type="text" className='form-control' id="phoneNumber" name="phoneNumber" placeholder='Enter Your Contact Number...'/>
                            </div>
                            <div className='form-group pt-3 col-lg-6 col-sm-12 '>
                                <label for="dob">Date Of Birth :</label>
                                <input type="date" className='form-control' id="dob" name="dob" placeholder='Select Your Date Of Birth...'/>
                            </div>
                            <div className='form-group pt-3 col-lg-6 col-sm-12 '>
                                <label for="gender">Gender :</label>
                                <select className='form-control' id="gender" name="gender" >
                                    <option value="">Select Gender...</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className='form-group pt-3 col-lg-12 col-sm-12 '>
                                <label for="address">Address :</label>
                                <textarea className='form-control' id="address" name="address" />
                            </div>
                        </div>
                        
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-secondary' onClick={props.handleClose}>
                        Cancel
                    </button>
                    <button className='btn btn-success' >
                        Signup
                    </button>
                   
                </Modal.Footer>
            </Modal>

        </>
    ) 
}
export default SignUpModal;