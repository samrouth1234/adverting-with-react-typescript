import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const CreateProduct = () => {
  // Set the initial state of 'show' to true
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateProduct;
