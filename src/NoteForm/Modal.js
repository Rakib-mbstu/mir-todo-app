import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { uid } from "uid";

function ChangeNoteModal({ addNote, updateNote, defaultNote, label }) {
  const [show, setShow] = useState(false);
  const [priority, setPriority] = useState(0);
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [bShow, setBshow] = useState("true");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    if (defaultNote) {
      setTitle(defaultNote.title);
      setDesc(defaultNote.desc);
      setPriority(defaultNote.priority);
      setStatus(defaultNote.status);
      setBshow(false);
    }
  };
  const handlePriorityChange = (value) => {
    setPriority(value);
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  const handleSaveChanges = () => {
    if (defaultNote) {
      defaultNote.title = title;
      defaultNote.desc = desc;
      defaultNote.priority = priority;
      defaultNote.status = status;
      defaultNote.updatedAt =  new Date().toUTCString() ;
      updateNote(defaultNote);
    } else {
      const newNote = {
        id: uid(),
        title: title,
        desc: desc,
        priority: priority,
        status: status,
        createdAt:  new Date().toUTCString(),
        updatedAt: new Date().toUTCString(),
      };
      console.log("Note Data:", newNote);
      addNote(newNote);
    }
    resetTheModal();
    handleClose();
  };
  const resetTheModal = () => {
    if (bShow) {
      setPriority(0);
      setStatus("Pending");
      setDesc("");
      setTitle("");
    }
  };
  const handleNameChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDescChange = (event) => {
    console.log(event.target.value);
    setDesc(event.target.value);
  };
  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        {label}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Details of Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" onChange={handleNameChange}>
              <Form.Label>Note Name</Form.Label>
              <Form.Control defaultValue={title} autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" onChange={handleDescChange}>
              <Form.Label>Note Details</Form.Label>
              <Form.Control as="textarea" defaultValue={desc} rows={3} />
            </Form.Group>

            <Form.Group controlId="priority">
              <Form.Label>Priority</Form.Label>
              <div style={{ fontSize: "24px" }}>
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    onClick={() => handlePriorityChange(value)}
                    style={{
                      cursor: "pointer",
                      color: value <= priority ? "gold" : "gray",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </Form.Group>
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Select onChange={handleStatusChange} defaultValue={status}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
                <option value="Failed">Failed</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={resetTheModal}>
            Reset
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChangeNoteModal;
