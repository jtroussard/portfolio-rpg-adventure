const express = require('express');
const router = express.Router();
const axios = require('axios');

// Route to fetch LinkedIn profile data
router.get('/linkedin/profile', async (req, res) => {
  try {
    const response = await axios.get('https://api.linkedin.com/v2/me', {
      headers: {
        Authorization: `Bearer ${process.env.LINKEDIN_API_KEY}`,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching LinkedIn data:', error.message);
    res.status(500).json({ message: 'Error fetching LinkedIn data' });
  }
});

module.exports = router;
