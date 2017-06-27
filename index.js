const express = require('express')
const mongoose = require('mongoose')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://admin:admin1234!@pokedex-shard-00-00-sdhmz.mongodb.net:27017,pokedex-shard-00-01-sdhmz.mongodb.net:27017,pokedex-shard-00-02-sdhmz.mongodb.net:27017/Tunr?ssl=true&replicaSet=pokedex-shard-0&authSource=admin')

const app = express()

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine','handlebars')
app.use(express.static('public'))

const Artist = require('./models/Artist.js')
const appRouter = require('./routes/index.js')
const artistsRouter = require('./routes/artists.js')

// let firstArtist = new Artist({
//   name: 'Adele',
//   url: 'http://i.dailymail.co.uk/i/pix/2017/04/08/17/150D2DB000000514-4393466-image-a-1_1491669167236.jpg',
//   genre: 'Pop'
// })
// firstArtist.save()
// Artist.findOne({'name':'Adele'},(err,artist) => {
//   artist.image = 'http://i.dailymail.co.uk/i/pix/2017/04/08/17/150D2DB000000514-4393466-image-a-1_1491669167236.jpg'
//   artist.save()
// })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',appRouter)
app.use('/artists',artistsRouter)

app.listen( 3000, function() {
  console.log( 'Tunr is up and running!' )
})
