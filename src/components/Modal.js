import React from 'react';
import {Modal, Button, Spinner} from 'react-bootstrap'

class ModalBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Funny gifs
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
                <Spinner animation="grow" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </Modal.Body>
            <Modal.Footer>
                <Button  onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
  }
}

export default ModalBox;