const express = require('express');
const router = express.Router();
const TarifaRepository = require('../repositories/TarifaRepository');


router.post('/create', async (req, res) => {
    try {      
        const nuevaTarifa = await TarifaRepository.create(req.body);
        res.status(201).json(nuevaTarifa);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  });

  router.get('/getAll', async (req, res) => {
    try {      
        const tarifas = await TarifaRepository.getAll();
        res.status(201).json(tarifas);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  });



 
  

  module.exports = router;