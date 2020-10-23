const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const app = express()

app.set('view engine', "ejs")
app.use(ejsLayouts)

app.get('/', (req, res)=>{
    res.render('home')
})

app.listen(7000, ()=>{
    console.log('You are listening')
})