
// Définition d'un schéma de données pour eleve

const mongoose = require('mongoose')

// definition du schéma
const eleveSchema = mongoose.Schema(
  {
    cin : {type: String, required: true},
   nom : {type: String, required: true}
  }
)

// creation du model eleve
module.exports = mongoose.model('eleve', eleveSchema)