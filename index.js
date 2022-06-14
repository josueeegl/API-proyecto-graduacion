const express = require("express"),
  app = express(),
  puerto = process.env.PORT || 3000,
  cors = require("cors"),
  bodyParser = require("body-parser");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
require("./api/connection/mongoose");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(require("./api/routes/presupuesto"));

app.listen(puerto, () => console.log("Escuchando en el puerto " + puerto));
