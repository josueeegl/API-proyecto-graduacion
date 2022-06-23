const mongoose = require("mongoose");
const schema = mongoose.Schema();

const Presupuestos = new mongoose.Schema({
  usuario_id: { type: String, required: true },
  nombre: { type: String, required: true },
  descrip: String,
  monto_inicial: { type: Number, required: true },
  fecha_inicial: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Presupuesto", Presupuestos);
