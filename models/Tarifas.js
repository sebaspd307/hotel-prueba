const mongoose = require("mongoose");
const { Schema } = mongoose;

const tarifaSchema = new Schema({
  temporada: { type: String, enum: ["alta", "baja"] },
  precios: {
    estandar: { type: Number, required: true },
    premium: { type: Number, required: true },
    VIP: { type: Number, required: true },
  },
});

module.exports = mongoose.model("Tarifa", tarifaSchema);
