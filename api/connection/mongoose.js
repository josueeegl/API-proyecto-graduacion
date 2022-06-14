const mongoose = require("mongoose");
const db =
  "mongodb+srv://yourfinzMaster:Test12345.@cluster0.gkhwwl0.mongodb.net/yourFinz-db?retryWrites=true&w=majority";

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const database = mongoose.connection;

function conectar() {
  database.on("error", console.error.bind(console, "connection error:")); // enlaza el track de error a la consola (proceso actual)
  database.once("open", () => {
    console.log(`conectado a ${database.name}`); // si esta todo ok, imprime esto
  });
}

module.exports = conectar();
