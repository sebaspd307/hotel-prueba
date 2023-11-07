const Hotel = require('../models/Hotel');

class HotelRepository {
    async create(hotelaData) {
      try {
        const nuevoHotel = new Hotel(hotelaData);
        await nuevoHotel.save();
        return nuevoHotel;
      } catch (error) {
        console.error('Error al insertar el nuevo Hotel:', error.message);
        throw new Error('Error al insertar el nuevo Hotel en la bd');
      }
    }
  
    async getAll() {
      try {
        const hoteles = await Hotel.find();
        return hoteles;
      } catch (error) {
        console.error('Error al buscar hoteles:', error.message);
        throw new Error('Error Error al buscar hoteles');
      }
    }
  }
  
  module.exports = new HotelRepository();