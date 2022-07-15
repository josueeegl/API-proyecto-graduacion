const fs = require("fs-extra");
const Transacciones = require("../models/transacciones");
require("../connection/mongoose");

module.exports = {
  getGraphicsIng: (req, res) => {
    //const { _id } = req.user;
    Transacciones.find({ usuario_id: req.params.id })
      .exec()
      .then((x) => {
        if (x.length > 0) {
          var array = [];
          var arr = [];
          var salario = 0.0,
            aguinaldo = 0.0,
            premio = 0.0,
            inversiones = 0.0,
            otro = 0.0;
          x.forEach((item) => {
            item.tipo === "Ingreso" ? array.push(item) : null;
          });

          array.forEach((z) => {
            z.nombre === "Salario" ? (salario += z.valor) : null;
            z.nombre === "Aguinaldo" ? (aguinaldo += z.valor) : null;
            z.nombre === "Premio" ? (premio += z.valor) : null;
            z.nombre === "Inversiones" ? (inversiones += z.valor) : null;
            z.nombre === "Otro" ? (otro += z.valor) : null;
          });

          salario > 0
            ? arr.push({
                name: "Salario",
                population: salario,
                color: "red",
                legendFontColor: "red",
                legendFontSize: 12,
              })
            : null;

          aguinaldo > 0
            ? arr.push({
                name: "Aguinaldo",
                population: aguinaldo,
                color: "yellow",
                legendFontColor: "yellow",
                legendFontSize: 12,
              })
            : null;

          premio > 0
            ? arr.push({
                name: "Premios",
                population: premio,
                color: "green",
                legendFontColor: "green",
                legendFontSize: 12,
              })
            : null;

          inversiones > 0
            ? arr.push({
                name: "Inversiones",
                population: inversiones,
                color: "gray",
                legendFontColor: "gray",
                legendFontSize: 12,
              })
            : null;
          otro > 0
            ? arr.push({
                name: "Otros",
                population: otro,
                color: "blue",
                legendFontColor: "blue",
                legendFontSize: 12,
              })
            : null;

          return res.status(200).send(arr);
        }

        res.status(200).send(x);
      });
  },
};
