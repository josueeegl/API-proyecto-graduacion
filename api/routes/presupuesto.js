const express = require("express");
const router = express.Router();
const Presu = require("../models/presupuesto");
const Transacciones = require("../models/transacciones");
const { isAuthenticated, hasRole } = require("../auth/index");
require("../connection/mongoose");

router.get("/presupuesto", isAuthenticated, (req, res) => {
  const { _id } = req.user;
  Presu.find({ usuario_id: _id })
    .exec()
    .then((x) => {
      res.status(200).send(x);
    });
});

router.get("/presupuesto:id", (req, res) => {
  Presu.findById(req.params.id)
    .exec()
    .then((x) => res.status(200).send(x));
});

router.post("/presupuesto", isAuthenticated, (req, res) => {
  const { _id } = req.user;
  Presu.create({ ...req.body, usuario_id: _id }).then((x) =>
    res.status(201).send(x)
  );
});

router.put("/presupuesto:id", isAuthenticated, (req, res) => {
  Presu.findOneAndUpdate({ _id: req.params.id }, req.body).then(() =>
    res.sendStatus(204)
  );
});

router.delete("/presupuesto:id", isAuthenticated, (req, res) => {
  console.log(req.params.id);
  Presu.findOneAndDelete({ _id: req.params.id })
    .exec()
    .then(() => {
      Transacciones.find({ presupuesto_id: req.params.id })
        .exec()
        .then((x) => {
          x.forEach(async (item) => {
            await Transacciones.findOneAndDelete({ _id: item._id }).exec();
          });
          res.sendStatus(204);
        });
    });
});

module.exports = router;
