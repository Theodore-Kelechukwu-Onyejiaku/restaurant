import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Row, Label, Col } from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            isModalOpen : false
        }

        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }

    handleSubmit(values){
        this.toggleModal();
        console.log("Current state is:" + JSON.stringify(values));
        alert("Current state is:" + JSON.stringify(values));
    }

    render(){
        return(
            <React.Fragment>
                <Button onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span>{" "}Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=> {this.handleSubmit(values)}}>
                            <Row className="form-group">
                                <Col md={12}>
                                <Label htmlfor="rating"> <strong>Rating</strong></Label>
                                <Control.select model=".rating" id="rating" className="form-control" name="rating">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <Label htmlFor="author"><strong>Your Name</strong></Label>
                                    <Control.text model=".author" id="author" className="form-control" name="author" validators={{minLength:minLength(2), maxLength: maxLength(15)}}/>
                                    <Errors className="text-danger" model=".author" show="touched" 
                                        messages={{required: "Required", minLength: "Must be greater than  2 mumbers",
                                        maxLength: "Must be 15 numbers or less"}}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlfor="comment" md={6}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment" rows="12" className="form-control"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6}}>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
            
        )
    }
}


export default CommentForm;