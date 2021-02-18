const express = require('express')
const multer = require('multer')
const {celebrate, Segments, Joi} = require('celebrate')

const multerConfig = require('./config/multer')

const cellsController = require('./controllers/cellsController')

const upload = multer(multerConfig)

const routes = express.Router()

routes.post(
  '/create_cell', 
  upload.single('image'),
  celebrate({
    body: Joi.object().keys({
      cell_name: Joi.string().required(),
      leader_name: Joi.string().required(),
      network_color: Joi.string().required(),
      day: Joi.string().required(),
      schedule: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required(),
      adress: Joi.string().required(),
      uf: Joi.string().required(),
      city: Joi.string().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required()
    })
  },{
    abortEarly: false
  }),
  cellsController.create
  )



routes.get('/list_cell/:id', cellsController.show)
routes.get('/list_cells', cellsController.index)




module.exports = routes