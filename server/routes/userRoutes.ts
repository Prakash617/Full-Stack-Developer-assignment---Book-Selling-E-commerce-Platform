import express from 'express'
import { signup, login, logout } from '../controllers/usercontroller'


const router = express.Router()

router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/logout').get(logout)


export default router