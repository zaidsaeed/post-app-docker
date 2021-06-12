const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')
const loginRoutes = require('./routes/loginRoutes')

const app = express()
const port = process.env.PORT || 3000

const connectionURL = 'mongodb://zaid:password@mongo:27017/?authSource=admin';

const session = require('express-session')
const redis = require('redis')

let RedisStore = require('connect-redis')(session)
let redisClient = redis.createClient({host: 'redis', port: 6379})

redisClient.on('error', console.error)

const connectToDB = () => {
  mongoose.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}).then(res => {console.log('Connection successful')}).catch(err => {
    console.log(err)
    setTimeout(connectToDB(), 5000);
  });
}

connectToDB()

app.use(cors())

app.use(express.json()) // new

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: 'keyboard cat',
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 3000000
    },
    resave: false,
    saveUninitialized: true,
  })
)
  
app.use("/users", userRoutes)
app.use("/posts", postRoutes)
app.use("/login", loginRoutes)

app.get('/', (req, res) => {
  res.send('Hello Zaid Saeed!!')
  console.log("This API was hit")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})