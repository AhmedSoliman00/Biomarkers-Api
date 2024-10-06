// routes/biomarkers.js

const express = require('express')
const {
  fetchBiomarkers,
  fetchProfileScores,
} = require('../controllers/biomarkersController') // Import the controller
const {
  getDeviceInformation,
} = require('../controllers/deviceInformationController')
const router = express.Router()

// Route to fetch biomarkers
router.get('/biomarkers/:externalId', fetchBiomarkers) // Use the controller function directly
router.get('/profile/scores/:externalId', fetchProfileScores) // Use the controller function directly

router.get('/deviceInformation/:externalId', getDeviceInformation)

module.exports = router
