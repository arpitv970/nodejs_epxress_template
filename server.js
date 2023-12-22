const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({
  origin: '*'
}))

const PORT = 3000

app.use(express.json())

app.use('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(PORT, () => {
  console.log(`Serving is running on PORT: ${PORT}`)
})
