const mongoose = require("mongoose");
const schema = mongoose.Schema();

const Informacion = new mongoose.Schema({
  title: { type: String, required: true },
  descripcion: { type: String },
  name: { type: String },
  autor: { type: String },
  url: { type: String },
  imagen: {
    type: String,
    default:
      "https://res.cloudinary.com/josueeegl/image/upload/v1656367306/yourFinz/Mar-Business_11_habop5.jpg",
  },
});

module.exports = mongoose.model("Info", Informacion);
