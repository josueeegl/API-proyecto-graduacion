const fs = require("fs-extra");
const Transacciones = require("../models/transacciones");
const { gxIngresos, gxGastos } = require("../functions/graficos");
require("../connection/mongoose");

module.exports = {
  getGraphicsIng: (req, res) => {
    const f = new Date(req.params.dateSelected).toISOString();
    const f1 = f.split("Z")[0] + "+00:00";
    console.log(f1);
    const { _id } = req.user;
    Transacciones.find({
      usuario_id: _id,
      $and: [
        { fecha: { $gte: new Date(f1) } },
        { fecha: { $lte: new Date() } },
      ],
    })
      .exec()
      .then((x) => {
        if (x.length > 0) {
          var ingresosG = gxIngresos(x);
          var gastosG = gxGastos(x);
          var array = [
            ingresosG,
            gastosG,
          ];
          console.log(array);
          return res.status(200).send(array);
        }

        res.status(200).send(x);
      });
  },
};
