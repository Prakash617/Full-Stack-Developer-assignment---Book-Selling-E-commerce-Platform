// bring in prisma and cookie
import { Request, Response, NextFunction } from 'express';

import prisma from '../prisma/index'
import cookieToken from '../utils/cookieToken'


// user signup


exports.signup = async(req:any, res:any, next:any) => {
    try {
        const {name, email,address, password} =  req.body
        //check
        if (!name || !email || !password) {
            throw new Error('please provide all fields')
        }

        const user = await prisma.user.create({
            data: {
              name,
              email,
              password,
              address,
            },
          });

        //send user a token
        cookieToken(user, res)

    } catch (error:any) {
        throw new Error(error)
    }
}



// login user

exports.login = async(req: Request, res: Response, next: NextFunction) => {
    try {
        //take info from user
        const {email, password} = req.body

        if (!email || !password) {
            throw new Error('Please provide email and password')
        }

        //find a user based on email
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        //when there is no user
        if (!user) {
            throw new Error('User not found')
        }

        //password mismatch
        if (user.password !== password) {
            throw new Error('password is incorrect')
        }

        //user is there and validation
        cookieToken(user, res)

    } catch (error:any) {
        throw new Error(error)
    }

}

// logout user
exports.logout = async(req: Request, res: Response, next: NextFunction) => {
    try {
        res.clearCookie('token');
        res.json({
            success: true
        })
    } catch (error:any) {
        throw new Error(error)
    }
}