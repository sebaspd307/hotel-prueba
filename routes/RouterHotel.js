const express = require('express');
const router = express.Router();
const HotelRepository = require('../repositories/HotelRepository');


router.post('/create', async (req, res) => {
    try {      
        const nuevoHotel = await HotelRepository.create(req.body);
        res.status(201).json(nuevoHotel);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  });

  router.get('/getAll', async (req, res) => {
    try {      
        const hoteles = await HotelRepository.getAll();
        res.status(201).json(hoteles);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  });



 
  

  module.exports = router;