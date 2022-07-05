const express = require("express");
const router = express.Router();
const Transacciones = require("../models/transacciones");
const { isAuthenticated, hasRole } = require("../auth/index");
const fileUpload = require("express-fileupload");
require("../connection/mongoose");
const {
  postTransaccion,
  getTransacciones,
} = require("../controllers/Transacciones");

router.get("/transacciones:id_presupuesto", getTransacciones);

router.get("/transacciones:id", isAuthenticated, (req, res) => {
  Transacciones.findById(req.params.id)
    .exec()
    .then((x) => res.status(200).send(x));
});

router.post(
  "/transacciones",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }),
  isAuthenticated,
  postTransaccion
);

router.put("/transacciones:id", isAuthenticated, (req, res) => {
  Transacciones.findOneAndUpdate({ _id: req.params.id }, req.body).then(() =>
    res.sendStatus(204)
  );
});

router.delete("/transacciones:id", isAuthenticated, (req, res) => {
  Transacciones.findOneAndDelete({ _id: req.params.id })
    .exec()
    .then((x) => res.sendStatus(204));
});

module.exports = router;
