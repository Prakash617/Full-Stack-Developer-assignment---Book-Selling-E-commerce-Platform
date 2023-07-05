import express from 'express'
const router = express.Router()

import { signup, login, logout } from '../controllers/usercontroller'


router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/logout').get(logout)


export default router