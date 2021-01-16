import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';
import axios from 'axios'

const UpdateModal = (props) => {
  const {
    buttonLabel,
    className,
    id,
    update
  } = props;

  const [modal, setModal] = useState(false);
  const [contact, setContactName] = useState()
  const [phone, setPhoneNumber] = useState()
  
  const toggle = () => setModal(!modal);

  useEffect(async () => {
      const response = await axios.get(`http://localhost:8080/tutorials/findById/${id}`)
      setContactName(response.data.contactName)
      setPhoneNumber(response.data.phoneNumber)
  }, [])

  const updateContact = async() => {
      try{
        await axios.put(`http://localhost:8080/tutorials/${id}`,{
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
        <ModalHeader toggle={toggle}>Update Contact</ModalHeader>
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
              updateContact()
              toggle()
              update()
              }}>Update</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default UpdateModal;