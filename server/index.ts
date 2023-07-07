import express from 'express'
import userRouter from './routes/userRoutes'
import bookRouter from './routes/bookRoutes'
import orderRouter from './routes/orderRoutes'

const cookieParser = require('cookie-parser')
require('dotenv').config()

const app = express()
var cors = require('cors')

//regular middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//cookie middleware
app.use(cookieParser())

app.use(cors())
app.use('/api', userRouter)
app.use('/api', bookRouter )
app.use('/api', orderRouter )


app.get('/', function (req:any, res:any) {
  res.send('Hello World')
})
app.get('/api', function (req:any, res:any) {
  res.send('this is api')
})

    app.listen(3000,() => {
        console.log('server running on 3000')
    })