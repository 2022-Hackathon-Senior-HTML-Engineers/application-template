const express = require('express')
const {
  getDrinks, 
  getDrink, 
  createDrink, 
  deleteDrink, 
  updateDrink
} = require('../controllers/drinkController')

const router = express.Router()

// GET all rewards
router.get('/', getDrinks)

// GET a single reward
router.get('/:id', getDrink)

// POST a new reward
router.post('/', createDrink)

// DELETE a reward
router.delete('/:id', deleteDrink)

// UPDATE a reward
router.patch('/:id', updateDrink)

module.exports = router