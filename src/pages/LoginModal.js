import Modal from 'react-bootstrap/Modal';

function LoginModal(props){
    return(
        <>
            <Modal
            show={props.modalStatus}
            onHide={props.handleClose}
            aria-labelledby="ModalHeader"
            >
                <Modal.Header closeButton onClick={props.handleClose}>
                    <Modal.Title>User Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='form-group pt-3'>
                            <label>Email :</label>
                            <input type="text" className='form-control' id="username" name="username" placeholder='Enter Your Email...'/>
                        </div>
                        <div className='form-group pt-3'>
                            <label>Password :</label>
                            <input type="text" className='form-control' id="username" name="username" placeholder='Enter Your Password...'/>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-secondary' onClick={props.handleClose}>
                        Cancel
                    </button>
                    <button className='btn btn-success' >
                        Login
                    </button>
                   
                </Modal.Footer>
            </Modal>

        </>
    ) 
}
export default LoginModal;