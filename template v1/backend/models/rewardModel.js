const mongoose = require('mongoose')

const Schema = mongoose.Schema

const rewardSchema = new Schema({
  label: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true,
  }
}, { timestamps: true })

module.exports = mongoose.model('Reward', rewardSchema)