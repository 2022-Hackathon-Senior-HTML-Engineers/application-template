const Drink = require('../models/drinkModel')
const mongoose = require('mongoose')

// get all drinks
const getDrinks = async (req, res) => {
  const drinks = await Drink.find({}).sort({createdAt: -1})

  res.status(200).json(drinks)
}

// get a single drink
const getDrink = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such drink'})
  }

  const drink = await Drink.findById(id)

  if (!drink) {
    return res.status(404).json({error: 'No such drink'})
  }

  res.status(200).json(drink)
}

// create a new drink
const createDrink = async (req, res) => {
  const { title, alcoholic, frequency } = req.body

  let emptyFields = []

  if (!title) {
    emptyFields.push('title')
  }
  if (!alcoholic) {
    emptyFields.push('alcoholic')
  }
  if (!frequency) {
    emptyFields.push('frequency')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try {
    const drink = await Drink.create({ title, alcoholic, frequency })
    res.status(200).json(drink)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a drink
const deleteDrink = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such drink'})
  }

  const drink = await Drink.findOneAndDelete({_id: id})

  if (!drink) {
    return res.status(400).json({error: 'No such drink'})
  }

  res.status(200).json(drink)
}

// update a drink
const updateDrink = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such drink'})
  }

  const drink = await Drink.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!drink) {
    return res.status(400).json({error: 'No such drink'})
  }

  res.status(200).json(drink)
}

module.exports = {
  getDrinks,
  getDrink,
  createDrink,
  deleteDrink,
  updateDrink
}