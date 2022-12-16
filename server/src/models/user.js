const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  posicion: {
    type: String,
    required: true,
  },
  imagenUrl: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
