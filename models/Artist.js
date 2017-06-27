const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Define the Schema
const artistSchema = new Schema({
  name: String,
  image: String,
  genre: String,
  songs: Array,
  albums: Array,
  comments: Array
})

//Use the schema to build a model
const Artist = mongoose.model('Artist',artistSchema)

module.exports = Artist
