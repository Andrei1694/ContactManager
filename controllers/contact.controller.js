const db = require("../models");
const Contact = db.contacts;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = async (req, res) => {
    // Validate request
    if (!req.body.contactName) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Tutorial
    const tutorial = {
        contactName: req.body.contactName,
        phoneNumber: req.body.phoneNumber,
    };

    // Save Tutorial in the database
    try {
        const result = Contact.create(tutorial)
        res.json(result)
    } catch (err) {
        res.status(500).json({
            message:
                err.message || "Some error occurred while creating the Tutorial."
        });
    };

};

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {
    try {
        const result = await Contact.findAll()
        return res.json(result)
    } catch (err) {
        res.status(500).json({
            message:
                err.message || "Some error occurred while retrieving tutorials."
        });
    }
};

exports.findById = async (req,res) => {
    const id = req.params.id;
    try{
        const result = await Contact.findByPk(id)
        res.json(result)
    }catch(err){
        res.status(500).json({
            message: "Error retrieving Tutorial with id=" + id
          });
    }
}

exports.update = async (req, res) => {
    const id = req.params.id;
  
    const contact = await Contact.update(req.body, {
      where: { id: id }
    })
    if(contact===1) {
        const result = await Contact.findByPk(id)
        res.json(result)
    }else{
        res.json({message: 'err'})
    }
  
  };

  exports.deleteById = async (req, res) => {
    const id = req.params.id;
  
    const contact = await Contact.destroy({
      where: { id: id }
    })
    if(contact===1) {
        const result = await Contact.findByPk(id)
        res.json(result)
    }else{
        res.json({message: 'err'})
    }
  };