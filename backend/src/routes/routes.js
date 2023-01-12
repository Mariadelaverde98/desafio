const express = require('express')
const { addLocation } = require ('../controllers/locations.controller')

const api = express.Router()

api.post('/addLocation', addLocation)

module.exports = api