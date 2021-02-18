const express = require('express')
const cors = require('cors')
const path = require('path')
const routes = require('./routes')
const app = express()
const {errors} = require('celebrate')


app.use(express.json())
app.use(cors({
  origin: 'https://findcells-frontend.vercel.app'
}))
app.use(routes)
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors())

app.listen(process.env.PORT || 3333)