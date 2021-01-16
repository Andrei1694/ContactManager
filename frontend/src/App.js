import axios from 'axios';
import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import UpdateModal from './components/UpdateModal';
import DeleteModal from './components/DeleteModal';
import CreateModal from './components/CreateModal';

class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        contacts: []
      }
      this.update = this.update.bind(this)
    }

    async getContacts() {
      const contacts = await axios("http://localhost:8080/tutorials/findAll")
      this.setState({contacts: contacts.data})
    }

    renderContacts(){
      const { contacts } = this.state
      return contacts.map(contact => {
        return(
          <div className ="card mt-2" key={contact.id}>
          <div className = "card-body row align-items-center">
              <div className="col-sm-12 d-flex">
              <h5 className="ml-2 mr-5">{contact.contactName}</h5>
             <h5 className="mr-2">{contact.phoneNumber}</h5>
             <div className = "ml-auto mr-2 buttons row">
             <UpdateModal buttonLabel="Update" id={contact.id} update={this.update}/>
             <DeleteModal buttonLabel="Delete" id={contact.id} update={this.update}/>
              </div>
             </div>
          </div>
        </div>
        )
      })
    }

    componentDidMount() {
      this.getContacts()
    }

    update(){
      this.getContacts()
    }

    render(){
      return(
        <div className="App">
          <Navbar />
           <div className = "container">
             <div className = "row">
                <div className ="col-12 mt-5">
                   <div className = "row justify-content-between align-items-center no-gutters">
                   <h4>Contacts</h4>
                   <CreateModal buttonLabel="New Contact" update={() => this.update()} />
                   </div>
                  {this.renderContacts()}
                </div>
             </div>
           </div>
        </div>
      )
    }
}

export default App;
