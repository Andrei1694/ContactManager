const express = require("express");
const cors = require("cors");
const db = require("./models");
const contactsRouter = require("./routes/contact.routes");
const { route } = require("./routes/contact.routes");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
db.sequelize.sync()

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
app.use('/tutorials', contactsRouter)
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
})