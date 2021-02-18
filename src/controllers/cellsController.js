const connection = require('../database/connection')

module.exports = {
  async create(req, res){
    const {
      cell_name,
      leader_name,
      network_color,
      day,
      schedule,
      email,
      whatsapp,
      adress,
      latitude,
      longitude,
      city,
      uf
    } = req.body
    
      await connection('cells').insert({
        image: req.file.filename,
        cell_name,
        leader_name,
        network_color,
        day,
        schedule,
        email,
        whatsapp,
        adress,
        latitude,
        longitude,
        city,
        uf
      })

      res.json(`Célula ${cell_name} criada com sucesso!`)
    
  },
  async show(req, res){
    const {id} = req.params

    const cell = await connection('cells').where('id', id).first()

    if(!cell){
      return res.status(400).json({message: "Célula não foi encontrada!"})
    }

    const serializedCell = {
      ...cell,
      image_url: `http://192.168.0.103:3333/uploads/${cell.image}` 
      }
    

    return res.json(serializedCell)
  },
  async index(req, res){
    const {city, uf} = req.query

    const cells = await connection('cells').where('city', city).where('uf', uf).select('*')

    const serializedCells = cells.map(cell=>{
      return{
      ...cell,
      image_url: `https://findcellsbackend.herokuapp.com/uploads/${cell.image}` 
      }
    })


    res.json(serializedCells)
  }
}