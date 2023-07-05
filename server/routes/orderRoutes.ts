import express from 'express'
import { createOrder } from '../controllers/ordercontroller'
import isLoggedIn from '../middlewares/isLoggedIn'



const router = express.Router()

router.route('/order/create').post(isLoggedIn,  createOrder)

// router.route('/book/update/:id').put(isLoggedIn,  updatePost)

// router.route('/book/delete/:id').delete(isLoggedIn,  deletePost)

// router.route('/books/get').get( getBooks)


export default router