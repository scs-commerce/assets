const express = require('express')
const morgan = require('morgan')

const config = require('./package.json').config

const app = express()

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.static('node_modules'))
app.use(express.static('dist'))

app.use((req, res, next) =>
  res.status(404).render('404'))

app.use((error, req, res, next) => {
  console.log(error)
  res.status(500).render('500', { error })
})

const port = process.env.PORT || config.port
console.log(`start listening on port ${port}`)
app.listen(port)
