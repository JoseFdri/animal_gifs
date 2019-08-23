import React from 'react';
import {Modal, Button, Spinner} from 'react-bootstrap';
import CarouselBox from './Carousel';

class ModalBox extends React.Component {
    render() {
        return (
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Funny gifs of {this.props.category}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-center">
                    {this.renderCarousel()}
                </Modal.Body>
                <Modal.Footer>
                    <Button  onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    renderCarousel = () => {
        if(this.props.showSpinner) {
            return (
            <Spinner animation="grow" role="status" size="lg">
                <span className="sr-only">Loading...</span>
            </Spinner>);
        }else if (this.props.gifs.length === 0) {
            return (<span>No animals found :(</span>)
        }
        return (
            <CarouselBox gifs={this.props.gifs} category={this.props.category}>
            </CarouselBox>
        );
    }
}

export default ModalBox;