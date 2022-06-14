const mongoose = require("mongoose");
const schema = mongoose.Schema();

const Presupuestos = new mongoose.Schema({
  usuario_id: String,
  nombre: String,
  descrip: String,
  Monto_inicial: Number,
  fecha_inicial: Date,
});

module.exports = mongoose.model("Presupuesto", Presupuestos);
