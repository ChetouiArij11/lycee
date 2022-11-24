const express = require('express')
const route = express.Router()

// prepare appareil REST API (GET, POST, PUT, DELETE)
eleve = [
  { 'cin': "g4sdfs56", 'nom': "TV", 'adress': "étdfdsfeint" },
  { 'cin': "09724208", 'nom': "arij", 'adress': "chtawa" },
  { 'cin': "000000", 'nom': "TV", 'adress': "étesdfsdfint" },
  { 'cin': "0000000000", 'nom': "TVrgfvdgf", 'adress': "éteisdfsdefnt" },
]

// GET
route.get("/", (req, res) => {
  res.status(200).json(eleve)
})

// GET/:id
route.get("/:id", (req, res) => {
  //console.log(req.params.id);
  //res.status(200).send(`${req.params.id} reçu !`);

  el = eleve.find((e) => {
    return e._id == req.params.id
  })

  if (el == undefined) {
    res.status(404).json({'message': 'eleve not found!'})
  }
  else {
    res.status(200).json(el)
  }
})

// POST
route.post('/', (req, res) => {
  // console.log('Contenu de req.body: ' + req.body._id)
  // appareils.push({ '_id': req.body._id, 'name': req.body.name, 'status': req.body.status })
  eleve.push(req.body)
  res.status(201).json(eleve)
})

// PUT

// DELETE


module.exports = route