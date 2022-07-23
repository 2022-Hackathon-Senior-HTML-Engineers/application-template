const Reward = require('../models/rewardModel')
const mongoose = require('mongoose')

// get all rewards
const getRewards = async (req, res) => {
  const rewards = await Reward.find({}).sort({createdAt: -1})

  res.status(200).json(rewards)
}

// get a single reward
const getReward = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such reward'})
  }

  const reward = await Reward.findById(id)

  if (!reward) {
    return res.status(404).json({error: 'No such reward'})
  }

  res.status(200).json(reward)
}

// create a new reward
const createReward = async (req, res) => {
  const { label, value } = req.body

  let emptyFields = []

  if (!label) {
    emptyFields.push('label')
  }
  if (!value) {
    emptyFields.push('value')
  }
  
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try {
    const reward = await Reward.create({ label, value })
    res.status(200).json(reward)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a reward
const deleteReward = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such reward'})
  }

  const reward = await Reward.findOneAndDelete({_id: id})

  if (!reward) {
    return res.status(400).json({error: 'No such reward'})
  }

  res.status(200).json(reward)
}

// update a reward
const updateReward = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such reward'})
  }

  const reward = await Reward.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!reward) {
    return res.status(400).json({error: 'No such reward'})
  }

  res.status(200).json(reward)
}

module.exports = {
  getRewards,
  getReward,
  createReward,
  deleteReward,
  updateReward
}