const mongoose = require("mongoose");
const schema = mongoose.Schema();

const Transacciones = new mongoose.Schema(
  {
    presupuesto_id: {
      type: mongoose.Types.ObjectId,
      ref: "Presupuesto",
      required: true,
    },
    nombre: { type: String, required: true, trim: true },
    descrip: { type: String, trim: true },
    valor: { type: Number, required: true },
    tipo: { type: String, trim: true },
    tipo_pago: { type: String, default: "Efectivo", trim: true },
    fecha: { type: Date, default: new Date() },
    imagen: {
      public_id: String,
      secure_url: {
        type: String,
        default:
          "https://res.cloudinary.com/josueeegl/image/upload/v1656367306/yourFinz/Mar-Business_11_habop5.jpg",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaccion", Transacciones);
