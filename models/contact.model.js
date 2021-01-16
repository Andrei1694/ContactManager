module.exports = (sequelize, DataType) => {
    const Contact = sequelize.define("contacts", {
      contactName: {
        type: DataType.STRING
      },
      phoneNumber: {
          type: DataType.STRING
      }
    });
  
    return Contact;
  };