import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Button, Modal,
     ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { PAINTINGS } from '../shared/paintings';




class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            paintings: PAINTINGS,
            selectedPainting: null,
            ButtonisModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });

    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        const gallery = this.state.paintings.map(painting => {
            return (
                <div className="col mb-5">
                    <Card className="card">
                        <CardImg className="galleryImage" width="400px" src={painting.image} alt={painting.name} />
                        <CardTitle className="cardTitle"><h2>{painting.name}</h2></CardTitle>
                        <CardBody className="cardBody">
                        <Button className="btn btn-success" onClick={this.toggleModal}><i className="fa fa-shopping-cart" />{' '}Add to cart</Button>
                            <h4 >{painting.price}</h4>
                        </CardBody>
                    </Card>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleLogin}>
                                <FormGroup>
                                    <Label htmlFor="username" >Username</Label>
                                    <Input type="text" id="username" name="username"
                                        innerRef={input => this.username = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password" >Password</Label>
                                    <Input type="password" id="password" name="password"
                                        innerRef={input => this.password = input} />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="remember"
                                            innerRef={input => this.remember = input} />
                                        Remember me
                                    </Label>
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary">Login</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {gallery}
                </div>
            </div>
        );
    }
}



export default Gallery;
