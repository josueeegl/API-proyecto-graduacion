const mongoose = require("mongoose");
const schema = mongoose.Schema();

const Presupuestos = new mongoose.Schema({
  usuario_id: { type: String, required: true },
  nombre: { type: String, required: true },
  descrip: String,
  fecha_inicial: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Presupuesto", Presupuestos);
