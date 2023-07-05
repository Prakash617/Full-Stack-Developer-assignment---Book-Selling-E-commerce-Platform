import prisma from '../prisma/index'

const jwt = require('jsonwebtoken')

const isLoggedIn = async(req:any, res:any, next:any) => {
    try {
       const token = req.cookies.token

        if (!token) {
            res.send({info : "please login"})
            throw new Error('You are not logged in') // send a response and close next
        }
        // console.log('env_process.env.JWT_SECRET',process.env.JWT_SECRET)
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // console.log('decoded', decoded)
        // console.log("typeof decode",typeof(decoded.userId))
        req.user = await prisma.user.findUnique({
            where: {
                id: decoded.userId
            }
        })
        //you can do more checks
        next()

    } catch (error:any) {
        throw new Error(error)
    }
}
export default isLoggedIn