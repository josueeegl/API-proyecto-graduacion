const fs = require("fs-extra");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const Informacion = require("../models/consejos");
require("../connection/mongoose");

module.exports = {
  getInfo: (req, res) => {
    const token = req.headers.authorization;
    Informacion.find()
      .exec()
      .then(async (x) => {
        var arreglo = [];
        if (x.length > 0) {
          const result = x.reduce(function (r, a) {
            const clave = a.title;
            r[clave] = r[clave] || [];
            r[clave].push(a);
            return r;
          }, Object.create(null));

          var array = [];
          for (const property in result) {
            array.push({ title: property, data: [result[property]] });
          }
          const response = await fetch(
            "http://localhost:3000/transacciones/resumen",
            {
              method: "GET",
              headers: {
                authorization: token,
              },
            }
          );
          const json = await response.json();
          arreglo.push(array);
          arreglo.push(json);

          console.log(arreglo);
          return res.status(200).send(arreglo);
        }
      });
  },
};
