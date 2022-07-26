const mongoose = require('mongoose')

const Schema = mongoose.Schema

const drinkSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  alcoholic: {
    type: Boolean,
    required: true
  },
  frequency: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Drink', drinkSchema)