const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const port = 3000

app.use(express.json())

const biomarkerRoutes = require('./routes/biomarkers')

app.use('/api', biomarkerRoutes)

app.listen(port, () => {
  console.log(`Biomarkers API is running at http://localhost:${port}`)
})
