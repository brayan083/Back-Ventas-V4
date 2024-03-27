const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());



app.use('/home', require('./routes/first.js'));

app.listen(3001, () => {
  console.log("Servidor iniciado en http://localhost:3001/");
});
