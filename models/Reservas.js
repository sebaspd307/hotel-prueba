const mongoose = require('mongoose');
const { Schema } = mongoose;

const reservaSchema = new Schema({
  hotelId: Schema.Types.ObjectId,
  habitacionId: Schema.Types.ObjectId,
  fecha_inicio: Date,
  fecha_fin: Date,
  ocupado: Boolean
});

module.exports = mongoose.model("Reserva", reservaSchema);