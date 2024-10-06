// controllers/biomarkersController.js

const axios = require('axios')
const { getAccessToken, getProfileToken } = require('../helpers/apiHelpers') // Import the helper functions

// Function to fetch biomarkers
const fetchBiomarkers = async (req, res) => {
  try {
    console.log(
      `Incoming request to fetch biomarkers for externalId: ${req.params.externalId}`
    )

    const accessToken = await getAccessToken()
    console.log(`Access token received: ${accessToken}`)

    const externalId = req.params.externalId
    console.log(`externalId: ${externalId}`)

    const endDateTime = new Date().toISOString()
    const startDateTime = new Date(
      Date.now() - 3 * 24 * 60 * 60 * 1000
    ).toISOString() // 3 days ago

    const url = `https://sandbox-api.sahha.ai/api/v1/profile/biomarker/${externalId}?categories=Sleep&categories=Activity&categories=Vitals&startDateTime=${startDateTime}&endDateTime=${endDateTime}`
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })

    console.log(`API Response Status: ${response.status}`)
    console.log(`API Response Data:`, JSON.stringify(response.data, null, 2))

    // Filter the response data to only include the desired biomarkers
    const filteredData = response.data.filter(
      (biomarker) =>
        biomarker.type === 'sleep_duration' ||
        biomarker.type === 'calories_burned' ||
        biomarker.type === 'heart_rate'
    )

    res.json(response.data)
  } catch (error) {
    console.error('Error fetching biomarkers:', {
      message: error.message,
      status: error.response?.status,
      headers: error.response?.headers,
      data: error.response?.data,
    })

    const statusCode = error.response?.status || 500
    const errorMessage =
      error.response?.data?.message || 'Failed to fetch biomarkers'
    res.status(statusCode).json({ error: errorMessage })
  }
}



const fetchProfileScores = async (req, res) => {
  try {
    console.log(
      `Incoming request to fetch biomarkers for externalId: ${req.params.externalId}`
    )

    const accessToken = await getAccessToken()
    console.log(`Access token received: ${accessToken}`)

    const externalId = req.params.externalId
    console.log(`externalId: ${externalId}`)

    const startDateTime = new Date(
      Date.now() - 1 * 24 * 60 * 60 * 1000 // from one day ago
    ).toISOString()
    const endDateTime = new Date().toISOString()

    const url = `https://sandbox-api.sahha.ai/api/v1/profile/score/${externalId}?types=sleep&types=activity&startDateTime=${startDateTime}&endDateTime=${endDateTime}&version=1`;

    console.log(`Request URL: ${url}`);

    // Make the API request
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`, 
        'Content-Type': 'application/json',
      },
    });

    console.log(`API Response Status: ${response.status}`)
    console.log(`API Response Data:`, response.data)

    res.json(response.data)
  } catch (error) {
    console.error('Error fetching biomarkers:', {
      message: error.message,
      status: error.response?.status,
      headers: error.response?.headers,
      data: error.response?.data,
    })

    const statusCode = error.response?.status || 500
    const errorMessage =
      error.response?.data?.message || 'Failed to fetch biomarkers'

    res.status(statusCode).json({ error: errorMessage })
  }
}

// Exporting the functions
module.exports = {
  fetchBiomarkers,
  fetchProfileScores,
}
