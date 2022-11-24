const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require('cors')

const routeAppareil = require("./backend/routes/appareils.route");


const app = express();

// pour formater les données post en format json
app.use(express.json());

app.use(cors());
mongoose
    .connect(
        "mongodb+srv://arij:arij@cluster0.bzm2pzh.mongodb.net/eleveDB?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Database connected !!!");
    })
    .catch(() => {
        console.log("Problème de connection !");
    });

// GET
app.get("/", (req, res) => {
    res.status(200).json(eleve)

});
    const eleve = mongoose.model('eleve', { cin: String, nom:String});

const app1 = new eleve({ cin: '77852', nom: 'iug777' });
app1.save().then(() => console.log('Insertion effectué avec success !!!'));


// GET/:id
app.get("/:id", (req, res) => {
    console.log(req.params.id);
    res.status(200).send(`${req.params.id} reçu !`);

})
// POST
app.post("/", (req, res) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Objet créé !'
    });
})

app.listen(3000, () => {
    console.log("server is running on port 3000...");
})
