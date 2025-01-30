const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
require('dotenv').config();

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client','build', 'index.html'));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client','build', 'index.html'));
})

app.use("/contact", require("./routes/contact"));

 //Listen server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is running on port 5000!");
});