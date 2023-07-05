import express from 'express'
const cookieParser = require('cookie-parser')
require('dotenv').config()

const app = express()

//regular middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//cookie middleware
app.use(cookieParser())

import userRouter from './routes/userRoutes'
import bookRouter from './routes/bookRoutes'
import orderRouter from './routes/orderRoutes'
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