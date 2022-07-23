const express = require('express')
const {
  getRewards, 
  getReward, 
  createReward, 
  deleteReward, 
  updateReward
} = require('../controllers/rewardController')

const router = express.Router()

// GET all rewards
router.get('/', getRewards)

// GET a single reward
router.get('/:id', getReward)

// POST a new reward
router.post('/', createReward)

// DELETE a reward
router.delete('/:id', deleteReward)

// UPDATE a reward
router.patch('/:id', updateReward)

module.exports = router