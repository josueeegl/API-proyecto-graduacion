const express = require("express");
const router = express.Router();
const Presu = require("../models/presupuesto");

router.get("/presupuesto", (req, res) => {
  Presu.find()
    .exec()
    .then((x) => res.status(200).send(x));
});

router.get("/presupuesto:id", (req, res) => {
  Presu.findById(req.params.id)
    .exec()
    .then((x) => res.status(200).send(x));
});

router.post("/presupuesto", (req, res) => {
  Presu.create(req.body).then((x) => res.status(201).send(x));
});

router.put("/presupuesto:id", (req, res) => {
  Presu.findOneAndUpdate(req.params.id, req.body).then(() =>
    res.sendStatus(204)
  );
});

router.delete("/presupuesto:id", (req, res) => {
  Presu.findOneAndDelete(req.params.id)
    .exec()
    .then(() => res.sendStatus(204));
});

module.exports = router;
