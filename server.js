const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({
  origin: '*'
}))

const PORT = 3000

app.use(express.json())

app.use('/', (req, res) => {
  res.send('Hello World, this is a simple Node + Expressjs template!');
})

app.listen(PORT, () => {
  console.log(`Serving is running on PORT: ${PORT}`)
})
