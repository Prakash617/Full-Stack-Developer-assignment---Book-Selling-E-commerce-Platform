import express from 'express'
import { getBooks ,createBook } from '../controllers/bookcontroller'
const router = express.Router()



import isLoggedIn from '../middlewares/isLoggedIn'

router.route('/book/create').post(isLoggedIn,  createBook)

// router.route('/book/update/:id').put(isLoggedIn,  updatePost)

// router.route('/book/delete/:id').delete(isLoggedIn,  deletePost)

router.route('/books/get').get( getBooks)


export default router