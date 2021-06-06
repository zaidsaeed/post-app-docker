const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 2000

const connectionURL = 'mongodb://zaid:password@mongo:27017/?authSource=admin';

const connectToDB = () => {
  mongoose.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}).then(res => {console.log('Connection successful')}).catch(err => {
    console.log(err)
    setTimeout(connectToDB(), 5000);
  });
}

connectToDB()

app.get('/', (req, res) => {
  res.send('Hello Zaid Saeed!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})