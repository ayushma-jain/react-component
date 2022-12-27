import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CalendarEvent(props) {
  return (
    <>
      <Modal show={props.isOpen} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" className="form-control" id="startDate"
                />
                </div>
                <div className="form-group">
                    <label htmlFor="startDate">End Date</label>
                    <input type="date" className="form-control"id="endDate" />
                </div>
                <div className="form-group">
                    <label htmlFor="startDate">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter Title..."/>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleEvents}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default CalendarEvent;