const mongoose = require("mongoose");
const urlOrig =
  "mongodb+srv://yourfinzMaster:Test12345.@cluster0.gkhwwl0.mongodb.net/yourFinz-db?retryWrites=true&w=majority";
const urlAlter =
  "mongodb://yourfinzMaster:Test12345.@ac-wrgmyad-shard-00-00.gkhwwl0.mongodb.net:27017,ac-wrgmyad-shard-00-01.gkhwwl0.mongodb.net:27017,ac-wrgmyad-shard-00-02.gkhwwl0.mongodb.net:27017/yourFinz-db?ssl=true&replicaSet=atlas-863bby-shard-0&authSource=admin&retryWrites=true&w=majority";
const db = process.env.MONGO_URI || urlOrig;

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
