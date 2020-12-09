const express = require('express');
const db = require('../../data/dbConfig'); // move this to a model

const router = express.Router();

// router.get('/', async(req, res) => {
//     await res.json({message: 'Hello World'});
// });

router.get('/', (req, res) => {
    db('cars')
      .then(fruits => {
        res.json(fruits);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve fruits' }); // SEND BACK err.message to client
      });
  });
  

module.exports = router;
