const reserva = require('../models/Reservas');

class ReservaRepository {
    async create(reservaData) {
      try {
        const nuevaReserva = new reserva(reservaData);
        await nuevaReserva.save();
        return nuevaReserva;
      } catch (error) {
        console.error('Error al insertar la nueva Reserva:', error.message);
        throw new Error('Error al insertar la nueva Reserva en la bd');
      }
    }
  
    async getAll() {
      try {
        const reservas = await reserva.find();
        return reservas;
      } catch (error) {
        console.error('Error al buscar reservas:', error.message);
        throw new Error('Error Error al buscar reservas');
      }
    }
  }
  
  module.exports = new ReservaRepository();