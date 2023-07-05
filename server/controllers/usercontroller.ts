// bring in prisma and cookie

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