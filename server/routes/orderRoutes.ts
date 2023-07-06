import express from 'express'
import { createOrder, getOrder } from '../controllers/ordercontroller'
import isLoggedIn from '../middlewares/isLoggedIn'



const router = express.Router()

router.route('/order/create').post(isLoggedIn,  createOrder)

// router.route('/order/update/:id').put(isLoggedIn,  updateOrder)

// router.route('/order/delete/:id').delete(isLoggedIn,  deleteOrder)

router.route('/orders/get').get( getOrder)


export default router