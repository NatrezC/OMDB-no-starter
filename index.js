require('dotenv').config()
const { default: Axios } = require('axios')
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const app = express()
const axios = require('axios')

app.set('view engine', "ejs")
app.use(ejsLayouts)

//---->Movies index route
app.get('/movies', (req, res)=>{
    axios.get(`http://www.omdbapi.com/?apikey=${process.emitWarning.API_KEY}`)
    res.render('index')
})

app.listen(7000, ()=>{
    console.log('You are listening')
})