const Tarifa = require('../models/Tarifas');

class TarifaRepository {
    async create(tarifaData) {
      try {
        const nuevaTarifa = new Tarifa(tarifaData);
        await nuevaTarifa.save();
        return nuevaTarifa;
      } catch (error) {
        console.error('Error al insertar La nueva Tarifa:', error.message);
        throw new Error('Error al insertar La nueva Tarifa en la bd');
      }
    }
  
    async getAll() {
      try {
        const tarifas = await Tarifa.find();
        return tarifas;
      } catch (error) {
        console.error('Error al buscar Tarifas:', error.message);
        throw new Error('Error Error al buscar Tarifas');
      }
    }
  }
  
  module.exports = new TarifaRepository();