// helpers/apiHelpers.js

const axios = require('axios');

// Helper function to get access token
const getAccessToken = async () => {
  try {
    const response = await axios.post(
      'https://sandbox-api.sahha.ai/api/v1/oauth/account/token',
      {
        clientId: process.env.SAHHA_CLIENT_ID,
        clientSecret: process.env.SAHHA_CLIENT_SECRET,
      }
    );
    return response.data.accountToken; // Ensure this matches the API response
  } catch (error) {
    console.error('Error fetching access token:', error.message);
    throw new Error('Failed to fetch access token');
  }
};

const getProfileToken = async (accessToken, externalId) => {
  try {
    console.log('Request Payload:', { externalId });
    console.log('Request Headers:', { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' });

    const response = await axios.post(
      'https://sandbox-api.sahha.ai/api/v1/oauth/profile/register',
      {
        externalId: externalId  // The profile's external ID should be in the body
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,  // Correctly place the Authorization header here
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('Profile Token Response:', response.data); // Log the entire response
    return response.data.profileToken;  // Ensure this matches the API response
  } catch (error) {
    console.error('Error fetching profile token:', error.response ? error.response.data : error.message);
    throw new Error('Failed to fetch profile token');
  }
};





module.exports = {
  getAccessToken,
  getProfileToken
};
