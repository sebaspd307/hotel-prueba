const express = require('express');
const router = express.Router();
const ReservaRepository = require('../repositories/ReservasRepository');

router.post('/create', async (req, res) => {
    try {      
        const nuevaReserva = await ReservaRepository.create(req.body);
        res.status(201).json(nuevaReserva);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  });

  router.get('/getAll', async (req, res) => {
    try {      
        const reservas = await ReservaRepository.getAll();
        res.status(201).json(reservas);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  });

  module.exports = router;