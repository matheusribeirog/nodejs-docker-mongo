const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const ObjectId = require('mongodb').ObjectID
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb://35.225.64.61:27017";

const rotas=require("./routes")

app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect(uri,{useNewUrlParser:true}, (err, client) => {
  if (err) return console.log(err)
  db = client.db('crud-nodejs') // coloque o nome do seu DB

  app.listen(80, function(){
    console.log('Server running on port 3000')
  })
})

//Tipo de template engine
app.set('view engine', 'ejs')
app.use(express.static('./public'));
app.use(rotas)
