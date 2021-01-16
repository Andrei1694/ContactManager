import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';
import axios from 'axios'

const CreateModal = (props) => {
  const {
    buttonLabel,
    className,
    update
  } = props;

  const [modal, setModal] = useState(false);
  const [contact, setContactName] = useState()
  const [phone, setPhoneNumber] = useState()
  
  const toggle = () => setModal(!modal);
  const createContact = async() => {
      try{
        await axios.post(`http://localhost:8080/tutorials`,{
            contactName: contact,
            phoneNumber: phone
        })
      }catch(err){
          console.error(err)
      }
  }
  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Create Contact</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label for="contact">Contact</Label>
        <Input type="text" name="contact" placeholder="Enter contact name" value={contact} onChange={event => setContactName(event.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone Number</Label>
        <Input type="text" name="phone" value={phone} placeholder="Enter phone number" onChange={event => setPhoneNumber(event.target.value)} />
      </FormGroup>
    </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => {
              createContact()
              toggle()
              update()
              }}>Create</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CreateModal;