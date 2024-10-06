const axios = require('axios')
const { getAccessToken, getProfileToken } = require('../helpers/apiHelpers') // Import the helper functions

const getDeviceInformation = async (req, res) => {
  try {

    const accessToken = await getAccessToken()

    const externalId = req.params.externalId 
    console.log(externalId)

    const profileToken = await getProfileToken(accessToken, externalId) 
    console.log('Profile Token:', profileToken)

    // Fetch device information
    const response = await axios.get(
      `https://sandbox-api.sahha.ai/api/v1/profile/deviceInformation`,
      {
        headers: {
          Authorization: `Bearer ${profileToken}`, // Use the profile token
          'Content-Type': 'application/json',
        },
      }
    )


    res.json(response.data)
  } catch (error) {
    console.error('Error fetching device information:', error.message)
    res.status(500).json({ error: 'Failed to fetch device information' })
  }
}

module.exports = {
  getDeviceInformation,
}
