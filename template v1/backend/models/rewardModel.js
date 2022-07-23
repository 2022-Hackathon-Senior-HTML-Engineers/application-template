const mongoose = require('mongoose')

const Schema = mongoose.Schema

const rewardSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  alcoholic: {
    type: String,
    required: true
  },
  frequency: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Reward', rewardSchema)