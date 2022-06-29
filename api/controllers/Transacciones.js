const fs = require("fs-extra");
const { uploadFiles, deletFiles } = require("../connection/cloudinary");
const Transacciones = require("../models/transacciones");
const { formatear } = require("./formatearFecha");
require("../connection/mongoose");

module.exports = {
  postTransaccion: async (req, res) => {
    if (req.files?.imagen) {
      const result = await uploadFiles(req.files.imagen.tempFilePath);
      req.body.imagen = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
      await fs.unlink(req.files.imagen.tempFilePath);
    }
    Transacciones.create(req.body).then((x) => res.status(201).send(x));
  },

  getTransacciones: (req, res) => {
    Transacciones.find({ presupuesto_id: req.params.id_presupuesto })
      .exec()
      .then((x) => {
        if (x.length > 0) {
          const result = x.reduce(function (r, a) {
            const fechayhora = a.createdAt.toString().split(" ").splice(0, 4);
            const fecha = `${formatear(fechayhora[0])} ${fechayhora[1]} ${
              fechayhora[2]
            } ${fechayhora[3]}`;
            r[fecha] = r[fecha] || [];
            r[fecha].push(a);
            return r;
          }, Object.create(null));

          var array = [];
          for (const property in result) {
            array.push({ title: property, data: result[property] });
          }
          return res.status(200).send(array);
        }

        res.status(200).send(x);
      });
  },
};
