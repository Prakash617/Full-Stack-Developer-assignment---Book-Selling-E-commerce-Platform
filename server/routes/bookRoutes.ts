import express from 'express'
import { getBooks ,createBook, deleteBook, updateBook } from '../controllers/bookcontroller'
import isLoggedIn from '../middlewares/isLoggedIn'



const router = express.Router()

router.route('/book/create').post(isLoggedIn,  createBook)

router.route('/book/update/:id').put(isLoggedIn,  updateBook)

router.route('/book/delete/:id').delete(isLoggedIn,  deleteBook)

router.route('/books/get').get( getBooks)


export default router