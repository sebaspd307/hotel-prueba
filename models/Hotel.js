const mongoose = require('mongoose');
const { Schema } = mongoose;

const habitacionSchema = new Schema({
  tipo: { type: String, enum: ['estandar', 'premium', 'VIP'] },
  cantidad: Number,
  cupo_maximo: Number
});

const hotelSchema = new Schema({
  nombre: String,
  ubicacion: String,
  habitaciones: [habitacionSchema],
  tarifas: [{ type: Schema.Types.ObjectId, ref: 'Tarifa' }]
});

module.exports = mongoose.model("Hoteles", hotelSchema);
