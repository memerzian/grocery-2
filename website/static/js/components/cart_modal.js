import React, {Component} from 'react';
import {ModalHeader, ModalBody, ModalFooter, Modal} from 'reactstrap';

class CartModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <React.Fragment>
            <Modal size="md" isOpen={this.props.isOpen} toggle={() => this.props.toggleModal()}>
                <ModalHeader>
                    Meals | List
                </ModalHeader>
                <ModalBody>
                    Test
                </ModalBody>
                <ModalFooter>
                    <button type="button" className="btn btn-secondary" onClick={() => this.props.toggleModal()}>
                        Exit
                    </button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    } 
}

export default CartModal;