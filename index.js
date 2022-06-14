const express = require("express"),
  app = express(),
  puerto = process.env.port || 3000,
  bodyParser = require("body-parser");

require("./api/connection/mongoose");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(require('./api/routes/presupuesto')); 

app.listen(puerto, () => console.log("Escuchando en el puerto " + puerto));
