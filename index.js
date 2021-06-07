const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')
const loginRoutes = require('./routes/loginRoutes')

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

app.use(express.json()) // new
app.use("/users", userRoutes)
app.use("/posts", postRoutes)
app.use("/login", loginRoutes)

app.get('/', (req, res) => {
  res.send('Hello Zaid aeed!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})